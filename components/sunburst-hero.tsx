"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";

export default function SunburstHero() {
  const { scrollYProgress } = useScroll();
  const scrollRotation = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const smoothRotation = useSpring(scrollRotation, { stiffness: 40, damping: 20 });

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <motion.div
        className="absolute -inset-[25%]"
        style={{ rotate: smoothRotation, transformOrigin: "left center" }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1800 900"
          preserveAspectRatio="xMinYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="rayGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#37ca37" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#37ca37" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#37ca37" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="rayGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#188bf6" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#188bf6" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#188bf6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="rayGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#37ca37" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#37ca37" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#37ca37" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="rayGrad4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#188bf6" stopOpacity="0.68" />
              <stop offset="50%" stopColor="#188bf6" stopOpacity="0.26" />
              <stop offset="100%" stopColor="#188bf6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="rayGrad5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#37ca37" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#37ca37" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#37ca37" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="rayGrad6" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#188bf6" stopOpacity="0.58" />
              <stop offset="50%" stopColor="#188bf6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#188bf6" stopOpacity="0" />
            </linearGradient>
          </defs>

          <polygon points="-300,-150 -300,60 2200,-260 2200,-500" fill="url(#rayGrad1)" />
          <polygon points="-300,60 -300,260 2200,-40 2200,-260" fill="url(#rayGrad2)" />
          <polygon points="-300,260 -300,430 2200,140 2200,-40" fill="url(#rayGrad3)" />
          <polygon points="-300,430 -300,560 2200,300 2200,140" fill="url(#rayGrad4)" />
          <polygon points="-300,560 -300,670 2200,420 2200,300" fill="url(#rayGrad5)" />
          <polygon points="-300,670 -300,760 2200,520 2200,420" fill="url(#rayGrad6)" />
        </svg>
      </motion.div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pt-20" style={{ fontFamily: "var(--font-outfit)" }}>
        <h1 className="font-semibold leading-tight tracking-tight text-white mb-4" style={{ fontSize: '6vw' }}>
          The Force Behind<br />Your Growth
        </h1>
        <p className="max-w-2xl text-gray-400 text-lg leading-relaxed">
          We help businesses scale faster with powerful automation, AI systems, and custom software integrations. From GoHighLevel bots to advanced AI workflows, VA FORCE is the team behind your operational growth.
        </p>
        <div className="flex items-center gap-4 mt-10">
          {/* Primary */}
          <a
            href="#work"
            className="group flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #37ca37, #188bf6)", boxShadow: "0 0 28px rgba(55,202,55,0.4)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <path d="M8 21h8M12 17v4"/>
            </svg>
            See Our Work
          </a>
          {/* Secondary — glassy */}
          <a
            href="#contact"
            className="group flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:border-white/30"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(12px)",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}
