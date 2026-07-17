"use client";

import { motion, useReducedMotion } from "motion/react";

export default function CtaSection() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden bg-black px-4 py-24 sm:px-8 sm:py-32">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #37ca37 0%, transparent 70%)" }}
        />
        <div
          className="absolute left-1/3 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #188bf6 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          {...(reduce ? {} : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } })}
          className="mb-4 text-lg"
          style={{ fontFamily: "var(--font-caveat)", color: "#37ca37" }}
        >
          Ready when you are
        </motion.p>

        <motion.h2
          {...(reduce ? {} : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] } })}
          className="mb-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Let&apos;s build something{" "}
          <span
            className="inline-block break-words"
            style={{
              background: "linear-gradient(135deg,#37ca37,#188bf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            remarkable.
          </span>
        </motion.h2>

        <motion.p
          {...(reduce ? {} : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] } })}
          className="mx-auto mb-12 max-w-[52ch] text-lg leading-relaxed text-gray-400"
        >
          From brand identity to full-stack automation - we turn your vision into a product that works and a brand people remember.
        </motion.p>

        <motion.div
          {...(reduce ? {} : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] } })}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          {/* Primary CTA */}
          <a
            href="mailto:hello@vaforce.io"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{ background: "linear-gradient(135deg,#37ca37,#188bf6)" }}
          >
            <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20" style={{ background: "#fff" }} />
            <span className="relative z-10">Start a Project</span>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 h-4 w-4 stroke-white transition-transform duration-300 group-hover:translate-x-1">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          {/* Secondary */}
          <a
            href="/#work"
            onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white/70 transition-colors hover:text-white"
            style={{ border: "1px solid rgba(255,255,255,0.12)" }}
          >
            See our work
          </a>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          {...(reduce ? {} : { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.8, delay: 0.36 } })}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600"
        >
          {["100+ Projects Delivered", "5-Star Rated", "Global Clients", "Fast Turnaround"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#37ca37]" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
