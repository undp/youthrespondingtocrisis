import { createElement, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import ReactGA from 'react-ga4'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import undpWhiteLogo from './assets/Landing-imgs/UNDP-Logo-White-Large.png'
import section1BackImg from './assets/Landing-imgs/section1/section1-back-img.jpg'
import section1MobileBackImg from './assets/Landing-imgs/section1/mobile-back-img.png'
import section1Img1 from './assets/Landing-imgs/section1/section1-img1-optimized.jpg'
import section1Img2 from './assets/Landing-imgs/section1/section1-img2.jpg'
import section1Img3 from './assets/Landing-imgs/section1/section1-img3-optimized.jpg'
import section1Img4 from './assets/Landing-imgs/section1/section1-img4-optimized.jpg'
import section1Img5 from './assets/Landing-imgs/section1/section1-img5.jpg'
import section1Img6 from './assets/Landing-imgs/section1/section1-img6-optimized.jpg'
import section1Img7 from './assets/Landing-imgs/section1/section1-img7.jpg'
import section1Img8 from './assets/Landing-imgs/section1/section1-img8.jpg'
import section1Img9 from './assets/Landing-imgs/section1/section1-img9.jpg'
import section2BackImg from './assets/Landing-imgs/section2/back-img.jpg'
import section2BackImg2 from './assets/Landing-imgs/section2/back-img2.jpg'
import section2MobileBackImg from './assets/Landing-imgs/section2/mobile-back-img.png'
import section2MobileBackImg2 from './assets/Landing-imgs/section2/mobile-back-img2.png'
import coupleIcon from './assets/Landing-imgs/section2/couple.svg'
import arrowIcon from './assets/Landing-imgs/section2/Arrow.svg'
import circlesIcon from './assets/Landing-imgs/section2/circles.svg'
import section3BackImg from './assets/Landing-imgs/section3/back-img.jpg'
import section3MobileBackImg from './assets/Landing-imgs/section3/mobile-back-img.png'
import doveIcon from './assets/Landing-imgs/section3/dove.svg'
import hikingIcon from './assets/Landing-imgs/section3/hiking.svg'
import ideaLampIcon from './assets/Landing-imgs/section3/idea-lamp.svg'
import section4BackImg from './assets/Landing-imgs/section4/back-img.jpg'
import section4MobileBackImg from './assets/Landing-imgs/section4/mobile-back-img.png'
import section4Img1 from './assets/Landing-imgs/section4/img1-optimized.jpg'
import section4Img2 from './assets/Landing-imgs/section4/img2-optimized.jpg'
import section4Img3 from './assets/Landing-imgs/section4/img3.jpg'
import section4BackImg2 from './assets/Landing-imgs/section4/back-img2.jpg'
import section4MobileBackImg2 from './assets/Landing-imgs/section4/mobile-back-img2.png'
import childrenImg from './assets/Landing-imgs/section4/children.png'
import mobileChildrenImg from './assets/Landing-imgs/section4/mobile-children.png'
import section5BackImg from './assets/Landing-imgs/section5/back-img.jpg'
import section5MobileBackImg from './assets/Landing-imgs/section5/mobile-back-img.png'
import section5BackImg2 from './assets/Landing-imgs/section5/back-img2.jpg'
import section5MobileBackImg2 from './assets/Landing-imgs/section5/mobile-back-img2.png'
import section5BackImg3 from './assets/Landing-imgs/section5/back-img3.jpg'
import section5MobileBackImg3 from './assets/Landing-imgs/section5/mobile-back-img3.png'
import section6BackImg from './assets/Landing-imgs/section6/back-img.jpg'
import section6MobileBackImg from './assets/Landing-imgs/section6/mobile-back-img.png'
import RaghdaStoryPage from './RaghdaStoryPage.jsx'
import AbdirahmanNourYoussefStoryPage from './AbdirahmanNourYoussefStoryPage.jsx'
import AliBendahbiaStoryPage from './AliBendahbiaStoryPage.jsx'
import OlaAlaghbaaryStoryPage from './OlaAlaghbaaryStoryPage.jsx'
import SeadaHassanAqarStoryPage from './SeadaHassanAqarStoryPage.jsx'
import GabbyFraidyStoryPage from './GabbyFraidyStoryPage.jsx'
import MoukhtarItaniStoryPage from './MoukhtarItaniStoryPage.jsx'
import ZahiaTahirSagrStoryPage from './ZahiaTahirSagrStoryPage.jsx'
import AbdallaBabikerStoryPage from './AbdallaBabikerStoryPage.jsx'
import RaghdaBreikaStoryPage from './RaghdaBreikaStoryPage.jsx'
import AhmadAssafStoryPage from './AhmadAssafStoryPage.jsx'
import NourshanStoryPage from './NourshanStoryPage.jsx'
import MuadAlGhandouriStoryPage from './MuadAlGhandouriStoryPage.jsx'
import KhairyyehBobakyStoryPage from './KhairyyehBobakyStoryPage.jsx'
import OmarBozouStoryPage from './OmarBozouStoryPage.jsx'
import Footer from './Footer.jsx'
import { leaderProfiles } from './leaderProfiles.js'
import { STORY_PATHS } from './storyPaths.js'
import { BASE_PATH, GA_MEASUREMENT_ID } from './config.js'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const headline = [
  ['YOUNG', 'PEOPLE', 'AT', 'THE', 'FRONTLINES', 'IN', 'TIMES'],
  ['OF', 'CRISIS', 'ACROSS', 'THE', 'ARAB', 'STATES', 'REGION'],
]

const MICROSITE_HOME_PATH = '/'
const ARAB_STATES_SITE_URL = 'https://www.undp.org/arab-states '

const storyImages = [
  {
    side: 'right',
    src: section1Img1,
    alt: 'Story image 1',
  },
  {
    side: 'left',
    src: section1Img2,
    alt: 'Story image 2',
  },
  {
    side: 'right',
    src: section1Img3,
    alt: 'Story image 3',
  },
  {
    side: 'left',
    src: section1Img4,
    alt: 'Story image 4',
  },
  {
    side: 'right',
    src: section1Img5,
    alt: 'Story image 5',
  },
  {
    side: 'left',
    src: section1Img6,
    alt: 'Story image 6',
  },
  {
    side: 'right',
    src: section1Img7,
    alt: 'Story image 7',
  },
  {
    side: 'left',
    src: section1Img8,
    alt: 'Story image 8',
  },
  {
    side: 'right',
    src: section1Img9,
    alt: 'Story image 9',
  },
]

const leftColumnImages = storyImages.filter((image) => image.side === 'left')
const rightColumnImages = storyImages.filter((image) => image.side === 'right')

const turnItems = [
  {
    id: 'left',
    icon: ideaLampIcon,
    ariaLabel: 'Ideas into action',
    lines: [
      [
        { text: 'IDEAS' },
        { text: 'INTO', strong: true },
      ],
      [{ text: 'ACTION', strong: true }],
    ],
  },
  {
    id: 'center',
    icon: hikingIcon,
    ariaLabel: 'Adversity into opportunity',
    lines: [
      [
        { text: 'ADVERSITY' },
        { text: 'INTO', strong: true },
      ],
      [{ text: 'OPPORTUNITY', strong: true }],
    ],
  },
  {
    id: 'right',
    icon: doveIcon,
    ariaLabel: 'Challenges into hope',
    lines: [
      [{ text: 'CHALLENGES' },
      { text: 'INTO', strong: true },
      ],

      [

        { text: 'HOPE', strong: true },
      ],
    ],
  },
]

const missionImages = [
  {
    id: 'support',
    src: section4Img1,
    alt: 'Young people gathered at a regional event',
    label: 'Support',
  },
  {
    id: 'amplify',
    src: section4Img2,
    alt: 'Young speaker at a podium',
    label: 'Amplify',
  },
  {
    id: 'connect',
    src: section4Img3,
    alt: 'Young people listening and speaking with a child',
    label: 'and connect youth voices in the region.',
    labelLines: ['and connect', 'youth voices in', 'the region.'],
  },
]

const crisisVideoSrc = `${BASE_PATH}videos/crisis-response.mp4`
const stabilityVideoSrc = `${BASE_PATH}videos/regional-stability.mp4`

const leaderImages = leaderProfiles

const storyRoutes = {
  [STORY_PATHS.raghda]: RaghdaStoryPage,
  [STORY_PATHS.abdirahmanNourYoussef]: AbdirahmanNourYoussefStoryPage,
  [STORY_PATHS.aliBendahbia]: AliBendahbiaStoryPage,
  [STORY_PATHS.olaAlaghbaary]: OlaAlaghbaaryStoryPage,
  [STORY_PATHS.seadaHassanAqar]: SeadaHassanAqarStoryPage,
  [STORY_PATHS.gabbyFraidy]: GabbyFraidyStoryPage,
  [STORY_PATHS.moukhtarItani]: MoukhtarItaniStoryPage,
  [STORY_PATHS.zahiaTahirSagr]: ZahiaTahirSagrStoryPage,
  [STORY_PATHS.abdallaBabiker]: AbdallaBabikerStoryPage,
  [STORY_PATHS.raghdaBreika]: RaghdaBreikaStoryPage,
  [STORY_PATHS.ahmadAssaf]: AhmadAssafStoryPage,
  [STORY_PATHS.nourshan]: NourshanStoryPage,
  [STORY_PATHS.muadAlGhandouri]: MuadAlGhandouriStoryPage,
  [STORY_PATHS.khairyyehBobaky]: KhairyyehBobakyStoryPage,
  [STORY_PATHS.omarBozou]: OmarBozouStoryPage,
}

function LandingPage() {
  const navigate = useNavigate()

  const handleLeaderCardClick = (storyPath) => {
    if (!storyPath) {
      return
    }

    navigate(storyPath)
  }

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    })

    lenis.on('scroll', ScrollTrigger.update)

    let animationFrame

    function raf(time) {
      lenis.raf(time)
      animationFrame = requestAnimationFrame(raf)
    }

    animationFrame = requestAnimationFrame(raf)
    const cleanupCallbacks = []

    const context = gsap.context(() => {
      const words = gsap.utils.toArray('.word')
      const wordTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: '+=10500',
          scrub: 1,
        },
      })

      words.forEach((word, index) => {
        wordTimeline.to(
          word,
          {
            opacity: 1,
            color: '#ffffff',
            backgroundColor: 'rgba(0, 55, 89, 0)',
            duration: 0.55,
            ease: 'none',
          },
          index * 0.28,
        )
      })

      const leftColumn = document.querySelector('.left-column')
      const rightColumn = document.querySelector('.right-column')

      const getRightStart = () => window.innerHeight * 0.28
      const getCardInterval = () => {
        const cards = rightColumn.querySelectorAll('.story-img')
        return cards[1]?.offsetTop - cards[0]?.offsetTop || window.innerHeight * 1.6
      }
      const getLeftStart = () =>
        window.innerWidth <= 820
          ? getRightStart() + getCardInterval() * 0.45
          : getRightStart() + getCardInterval() / 2
      const getCommonTravel = () =>
        Math.max(
          getLeftStart() + leftColumn.scrollHeight + window.innerHeight * 0.95,
          getRightStart() + rightColumn.scrollHeight + window.innerHeight * 0.95,
        )

      const setColumnStarts = () => {
        gsap.set(leftColumn, { y: getLeftStart() })
        gsap.set(rightColumn, { y: getRightStart() })
      }

      setColumnStarts()

      const imageTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: '+=11800',
          scrub: 1.2,
          pin: '.hero-content',
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefreshInit: setColumnStarts,
        },
      })

      const rotationSets = {
        left: [
          { start: -20, rest: -7 },
          { start: -17, rest: -6 },
          { start: -21, rest: -8 },
          { start: -18.5, rest: -6.5 },
        ],
        right: [
          { start: 20, rest: 7 },
          { start: 17, rest: 6 },
          { start: 21, rest: 8 },
          { start: 18.5, rest: 6.5 },
          { start: 19.5, rest: 7.5 },
        ],
      }

      const addRotationSettle = (column, side, startY = 0) => {
        const images = gsap.utils.toArray(column.querySelectorAll('.story-img'))

        images.forEach((img, index) => {
          const rotation = rotationSets[side][index % rotationSets[side].length]
          const entryAt = gsap.utils.clamp(
            0.02,
            0.88,
            (window.innerHeight + startY + img.offsetTop - window.innerHeight * 0.92) /
            getCommonTravel(),
          )
          gsap.set(img, { rotate: rotation.start })

          imageTimeline.to(
            img,
            {
              rotate: rotation.rest,
              duration: 0.16,
              ease: 'none',
            },
            entryAt,
          )
        })
      }

      imageTimeline
        .to(
          leftColumn,
          {
            y: () => getLeftStart() - getCommonTravel(),
            duration: 1,
            ease: 'none',
          },
          0,
        )
        .to(
          rightColumn,
          {
            y: () => getRightStart() - getCommonTravel(),
            duration: 1,
            ease: 'none',
          },
          0,
        )

      addRotationSettle(leftColumn, 'left', getLeftStart())
      addRotationSettle(rightColumn, 'right', getRightStart())

      gsap.to('.scroll-cue', {
        autoAlpha: 0,
        y: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'top+=520 top',
          scrub: 1,
        },
      })

      const kpiCards = gsap.utils.toArray('.kpi-info-card')

      if (kpiCards.length > 1) {
        gsap.set(kpiCards, {
          autoAlpha: 1,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          transformOrigin: 'center bottom',
        })
        kpiCards.forEach((card, index) => {
          gsap.set(card, {
            scale: 1 - index * 0.04,
            zIndex: kpiCards.length + 4 - index,
          })
        })

        const impactTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: '.impact-section',
            start: 'top top',
            end: '+=2600',
            scrub: 1.6,
            pin: '.impact-section-stage',
            pinSpacing: true,
            anticipatePin: 0.4,
          },
        })

        const impactLead = document.querySelector('.impact-lead')
        const impactHeading = document.querySelector('.impact-copy h2')
        if (impactLead) {
          gsap.set(impactLead, {
            clipPath: 'inset(0 100% 0 0)',
            opacity: 0,
          })
          gsap.to(impactLead, {
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1,
            duration: 2.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.impact-section',
              start: 'top 72%',
              once: true,
            },
          })
        }
        if (impactHeading) {
          gsap.set(impactHeading, {
            autoAlpha: 0,
            y: 30,
          })
          gsap.to(impactHeading, {
            autoAlpha: 1,
            y: 0,
            duration: 1.8,
            ease: 'power2.out',
            delay: 0.6,
            scrollTrigger: {
              trigger: '.impact-section',
              start: 'top 72%',
              once: true,
            },
          })
        }

        const addKpiSwitch = (fromIndex, toIndex) => {
          const fromCard = kpiCards[fromIndex]
          const toCard = kpiCards[toIndex]

          impactTimeline
            .to({}, { duration: 0.36 })
            .to(
              fromCard,
              {
                xPercent: 112,
                yPercent: 8,
                rotation: 7,
                scale: 0.96,
                duration: 0.68,
                ease: 'power1.inOut',
              },
            )
            .to(
              toCard,
              {
                scale: 1,
                duration: 0.68,
                ease: 'power1.inOut',
              },
              '<',
            )
            .set(fromCard, { autoAlpha: 0 })
        }

        addKpiSwitch(0, 1)
        addKpiSwitch(1, 2)
        impactTimeline.to({}, { duration: 0.42 })
      }

      const turnSection = document.querySelector('.turn-section')

      if (turnSection) {
        const turnHeading = turnSection.querySelector('.turn-heading')
        const turnCirclesWrap = turnSection.querySelector('.turn-circles')
        const leftTurnCircle = turnSection.querySelector('.turn-circle-left')
        const centerTurnCircle = turnSection.querySelector('.turn-circle-center')
        const rightTurnCircle = turnSection.querySelector('.turn-circle-right')
        const turnCircleContent = gsap.utils.toArray('.turn-circle-content')
        const turnCircleStart = turnSection.querySelector('.turn-circle-start')

        const getCircleSize = () => centerTurnCircle?.offsetWidth || window.innerWidth * 0.26
        const isCompactTurnLayout = () => window.innerWidth <= 760
        const getCircleOffset = () =>
          isCompactTurnLayout() ? 0 : Math.min(getCircleSize() * 1.16, window.innerWidth * 0.305)
        const getCircleGroupStartY = () =>
          window.innerHeight * (isCompactTurnLayout() ? 0.027 : 0.1)
        const getCircleGroupEndY = () =>
          window.innerHeight * (isCompactTurnLayout() ? 0.027 : 0.015)
        const getCenterStartScale = () => (isCompactTurnLayout() ? 1.14 : 1.18)
        const headingFadeStart = isCompactTurnLayout() ? 0.08 : 0.6
        const headingFadeDuration = isCompactTurnLayout() ? 0.16 : 0.34
        const headingFadeY = isCompactTurnLayout() ? -42 : -28
        const getCompactSideOffset = () =>
          getCircleSize() + 8
        const getSideY = (side) => {
          if (!isCompactTurnLayout()) {
            return 0
          }

          const offset = getCompactSideOffset()

          return side === 'left' ? -offset : offset
        }

        gsap.set(turnCirclesWrap, { y: getCircleGroupStartY })
        gsap.set([leftTurnCircle, centerTurnCircle, rightTurnCircle], {
          xPercent: -50,
          yPercent: -50,
          x: 0,
          y: 0,
        })
        gsap.set([leftTurnCircle, rightTurnCircle], {
          autoAlpha: 0,
          scale: 0.96,
        })
        gsap.set(centerTurnCircle, {
          autoAlpha: 1,
          scale: getCenterStartScale,
        })
        gsap.set(turnCircleContent, {
          autoAlpha: 0,
          y: 22,
        })
        gsap.set(turnCircleStart, {
          autoAlpha: 1,
          y: 0,
        })

        const turnTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: '.turn-section',
            start: 'top top',
            end: '+=3200',
            scrub: 1.25,
            pin: '.turn-section-stage',
            pinSpacing: true,
            anticipatePin: 0.5,
            invalidateOnRefresh: true,
          },
        })

        turnTimeline
          .to({}, { duration: 0.18 })
          .to(
            turnCirclesWrap,
            {
              y: getCircleGroupEndY,
              duration: 0.76,
              ease: 'none',
            },
            0,
          )
          .to(
            centerTurnCircle,
            {
              scale: 1,
              duration: 0.7,
              ease: 'power1.out',
            },
            0.08,
          )
          .to(
            leftTurnCircle,
            {
              autoAlpha: 1,
              x: () => -getCircleOffset(),
              y: () => getSideY('left'),
              scale: 1,
              duration: 0.74,
              ease: 'power2.out',
            },
            0.16,
          )
          .to(
            rightTurnCircle,
            {
              autoAlpha: 1,
              x: () => getCircleOffset(),
              y: () => getSideY('right'),
              scale: 1,
              duration: 0.74,
              ease: 'power2.out',
            },
            0.16,
          )
          .to(
            turnHeading,
            {
              autoAlpha: 0,
              y: headingFadeY,
              duration: headingFadeDuration,
              ease: 'none',
            },
            headingFadeStart,
          )
          .to(
            turnCircleStart,
            {
              autoAlpha: 0,
              y: -18,
              duration: 0.22,
              ease: 'none',
            },
            0.67,
          )
          .to(
            turnCircleContent,
            {
              autoAlpha: 1,
              y: 0,
              stagger: 0.08,
              duration: 0.36,
              ease: 'none',
            },
            0.78,
          )
          .to({}, { duration: 0.32 })
      }

      const missionSection = document.querySelector('.mission-section')

      if (missionSection) {
        const missionIntro = gsap.utils.toArray('.mission-body').filter(
          (item) => item.closest('.mission-section') === missionSection
            && window.getComputedStyle(item).display !== 'none',
        )
        const missionHeading = missionSection.querySelector('.mission-copy h2')
        const missionLabels = gsap.utils.toArray('.mission-card h3').filter(
          (item) => item.closest('.mission-section') === missionSection,
        )

        gsap.set([...missionIntro, missionHeading, ...missionLabels], {
          autoAlpha: 0,
          y: 26,
        })

        const missionTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: missionSection,
            start: 'top 68%',
            once: true,
          },
        })

        missionTimeline
          .to({}, { duration: 0.3 })
          .to(missionIntro, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.18,
            duration: 1.25,
            ease: 'power2.out',
          })
          .to(
            missionHeading,
            {
              autoAlpha: 1,
              y: 0,
              duration: 1.35,
              ease: 'power2.out',
            },
            '-=0.58',
          )
          .to(
            missionLabels,
            {
              autoAlpha: 1,
              y: 0,
              stagger: 0.24,
              duration: 1.15,
              ease: 'power2.out',
            },
            '-=0.35',
          )
      }

      const celebrateSection = document.querySelector('.celebrate-section')

      if (celebrateSection) {
        const paintWords = gsap.utils.toArray('.paint-word')
        const paintSplashes = gsap.utils.toArray('.paint-splash')

        gsap.set(paintWords, { '--paint-progress': '0%' })
        gsap.set(paintSplashes, { autoAlpha: 0, scale: 0.3 })
        gsap.set('.celebrate-children', { autoAlpha: 0, y: 34, scale: 0.96 })

        const celebrateTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: celebrateSection,
            start: 'top 72%',
            once: true,
          },
        })

        celebrateTimeline
          .to({}, { duration: 0.8 })
          .from('.celebrate-lead', {
            autoAlpha: 0,
            y: 18,
            duration: 0.55,
            ease: 'power2.out',
          })
          .from(
            '.celebrate-heading-main',
            {
              autoAlpha: 0,
              y: 22,
              duration: 0.58,
              ease: 'power2.out',
            },
            '-=0.26',
          )
          .to(
            '.celebrate-children',
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: 'power2.out',
            },
            '-=0.36',
          )
          .to(
            paintSplashes,
            {
              autoAlpha: 0.14,
              scale: 1,
              stagger: 0.12,
              duration: 0.55,
              ease: 'power2.out',
            },
            '-=0.34',
          )
          .to(
            paintWords,
            {
              '--paint-progress': '100%',
              stagger: 0.16,
              duration: 0.72,
              ease: 'power2.out',
            },
            '-=0.2',
          )

        gsap.to('.celebrate-children', {
          y: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          scrollTrigger: {
            trigger: celebrateSection,
            start: 'top 72%',
          },
        })
      }

      const crisisSection = document.querySelector('.crisis-section')

      if (crisisSection) {
        const crisisCopyItems = crisisSection.querySelectorAll('.crisis-copy h2, .crisis-copy p')
        const crisisVideo = crisisSection.querySelector('.crisis-video')

        gsap.set(crisisCopyItems, { autoAlpha: 0, y: 70 })

        gsap
          .timeline({
            scrollTrigger: {
              trigger: crisisSection,
              start: 'top 85%',
              end: 'top 5%',
              scrub: 3.5,
              invalidateOnRefresh: true,
            },
          })
          .to({}, { duration: 0.8 })
          .to(crisisCopyItems, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.2,
            duration: 1.5,
            ease: 'power2.out',
          })

        gsap.to(crisisCopyItems, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: crisisSection,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2.8,
            onLeave: () => {
              gsap.to(crisisCopyItems, {
                autoAlpha: 0,
                duration: 0.6,
                ease: 'power2.inOut',
              })
            },
            onEnterBack: () => {
              gsap.to(crisisCopyItems, {
                autoAlpha: 1,
                duration: 0.6,
                ease: 'power2.inOut',
              })
            },
          },
        })

        if (crisisVideo) {
          const playCrisisVideo = () => {
            const playPromise = crisisVideo.play()

            if (playPromise) {
              playPromise.catch(() => { })
            }
          }

          const pauseCrisisVideo = () => {
            crisisVideo.pause()
          }

          ScrollTrigger.create({
            trigger: crisisSection,
            start: 'top 70%',
            end: 'bottom 30%',
            onEnter: playCrisisVideo,
            onEnterBack: playCrisisVideo,
            onLeave: pauseCrisisVideo,
            onLeaveBack: pauseCrisisVideo,
          })
        }
      }

      const stabilitySection = document.querySelector('.stability-section')

      if (stabilitySection) {
        const stabilityCopyItems = stabilitySection.querySelectorAll(
          '.stability-copy h2, .stability-copy p',
        )
        const stabilityVideo = stabilitySection.querySelector('.stability-video')

        gsap.set(stabilityCopyItems, { autoAlpha: 0, y: 70 })

        gsap
          .timeline({
            scrollTrigger: {
              trigger: stabilitySection,
              start: 'top 85%',
              end: 'top 5%',
              scrub: 3.5,
              invalidateOnRefresh: true,
            },
          })
          .to({}, { duration: 1 })
          .to(stabilityCopyItems, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.2,
            duration: 1.5,
            ease: 'power2.out',
          })

        gsap.to(stabilityCopyItems, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: stabilitySection,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2.8,
            onLeave: () => {
              gsap.to(stabilityCopyItems, {
                autoAlpha: 0,
                duration: 0.6,
                ease: 'power2.inOut',
              })
            },
            onEnterBack: () => {
              gsap.to(stabilityCopyItems, {
                autoAlpha: 1,
                duration: 0.6,
                ease: 'power2.inOut',
              })
            },
          },
        })

        if (stabilityVideo) {
          const playStabilityVideo = () => {
            const playPromise = stabilityVideo.play()

            if (playPromise) {
              playPromise.catch(() => { })
            }
          }

          const pauseStabilityVideo = () => {
            stabilityVideo.pause()
          }

          ScrollTrigger.create({
            trigger: stabilitySection,
            start: 'top 70%',
            end: 'bottom 30%',
            onEnter: playStabilityVideo,
            onEnterBack: playStabilityVideo,
            onLeave: pauseStabilityVideo,
            onLeaveBack: pauseStabilityVideo,
          })
        }
      }

      const progressSection = document.querySelector('.progress-section')

      if (progressSection) {
        const progressHeading = progressSection.querySelector('.progress-copy h2')
        const progressParagraphs = progressSection.querySelectorAll('.progress-copy p')
        const progressCopyItems = [progressHeading, ...progressParagraphs].filter(Boolean)

        gsap.set(progressCopyItems, {
          autoAlpha: 0,
          clipPath: 'inset(0 100% 0 0)',
          filter: 'blur(10px)',
          scaleX: 0.96,
          transformOrigin: 'left center',
          willChange: 'clip-path, opacity, filter, transform',
        })

        gsap
          .timeline({
            scrollTrigger: {
              trigger: progressSection,
              start: () => (window.matchMedia('(min-width: 821px)').matches ? 'top 64%' : 'top 48%'),
              end: () => (window.matchMedia('(min-width: 821px)').matches ? 'top -2%' : 'bottom 34%'),
              scrub: () => (window.matchMedia('(min-width: 821px)').matches ? 1.3 : 1.15),
              invalidateOnRefresh: true,
            },
          })
          .to({}, { duration: 1.2 })
          .to(progressHeading, {
            autoAlpha: 1,
            clipPath: 'inset(0 0% 0 0)',
            filter: 'blur(0px)',
            scaleX: 1,
            duration: 0.72,
            ease: 'power3.out',
          })
          .to(
            progressParagraphs,
            {
              autoAlpha: 1,
              clipPath: 'inset(0 0% 0 0)',
              filter: 'blur(0px)',
              scaleX: 1,
              stagger: 0.18,
              duration: 0.82,
              ease: 'power3.out',
            },
            '-=0.28',
          )

        gsap.to(progressCopyItems, {
          yPercent: -5,
          ease: 'none',
          scrollTrigger: {
            trigger: progressSection,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      const leadersSection = document.querySelector('.leaders-section')

      if (leadersSection) {
        const isDesktopLeaders = window.matchMedia('(min-width: 821px)').matches
        const leadersTextLines = leadersSection.querySelectorAll(
          isDesktopLeaders
            ? '.leaders-title-desktop .leaders-title-line, .leaders-copy-line-desktop'
            : '.leaders-title-mobile .leaders-title-line, .leaders-copy-line-mobile',
        )
        const leaderCards = leadersSection.querySelectorAll('.leader-card')
        const leadersCarousel = leadersSection.querySelector('.leaders-carousel')
        const leadersTrack = leadersSection.querySelector('.leaders-track')

        gsap.set(leadersTextLines, {
          autoAlpha: 0,
          yPercent: 70,
          rotateX: -48,
          skewY: 2,
          filter: 'blur(8px)',
          transformOrigin: 'left bottom',
          willChange: 'opacity, transform, filter',
        })
        gsap.set(leaderCards, { autoAlpha: 0, y: 54, scale: 0.96 })

        gsap
          .timeline({
            scrollTrigger: {
              trigger: leadersSection,
              start: () => (window.matchMedia('(min-width: 821px)').matches ? 'top 68%' : 'top 58%'),
              end: () => (window.matchMedia('(min-width: 821px)').matches ? 'top 22%' : 'top 10%'),
              scrub: 1.1,
              invalidateOnRefresh: true,
            },
          })
          .to({}, { duration: 1 })
          .to(leadersTextLines, {
            autoAlpha: 1,
            yPercent: 0,
            rotateX: 0,
            skewY: 0,
            filter: 'blur(0px)',
            stagger: 0.07,
            duration: 1,
            ease: 'power3.out',
          })

        gsap.to(leaderCards, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          stagger: 0.07,
          duration: 0.86,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: leadersSection,
            start: 'top 58%',
            once: true,
          },
        })

        if (leadersCarousel && leadersTrack) {
          const getLeadersTravel = () => Math.max(0, leadersCarousel.scrollWidth - leadersCarousel.clientWidth)
          const getLeadersStart = () => {
            if (window.matchMedia('(min-width: 821px)').matches) {
              return 'top -12%'
            }

            const carouselBottom = leadersCarousel.offsetTop + leadersCarousel.offsetHeight
            const revealGap = window.matchMedia('(max-width: 380px)').matches
              ? Math.max(112, window.innerHeight * 0.2)
              : Math.max(96, window.innerHeight * 0.16)
            const triggerTop = window.innerHeight - carouselBottom - revealGap

            return `top ${Math.round(triggerTop)}px`
          }
          const refreshLeadersScroll = () => ScrollTrigger.refresh()

          leadersCarousel.querySelectorAll('img').forEach((image) => {
            if (image.complete) {
              return
            }

            image.addEventListener('load', refreshLeadersScroll, { once: true })
            image.addEventListener('error', refreshLeadersScroll, { once: true })
            cleanupCallbacks.push(() => {
              image.removeEventListener('load', refreshLeadersScroll)
              image.removeEventListener('error', refreshLeadersScroll)
            })
          })

          gsap.set(leadersTrack, {
            x: 0,
            willChange: 'transform',
          })

          gsap.to(leadersTrack, {
            x: () => -getLeadersTravel(),
            ease: 'none',
            scrollTrigger: {
              trigger: leadersSection,
              start: getLeadersStart,
              end: () => `+=${Math.max(getLeadersTravel(), window.innerHeight * 0.8)}`,
              scrub: 1.2,
              pin: true,
              pinSpacing: true,
              anticipatePin: 0.35,
              invalidateOnRefresh: true,
            },
          })
        }
      }

      const responseSection = document.querySelector('.response-section')

      if (responseSection) {
        const responseTitles = responseSection.querySelectorAll('.response-title')
        const responseIntros = responseSection.querySelectorAll('.response-intro')

        gsap.set(responseTitles, {
          autoAlpha: 0,
          y: 80,
        })
        gsap.set(responseIntros, {
          autoAlpha: 0,
          y: 70,
        })

        gsap
          .timeline({
            scrollTrigger: {
              trigger: responseSection,
              start: 'top 85%',
              end: 'top -25%',
              scrub: 4.5,
              invalidateOnRefresh: true,
            },
          })
          .to({}, { duration: 0.8 })
          .to(responseIntros, {
            autoAlpha: 1,
            y: 0,
            duration: 2.2,
            ease: 'power2.out',
          })
          .to(
            responseTitles,
            {
              autoAlpha: 1,
              y: 0,
              duration: 2.6,
              ease: 'power2.out',
            },
            '-=1.2',
          )

        gsap.to(responseTitles, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: responseSection,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2.8,
            onLeave: () => {
              gsap.to([responseTitles, responseIntros], {
                autoAlpha: 0,
                duration: 0.6,
                ease: 'power2.inOut',
              })
            },
            onEnterBack: () => {
              gsap.to([responseTitles, responseIntros], {
                autoAlpha: 1,
                duration: 0.6,
                ease: 'power2.inOut',
              })
            },
          },
        })
      }
    })

    ScrollTrigger.refresh()

    return () => {
      cleanupCallbacks.forEach((cleanup) => cleanup())
      context.revert()
      cancelAnimationFrame(animationFrame)
      lenis.destroy()
    }
  }, [])

  return (
    <main className="story-page">
      <svg className="clip-defs" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="crisis-video-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.02 0.52C0.02 0.32 0.15 0.13 0.35 0.05C0.49 0 0.62 0.02 0.73 0.08L1 0.24C0.96 0.43 0.91 0.63 0.76 0.81C0.58 1.02 0.29 1.03 0.11 0.86C0.03 0.78 0 0.65 0.02 0.52Z" />
          </clipPath>
          <clipPath id="stability-video-clip" clipPathUnits="objectBoundingBox">
            <path d="M0 0H0.78C0.91 0 1 0.1 1 0.27V1H0.18C0.07 1 0 0.91 0 0.78Z" />
          </clipPath>
        </defs>
      </svg>

      <section className="hero" aria-label="Youth resilience story">
        <div className="hero-content">
          <div
            className="hero-background"
            style={{
              '--hero-bg-desktop': `url(${section1BackImg})`,
              '--hero-bg-mobile': `url(${section1MobileBackImg})`,
            }}
            aria-hidden="true"
          />
          <div className="hero-overlay" aria-hidden="true" />
          <header className="hero-site-header" aria-label="Microsite header">
            <a
              className="hero-site-logo-link"
              href={ARAB_STATES_SITE_URL}
              aria-label="Go to the UNDP website"
            >
              <img src={undpWhiteLogo} alt="UNDP" />
            </a>

            <div className="hero-site-meta">
              <a className="hero-site-region-link" href={ARAB_STATES_SITE_URL}>
                Arab States
              </a>

              <a
                className="hero-site-title-link"
                href={MICROSITE_HOME_PATH}
                aria-label="Go to the Young People at the Frontlines in Times of Crisis Across the Arab States Region   homepage"
              >
                Young People at the Frontlines in Times of Crisis Across the Arab States Region
              </a>
            </div>
          </header>

          <div className="columns-viewport" aria-hidden="true">
            <div className="img-column left-column">
              {leftColumnImages.map((image, index) => (
                <img
                  key={image.src}
                  className="story-img"
                  src={image.src}
                  alt={image.alt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              ))}
            </div>

            <div className="img-column right-column">
              {rightColumnImages.map((image, index) => (
                <img
                  key={image.src}
                  className="story-img"
                  src={image.src}
                  alt={image.alt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              ))}
            </div>
          </div>

          <div className="hero-copy">
            <h1 className="hero-title">
              {headline.map((line) => (
                <span className="title-line" key={line.join('-')}>
                  {line.map((word) => (
                    <span className="word" key={word}>
                      {word}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
          </div>

          <div className="scroll-cue" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section
        className="impact-section"
        aria-label="Youth-led crisis response chapter"
      >
        <div
          className="impact-section-stage"
          style={{
            '--impact-bg-desktop': `url(${section2BackImg})`,
            '--impact-bg-mobile': `url(${section2MobileBackImg})`,
          }}
        >
          <div className="impact-section-inner">
            <div className="impact-copy">
              <p className="impact-lead">
                <span className="impact-lead-desktop">
                  Across the Arab States region, countless young people
                  <br />
                  are stepping up to support their communities. Amid
                  <br />
                  intertwined conflicts, economic instability, and mounting
                  <br />
                  climate pressures,
                </span>
                <span className="impact-lead-mobile">
                  Across the Arab States region,
                  <br />
                  countless young people are
                  <br />
                  stepping up to support their
                  <br />
                  communities. Amid intertwined
                  <br />
                  conflicts, economic instability,
                  <br />
                  and mounting climate pressures,
                </span>
              </p>
              <h2 className="impact-heading">
                <span className="impact-heading-desktop">
                  <span className="impact-heading-line">they are not waiting on the sidelines</span>
                  <span className="impact-heading-line">- they are leading with solutions</span>
                  <span className="impact-heading-line">and partnering in crisis response.</span>
                </span>
                <span className="impact-heading-mobile">
                  <span className="impact-heading-line">they are not waiting on the</span>
                  <span className="impact-heading-line">sidelines - they are leading</span>
                  <span className="impact-heading-line">with solutions and partnering</span>
                  <span className="impact-heading-line">in crisis response.</span>
                </span>
              </h2>
            </div>

            <div className="kpi-stack" role="group" aria-label="Youth impact statistics">
              <div className="kpi-card kpi-card-back" aria-hidden="true" />
              <div className="kpi-card kpi-card-middle" aria-hidden="true" />
              <article className="kpi-card kpi-card-front kpi-info-card">
                <div className="kpi-slide kpi-slide-active">
                  <img
                    className="kpi-icon kpi-people"
                    src={coupleIcon}
                    alt=""
                    aria-hidden="true"
                    decoding="async"
                  />

                  <div className="kpi-copy">
                    <strong>2M Youth</strong>
                    <span>jobs at risk</span>
                    <p>
                      due to proximity to conflict
                      <br />
                      in the Arab States region
                    </p>
                  </div>
                </div>
              </article>

              <article className="kpi-card kpi-card-front kpi-info-card">
                <div className="kpi-slide kpi-slide-climate">
                  <img
                    className="kpi-icon kpi-trend"
                    src={arrowIcon}
                    alt=""
                    aria-hidden="true"
                    decoding="async"
                  />

                  <div className="kpi-copy kpi-copy-climate">
                    <strong>2× Faster</strong>
                    <span>regional warming rate</span>
                    <p className="kpi-climate-detail">
                      <span className="kpi-copy-line">compared to global average intensifying</span>
                      <span className="kpi-copy-line">climate-related displacement and</span>
                      <span className="kpi-copy-line">instability for youth</span>
                    </p>
                  </div>
                </div>
              </article>

              <article className="kpi-card kpi-card-front kpi-info-card">
                <div className="kpi-slide kpi-slide-displacement">
                  <img
                    className="kpi-icon kpi-pies"
                    src={circlesIcon}
                    alt=""
                    aria-hidden="true"
                    decoding="async"
                  />

                  <div className="kpi-copy kpi-copy-statement kpi-copy-displacement">
                    <p className="kpi-statement">
                      <span className="kpi-statement-line">
                        The region hosts <strong>10%</strong> of the
                      </span>
                      <span className="kpi-statement-line">world's displaced people,</span>
                      <span className="kpi-statement-line">
                        while <strong>30%</strong> of global refugees
                      </span>
                      <span className="kpi-statement-line">originate here</span>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        className="response-section"
        style={{
          '--response-bg-desktop': `url(${section2BackImg2})`,
          '--response-bg-mobile': `url(${section2MobileBackImg2})`,
        }}
        aria-label="Youth impact reflection"
      >
        <div className="response-copy">
          <p className="response-intro response-intro-desktop">
            Their contributions rarely make the headlines,
          </p>
          <p className="response-intro response-intro-mobile">
            Their contributions rarely
            <br />
            make the headlines,
          </p>
          <h2 className="response-title response-title-desktop">
            yet many are frontliners driving
            <br />
            tangible impact locally.
          </h2>
          <h2 className="response-title response-title-mobile">
            yet many are
            <br />
            frontliners driving
            <br />
            tangible impact
            <br />
            locally.
          </h2>
        </div>
      </section>

      <section className="turn-section" aria-label="Youth transformation chapter">
        <div
          className="turn-section-stage"
          style={{
            '--turn-bg-desktop': `url(${section3BackImg})`,
            '--turn-bg-mobile': `url(${section3MobileBackImg})`,
          }}
        >
          <div className="turn-section-inner">
            <h2 className="turn-heading">As first responders, mediators, or innovators,</h2>

            <div className="turn-circles" aria-label="They turn ideas, adversity, and challenges into action, opportunity, and hope">
              {turnItems.map((item) => (
                <article
                  className={`turn-circle turn-circle-${item.id}`}
                  aria-label={item.ariaLabel}
                  key={item.id}
                >
                  {item.id === 'center' && (
                    <p className="turn-circle-start" aria-hidden="true">
                      <span>THEY</span>
                      <span>TURN</span>
                    </p>
                  )}

                  <div className="turn-circle-content">
                    <img
                      className={`turn-icon turn-icon-${item.id}`}
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                      decoding="async"
                    />
                    <p>
                      {item.lines.map((line) => (
                        <span className="turn-line" key={line.map(({ text }) => text).join('-')}>
                          {line.map((part, index) => {
                            const Tag = part.strong ? 'strong' : 'span'

                            return (
                              <Tag key={part.text}>
                                {index > 0 ? ' ' : ''}
                                {part.text}
                              </Tag>
                            )
                          })}
                        </span>
                      ))}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="mission-section"
        style={{
          '--mission-bg-desktop': `url(${section4BackImg})`,
          '--mission-bg-mobile': `url(${section4MobileBackImg})`,
        }}
        aria-label="Why UNDP works with youth"
      >
        <div className="mission-section-inner">
          <div className="mission-copy">
            <p className="mission-body mission-body-desktop">
              Youth are at the very heart of UNDP&apos;s mission in the Arab States.
              <br />
              With the region hosting the largest youth cohort in history, empowering young people
              <br />
              is both a development priority and an investment in resilience.
            </p>
            <p className="mission-body mission-body-mobile">
              Youth are at the very heart of UNDP&apos;s mission in
              <br />
              the Arab States. With the region hosting the
              <br />
              largest youth cohort in history, empowering
              <br />
              young people is both a development priority and
              <br />
              an investment in resilience.
            </p>
            <h2>
              This is why,{' '}
              <br className="mission-heading-mobile-break" />
              {' '}UNDP works to
            </h2>
          </div>

          <div className="mission-path" aria-label="UNDP works to support, amplify, and connect youth voices">
            {missionImages.map((image) => (
              <article
                className={`mission-card mission-card-${image.id}`}
                key={image.id}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />
                <h3>
                  {image.labelLines
                    ? image.labelLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))
                    : image.label}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="celebrate-section"
        style={{
          '--celebrate-bg-desktop': `url(${section4BackImg2})`,
          '--celebrate-bg-mobile': `url(${section4MobileBackImg2})`,
        }}
        aria-label="Youth leadership stories"
      >
        <div className="celebrate-section-inner">
          <div className="celebrate-copy">
            <p className="celebrate-lead">
              This series highlights the often untold stories
              <br />
              of young people across the region who are
              <br />
              advancing social, environmental, and
              <br />
              economic progress.
            </p>

            <h2>
              <span className="celebrate-heading-main">
                It celebrates youth leadership{' '}
                <br className="celebrate-desktop-break" />
                and demonstrates how their
              </span>
              <span className="celebrate-colored-lines">
                <span className="paint-word paint-word-gold">creativity,</span>
                <span className="paint-word paint-word-blue">courage,</span>
                <span className="paint-word paint-word-green">and commitment</span>
                <span className="paint-word paint-word-green paint-word-light">
                  strengthen communities.
                </span>
              </span>
            </h2>
          </div>

          <span className="paint-splash paint-splash-gold" aria-hidden="true" />
          <span className="paint-splash paint-splash-blue" aria-hidden="true" />
          <span className="paint-splash paint-splash-green" aria-hidden="true" />

          <picture className="celebrate-children">
            <source media="(max-width: 820px)" srcSet={mobileChildrenImg} />
            <img
              src={childrenImg}
              alt="Children and a young leader holding hands in a circle"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </section>

      <section
        className="crisis-section"
        style={{
          '--crisis-bg-desktop': `url(${section5BackImg})`,
          '--crisis-bg-mobile': `url(${section5MobileBackImg})`,
        }}
        aria-label="Youth emergency assistance"
      >
        <div className="crisis-section-inner">
          <div className="crisis-copy">
            <h2>In moments of crisis,</h2>
            <p>
              institutions are not alone: youth are already on the ground, proactively and
              voluntarily providing emergency assistance.
            </p>
          </div>

          <figure className="crisis-video-frame" aria-label="Crisis response story video">
            <video
              className="crisis-video"
              src={crisisVideoSrc}
              muted
              loop
              playsInline
              preload="metadata"
            />
          </figure>
        </div>
      </section>

      <section
        className="stability-section"
        style={{
          '--stability-bg-desktop': `url(${section5BackImg2})`,
          '--stability-bg-mobile': `url(${section5MobileBackImg2})`,
        }}
        aria-label="Youth leadership and regional stability"
      >
        <div className="stability-section-inner">
          <div className="stability-copy">
            <h2>
              <span className="stability-heading-desktop">
                <span className="stability-heading-line">
                  Beyond individual achievements, youth leadership
                </span>
                <span className="stability-heading-line stability-heading-underlined">
                  contributes to broader regional stability.
                </span>
              </span>
              <span className="stability-heading-mobile">
                <span className="stability-heading-line">Beyond individual</span>
                <span className="stability-heading-line">achievements, youth</span>
                <span className="stability-heading-line">leadership</span>
                <span className="stability-heading-line">contributes to broader</span>
                <span className="stability-heading-line">regional</span>
                <span className="stability-heading-line stability-heading-underlined">
                  stability.
                </span>
              </span>
            </h2>
            <p className="stability-body">
              <span className="stability-copy-line stability-copy-line-desktop">
                Their efforts help strengthen social cohesion, expand economic opportunities, and
                reinforce trust between
              </span>
              <span className="stability-copy-line stability-copy-line-desktop">
                institutions and communities &mdash; all of which are essential for resilience and
                peace, and embodying the pillars of the
              </span>
              <span className="stability-copy-line stability-copy-line-desktop">
                <a
                  className="stability-yps"
                  href="https://www.un.org/en/peace-and-security/youth-peace-and-security-guide"
                  target="_blank"
                  rel="noreferrer"
                >
                  UN Youth, Peace and Security (YPS) agenda.
                </a>
              </span>
              <span className="stability-copy-line stability-copy-line-mobile">
                Their efforts help strengthen social cohesion,
              </span>
              <span className="stability-copy-line stability-copy-line-mobile">
                expand economic opportunities, and reinforce
              </span>
              <span className="stability-copy-line stability-copy-line-mobile">
                trust between institutions and communities &mdash; all
              </span>
              <span className="stability-copy-line stability-copy-line-mobile">
                which are essential for resilience and peace, and
              </span>
              <span className="stability-copy-line stability-copy-line-mobile">
                embodying the pillars of the
              </span>
              <a
                className="stability-yps stability-yps-mobile"
                href="https://www.un.org/en/peace-and-security/youth-peace-and-security-guide"
                target="_blank"
                rel="noreferrer"
              >
                <span className="stability-copy-line stability-copy-line-mobile">
                  UN Youth, Peace and
                </span>
                <span className="stability-copy-line stability-copy-line-mobile">
                  Security agenda (YPS).
                </span>
              </a>
            </p>
          </div>

          <figure className="stability-video-frame" aria-label="Regional stability story video">
            <video
              className="stability-video"
              src={stabilityVideoSrc}
              muted
              loop
              playsInline
              preload="metadata"
            />
          </figure>
        </div>
      </section>

      <section
        className="progress-section"
        style={{
          '--progress-bg-desktop': `url(${section5BackImg3})`,
          '--progress-bg-mobile': `url(${section5MobileBackImg3})`,
        }}
        aria-label="Youth ambition into tangible progress"
      >
        <div className="progress-section-inner">
          <div className="progress-copy">
            <h2>
              Across the Arab States region, UNDP-supported efforts are helping turn youth
              ambition into tangible progress.
            </h2>
            <p>
              This series highlights young leaders from eight countries who are responding to
              crises with creativity, determination, and practical solutions.
            </p>
            <p className="progress-resilience-line">
              Their stories offer a snapshot of the energy and resilience driving change across
              the region.
            </p>
          </div>
        </div>
      </section>

      <section
        className="leaders-section"
        style={{
          '--leaders-bg-desktop': `url(${section6BackImg})`,
          '--leaders-bg-mobile': `url(${section6MobileBackImg})`,
        }}
        aria-label="Young leaders across the Arab States"
      >
        <div className="leaders-section-inner">
          <div className="leaders-copy">
            <h2>
              <span className="leaders-title-desktop">
                <span className="leaders-title-line">
                  From Somalia, Morocco, Yemen, Lebanon, Sudan, Palestine,
                </span>
                <span className="leaders-title-line">
                  Libya and Syria, 14 young leaders are redefining what it
                </span>
                <span className="leaders-title-line">means to lead in times of crisis.</span>
              </span>
              <span className="leaders-title-mobile">
                <span className="leaders-title-line">From Somalia, Morocco,</span>
                <span className="leaders-title-line">Yemen, Lebanon, Sudan,</span>
                <span className="leaders-title-line">Palestine, Libya and Syria,</span>
                <span className="leaders-title-line">14 young leaders are</span>
                <span className="leaders-title-line">redefining what it means</span>
                <span className="leaders-title-line">to lead in times of crisis.</span>
              </span>
            </h2>

            <p className="leaders-body">
              <span className="leaders-copy-line leaders-copy-line-desktop">
                They are building climate resilience in flood-prone areas, reconstructing homes
                after earthquakes, creating digital tools for displaced
              </span>
              <span className="leaders-copy-line leaders-copy-line-desktop">
                people, empowering young entrepreneurs, and fostering social cohesion in
                communities fractured by conflict.
              </span>
              <span className="leaders-copy-line leaders-copy-line-mobile">
                They are building climate resilience in flood-prone
              </span>
              <span className="leaders-copy-line leaders-copy-line-mobile">
                areas, reconstructing homes after earthquakes,
              </span>
              <span className="leaders-copy-line leaders-copy-line-mobile">
                creating digital tools for displaced people,
              </span>
              <span className="leaders-copy-line leaders-copy-line-mobile">
                empowering young entrepreneurs, and
              </span>
              <span className="leaders-copy-line leaders-copy-line-mobile">
                fostering social cohesion in communities fractured
              </span>
              <span className="leaders-copy-line leaders-copy-line-mobile">
                by conflict.
              </span>
            </p>
            <p className="leaders-body">
              <span className="leaders-copy-line leaders-copy-line-desktop">
                Each story highlights the ingenuity and determination of youth who are stepping
                forward &mdash; often in the face of extraordinary
              </span>
              <span className="leaders-copy-line leaders-copy-line-desktop">
                challenges &mdash; to generate meaningful impact
              </span>
              <span className="leaders-copy-line leaders-copy-line-mobile">
                Each story highlights the ingenuity and
              </span>
              <span className="leaders-copy-line leaders-copy-line-mobile">
                determination of youth who are stepping forward
              </span>
              <span className="leaders-copy-line leaders-copy-line-mobile">
                &mdash; often in the face of extraordinary challenges &mdash;
              </span>
              <span className="leaders-copy-line leaders-copy-line-mobile">
                to generate meaningful impact.
              </span>
            </p>
          </div>

          <div
            className="leaders-carousel"
            role="region"
            aria-label="Young leader profile cards"
          >
            <div className="leaders-track">
              {leaderImages.map((image, index) => {
                const leaderCardClass = `leader-card${image.storyPath ? ' leader-card-link' : ''}`
                const leaderCardStyle = { '--leader-delay': `${index * -0.37}s` }
                const leaderCardImage = (
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index < 4 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                )

                if (image.storyPath) {
                  return (
                    <button
                      className={leaderCardClass}
                      type="button"
                      key={image.src}
                      style={leaderCardStyle}
                      aria-label={image.ariaLabel}
                      onClick={() => handleLeaderCardClick(image.storyPath)}
                    >
                      {leaderCardImage}
                    </button>
                  )
                }

                return (
                  <article className={leaderCardClass} key={image.src} style={leaderCardStyle}>
                    {leaderCardImage}
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function GoogleAnalytics() {
  const location = useLocation()

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    })
  }, [location.pathname, location.search])

  return null
}

function App() {
  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      ReactGA.initialize(GA_MEASUREMENT_ID)
    }
  }, [])

  return (
    <>
      <ScrollToTop />
      {GA_MEASUREMENT_ID ? <GoogleAnalytics /> : null}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {Object.entries(storyRoutes).map(([path, StoryPage]) => (
          <Route path={path} element={createElement(StoryPage)} key={path} />
        ))}
        <Route path="*" element={<LandingPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
