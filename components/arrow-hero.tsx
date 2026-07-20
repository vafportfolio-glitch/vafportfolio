"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const IMAGE_UP =
  "https://res.cloudinary.com/k73rnh8k/image/upload/v1784571730/eqfegqftugqgms6wnyuk.webp";
const IMAGE_RIGHT =
  "https://res.cloudinary.com/k73rnh8k/image/upload/v1784571730/p2spc4uv8h4ggf1nsrin.webp";

export default function ArrowHero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track the section across its full transit through the viewport (bottom-in to top-out),
  // so progress ~0.5 lines up with the section sitting centered on screen.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawTilt = useTransform(scrollYProgress, [0.35, 0.65], [-8, 12]);
  const tilt = useSpring(rawTilt, { stiffness: 110, damping: 16 });

  // Hard cut, no interpolation — the swap happens instantly at the tilt's midpoint, never a fade.
  const img1Opacity = useTransform(scrollYProgress, (v) => (v < 0.5 ? 1 : 0));
  const img2Opacity = useTransform(scrollYProgress, (v) => (v >= 0.5 ? 1 : 0));

  // Small downward "settle" that peaks exactly as the tilt peaks, selling weight shifting toward the bottom.
  const settleY = useSpring(
    useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0, 14, 0]),
    { stiffness: 110, damping: 16 }
  );

  const textAOpacity = useTransform(scrollYProgress, [0, 0.42, 0.5], [1, 1, 0]);
  const textBOpacity = useTransform(scrollYProgress, [0.5, 0.58, 1], [0, 1, 1]);

  const handleArrowClick = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="arrow-hero"
      className="relative w-full h-screen bg-black overflow-hidden"
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

      <div className="relative z-10 h-full w-full flex flex-col md:flex-row">
        {/* LEFT — image, rolls/flips as the section crosses center screen */}
        <button
          type="button"
          onClick={handleArrowClick}
          aria-label="Scroll to next section"
          className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-6 md:p-10 cursor-pointer"
        >
          <motion.div className="relative w-full max-w-2xl aspect-square">
            <motion.div className="absolute inset-0" style={{ rotate: tilt, y: settleY }}>
              <motion.img
                src={IMAGE_UP}
                alt="Arrow toggle, pointing up"
                className="absolute inset-0 w-full h-full object-contain"
                style={{ opacity: img1Opacity }}
              />
              <motion.img
                src={IMAGE_RIGHT}
                alt="Arrow toggle, pointing right"
                className="absolute inset-0 w-full h-full object-contain"
                style={{ opacity: img2Opacity }}
              />
            </motion.div>
          </motion.div>
        </button>

        {/* RIGHT — content */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-16 py-8 md:py-12">
          <p className="text-sm mb-4 tracking-wide" style={{ color: "#37ca37" }}>
            Automation &middot; AI &middot; Growth
          </p>
          <div className="relative h-[180px] md:h-[220px]">
            <motion.h2
              className="absolute inset-0 text-4xl md:text-6xl text-white leading-tight"
              style={{ opacity: textAOpacity, fontFamily: "Georgia, serif" }}
            >
              Automate
              <br />
              Your Growth
            </motion.h2>
            <motion.h2
              className="absolute inset-0 text-4xl md:text-6xl text-white leading-tight"
              style={{ opacity: textBOpacity, fontFamily: "Georgia, serif" }}
            >
              Scale Your
              <br />
              Operations
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-xl mt-8">
            <p className="text-sm text-gray-500 leading-relaxed">
              We help businesses scale faster with intelligent automation and
              custom AI systems.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Automation agency, 100% done-for-you: workflows, integrations,
              AI agents, systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
