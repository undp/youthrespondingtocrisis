#!/usr/bin/env node
/**
 * Extracts ONLY "Images & Video" from STORY_CONTENT_TEMPLATE.docx,
 * resolves files in src/assets/Combined/, and writes src/storyAssets.js (storyAssetManifest).
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const combinedDir = path.join(root, 'src/assets/Combined')
const docxPath = '/Users/user/Downloads/STORY_CONTENT_TEMPLATE.docx'
const outPath = path.join(root, 'src/storyAssets.js')
const storiesDataPath = path.join(root, 'src/storiesData.js')

const SLUG_BY_NUM = {
  1: 'abdirahman-nour-youssef',
  2: 'ali-bendahbia',
  3: 'ola-alaghbaary',
  4: 'sadaa-hassan-aqar',
  5: 'gabby-fraidy',
  6: 'moukhtar-itani',
  7: 'zahia-tahir-sagr',
  8: 'abdalla-babiker',
  9: 'raghda-breika',
  10: 'ahmad-assaf',
  11: 'nourshan',
  12: 'muad-al-ghandouri',
  13: 'khairyyeh-bobaky',
  14: 'omar-bozou',
}

function sanitizeFilename(name) {
  return name.replace(/\s+/g, '-')
}

function normalizeForMatch(name) {
  return name
    .replace(/\.[^.]+$/i, '')
    .toLowerCase()
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function parseDocxAssets() {
  const xmlPath = '/tmp/story-doc.xml'
  execSync(`unzip -p "${docxPath}" word/document.xml > "${xmlPath}"`)
  const xml = fs.readFileSync(xmlPath, 'utf8')
  const paras = xml
    .split(/<w:p[^>]*>/)
    .map((p) =>
      p
        .replace(/<[^>]+>/g, '')
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&')
        .trim(),
    )
    .filter(Boolean)

  const stories = []
  let current = null
  let inAssets = false
  let assetField = null
  let pendingDarkSection = false

  for (const p of paras) {
    const storyMatch = p.match(/^STORY\s+(\d+)\s+of\s+14/)
    if (storyMatch) {
      if (current) stories.push(current)
      current = { num: +storyMatch[1], assets: {} }
      inAssets = false
      assetField = null
      pendingDarkSection = false
      continue
    }
    if (!current) continue

    if (p.includes('Images & Video')) {
      inAssets = true
      continue
    }
    if (!inAssets) continue

    if (/^SECTION\s+\d/i.test(p) && !p.includes('Images & Video')) {
      inAssets = false
      continue
    }

    if (p.includes('Hero Section')) {
      assetField = 'heroDesktop'
      pendingDarkSection = false
    } else if (p.includes('Story Introduction Section')) {
      assetField = 'introDesktop'
      pendingDarkSection = false
    } else if (p.includes('Impact Statistics Section')) {
      assetField = 'statsImage'
      pendingDarkSection = false
    } else if (p.includes('Dark Section')) {
      pendingDarkSection = true
    } else if (pendingDarkSection && p.includes('Background image')) {
      assetField = 'darkBackground'
      pendingDarkSection = false
    } else if (p.includes('Portrait photo')) {
      assetField = 'portraitImage'
      pendingDarkSection = false
    } else if (p.includes('Group photo')) {
      assetField = 'groupImage'
      pendingDarkSection = false
    } else if (p.includes('Full-Width Quote Section')) {
      assetField = 'quoteDesktop'
      pendingDarkSection = false
    } else if (p.includes('Story Continuation Section')) {
      assetField = 'continuationDesktop'
      pendingDarkSection = false
    } else if (p.includes('Story video file')) {
      assetField = 'video'
      pendingDarkSection = false
    } else if (p.includes('Mobile background image')) {
      if (assetField === 'heroDesktop') assetField = 'heroMobile'
      else if (assetField === 'introDesktop') assetField = 'introMobile'
      else if (assetField === 'quoteDesktop') assetField = 'quoteMobile'
      else if (assetField === 'continuationDesktop') assetField = 'continuationMobile'
    } else if (p.startsWith('→')) {
      const val = p
        .replace(/^→\s*/, '')
        .replace(/_{5,}.*$/, '')
        .trim()
      if (!assetField) continue
      current.assets[assetField] = /^pending$/i.test(val) ? null : val
    }
  }
  if (current) stories.push(current)
  return stories
}

