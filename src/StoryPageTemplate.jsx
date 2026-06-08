import { useEffect, useMemo } from "react";
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
import { leaderProfileImages, storyLeaderProfiles } from "./leaderProfiles.js";
import { getStoryAssets } from "./storyAssets.js";
import "./StoryPage.css";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const MICROSITE_HOME_PATH = "/";
const ARAB_STATES_SITE_URL = "https://www.undp.org/arab-states";

const storyVideoSrc = "/videos/regional-stability.mp4";

const defaultStoryMedia = {
  heroDesktop: storyHeroBackImg,
  heroMobile: storyHeroMobileBackImg,
  narrativeDesktop: storyNarrativeBackImg,
  narrativeMobile: storyNarrativeMobileBackImg,
  impactCircle: impactCircleImg,
  sectionTwoBack: storySectionTwoBackImg,
  sectionTwoPortrait: storySectionTwoCircleImg,
  sectionTwoGroup: storySectionTwoGroupPeopleImg,
  sectionThreeDesktop: storySectionThreeBackImg,
  sectionThreeMobile: storySectionThreeMobileBackImg,
  sectionThreeDetailsDesktop: storySectionThreeDetailsBackImg,
  sectionThreeDetailsMobile: storySectionThreeDetailsMobileBackImg,
  video: storyVideoSrc,
};

const cssBackgroundUrl = (src) => `url(${src})`;

