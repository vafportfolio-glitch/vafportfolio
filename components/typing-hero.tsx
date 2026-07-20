"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const WORDS = ["Automation", "AI Workflows", "GoHighLevel", "Growth"];
const PLACEHOLDER_IMG =
  "https://res.cloudinary.com/k73rnh8k/image/upload/v1784583504/taqeoyds1vun9hxktrpk.png";

const TOP_TILTS = [-8];
const BOTTOM_TILTS = [7, -5];

const clusterVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const imgClass = "object-cover shadow-xl";
const imgStyle = { width: "150px", height: "150px" };

function ImageCluster({ align }: { align: "left" | "right" }) {
  // Row 1 (top, 2 images) leans toward the outer edge; row 2 (bottom, 3 images) spans full width.
  const topCols = align === "left" ? [1] : [2];

  return (
    <motion.div
      variants={clusterVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 150px)",
        gap: "0.5rem",
        justifyContent: align === "left" ? "start" : "end",
      }}
    >
      {topCols.map((col, i) => (
        <motion.img
          key={`top-${i}`}
          variants={itemVariants}
          src={PLACEHOLDER_IMG}
          alt=""
          className={imgClass}
          style={{
            ...imgStyle,
            gridRow: 1,
            gridColumn: col,
            transform: `rotate(${TOP_TILTS[i]}deg)`,
          }}
        />
      ))}
      {BOTTOM_TILTS.map((deg, i) => (
        <motion.img
          key={`bottom-${i}`}
          variants={itemVariants}
          src={PLACEHOLDER_IMG}
          alt=""
          className={imgClass}
          style={{
            ...imgStyle,
            gridRow: 2,
            gridColumn: i + 1,
            transform: `rotate(${deg}deg)`,
          }}
        />
      ))}
    </motion.div>
  );
}

export default function TypingHero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];

    if (!deleting && subIndex === currentWord.length) {
      const pause = setTimeout(() => setDeleting(true), 1400);
      return () => clearTimeout(pause);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % WORDS.length);
      return;
    }

    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      setSubIndex((i) => i + (deleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, wordIndex]);

  const typedText = WORDS[wordIndex].slice(0, subIndex);

  return (
    <section
      id="typing-hero"
      className="relative w-full h-screen bg-black overflow-hidden"
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1
          className="font-semibold leading-tight tracking-tight text-white mb-4"
          style={{ fontSize: "6vw" }}
        >
          The Force Behind
          <br />
          <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ display: "inline-block", width: "4ch", flexShrink: 0 }}>Your</span>
            &nbsp;
            <span
              className="inline-flex items-center rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(12px)",
                padding: "0 0.35em",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              {typedText}
              <span
                className="inline-block animate-pulse"
                style={{ width: "0.06em", height: "0.75em", background: "currentColor", marginLeft: "0.08em" }}
              />
            </span>
          </span>
        </h1>

        <p className="max-w-xl text-gray-400 text-lg leading-relaxed">
          We build the automation, AI, and systems that scale your business —
          done for you.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 z-10">
        <AnimatePresence mode="wait">
          <ImageCluster key={`left-${wordIndex}`} align="left" />
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 right-0 z-10">
        <AnimatePresence mode="wait">
          <ImageCluster key={`right-${wordIndex}`} align="right" />
        </AnimatePresence>
      </div>
    </section>
  );
}
