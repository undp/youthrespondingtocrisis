import leaderImg1 from './assets/Landing-imgs/section6/img1.png'
import leaderImg2 from './assets/Landing-imgs/section6/img2.png'
import leaderImg3 from './assets/Landing-imgs/section6/img3.png'
import leaderImg4 from './assets/Landing-imgs/section6/img4.png'
import leaderImg5 from './assets/Landing-imgs/section6/img5.png'
import leaderImg6 from './assets/Landing-imgs/section6/img6.png'
import leaderImg7 from './assets/Landing-imgs/section6/img7.png'
import leaderImg8 from './assets/Landing-imgs/section6/img8.png'
import leaderImg9 from './assets/Landing-imgs/section6/img9.png'
import leaderImg10 from './assets/Landing-imgs/section6/img10.png'
import leaderImg11 from './assets/Landing-imgs/section6/img11.png'
import leaderImg12 from './assets/Landing-imgs/section6/img12.png'
import leaderImg13 from './assets/Landing-imgs/section6/img13.png'
import leaderImg14 from './assets/Landing-imgs/section6/img14.png'
import { STORY_PATHS } from './storyPaths.js'

const profileMeta = {
  raghda: {
    alt: `Raghda Hassan profile card`,
    ariaLabel: `Open Raghda Hassan's story`,
    storyPath: STORY_PATHS.raghda,
  },
  abdirahmanNourYoussef: {
    alt: `Abdirahman Nour Youssef profile card`,
    ariaLabel: `Open Abdirahman Nour Youssef's story`,
    storyPath: STORY_PATHS.abdirahmanNourYoussef,
  },
  aliBendahbia: {
    alt: `Ali Bendahbia profile card`,
    ariaLabel: `Open Ali Bendahbia's story`,
    storyPath: STORY_PATHS.aliBendahbia,
  },
  olaAlaghbaary: {
    alt: `Ola Alaghbaary profile card`,
    ariaLabel: `Open Ola Alaghbaary's story`,
    storyPath: STORY_PATHS.olaAlaghbaary,
  },
  sadaaHassanAqar: {
    alt: `Sada’a Hassan Aqar profile card`,
    ariaLabel: `Open Sada’a Hassan Aqar's story`,
    storyPath: STORY_PATHS.sadaaHassanAqar,
  },
  gabbyFraidy: {
    alt: `Gabby Fraidy profile card`,
    ariaLabel: `Open Gabby Fraidy's story`,
    storyPath: STORY_PATHS.gabbyFraidy,
  },
  moukhtarItani: {
    alt: `Moukhtar Itani profile card`,
    ariaLabel: `Open Moukhtar Itani's story`,
    storyPath: STORY_PATHS.moukhtarItani,
  },
  zahiaTahirSagr: {
    alt: `Zahia Tahir Sagr profile card`,
    ariaLabel: `Open Zahia Tahir Sagr's story`,
    storyPath: STORY_PATHS.zahiaTahirSagr,
  },
  abdallaBabiker: {
    alt: `Abdalla Babiker profile card`,
    ariaLabel: `Open Abdalla Babiker's story`,
    storyPath: STORY_PATHS.abdallaBabiker,
  },
  raghdaBreika: {
    alt: `Raghda Breika profile card`,
    ariaLabel: `Open Raghda Breika's story`,
    storyPath: STORY_PATHS.raghdaBreika,
  },
  ahmadAssaf: {
    alt: `Ahmad Assaf profile card`,
    ariaLabel: `Open Ahmad Assaf's story`,
    storyPath: STORY_PATHS.ahmadAssaf,
  },
  nourshan: {
    alt: `Nourshan profile card`,
    ariaLabel: `Open Nourshan's story`,
    storyPath: STORY_PATHS.nourshan,
  },
  muadAlGhandouri: {
    alt: `Muad Al Ghandouri profile card`,
    ariaLabel: `Open Muad Al Ghandouri's story`,
    storyPath: STORY_PATHS.muadAlGhandouri,
  },
  khairyyehBobaky: {
    alt: `Khairyyeh Bobaky profile card`,
    ariaLabel: `Open Khairyyeh Bobaky's story`,
    storyPath: STORY_PATHS.khairyyehBobaky,
  },
  omarBozou: {
    alt: `Omar Bozou profile card`,
    ariaLabel: `Open Omar Bozou's story`,
    storyPath: STORY_PATHS.omarBozou,
  },
}

const createProfile = (src, index, meta = {}) => ({
  src,
  alt: meta.alt ?? `Profile card for young leader ${index + 1}`,
  ariaLabel: meta.ariaLabel ?? null,
  storyPath: meta.storyPath ?? null,
})

export const leaderProfiles = [
  createProfile(leaderImg1, 0, profileMeta.muadAlGhandouri),
  createProfile(leaderImg2, 1, profileMeta.nourshan),
  createProfile(leaderImg3, 2, profileMeta.ahmadAssaf),
  createProfile(leaderImg4, 3, profileMeta.khairyyehBobaky),
  createProfile(leaderImg5, 4, profileMeta.gabbyFraidy),
  createProfile(leaderImg6, 5, profileMeta.aliBendahbia),
  createProfile(leaderImg7, 6, profileMeta.abdirahmanNourYoussef),
  // createProfile(leaderImg7, 6, profileMeta.abdallaBabiker),
  createProfile(leaderImg8, 7, profileMeta.raghdaBreika),
  createProfile(leaderImg9, 8, profileMeta.abdallaBabiker),
  // createProfile(leaderImg9, 8, profileMeta.raghdaBreika),
  createProfile(leaderImg10, 9, profileMeta.moukhtarItani),
  createProfile(leaderImg11, 10, profileMeta.zahiaTahirSagr),
  createProfile(leaderImg12, 11, profileMeta.omarBozou),
  createProfile(leaderImg13, 12, profileMeta.olaAlaghbaary),
  createProfile(leaderImg14, 13, profileMeta.sadaaHassanAqar),
]

export const storyLeaderProfiles = [
  leaderProfiles[1],
  leaderProfiles[0],
  ...leaderProfiles.slice(2),
]

export const leaderProfileImages = leaderProfiles.map(({ src }) => src)
