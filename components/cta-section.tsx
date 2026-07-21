"use client";

import { motion, useReducedMotion } from "motion/react";

export default function CtaSection() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="relative bg-black px-8 py-14">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-10 sm:px-10 sm:py-12 lg:px-14"
          style={{ background: "#0c0c0c" }}
        >
          {/* soft multi-brand glow, bleeding off the right edge — echoes the rest of the site's dark+glow language */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-[60%]"
            style={{
              background:
                "radial-gradient(circle at 100% 50%, rgba(0,152,253,0.35) 0%, rgba(0,208,1,0.2) 35%, rgba(254,197,3,0.12) 55%, transparent 75%)",
            }}
          />

          <div className="relative max-w-xl">
            <motion.p
              {...(reduce ? {} : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } })}
              className="mb-4 text-lg"
              style={{ fontFamily: "var(--font-caveat)", color: "#FEC503" }}
            >
              Ready when you are
            </motion.p>

            <motion.h2
              {...(reduce ? {} : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] } })}
              className="mb-4 text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl"
            >
              Let&apos;s build something{" "}
              <span className="inline-block break-words" style={{ color: "#FEC503" }}>
                remarkable.
              </span>
            </motion.h2>

            <motion.p
              {...(reduce ? {} : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] } })}
              className="mb-6 max-w-[46ch] text-base leading-relaxed text-gray-400"
            >
              From brand identity to full-stack automation - we turn your vision into a product that works and a brand people remember.
            </motion.p>

            <motion.div
              {...(reduce ? {} : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] } })}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA */}
              <a
                href="mailto:hello@vaforce.io"
                className="group inline-flex items-center gap-4 rounded-full py-2 pl-6 pr-2 text-base font-bold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                style={{ background: "#0098FD" }}
              >
                <span>Start a Project</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 stroke-white">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>

              {/* Secondary — glassy, matching the hero's secondary button */}
              <a
                href="/#work"
                onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold text-white/80 transition-all duration-300 hover:text-white"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(12px)" }}
              >
                See our work
              </a>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              {...(reduce ? {} : { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.8, delay: 0.36 } })}
              className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-gray-500"
            >
              {["100+ Projects Delivered", "5-Star Rated", "Global Clients", "Fast Turnaround"].map((label) => (
                <span key={label} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full" style={{ background: "#FEC503" }} />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
