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

      <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
        <p className="mb-1 px-8 text-xl leading-snug text-gray-400">
          Howdy! Meet your trusted design partner,<br />
          crafting strong brands for SaaS and Web3.
        </p>
        <h1
          className="whitespace-nowrap font-black leading-none tracking-tight text-white"
          style={{ fontSize: '9.2vw', paddingLeft: '2rem' }}
        >
          Project Portfolio
        </h1>
      </div>
    </section>
  );
}
