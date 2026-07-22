import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import undpWhiteLogo from "./assets/Landing-imgs/UNDP-Logo-White-Large.png";
import storyHeroBackImg from "./assets/Story-imgs/section1/back-img.jpg";
import storyNarrativeBackImg from "./assets/Story-imgs/section1/back-img2-optimized-2560.png";
import storyHeroMobileBackImg from "./assets/Story-imgs/section1/mobile-back-img.png";
import storyNarrativeMobileBackImg from "./assets/Story-imgs/section1/mobile-back-img2.png";
import impactCircleImg from "./assets/Story-imgs/section1/circle-img.png";
import storySectionTwoBackImg from "./assets/Story-imgs/section2/back-img-optimized.png";
import storySectionTwoBracketIcon from "./assets/Story-imgs/section2/bracket.svg";
import storySectionTwoCurveImg from "./assets/Story-imgs/section2/curve.png";
import storySectionTwoCircleImg from "./assets/Story-imgs/section2/circle-img-optimized.png";
import storySectionTwoGroupPeopleImg from "./assets/Story-imgs/section2/group-people.png";
import storySectionTwoMobileCurveImg from "./assets/Story-imgs/section2/mobile-curve.png";
import storySectionThreeBackImg from "./assets/Story-imgs/section3/back-img.png";
import storySectionThreeMobileBackImg from "./assets/Story-imgs/section3/mobile-back-img.png";
import storySectionThreeDetailsBackImg from "./assets/Story-imgs/section3/back-img2-optimized.png";
import storySectionThreeDetailsMobileBackImg from "./assets/Story-imgs/section3/mobile-back-img2.png";
import storyLeadersBackImg from "./assets/Landing-imgs/section6/back-img-story.jpg";
import storyLeadersMobileBackImg from "./assets/Landing-imgs/section6/mobile-back-img.png";
import backButtonIcon from "./assets/Story-imgs/backward.png";
import { leaderProfileImages, storyLeaderProfiles } from "./leaderProfiles.js";
import { BASE_PATH } from "./config.js";
import "./StoryPage.css";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const MICROSITE_HOME_PATH = "/";
const ARAB_STATES_SITE_URL = "https://www.undp.org/arab-states";

const impactStats = [
  {
    value: "7.8M",
    label: "people",
    text: "impacted by El Niño floods and displacement across multiple settlements",
  },
  {
    value: "62,000+",
    label: "households",
    text: "supported with improved water access and climate resilience systems",
  },
  {
    value: "43",
    label: "infrastructure projects",
    text: "including wells, canals, and desalination to reduce drought vulnerability",
  },
  {
    value: "1,800",
    label: "individuals",
    text: "received training and economic support through community programs (2023)",
  },
  {
    value: "500",
    label: "youth organizations",
    text: "mobilized for climate advocacy, policy change, and community solutions",
  },
];

const storyVideoSrc = `${BASE_PATH}videos/regional-stability.mp4`;

const sectionTwoOpeningLines = [
  '"Our people have faced 30 years of conflicts, economic fragility and disasters, most of the',
  "cities lack necessary resources, including clean water and security. But our population is",
  'more than 75% of young people. They have a lot of energy and a lot of potential."',
];

const sectionTwoOpeningCopy = sectionTwoOpeningLines.join(" ");
const sectionTwoOpeningAccentWords = new Set(["75%", "energy", 'potential."']);

const renderSectionTwoOpeningLines = () =>
  sectionTwoOpeningLines.map((line, lineIndex) => (
    <span
      className="story-section-two-opening-line"
      aria-hidden="true"
      key={`section-two-opening-line-${lineIndex}`}
    >
      {line.split(" ").map((word, wordIndex) => (
        <span
          className={`story-section-two-opening-word${sectionTwoOpeningAccentWords.has(word)
            ? " story-section-two-opening-word-accent"
            : ""
            }`}
          key={`${word}-${wordIndex}`}
        >
          {word}
        </span>
      ))}
    </span>
  ));

const visionCopy =
  "For Abdirahman, success means seeing young people shape policy, strengthen livelihoods, and prove that Somalia's future lies in the hands of its youth, a generation redefining leadership through unity, innovation, and hope.";

