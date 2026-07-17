"use client";

import { motion, useReducedMotion } from "motion/react";

export default function MeetFounder() {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        };

  return (
    <section id="founder" className="relative bg-black px-8 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Glassy card — tall enough to show full portrait */}
        <div
          className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-[0_0_80px_rgba(55,202,55,0.06),0_0_80px_rgba(24,139,246,0.06)]"
          style={{ minHeight: 680 }}
        >
          {/* inner tint */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#37ca37]/5 via-transparent to-[#188bf6]/5" />

          <div className="relative grid h-full grid-cols-1 lg:grid-cols-2" style={{ minHeight: 680 }}>
            {/* LEFT — text, vertically centred */}
            <div className="flex flex-col justify-center px-10 py-16 lg:px-14">
              <motion.p
                {...fadeUp(0)}
                className="mb-2 text-2xl"
                style={{
                  fontFamily: "var(--font-caveat)",
                  background: "linear-gradient(135deg,#37ca37,#188bf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Meet the Founder
              </motion.p>

              <motion.h2
                {...fadeUp(0.08)}
                className="mb-5 text-5xl font-black leading-none tracking-tight text-white lg:text-6xl"
              >
                Ahtisham
              </motion.h2>

              <motion.p
                {...fadeUp(0.16)}
                className="max-w-[44ch] text-base leading-relaxed text-gray-400"
              >
                VA Force was founded by Ahtisham Malik, who started as a solo
                freelancer and scaled into a full-service automation and software
                agency with a dedicated global team. We understand real business
                problems because we&apos;ve solved them - for ourselves and for
                hundreds of clients.
              </motion.p>
            </div>

            {/* RIGHT — image fills full card height */}
            <motion.div
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, x: 40 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true, amount: 0.2 },
                    transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
                  })}
              className="relative min-h-[480px] lg:min-h-0"
            >
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/XgKDe6KOSdIG9IWlQxy3/media/69600d52dc5e0456d6d0d610.jpg"
                alt="Ahtisham Malik, Founder of VA Force"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              {/* left-edge blend */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-black/70 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
