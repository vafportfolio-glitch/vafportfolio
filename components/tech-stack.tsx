"use client";

import { motion, useReducedMotion } from "motion/react";

const LEFT_ICONS = [
  {
    src: "https://storage.googleapis.com/msgsndr/XgKDe6KOSdIG9IWlQxy3/media/694ee93c835a580c05bb604d.png",
    alt: "JavaScript",
  },
  {
    src: "https://storage.googleapis.com/msgsndr/XgKDe6KOSdIG9IWlQxy3/media/694ee9306caf493b8c638aa6.png",
    alt: "HTML5",
  },
  {
    src: "https://storage.googleapis.com/msgsndr/XgKDe6KOSdIG9IWlQxy3/media/694ee930afc54370cfaebf67.png",
    alt: "CSS3",
  },
  {
    src: "https://storage.googleapis.com/msgsndr/XgKDe6KOSdIG9IWlQxy3/media/694ee930b62dd32c68dc2920.png",
    alt: "Python",
  },
];

const RIGHT_ICONS = [
  {
    src: "https://storage.googleapis.com/msgsndr/XgKDe6KOSdIG9IWlQxy3/media/694ee930e889d39d9a7a8406.png",
    alt: "tech",
  },
  {
    src: "https://storage.googleapis.com/msgsndr/XgKDe6KOSdIG9IWlQxy3/media/694e9230afc54394f3a670b5.png",
    alt: "tech",
  },
  {
    src: "https://storage.googleapis.com/msgsndr/XgKDe6KOSdIG9IWlQxy3/media/694e9231e889d34209722ee0.png",
    alt: "tech",
  },
  {
    src: "https://storage.googleapis.com/msgsndr/XgKDe6KOSdIG9IWlQxy3/media/694e923073a5e0f5d02c2d2c.png",
    alt: "tech",
  },
];

// SVG viewBox: 1780 x 900
// Icon centers (left): x=195, y=120/340/560/780
// Icon centers (right): x=1585, y=120/340/560/780
// Spine meets center at x=805/975, y=450