const normalizeWord = (word) =>
  (word || "")
    .toLowerCase()
    .replace(/[\u2018\u2019\u201C\u201D'`]/g, "")
    .replace(/[^\p{L}\p{N}%-]+/gu, "")
    .trim();

// Split a token like `change."` into the leading punctuation, the
// alphanumeric "core" the highlight should apply to, and the trailing
// punctuation. We keep the outer wrapper unstyled and only colour/bold the
// core so the trailing period or closing quote stays neutral.
const splitWordPunctuation = (word) => {
  const text = word || "";
  const match = text.match(
    /^([^\p{L}\p{N}%]*)([\p{L}\p{N}%][\p{L}\p{N}%\u2018\u2019'’-]*)([^\p{L}\p{N}%]*)$/u,
  );
  if (!match) return { prefix: "", core: text, suffix: "" };
  return {
    prefix: match[1] || "",
    core: match[2] || "",
    suffix: match[3] || "",
  };
};

// Returns true when the (normalized) sentence word should be counted as part
// of the highlighted phrase token. Rules:
//   - Exact match always wins.
//   - For tokens that are 4+ characters, allow prefix-style matches so the
//     client's stem (e.g. "Conflict") matches inflected forms in the sentence
//     (e.g. "conflicts"). The sentence word must START WITH the phrase token,
//     never the other way around — that earlier laxity caused tiny words like
//     "in", "on", "a" to falsely match longer tokens such as "innovation".
//   - For shorter tokens (1–3 chars), require exact equality so common stop
//     words don't accidentally light up.
const phraseTokenMatchesWord = (sentenceWord, phraseToken) => {
  if (!sentenceWord || !phraseToken) return false;
  if (sentenceWord === phraseToken) return true;
  if (phraseToken.length < 4) return false;
  return sentenceWord.startsWith(phraseToken);
};

const balanceWordsIntoLines = (words, lineCount) => {
  if (!words.length || lineCount <= 0) return [];
  const lines = [];
  const total = words.length;
  let cursor = 0;
  for (let i = 0; i < lineCount; i++) {
    const remainingLines = lineCount - i;
    const remainingWords = total - cursor;
    const take = Math.max(1, Math.ceil(remainingWords / remainingLines));
    lines.push(words.slice(cursor, cursor + take));
    cursor += take;
    if (cursor >= total) break;
  }
  return lines.filter((l) => l.length > 0);
};

const splitTextToLines = (text, lineCount) => {
  const words = (text || "").split(/\s+/).filter(Boolean);
  return balanceWordsIntoLines(words, lineCount).map((line) => line.join(" "));
};

const buildWordObjects = (words, highlightedPhrases) => {
  if (!words.length) return [];
  const normalized = words.map(normalizeWord);
  const strongMask = new Array(words.length).fill(false);
  const phrases = (highlightedPhrases || []).filter(Boolean);
  for (const phrase of phrases) {
    const phraseTokens = phrase.split(/\s+/).map(normalizeWord).filter(Boolean);
    if (!phraseTokens.length) continue;
    for (let i = 0; i <= normalized.length - phraseTokens.length; i++) {
      let match = true;
      for (let j = 0; j < phraseTokens.length; j++) {
        if (!phraseTokenMatchesWord(normalized[i + j], phraseTokens[j])) {
          match = false;
          break;
        }
      }
      if (match) {
        for (let j = 0; j < phraseTokens.length; j++) {
          strongMask[i + j] = true;
        }
      }
    }
  }
  return words.map((text, idx) =>
    strongMask[idx] ? { text, strong: true } : { text },
  );
};

const buildVisionLines = (text, highlightedPhrases, lineCount) => {
  const words = (text || "").split(/\s+/).filter(Boolean);
  const wordObjects = buildWordObjects(words, highlightedPhrases);
  return balanceWordsIntoLines(wordObjects, lineCount);
};

const renderVisionLines = (lines) =>
  lines.map((line, lineIndex) => (
    <span className="story-vision-line" key={`vision-line-${lineIndex}`}>
      {line.map((word, wordIndex) => {
        const { prefix, core, suffix } = splitWordPunctuation(word.text);
        return (
          <span className="story-vision-word" key={`${word.text}-${wordIndex}`}>
            {prefix}
            {core ? (
              <span
                className={word.strong ? "story-vision-word-strong" : undefined}
              >
                {core}
              </span>
            ) : null}
            {suffix}
          </span>
        );
      })}
    </span>
  ));

// Returns the opening quote as a single line of word objects (no artificial
// line breaks). Each word carries its own `accent` flag from phrase position.
const buildOpeningQuoteLines = (text, highlightedPhrases) => {
  const words = (text || "").split(/\s+/).filter(Boolean);
  const wordObjects = buildWordObjects(words, highlightedPhrases).map((w) => ({
    text: w.text,
    accent: Boolean(w.strong),
  }));
  return [wordObjects];
};

const renderOpeningLines = (lines) =>
  lines.map((line, lineIndex) => (
    <span
      className="story-section-two-opening-line"
      aria-hidden="true"
      key={`section-two-opening-line-${lineIndex}`}
    >
      {line.map((word, wordIndex) => {
        const { prefix, core, suffix } = splitWordPunctuation(word.text);
        return (
          <span
            className="story-section-two-opening-word"
            key={`${word.text}-${wordIndex}`}
          >
            {prefix}
            {core ? (
              <span
                className={
                  word.accent
                    ? "story-section-two-opening-word-accent"
                    : undefined
                }
              >
                {core}
              </span>
            ) : null}
            {suffix}
          </span>
        );
      })}
    </span>
  ));

function StoryPageTemplate({ story }) {
  const location = useLocation();
  const navigate = useNavigate();

  const media = useMemo(() => {
    const a = getStoryAssets(story.slug);
    const pick = (key, fallbackKey) => a[key] ?? defaultStoryMedia[fallbackKey];
    return {
      heroDesktop: pick("heroDesktop", "heroDesktop"),
      heroMobile: pick("heroMobile", "heroMobile"),
      narrativeDesktop: pick("introDesktop", "narrativeDesktop"),
      narrativeMobile: pick("introMobile", "narrativeMobile"),
      // impactCircle: pick('statsImage', 'impactCircle'),
      impactCircle: pick("statsImage", null),
      sectionTwoBack: pick("darkBackground", "sectionTwoBack"),
      // sectionTwoPortrait: pick("portraitImage", "sectionTwoPortrait"),
      sectionTwoPortrait: pick("portraitImage", null),
      // sectionTwoGroup: pick("groupImage", "sectionTwoGroup"),
      sectionTwoGroup: pick("groupImage", null),
      sectionThreeDesktop: pick("quoteDesktop", "sectionThreeDesktop"),
      sectionThreeMobile: pick("quoteMobile", "sectionThreeMobile"),
      sectionThreeDetailsDesktop: pick(
        "continuationDesktop",
        "sectionThreeDetailsDesktop",
      ),
      sectionThreeDetailsMobile: pick(
        "continuationMobile",
        "sectionThreeDetailsMobile",
      ),
      video: pick("video", "video"),
    };
  }, [story.slug]);

  const openingLines = useMemo(
    () =>
      buildOpeningQuoteLines(
        story.openingQuote?.text || "",
        story.openingQuote?.highlightedPhrases || [],
      ),
    [story.openingQuote],
  );

  const sectionThreeQuoteDesktopLines = useMemo(
    () => splitTextToLines(story.sectionThreeQuote || "", 7),
    [story.sectionThreeQuote],
  );
  const sectionThreeQuoteMobileLines = useMemo(
    () => splitTextToLines(story.sectionThreeQuote || "", 13),
    [story.sectionThreeQuote],
  );

  const sectionFourQuoteDesktopLines = useMemo(
    () => splitTextToLines(story.sectionFourQuote || "", 4),
    [story.sectionFourQuote],
  );
  const sectionFourQuoteMobileLines = useMemo(
    () => splitTextToLines(story.sectionFourQuote || "", 10),
    [story.sectionFourQuote],
  );

  // The gold "vision" bands use `white-space: nowrap`, so each line must
  // be short enough to fit the viewport. The reference page (Raghda
  // Each vision line uses `white-space: nowrap` with a gold background, so
  // every line must fit the viewport width. ~9 words per desktop line and
  // ~6 per mobile line keeps long visions (Gabby, Ahmad, Sada'a) from
  // spilling off-screen.
  const visionDesktopLineCount = useMemo(() => {
    const words = (story.vision?.text || "")
      .split(/\s+/)
      .filter(Boolean).length;
    return Math.max(3, Math.ceil(words / 12));
  }, [story.vision]);
  const visionMobileLineCount = useMemo(() => {
    const words = (story.vision?.text || "")
      .split(/\s+/)
      .filter(Boolean).length;
    return Math.max(5, Math.ceil(words / 7));
  }, [story.vision]);

  const visionDesktopLines = useMemo(
    () =>
      buildVisionLines(
        story.vision?.text || "",
        story.vision?.highlightedPhrases || [],
        visionDesktopLineCount,
      ),
    [story.vision, visionDesktopLineCount],
  );
  const visionMobileLines = useMemo(
    () =>
      buildVisionLines(
        story.vision?.text || "",
        story.vision?.highlightedPhrases || [],
        visionMobileLineCount,
      ),
    [story.vision, visionMobileLineCount],
  );

  const introBlocks = story.sectionTwoBlocks?.length
    ? story.sectionTwoBlocks
    : [];
  const firstPullQuoteIdx = introBlocks.findIndex(
    (b) => b.type === "pull-quote",
  );
  const introBeforePullQuote =
    firstPullQuoteIdx >= 0
      ? introBlocks.slice(0, firstPullQuoteIdx)
      : introBlocks;
  const sectionTwoPullQuote =
    firstPullQuoteIdx >= 0 ? introBlocks[firstPullQuoteIdx] : null;
  const sectionTwoBottomBlocks =
    firstPullQuoteIdx >= 0 ? introBlocks.slice(firstPullQuoteIdx + 1) : [];

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
      media.heroDesktop,
      media.heroMobile,
      media.narrativeDesktop,
      media.narrativeMobile,
      media.impactCircle,
      media.sectionTwoBack,
      media.sectionTwoPortrait,
      media.sectionTwoGroup,
      media.sectionThreeDesktop,
      media.sectionThreeMobile,
      media.sectionThreeDetailsDesktop,
      media.sectionThreeDetailsMobile,
      storySectionTwoMobileCurveImg,
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
      const sectionThreeNodes = document.querySelectorAll(
        ".story-section-three",
      );
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

      // Apply the same line-by-line reveal to every full-width quote section
      // on the page so additional quote blocks (e.g. `sectionFourQuote`)
      // animate identically to the first one.
      sectionThreeNodes.forEach((sectionThree) => {
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
      });

      if (visionSection) {
        const visionStage = visionSection.querySelector(".story-vision-stage");
        const setupVisionReveal = (lineSelector, scrollDistance) => {
          const visionLines = gsap.utils.toArray(
            visionSection.querySelectorAll(
              `${lineSelector} .story-vision-line`,
            ),
          );

          const collapsedLine = {
            autoAlpha: 0,
            maxHeight: 0,
            minHeight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            marginTop: 0,
            marginBottom: 0,
            overflow: "hidden",
          };

          const expandedLine = {
            autoAlpha: 1,
            maxHeight: 80,
            minHeight: 38,
            paddingBottom: 1,
            paddingLeft: 10,
            paddingRight: 10,
            overflow: "visible",
          };

          gsap.set(
            visionSection.querySelectorAll(
              `${lineSelector} .story-vision-line`,
            ),
            collapsedLine,
          );
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
                ...expandedLine,
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

        // Scale the pinned scroll distance with the vision's word count so
        // long visions (e.g. Ahmad Assaf's 62 words, Sada'a's 67) still have
        // enough scroll runway for every word to reveal before the section
        // unpins. Shorter visions keep the original `3200/2400` minimum.
        //
        // Timeline duration ≈ revealStart (0.08) + wordCount * 0.115 + end
        // padding (0.34). With the GSAP timeline mapped linearly onto the
        // pin's scroll range, we need ≥ ~610px of scroll per timeline second
        // on desktop (≥ ~450px on mobile) so the final line has time to
        // animate from `autoAlpha: 0` to fully visible BEFORE the pin
        // releases and the section scrolls away. Multiplying by those
        // factors gives us comfortable runway even for the longest visions.
        const visionWordCount = (story.vision?.text || "")
          .split(/\s+/)
          .filter(Boolean).length;
        const visionTimelineSeconds = 0.08 + visionWordCount * 0.115 + 0.34;
        const desktopScrollDistance = Math.max(
          3200,
          Math.round(visionTimelineSeconds * 610),
        );
        const mobileScrollDistance = Math.max(
          2400,
          Math.round(visionTimelineSeconds * 450),
        );

        visionMedia = gsap.matchMedia();
        visionMedia.add("(max-width: 900px)", () =>
          setupVisionReveal(".story-vision-lines-mobile", mobileScrollDistance),
        );
        visionMedia.add("(min-width: 901px)", () =>
          setupVisionReveal(
            ".story-vision-lines-desktop",
            desktopScrollDistance,
          ),
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
  }, [story]);

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

  return (
    <main className="story-detail-page" data-story-slug={story.slug}>
      <section
        className="story-detail-hero"
        data-story-slug={story.slug}
        style={{
          "--story-hero-bg-desktop": cssBackgroundUrl(media.heroDesktop),
          "--story-hero-bg-mobile": cssBackgroundUrl(media.heroMobile),
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
              aria-label="Go to the Youth responding to crisis homepage"
            >
              Youth responding to crisis
            </a>
          </div>
        </header>

        <h1 id="story-detail-title" className="story-detail-title">
          <span className="story-detail-title-desktop">{story.title}</span>
          <span className="story-detail-title-mobile">{story.title}</span>
        </h1>

        <span className="story-detail-divider" aria-hidden="true" />

        <div className="story-detail-byline">
          <p className="story-detail-author">{story.subjectName}</p>
          <p className="story-detail-meta">
            <span>{story.country}</span>
            <span>{story.topic}</span>
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
            <p className="story-impact-lead">{story.impact?.intro}</p>
          </div>

          {media.impactCircle ? (
            <img
              className="story-impact-image"
              src={media.impactCircle}
              alt="Community members gathering around impact support"
              loading="lazy"
              decoding="async"
            />
          ) : null}

          <div className="story-impact-stats" aria-label="Impact statistics">
            {(story.impact?.stats || []).map((stat, idx) => (
              <article
                className="story-impact-stat"
                key={`${stat.value}-${stat.label}-${idx}`}
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

      {story.introParagraphs?.length ? (
        <section
          className="story-narrative-section"
          style={{
            "--story-narrative-bg-desktop": cssBackgroundUrl(
              media.narrativeDesktop,
            ),
            "--story-narrative-bg-mobile": cssBackgroundUrl(
              media.narrativeMobile,
            ),
          }}
          aria-label={`${story.subjectName} story introduction`}
        >
          <div className="story-narrative-copy">
            {story.introParagraphs.map((paragraph, idx) => (
              <p key={`intro-${idx}`}>{paragraph}</p>
            ))}
            <span className="story-narrative-divider" aria-hidden="true" />
          </div>
        </section>
      ) : null}

      <section
        id="story-section-two"
        className="story-section-two"
        style={{
          "--story-section-two-bg": cssBackgroundUrl(media.sectionTwoBack),
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
          {story.openingQuote?.text ? (
            <blockquote className="story-section-two-opening">
              <img
                className="story-section-two-bracket story-section-two-bracket-opening"
                src={storySectionTwoBracketIcon}
                alt=""
                aria-hidden="true"
                decoding="async"
              />
              <p
                id="story-section-two-title"
                aria-label={story.openingQuote.text}
              >
                {renderOpeningLines(openingLines)}
              </p>
            </blockquote>
          ) : null}

          {introBeforePullQuote.length ? (
            <div className="story-section-two-intro">
              {introBeforePullQuote.map((block, idx) => (
                <p key={`intro-block-${idx}`}>{block.text}</p>
              ))}
            </div>
          ) : null}

          {media.sectionTwoPortrait ? (
            <img
              className="story-section-two-portrait"
              src={media.sectionTwoPortrait}
              alt={`${story.subjectName} portrait moment`}
              loading="lazy"
              decoding="async"
            />
          ) : null}

          {sectionTwoPullQuote ? (
            <blockquote className="story-section-two-quote">
              <img
                className="story-section-two-bracket story-section-two-bracket-quote"
                src={storySectionTwoBracketIcon}
                alt=""
                aria-hidden="true"
                decoding="async"
              />
              <p>{sectionTwoPullQuote.text}</p>
            </blockquote>
          ) : null}
        </div>

        {sectionTwoBottomBlocks.length ? (
          <div className="story-section-two-bottom-panel">
            <div className="story-section-two-bottom">
              {sectionTwoBottomBlocks.map((block, idx) => (
                <p key={`bottom-${idx}`}>{block.text}</p>
              ))}
              <span className="story-section-two-divider" aria-hidden="true" />
            </div>

            {media.sectionTwoGroup ? (
              <img
                className="story-section-two-group"
                src={media.sectionTwoGroup}
                alt="Young people in community activities"
                loading="lazy"
                decoding="async"
              />
            ) : null}
          </div>
        ) : null}
      </section>

      {story.sectionThreeQuote ? (
        <section
          id="story-section-three"
          className="story-section-three"
          style={{
            "--story-section-three-bg-desktop": cssBackgroundUrl(
              media.sectionThreeDesktop,
            ),
            "--story-section-three-bg-mobile": cssBackgroundUrl(
              media.sectionThreeMobile,
            ),
          }}
          aria-label="Story quote"
        >
          <blockquote className="story-section-three-quote">
            <span
              className="story-section-three-bracket story-section-three-bracket-open"
              aria-hidden="true"
            />
            <p className="story-section-three-quote-text">
              {story.sectionThreeQuote}
              {/* {sectionThreeQuoteDesktopLines.map((line, idx) => (
                <span
                  key={`s3-desktop-${idx}`}
                  className="story-section-three-quote-line story-section-three-quote-line-desktop"
                >
                  {line}
                  {idx < sectionThreeQuoteDesktopLines.length - 1 ? ' ' : null}
                </span>
              ))}
              {sectionThreeQuoteMobileLines.map((line, idx) => (
                <span
                  key={`s3-mobile-${idx}`}
                  className="story-section-three-quote-line story-section-three-quote-line-mobile"
                >
                  {line}
                </span>
              ))} */}
            </p>
            <span
              className="story-section-three-bracket story-section-three-bracket-close"
              aria-hidden="true"
            />
          </blockquote>
        </section>
      ) : null}

      {story.sectionThreeDetailsBlocks?.length ? (
        <section
          id="story-section-three-details"
          className="story-section-three-details"
          style={{
            "--story-section-three-details-bg-desktop": cssBackgroundUrl(
              media.sectionThreeDetailsDesktop,
            ),
            "--story-section-three-details-bg-mobile": cssBackgroundUrl(
              media.sectionThreeDetailsMobile,
            ),
          }}
          aria-label={`${story.subjectName} story continuation`}
        >
          <div className="story-section-three-details-copy">
            <span
              className="story-section-three-details-divider"
              aria-hidden="true"
            />
            {story.sectionThreeDetailsBlocks.map((block, idx) => (
              <p key={`details-${idx}`}>{block.text}</p>
            ))}
          </div>
        </section>
      ) : null}

      {story.sectionFourQuote ? (
        <section
          id="story-section-four"
          className="story-section-three story-section-four"
          style={{
            "--story-section-three-bg-desktop": cssBackgroundUrl(
              media.sectionThreeDesktop,
            ),
            "--story-section-three-bg-mobile": cssBackgroundUrl(
              media.sectionThreeMobile,
            ),
          }}
          aria-label="Story quote"
        >
          <blockquote className="story-section-three-quote">
            <span
              className="story-section-three-bracket story-section-three-bracket-open"
              aria-hidden="true"
            />
            <p className="story-section-three-quote-text">
              {story.sectionFourQuote}
              {/* {sectionFourQuoteDesktopLines.map((line, idx) => (
                <span
                  key={`s4-desktop-${idx}`}
                  className="story-section-three-quote-line story-section-three-quote-line-desktop"
                >
                  {line}
                  {idx < sectionFourQuoteDesktopLines.length - 1 ? ' ' : null}
                </span>
              ))}
              {sectionFourQuoteMobileLines.map((line, idx) => (
                <span
                  key={`s4-mobile-${idx}`}
                  className="story-section-three-quote-line story-section-three-quote-line-mobile"
                >
                  {line}
                </span>
              ))} */}
            </p>
            <span
              className="story-section-three-bracket story-section-three-bracket-close"
              aria-hidden="true"
            />
          </blockquote>
        </section>
      ) : null}

      {story.sectionFourDetailsBlocks?.length ? (
        <section
          id="story-section-four-details"
          className="story-section-three-details story-section-four-details"
          style={{
            "--story-section-three-details-bg-desktop": cssBackgroundUrl(
              media.sectionThreeDetailsDesktop,
            ),
            "--story-section-three-details-bg-mobile": cssBackgroundUrl(
              media.sectionThreeDetailsMobile,
            ),
          }}
          aria-label={`${story.subjectName} story continuation`}
        >
          <div className="story-section-three-details-copy">
            <span
              className="story-section-three-details-divider"
              aria-hidden="true"
            />
            {story.sectionFourDetailsBlocks.map((block, idx) => (
              <p key={`s4-details-${idx}`}>{block.text}</p>
            ))}
          </div>
        </section>
      ) : null}

      {story.vision?.text ? (
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

              <p className="story-vision-copy" aria-label={story.vision.text}>
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
      ) : null}

      <section className="story-video-section" aria-label="Story video">
        <video
          className="story-video-player"
          src={media.video}
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
              {storyLeaderProfiles.map((image, index) => {
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

export default StoryPageTemplate;