function buildFileIndex() {
  const files = fs
    .readdirSync(combinedDir)
    .filter((f) => fs.statSync(path.join(combinedDir, f)).isFile())
  const byNorm = new Map()
  const bySanitized = new Map()
  for (const f of files) {
    bySanitized.set(f.toLowerCase(), f)
    byNorm.set(normalizeForMatch(f), f)
  }
  return { files, byNorm, bySanitized }
}

function resolveFile(docName, index) {
  if (!docName) return null
  const sanitized = sanitizeFilename(docName)
  if (index.bySanitized.has(sanitized.toLowerCase())) {
    return index.bySanitized.get(sanitized.toLowerCase())
  }
  const norm = normalizeForMatch(docName)
  if (index.byNorm.has(norm)) return index.byNorm.get(norm)
  const extVariants = ['.jpg', '.jpeg', '.jfif', '.png', '.heic', '.mov', '.mp4', '.JPEG', '.JPG']
  const base = norm
  for (const ext of extVariants) {
    const tryName = sanitizeFilename(docName.replace(/\.[^.]+$/i, '') + ext)
    if (index.bySanitized.has(tryName.toLowerCase())) {
      return index.bySanitized.get(tryName.toLowerCase())
    }
  }
  const candidates = index.files.filter((f) => {
    const fn = normalizeForMatch(f)
    return fn.includes(base) || base.includes(fn)
  })
  if (candidates.length === 1) return candidates[0]
  return null
}

function buildManifest(stories, index) {
  const manifest = {}
  const missing = []

  for (const story of stories) {
    const slug = SLUG_BY_NUM[story.num]
    if (!slug) continue
    manifest[slug] = {}

    for (const [key, docName] of Object.entries(story.assets)) {
      if (docName === null) continue
      const file = resolveFile(docName, index)
      if (file) {
        manifest[slug][key] = file
      } else {
        missing.push({ slug, key, docName })
      }
    }
  }

  return { manifest, missing }
}

function generateStoryAssetsJs(manifest) {
  const lines = [
    '/**',
    ' * Auto-generated by scripts/generate-story-media.mjs',
    ' * Maps each story slug to media files in src/assets/Combined/',
    ' */',
    '',
    "const combinedModules = import.meta.glob('./assets/Combined/*', {",
    "  eager: true,",
    "  query: '?url',",
    "  import: 'default',",
    '})',
    '',
    'const urlByFilename = Object.fromEntries(',
    '  Object.entries(combinedModules).map(([modulePath, url]) => {',
    "    const filename = modulePath.split('/').pop()",
    '    return [filename, url]',
    '  }),',
    ')',
    '',
    'export const storyAssetManifest = ' + JSON.stringify(manifest, null, 2),
    '',
    'export function getStoryAssets(slug) {',
    '  const files = storyAssetManifest[slug]',
    '  if (!files) return {}',
    '  const resolved = {}',
    '  for (const [key, filename] of Object.entries(files)) {',
    '    const url = urlByFilename[filename]',
    '    if (url) resolved[key] = url',
    '  }',
    '  return resolved',
    '}',
    '',
  ]
  fs.writeFileSync(outPath, lines.join('\n'))
}

function cleanStoriesData() {
  let content = fs.readFileSync(storiesDataPath, 'utf8')
  const markerStart = '/* === STORY MEDIA (auto-generated) === */'
  const markerEnd = '/* === END STORY MEDIA === */'

  if (content.includes(markerStart)) {
    content = content.replace(
      new RegExp(
        `\\n?/\\* === STORY MEDIA \\(auto-generated\\) === \\*/[\\s\\S]*?/\\* === END STORY MEDIA === \\*/\\n*`,
      ),
      '\n',
    )
  }

  content = content.replace(/\n    assets: \w+Assets,\n/g, '\n')
  fs.writeFileSync(storiesDataPath, content)
}

const stories = parseDocxAssets()
const index = buildFileIndex()
const { manifest, missing } = buildManifest(stories, index)
generateStoryAssetsJs(manifest)
cleanStoriesData()

console.log(`Wrote ${outPath}`)
console.log(`Stories with assets: ${Object.keys(manifest).length}`)
if (missing.length) {
  console.log('\nUnresolved files (omitted from manifest):')
  for (const m of missing) {
    console.log(`  [${m.slug}] ${m.key}: "${m.docName}"`)
  }
}