export default function TechStack() {
  const reduce = useReducedMotion();

  // Two sync groups:
  // OUTER = row-1 (top) + row-4 (bottom) — move together
  // INNER = row-2 + row-3 (middle) — move together, offset from OUTER
  const OUTER_DUR = "2.6s";
  const OUTER_BEGIN = "0s";
  const INNER_DUR = "2.6s";
  const INNER_BEGIN = "1s";

  return (
    <section className="relative bg-black px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-[1780px] text-center">
        <motion.h2
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              })}
          className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Deep Expertise.
          <br />
          Future-Proof Technology Stack.
        </motion.h2>

        <motion.p
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: {
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                },
              })}
          className="mx-auto mb-12 max-w-3xl text-sm leading-relaxed text-gray-400 sm:text-base"
        >
          Our technical prowess goes beyond surface-level trends. We build
          dependable, high-performance systems by mastering the core languages
          that power the digital world. Our teams maintain elite-level
          certification and experience across the most technology stacks,
          ensuring your project stability and growth. This diverse mastery
          allows us to select the absolute best tools for your unique business.
        </motion.p>

        {/* Diagram */}
        <div
          className="relative mx-auto w-full"
          style={{ maxWidth: 1780, aspectRatio: "1780 / 900" }}
        >
          {/* SVG connector lines */}
          <svg
            viewBox="0 0 1780 900"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            style={{ zIndex: 1 }}
          >
            <defs>
              <linearGradient id="ts-gradL" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#188bf6" />
                <stop offset="100%" stopColor="#37ca37" />
              </linearGradient>
              <linearGradient id="ts-gradR" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#188bf6" />
                <stop offset="100%" stopColor="#37ca37" />
              </linearGradient>
              <filter
                id="ts-dotGlow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur stdDeviation="2.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* LEFT — top bracket (row-1 → center) */}
            <path
              d="M 195,120 L 620,120 C 660,120 690,150 690,190 L 690,410 C 690,430 710,450 730,450 L 890,450"
              fill="none"
              stroke="url(#ts-gradL)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* LEFT — bottom bracket (row-4 → center) */}
            <path
              d="M 195,780 L 620,780 C 660,780 690,750 690,710 L 690,490 C 690,470 710,450 730,450 L 890,450"
              fill="none"
              stroke="url(#ts-gradL)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* LEFT — dim connectors row-2, row-3 */}
            <line
              x1="195"
              y1="340"
              x2="690"
              y2="340"
              stroke="#188bf6"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.45"
            />
            <line
              x1="195"
              y1="560"
              x2="690"
              y2="560"
              stroke="#37ca37"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.45"
            />



            {/* RIGHT — top bracket (row-1 → center) */}
            <path
              d="M 1585,120 L 1160,120 C 1120,120 1090,150 1090,190 L 1090,410 C 1090,430 1070,450 1050,450 L 890,450"
              fill="none"
              stroke="url(#ts-gradR)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* RIGHT — bottom bracket (row-4 → center) */}
            <path
              d="M 1585,780 L 1160,780 C 1120,780 1090,750 1090,710 L 1090,490 C 1090,470 1070,450 1050,450 L 890,450"
              fill="none"
              stroke="url(#ts-gradR)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* RIGHT — dim connectors row-2, row-3 */}
            <line
              x1="1585"
              y1="340"
              x2="1090"
              y2="340"
              stroke="#188bf6"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.45"
            />
            <line
              x1="1585"
              y1="560"
              x2="1090"
              y2="560"
              stroke="#37ca37"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.45"
            />



            {/* ── Traveling pulse dots, grouped: outer (1+4) synced, inner (2+3) synced ── */}
            {!reduce && (
              <>
                {/* LEFT row-1 — OUTER group */}
                <circle r="5" fill="#188bf6" filter="url(#ts-dotGlow)">
                  <animateMotion
                    dur={OUTER_DUR}
                    begin={OUTER_BEGIN}
                    repeatCount="indefinite"
                    path="M 195,120 L 620,120 C 660,120 690,150 690,190 L 690,410 C 690,430 710,450 730,450 L 890,450"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.08;0.85;1"
                    dur={OUTER_DUR}
                    begin={OUTER_BEGIN}
                    repeatCount="indefinite"
                  />
                </circle>

                {/* LEFT row-4 — OUTER group */}
                <circle r="5" fill="#37ca37" filter="url(#ts-dotGlow)">
                  <animateMotion
                    dur={OUTER_DUR}
                    begin={OUTER_BEGIN}
                    repeatCount="indefinite"
                    path="M 195,780 L 620,780 C 660,780 690,750 690,710 L 690,490 C 690,470 710,450 730,450 L 890,450"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.08;0.85;1"
                    dur={OUTER_DUR}
                    begin={OUTER_BEGIN}
                    repeatCount="indefinite"
                  />
                </circle>

                {/* RIGHT row-1 — OUTER group */}
                <circle r="5" fill="#188bf6" filter="url(#ts-dotGlow)">
                  <animateMotion
                    dur={OUTER_DUR}
                    begin={OUTER_BEGIN}
                    repeatCount="indefinite"
                    path="M 1585,120 L 1160,120 C 1120,120 1090,150 1090,190 L 1090,410 C 1090,430 1070,450 1050,450 L 890,450"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.08;0.85;1"
                    dur={OUTER_DUR}
                    begin={OUTER_BEGIN}
                    repeatCount="indefinite"
                  />
                </circle>

                {/* RIGHT row-4 — OUTER group */}
                <circle r="5" fill="#37ca37" filter="url(#ts-dotGlow)">
                  <animateMotion
                    dur={OUTER_DUR}
                    begin={OUTER_BEGIN}
                    repeatCount="indefinite"
                    path="M 1585,780 L 1160,780 C 1120,780 1090,750 1090,710 L 1090,490 C 1090,470 1070,450 1050,450 L 890,450"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.08;0.85;1"
                    dur={OUTER_DUR}
                    begin={OUTER_BEGIN}
                    repeatCount="indefinite"
                  />
                </circle>

                {/* LEFT row-2 — INNER group */}
                <circle r="5" fill="#188bf6" filter="url(#ts-dotGlow)">
                  <animateMotion
                    dur={INNER_DUR}
                    begin={INNER_BEGIN}
                    repeatCount="indefinite"
                    path="M 195,340 L 690,340"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.08;0.85;1"
                    dur={INNER_DUR}
                    begin={INNER_BEGIN}
                    repeatCount="indefinite"
                  />
                </circle>

                {/* LEFT row-3 — INNER group */}
                <circle r="5" fill="#37ca37" filter="url(#ts-dotGlow)">
                  <animateMotion
                    dur={INNER_DUR}
                    begin={INNER_BEGIN}
                    repeatCount="indefinite"
                    path="M 195,560 L 690,560"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.08;0.85;1"
                    dur={INNER_DUR}
                    begin={INNER_BEGIN}
                    repeatCount="indefinite"
                  />
                </circle>

                {/* RIGHT row-2 — INNER group */}
                <circle r="5" fill="#188bf6" filter="url(#ts-dotGlow)">
                  <animateMotion
                    dur={INNER_DUR}
                    begin={INNER_BEGIN}
                    repeatCount="indefinite"
                    path="M 1585,340 L 1090,340"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.08;0.85;1"
                    dur={INNER_DUR}
                    begin={INNER_BEGIN}
                    repeatCount="indefinite"
                  />
                </circle>

                {/* RIGHT row-3 — INNER group */}
                <circle r="5" fill="#37ca37" filter="url(#ts-dotGlow)">
                  <animateMotion
                    dur={INNER_DUR}
                    begin={INNER_BEGIN}
                    repeatCount="indefinite"
                    path="M 1585,560 L 1090,560"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.08;0.85;1"
                    dur={INNER_DUR}
                    begin={INNER_BEGIN}
                    repeatCount="indefinite"
                  />
                </circle>
              </>
            )}
          </svg>

          {/* LEFT ICONS */}
          {LEFT_ICONS.map((icon, i) => (
            <div
              key={`left-${i}`}
              className="absolute flex items-center justify-center rounded-[18%] border border-[#2c2c33] bg-white transition-all duration-300 hover:border-[#37ca37] hover:shadow-[0_0_24px_rgba(55,202,55,0.3)]"
              style={{
                width: "6.3%",
                aspectRatio: "1/1",
                left: "10.96%",
                top: `${[13.33, 37.78, 62.22, 86.67][i]}%`,
                transform: "translate(-50%, -50%)",
                zIndex: 3,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={icon.src}
                alt={icon.alt}
                style={{ width: "56%", height: "56%", objectFit: "contain" }}
              />
              {/* dot on right edge, synced with icon */}
              <span
                style={{
                  position: "absolute",
                  right: "-8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: i < 2 ? "#188bf6" : "#37ca37",
                  opacity: i === 0 || i === 3 ? 1 : 0.5,
                }}
              />
            </div>
          ))}

          {/* RIGHT ICONS */}
          {RIGHT_ICONS.map((icon, i) => (
            <div
              key={`right-${i}`}
              className="absolute flex items-center justify-center rounded-[18%] border border-[#2c2c33] bg-white transition-all duration-300 hover:border-[#188bf6] hover:shadow-[0_0_24px_rgba(24,139,246,0.3)]"
              style={{
                width: "6.3%",
                aspectRatio: "1/1",
                left: "89.04%",
                top: `${[13.33, 37.78, 62.22, 86.67][i]}%`,
                transform: "translate(-50%, -50%)",
                zIndex: 3,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={icon.src}
                alt={icon.alt}
                style={{ width: "56%", height: "56%", objectFit: "contain" }}
              />
              {/* dot on left edge, synced with icon */}
              <span
                style={{
                  position: "absolute",
                  left: "-8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: i < 2 ? "#188bf6" : "#37ca37",
                  opacity: i === 0 || i === 3 ? 1 : 0.5,
                }}
              />
            </div>
          ))}

          {/* CENTER LOGO */}
          <div
            className="absolute"
            style={{
              left: "50.56%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "10.67%",
              aspectRatio: "1/1",
              zIndex: 4,
            }}
          >
            <div
              className="flex h-full w-full items-center justify-center rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(55,202,55,0.15) 0%, rgba(24,139,246,0.05) 60%, transparent 75%)",
              }}
            >
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: "78%",
                  height: "78%",
                  background:
                    "linear-gradient(135deg, #37ca37 0%, #188bf6 100%)",
                  boxShadow:
                    "0 0 55px rgba(55,202,55,0.45), 0 0 110px rgba(24,139,246,0.25)",
                }}
              >
                <div
                  className="flex items-center justify-center overflow-hidden rounded-full bg-white"
                  style={{ width: "73%", height: "73%" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://assets.cdn.filesafe.space/XgKDe6KOSdIG9IWlQxy3/media/694591cc8cae8f7688f413a5.png"
                    alt="Company Logo"
                    style={{
                      width: "78%",
                      height: "78%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