const visionDesktopLines = [
  [
    { text: "For" },
    { text: "Abdirahman," },
    { text: "success" },
    { text: "means" },
    { text: "seeing" },
    { text: "young" },
    { text: "people" },
    { text: "shape" },
    { text: "policy," },
    { text: "strengthen" },
    { text: "livelihoods," },
  ],
  [
    { text: "and" },
    { text: "prove" },
    { text: "that" },
    { text: "Somalia's", strong: true },
    { text: "future", strong: true },
    { text: "lies", strong: true },
    { text: "in", strong: true },
    { text: "the", strong: true },
    { text: "hands", strong: true },
    { text: "of", strong: true },
    { text: "its", strong: true },
    { text: "youth,", strong: true },
    { text: "a" },
    { text: "generation" },
  ],
  [
    { text: "redefining" },
    { text: "leadership" },
    { text: "through" },
    { text: "unity," },
    { text: "innovation," },
    { text: "and" },
    { text: "hope." },
  ],
];

const visionMobileLines = [
  [
    { text: "For" },
    { text: "Abdirahman," },
    { text: "success" },
    { text: "means" },
    { text: "seeing" },
    { text: "young" },
  ],
  [
    { text: "people" },
    { text: "shape" },
    { text: "policy," },
    { text: "strengthen" },
    { text: "livelihoods," },
    { text: "and" },
  ],
  [
    { text: "prove" },
    { text: "that" },
    { text: "Somalia's", strong: true },
    { text: "future", strong: true },
    { text: "lies", strong: true },
    { text: "in", strong: true },
    { text: "the", strong: true },
    { text: "hands", strong: true },
    { text: "of", strong: true },
  ],
  [
    { text: "its", strong: true },
    { text: "youth,", strong: true },
    { text: "a" },
    { text: "generation" },
    { text: "redefining" },
    { text: "leadership" },
  ],
  [
    { text: "through" },
    { text: "unity," },
    { text: "innovation," },
    { text: "and" },
    { text: "hope." },
  ],
];

const renderVisionLines = (lines) =>
  lines.map((line, lineIndex) => (
    <span className="story-vision-line" key={`vision-line-${lineIndex}`}>
      {line.map((word, wordIndex) => (
        <span
          className={`story-vision-word${word.strong ? " story-vision-word-strong" : ""}`}
          key={`${word.text}-${wordIndex}`}
        >
          {word.text}
        </span>
      ))}
    </span>
  ));

const storyLeaderImages = storyLeaderProfiles;

function RaghdaStoryPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let visionMedia;
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    let animationFrame;

    function raf(time) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    animationFrame = requestAnimationFrame(raf);
    const cleanupCallbacks = [];

    const preloadImages = [
      storyNarrativeBackImg,
      storyNarrativeMobileBackImg,
      storySectionTwoBackImg,
      storySectionTwoGroupPeopleImg,
      storySectionTwoMobileCurveImg,
      storySectionThreeBackImg,
      storySectionThreeMobileBackImg,
      storySectionThreeDetailsBackImg,
      storySectionThreeDetailsMobileBackImg,
      storyLeadersBackImg,
      storyLeadersMobileBackImg,
      ...leaderProfileImages.slice(0, 4),
    ];

    preloadImages.forEach((src) => {
      const image = new Image();
      image.src = src;
    });

    const context = gsap.context(() => {
      const impactSection = document.querySelector(".story-impact-section");
      const sectionTwo = document.querySelector(".story-section-two");
      const sectionThree = document.querySelector(".story-section-three");
      const visionSection = document.querySelector(".story-vision-section");
      const storyLeadersSection = document.querySelector(
        ".story-leaders-section",
      );

      if (impactSection) {
        const introItems = impactSection.querySelectorAll(
          ".story-impact-eyebrow, .story-impact-lead, .story-impact-image",
        );
        const statItems = impactSection.querySelectorAll(".story-impact-stat");

        gsap.set(introItems, { autoAlpha: 0, y: 26 });
        gsap.set(".story-impact-image", { scale: 0.92 });
        gsap.set(statItems, { autoAlpha: 0, y: 28 });

        const impactTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: impactSection,
            start: "top 68%",
            once: true,
          },
        });

        impactTimeline
          .to(introItems, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: 0.12,
            duration: 0.74,
            ease: "power2.out",
          })
          .to(
            statItems,
            {
              autoAlpha: 1,
              y: 0,
              stagger: 0.13,
              duration: 0.58,
              ease: "power2.out",
            },
            "-=0.32",
          );
      }

      if (sectionTwo) {
        const curves = sectionTwo.querySelectorAll(".story-section-two-curve");
        const sectionTwoQuote = sectionTwo.querySelector(
          ".story-section-two-quote p",
        );
        const sectionTwoOpening = sectionTwo.querySelector(
          ".story-section-two-opening",
        );
        const sectionTwoOpeningBracket = sectionTwo.querySelector(
          ".story-section-two-bracket-opening",
        );
        const sectionTwoOpeningWords = sectionTwo.querySelectorAll(
          ".story-section-two-opening-word",
        );
        const sectionTwoOpeningAccentWords = sectionTwo.querySelectorAll(
          ".story-section-two-opening-word-accent",
        );
        const sectionTwoIntroItems = sectionTwo.querySelectorAll(
          ".story-section-two-intro p",
        );
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        gsap.set(curves, {
          autoAlpha: 0,
          clipPath: "inset(0% 0% 100% 0%)",
        });

        gsap.set(sectionTwoIntroItems, {
          autoAlpha: 0,
          y: 30,
        });

        if (prefersReducedMotion) {
          gsap.set(sectionTwoOpening, { "--story-opening-line-scale": 1 });
          gsap.set([sectionTwoOpeningWords, sectionTwoOpeningBracket], {
            autoAlpha: 1,
            clearProps: "transform,filter",
          });
        } else {
          gsap.set(sectionTwoOpening, { "--story-opening-line-scale": 0 });
          gsap.set(sectionTwoOpeningWords, {
            autoAlpha: 0,
            y: window.innerWidth <= 820 ? 10 : 18,
            rotationX: -24,
            filter: "blur(7px)",
            transformOrigin: "50% 100%",
          });
          gsap.set(sectionTwoOpeningBracket, {
            autoAlpha: 0,
            y: -12,
            scale: 0.9,
          });
        }

        const sectionTwoTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionTwo,
            start: "top 82%",
            once: false,
          },
        });

        const isMobile = window.innerWidth <= 820;

        sectionTwoTimeline.to(curves, {
          autoAlpha: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 6.8,
          ease: "power1.out",
        });

        if (!prefersReducedMotion) {
          sectionTwoTimeline.to(
            sectionTwoOpening,
            {
              "--story-opening-line-scale": 1,
              duration: 0.72,
              ease: "power2.out",
            },
            0.16,
          );

          sectionTwoTimeline.to(
            sectionTwoOpeningWords,
            {
              autoAlpha: 1,
              y: 0,
              rotationX: 0,
              filter: "blur(0px)",
              stagger: {
                each: isMobile ? 0.024 : 0.034,
                from: "start",
              },
              duration: isMobile ? 0.58 : 0.72,
              ease: "power3.out",
            },
            0.28,
          );

          sectionTwoTimeline.to(
            sectionTwoOpeningBracket,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.64,
              ease: "back.out(1.4)",
            },
            0.42,
          );

          sectionTwoTimeline.to(
            sectionTwoOpeningAccentWords,
            {
              scale: 1.08,
              duration: 0.28,
              stagger: 0.08,
              yoyo: true,
              repeat: 1,
              ease: "power1.inOut",
            },
            isMobile ? 1.18 : 1.48,
          );
        }

        sectionTwoTimeline.to(
          sectionTwoIntroItems,
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.9,
            ease: "power2.out",
          },
          isMobile ? 1.65 : 1.9,
        );

        if (sectionTwoQuote) {
          gsap.set(sectionTwoQuote, {
            autoAlpha: 0,
            y: 40,
            filter: "blur(8px)",
          });

          gsap.to(sectionTwoQuote, {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionTwoQuote,
              start: "top 75%",
              once: false,
            },
          });
        }
      }

      if (sectionThree) {
        const sectionThreeQuoteLines = sectionThree.querySelectorAll(
          ".story-section-three-quote-line-desktop",
        );

        gsap.set(sectionThreeQuoteLines, {
          clipPath: "inset(0 100% 0 0)",
          autoAlpha: 0,
        });

        gsap.to(sectionThreeQuoteLines, {
          clipPath: "inset(0 0% 0 0)",
          autoAlpha: 1,
          stagger: 0.18,
          duration: 1.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionThree,
            start: "top 65%",
            once: false,
          },
        });

        // Mobile quote lines with scale and rotate animation
        const sectionThreeQuoteMobileLines = sectionThree.querySelectorAll(
          ".story-section-three-quote-line-mobile",
        );

        gsap.set(sectionThreeQuoteMobileLines, {
          autoAlpha: 0,
          scale: 0.9,
          rotate: 2,
        });

        gsap.to(sectionThreeQuoteMobileLines, {
          autoAlpha: 1,
          scale: 1,
          rotate: 0,
          stagger: 0.12,
          duration: 0.95,
          ease: "back.out",
          scrollTrigger: {
            trigger: sectionThree,
            start: "top 65%",
            once: false,
          },
        });
      }

      if (visionSection) {
        const visionStage = visionSection.querySelector(".story-vision-stage");
        const setupVisionReveal = (lineSelector, scrollDistance) => {
          const visionLines = gsap.utils.toArray(
            visionSection.querySelectorAll(
              `${lineSelector} .story-vision-line`,
            ),
          );

          gsap.set(visionSection.querySelectorAll(".story-vision-line"), {
            autoAlpha: 0,
          });
          gsap.set(visionSection.querySelectorAll(".story-vision-word"), {
            autoAlpha: 0,
            y: 8,
          });

          const visionTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: visionSection,
              start: "top top",
              end: `+=${scrollDistance}`,
              scrub: 1.45,
              pin: visionStage,
              pinSpacing: true,
              anticipatePin: 0.5,
              invalidateOnRefresh: true,
            },
          });

          const revealStart = 0.08;

          visionTimeline.to({}, { duration: revealStart });

          let wordOffset = 0;

          visionLines.forEach((line) => {
            const lineWords = gsap.utils.toArray(
              line.querySelectorAll(".story-vision-word"),
            );
            const lineStart = revealStart + wordOffset * 0.115;

            visionTimeline.to(
              line,
              {
                autoAlpha: 1,
                duration: 0.16,
                ease: "none",
              },
              lineStart,
            );

            lineWords.forEach((word, index) => {
              visionTimeline.to(
                word,
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.2,
                  ease: "none",
                },
                lineStart + index * 0.115,
              );
            });

            wordOffset += lineWords.length;
          });

          visionTimeline.to({}, { duration: 0.34 });
        };

        visionMedia = gsap.matchMedia();
        visionMedia.add("(max-width: 900px)", () =>
          setupVisionReveal(".story-vision-lines-mobile", 2400),
        );
        visionMedia.add("(min-width: 901px)", () =>
          setupVisionReveal(".story-vision-lines-desktop", 3200),
        );
      }

      if (storyLeadersSection) {
        const storyLeadersScroller = storyLeadersSection.querySelector(
          ".story-leaders-grid-wrap",
        );
        const storyLeadersGrid = storyLeadersSection.querySelector(
          ".story-leaders-grid",
        );
        const storyLeadersCopyItems = storyLeadersSection.querySelectorAll(
          ".story-leaders-copy h2",
        );
        const storyLeaderCards =
          storyLeadersSection.querySelectorAll(".story-leader-card");

        storyLeadersScroller?.scrollTo({ left: 0, top: 0, behavior: "auto" });
        requestAnimationFrame(() => {
          storyLeadersScroller?.scrollTo({ left: 0, top: 0, behavior: "auto" });
        });

        gsap.set(storyLeadersCopyItems, { autoAlpha: 0, y: 24 });
        gsap.set(storyLeaderCards, { autoAlpha: 0, y: 54, scale: 0.96 });

        gsap.to(storyLeadersCopyItems, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.14,
          duration: 0.74,
          ease: "power2.out",
          scrollTrigger: {
            trigger: storyLeadersSection,
            start: "top 72%",
            once: true,
          },
        });

        gsap.to(storyLeaderCards, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          stagger: 0.07,
          duration: 0.86,
          ease: "power2.out",
          scrollTrigger: {
            trigger: storyLeadersSection,
            start: "top 58%",
            once: true,
          },
        });

        if (storyLeadersScroller && storyLeadersGrid) {
          const getStoryLeadersTravel = () =>
            Math.max(
              0,
              storyLeadersScroller.scrollWidth -
              storyLeadersScroller.clientWidth,
            );
          const getStoryLeadersStart = () => {
            if (window.matchMedia("(min-width: 821px)").matches) {
              return "top top";
            }

            const carouselBottom =
              storyLeadersScroller.offsetTop +
              storyLeadersScroller.offsetHeight;
            const revealGap = window.matchMedia("(max-width: 380px)").matches
              ? Math.max(80, window.innerHeight * 0.14)
              : Math.max(44, window.innerHeight * 0.08);
            const triggerTop = window.innerHeight - carouselBottom - revealGap;

            return `top ${Math.round(triggerTop)}px`;
          };
          const refreshStoryLeadersScroll = () => ScrollTrigger.refresh();

          storyLeadersScroller.querySelectorAll("img").forEach((image) => {
            if (image.complete) {
              return;
            }

            image.addEventListener("load", refreshStoryLeadersScroll, {
              once: true,
            });
            image.addEventListener("error", refreshStoryLeadersScroll, {
              once: true,
            });
            cleanupCallbacks.push(() => {
              image.removeEventListener("load", refreshStoryLeadersScroll);
              image.removeEventListener("error", refreshStoryLeadersScroll);
            });
          });

          gsap.set(storyLeadersGrid, {
            x: 0,
            willChange: "transform",
          });

          gsap.to(storyLeadersGrid, {
            x: () => -getStoryLeadersTravel(),
            ease: "none",
            scrollTrigger: {
              trigger: storyLeadersSection,
              start: getStoryLeadersStart,
              end: () =>
                `+=${Math.max(getStoryLeadersTravel(), window.innerHeight * 0.8)}`,
              scrub: 1.2,
              pin: true,
              pinSpacing: true,
              anticipatePin: 0.35,
              invalidateOnRefresh: true,
            },
          });
        }
      }
    });

    ScrollTrigger.refresh();

    return () => {
      cleanupCallbacks.forEach((cleanup) => cleanup());
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
      visionMedia?.revert();
      context.revert();
    };
  }, []);

  const handleReadFullStoryClick = () => {
    const impactSection = document.getElementById("story-impact");

    if (!impactSection) {
      return;
    }

    const sectionOffset = window.innerWidth <= 820 ? 18 : 32;
    const top =
      impactSection.getBoundingClientRect().top +
      window.scrollY +
      sectionOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const handleLeaderCardClick = (storyPath) => {
    if (!storyPath) {
      return;
    }

    const pathname = location.pathname.replace(/\/+$/, "") || "/";

    if (pathname === storyPath) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    navigate(storyPath);
  };

  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <main className="story-detail-page">
      <section
        className="story-detail-hero"
        style={{
          "--story-hero-bg-desktop": `url(${storyHeroBackImg})`,
          "--story-hero-bg-mobile": `url(${storyHeroMobileBackImg})`,
        }}
        aria-labelledby="story-detail-title"
      >
        <header
          className="hero-site-header story-detail-site-header"
          aria-label="Microsite header"
        >
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
        <div className="story-detail-hero-content">
          <div className="back-button" onClick={handleBackButtonClick}>
            <button type="button" className="back-button-link">
              <img src={backButtonIcon} alt="Back to stories" />
            </button>
          </div>
          <h1 id="story-detail-title" className="story-detail-title">
            <span className="story-detail-title-desktop">
              <span>How Somalia&apos;s Youth Are</span>
              <span>Reimagining National Unity</span>
              <span>Through Climate Action</span>
            </span>
            <span className="story-detail-title-mobile">
              <span>How Somalia&apos;s Youth</span>
              <span>Are Reimagining</span>
              <span>National Unity Through</span>
              <span>Climate Action</span>
            </span>
            <span className="story-detail-divider" aria-hidden="true" />
          </h1>

          <div className="story-detail-byline">
            <p className="story-detail-author">Raghda Hassan</p>
            <p className="story-detail-meta">
              <span>Palestine</span>
              <span>Climate Resilience</span>
            </p>
          </div>

          <button
            className="story-detail-button"
            type="button"
            aria-controls="story-impact"
            onClick={handleReadFullStoryClick}
          >
            <span>Read Full Story</span>
            <span className="story-detail-button-icon" aria-hidden="true" />
          </button>
        </div>
      </section>

      <section
        id="story-impact"
        className="story-impact-section"
        aria-labelledby="story-impact-title"
      >
        <div className="story-impact-inner">
          <div className="story-impact-copy">
            <h2 id="story-impact-title" className="story-impact-eyebrow">
              Impact by the Numbers
            </h2>
            <p className="story-impact-lead">
              Communities have been increasingly affected by climate-related
              challenges, while integrated efforts led by United Nations
              Development Programme and its partners are improving water access,
              restoring ecosystems, strengthening livelihoods, and empowering
              youth to lead climate action and resilience initiatives.
            </p>
          </div>

          <img
            className="story-impact-image"
            src={impactCircleImg}
            alt="Community members gathering around water access support"
            loading="lazy"
            decoding="async"
          />

          <div className="story-impact-stats" aria-label="Impact statistics">
            {impactStats.map((stat) => (
              <article
                className="story-impact-stat"
                key={`${stat.value}-${stat.label}`}
              >
                <h2>
                  <strong>{stat.value}</strong> {stat.label}
                </h2>
                <p>{stat.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="story-narrative-section"
        style={{
          "--story-narrative-bg-desktop": `url(${storyNarrativeBackImg})`,
          "--story-narrative-bg-mobile": `url(${storyNarrativeMobileBackImg})`,
        }}
        aria-label="Somalia climate resilience story introduction"
      >
        <div className="story-narrative-copy">
          <p>
            In the spring of 2023, the Shabelle River in central Somalia burst
            its banks, inundating entire neighborhoods of Beledweyne, the
            capital of the Hiraan region. Thousands of families were displaced,
            as floodwaters surged through homes and farmland.
          </p>

          <p>
            For many residents, this flood is not an isolated disaster. It is
            part of a relentless pattern that has repeatedly submerged their
            streets, ruined their crops, and stranded their families. Beledweyne
            has been through too many cycles of prolonged droughts, flash floods
            and tensions over dwindling resources. Efforts to rebuild and to
            reconcile are being suffocated, keeping the city shackled to the
            frontlines of Somalia&apos;s ongoing political resilience.
          </p>

          <p>
            Somalia stands at a perilous confluence of political fragmentation,
            armed conflict, economic precarity, and escalating climate
            disasters. 26-year-old Abdirahman Yusuf stands at the intersection
            of the country&apos;s greatest poly-crisis challenges, and its
            greatest hope in its youth.
          </p>

          <span className="story-narrative-divider" aria-hidden="true" />
        </div>
      </section>

      <section
        id="story-section-two"
        className="story-section-two"
        style={{
          "--story-section-two-bg": `url(${storySectionTwoBackImg})`,
        }}
        aria-labelledby="story-section-two-title"
      >
        <img
          className="story-section-two-curve story-section-two-curve-desktop"
          src={storySectionTwoCurveImg}
          alt=""
          aria-hidden="true"
          decoding="async"
        />
        <img
          className="story-section-two-curve story-section-two-curve-mobile"
          src={storySectionTwoMobileCurveImg}
          alt=""
          aria-hidden="true"
          decoding="async"
        />

        <div className="story-section-two-inner">
          <blockquote className="story-section-two-opening">
            <img
              className="story-section-two-bracket story-section-two-bracket-opening"
              src={storySectionTwoBracketIcon}
              alt=""
              aria-hidden="true"
              decoding="async"
            />
            <p id="story-section-two-title" aria-label={sectionTwoOpeningCopy}>
              {renderSectionTwoOpeningLines()}
            </p>
          </blockquote>

          <div className="story-section-two-intro">
            <p>
              He was only eighteen when, in 2017, he and six friends established
              Maan-Dhis, a youth-led organization that aimed to unite young
              people from across Somalia, to drive solutions in their
              communities.
            </p>

            <p>
              In its early years, Maan-Dhis focused on peacebuilding, organizing
              community-based dialogues to reduce conflicts. By 2020, the
              organization reformed its strategy around four main pillars:
              peacebuilding and conflict solutions, environmental sustainability
              and climate action, socioeconomic development and livelihood, and
              good governance and women&apos;s empowerment.
            </p>
          </div>

          <img
            className="story-section-two-portrait"
            src={storySectionTwoCircleImg}
            alt="Young people gathered in a community dialogue"
            loading="lazy"
            decoding="async"
          />

          <blockquote className="story-section-two-quote">
            <img
              className="story-section-two-bracket story-section-two-bracket-quote"
              src={storySectionTwoBracketIcon}
              alt=""
              aria-hidden="true"
              decoding="async"
            />
            <p>
              "In Somalia, our children, our young people and women, they have
              the potential to address challenges facing our communities, but
              the opportunities and experiences they have are limited. That is
              why our organization Maan-Dhis is committed to engaging youth and
              grassroots communities to build their capacity and engage them in
              dialogue over innovative solutions."
            </p>
          </blockquote>
        </div>

        <div className="story-section-two-bottom-panel">
          <div className="story-section-two-bottom">
            <p>
              Today, Maan-Dhis has around 3,000 youth members across Somalia and
              works closely with government, local communities, and
              international partners like UNDP.
            </p>

            <p>
              Its initiatives include climate action advocacy, clean-up
              campaigns, climate education, solar street-lighting projects, and
              livelihood programs that have trained more than 1,500 young
              people, including women, displaced persons, and persons with
              disabilities.
            </p>

            <p>
              Abdirahman serves as an Africa Climate Champion under UNDP
              sponsorship, leading research and dialogue on community-based
              climate innovation. He has represented Somalia in COPs assemblies
              since the COP27 in Cairo.
            </p>

            <span className="story-section-two-divider" aria-hidden="true" />
          </div>

          <img
            className="story-section-two-group"
            src={storySectionTwoGroupPeopleImg}
            alt="Young people in community activities"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section
        id="story-section-three"
        className="story-section-three"
        style={{
          "--story-section-three-bg-desktop": `url(${storySectionThreeBackImg})`,
          "--story-section-three-bg-mobile": `url(${storySectionThreeMobileBackImg})`,
        }}
        aria-label="Climate resilience quote"
      >
        <blockquote className="story-section-three-quote">
          <span
            className="story-section-three-bracket story-section-three-bracket-open"
            aria-hidden="true"
          />
          <p>
            <span className="story-section-three-quote-line story-section-three-quote-line-desktop">
              &quot;I can&apos;t see climate action, peacebuilding, and
              resilience as three separate issues that plague
            </span>{" "}
            <span className="story-section-three-quote-line story-section-three-quote-line-desktop">
              Somalia simultaneously. Environmental crises such as floods and
              droughts often trigger
            </span>{" "}
            <span className="story-section-three-quote-line story-section-three-quote-line-desktop">
              conflicts over scarce resources. Building peace enables
              communities to focus on climate
            </span>{" "}
            <span className="story-section-three-quote-line story-section-three-quote-line-desktop">
              adaptation. In the meantime, strengthening climate resilience
              reduces the risk of new
            </span>{" "}
            <span className="story-section-three-quote-line story-section-three-quote-line-desktop">
              conflicts, and grants us the space to rebuild our nation.&quot;
            </span>
            <span className="story-section-three-quote-line story-section-three-quote-line-mobile">
              &quot;I can&apos;t see climate action,
            </span>
            <span className="story-section-three-quote-line story-section-three-quote-line-mobile">
              peacebuilding, and resilience as
            </span>
            <span className="story-section-three-quote-line story-section-three-quote-line-mobile">
              three separate issues that plague
            </span>
            <span className="story-section-three-quote-line story-section-three-quote-line-mobile">
              Somalia simultaneously.
            </span>
            <span className="story-section-three-quote-line story-section-three-quote-line-mobile">
              Environmental crises such as floods
            </span>
            <span className="story-section-three-quote-line story-section-three-quote-line-mobile">
              and droughts often trigger conflicts
            </span>
            <span className="story-section-three-quote-line story-section-three-quote-line-mobile">
              over scarce resources. Building
            </span>
            <span className="story-section-three-quote-line story-section-three-quote-line-mobile">
              peace enables communities to focus
            </span>
            <span className="story-section-three-quote-line story-section-three-quote-line-mobile">
              on climate adaptation. In the
            </span>
            <span className="story-section-three-quote-line story-section-three-quote-line-mobile">
              meantime, strengthening climate
            </span>
            <span className="story-section-three-quote-line story-section-three-quote-line-mobile">
              resilience reduces the risk of new
            </span>
            <span className="story-section-three-quote-line story-section-three-quote-line-mobile">
              conflicts, and grants us the space to
            </span>
            <span className="story-section-three-quote-line story-section-three-quote-line-mobile">
              rebuild our nation.&quot;
            </span>
          </p>
          <span
            className="story-section-three-bracket story-section-three-bracket-close"
            aria-hidden="true"
          />
        </blockquote>
      </section>

      <section
        id="story-section-three-details"
        className="story-section-three-details"
        style={{
          "--story-section-three-details-bg-desktop": `url(${storySectionThreeDetailsBackImg})`,
          "--story-section-three-details-bg-mobile": `url(${storySectionThreeDetailsMobileBackImg})`,
        }}
        aria-label="Maan-Dhis youth entrepreneurship work"
      >
        <div className="story-section-three-details-copy">
          <span
            className="story-section-three-details-divider"
            aria-hidden="true"
          />

          <p>
            In Baladweyne, Maan-Dhis works with local communities, the
            government, and donors to develop flood-control systems and
            climate-smart agriculture solutions.
          </p>

          <p>
            Youth in Somalia generally face social and cultural barriers,
            including limited roles in decision-making and leadership,
            particularly for young women. Breaking through such barriers,
            Abdirahman focuses on youth empowerment and knowledge transfer.
          </p>

          <p>
            The Somalia Entrepreneurship Summit, which he organizes annually
            with Maan-Dhis, brings together government representatives, private
            sector leaders, refugees, academics, and youth innovators to promote
            local entrepreneurship.
          </p>

          <p>
            &quot;Maan-Dhis is unique in Somalia for being entirely youth-led
            and for bridging local and national leadership with international
            partners. As a result of youth advocacy, in 2023, the government
            registered around 3,000 small enterprises.&quot;
          </p>

          <p>
            By 2025, 92 more youth-led enterprises were added to the registry,
            promising growth in entrepreneurship and innovation among the
            country&apos;s youth. Despite cultural and financial barriers, he
            described how Somali youth are breaking social taboos, building
            small enterprises, and gaining recognition from government and
            global partners alike.
          </p>
        </div>
      </section>

      <section
        id="story-vision"
        className="story-vision-section"
        aria-labelledby="story-vision-title"
      >
        <div className="story-vision-stage">
          <div className="story-vision-content">
            <h2 id="story-vision-title" className="story-vision-eyebrow">
              The Vision
            </h2>

            <p className="story-vision-copy" aria-label={visionCopy}>
              <span
                className="story-vision-lines story-vision-lines-desktop"
                aria-hidden="true"
              >
                {renderVisionLines(visionDesktopLines)}
              </span>
              <span
                className="story-vision-lines story-vision-lines-mobile"
                aria-hidden="true"
              >
                {renderVisionLines(visionMobileLines)}
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="story-video-section" aria-label="Story video">
        <video
          className="story-video-player"
          src={storyVideoSrc}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
        />
      </section>

      <section
        id="story-leaders"
        className="story-leaders-section"
        style={{
          "--story-leaders-bg-desktop": `url(${storyLeadersBackImg})`,
          "--story-leaders-bg-mobile": `url(${storyLeadersMobileBackImg})`,
        }}
        aria-label="Explore more stories"
      >
        <div className="story-leaders-section-inner">
          <div className="story-leaders-copy">
            <h2>Explore more stories</h2>
          </div>

          <div
            className="story-leaders-grid-wrap"
            role="region"
            aria-label="Young leader profile cards"
          >
            <div className="story-leaders-grid">
              {storyLeaderImages.map((image, index) => {
                const leaderCardClass = `story-leader-card${image.storyPath ? " story-leader-card-link" : ""
                  }`;
                const leaderCardImage = (
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                  />
                );

                if (image.storyPath) {
                  return (
                    <button
                      className={leaderCardClass}
                      type="button"
                      key={image.src}
                      aria-label={image.ariaLabel}
                      onClick={() => handleLeaderCardClick(image.storyPath)}
                    >
                      {leaderCardImage}
                    </button>
                  );
                }

                return (
                  <article className={leaderCardClass} key={image.src}>
                    {leaderCardImage}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RaghdaStoryPage;
