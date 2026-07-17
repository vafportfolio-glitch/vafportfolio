"use client";

import { motion, useReducedMotion } from "motion/react";
import ProjectCard, { ProjectCardProps } from "@/components/project-card";

const projects: ProjectCardProps[] = [
  {
    tags: ["BRANDING", "WEB DESIGN"],
    image: "https://res.cloudinary.com/dmx22dkwy/image/upload/v1759188538/n5-2_mt3oqm.png",
    eyebrow: "MILLWORK 2000",
    title: "Millwork 2000",
    description: "A custom website and digital presence project designed to improve clarity, credibility, and user experience.",
    duration: "4 Months",
    stats: [
      { icon: "users", value: "4x", label: "BRAND RECOGNITION LIFT" },
      { icon: "eye", value: "+90s", label: "AVG. TIME ON SITE" },
      { icon: "trending", value: "140%", label: "QUALIFIED LEAD GROWTH" },
    ],
    quote: "The Branding Zone completely transformed how our business shows up online. Our leads doubled within 90 days.",
  },
  {
    tags: ["AUTOMATION", "SOFTWARE"],
    image: "https://res.cloudinary.com/dmx22dkwy/image/upload/v1759188538/n5-2_mt3oqm.png",
    eyebrow: "SAAS PLATFORM",
    title: "VA Force Dashboard",
    description: "End-to-end automation platform built to streamline client onboarding, reporting, and team workflows.",
    duration: "6 Months",
    stats: [
      { icon: "trending", value: "3x", label: "FASTER ONBOARDING" },
      { icon: "users", value: "200+", label: "ACTIVE USERS" },
      { icon: "eye", value: "60%", label: "SUPPORT TICKET DROP" },
    ],
    quote: "Our team saves 20 hours a week thanks to the automations VA Force built for us.",
  },
  {
    tags: ["WEB3", "BRANDING"],
    image: "https://res.cloudinary.com/dmx22dkwy/image/upload/v1759188538/n5-2_mt3oqm.png",
    eyebrow: "CRYPTO PROJECT",
    title: "NovaMint Protocol",
    description: "Full brand identity and landing page for a Web3 minting platform targeting early-stage NFT collectors.",
    duration: "3 Months",
    stats: [
      { icon: "users", value: "12k", label: "WAITLIST SIGNUPS" },
      { icon: "trending", value: "5x", label: "SOCIAL GROWTH" },
      { icon: "eye", value: "2.4m", label: "LAUNCH IMPRESSIONS" },
    ],
    quote: "The brand VA Force created gave us instant credibility in a very crowded space.",
  },
  {
    tags: ["UI/UX", "DEVELOPMENT"],
    image: "https://res.cloudinary.com/dmx22dkwy/image/upload/v1759188538/n5-2_mt3oqm.png",
    eyebrow: "E-COMMERCE",
    title: "Luxe Interiors Co.",
    description: "A premium e-commerce experience redesigned from the ground up to reduce drop-off and increase average order value.",
    duration: "5 Months",
    stats: [
      { icon: "trending", value: "88%", label: "CONVERSION LIFT" },
      { icon: "eye", value: "+3min", label: "SESSION DURATION" },
      { icon: "users", value: "2.1x", label: "REPEAT PURCHASE RATE" },
    ],
    quote: "Revenue from our online store went up 88% in the first quarter after launch.",
  },
];

export default function PortfolioProjects() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="relative bg-black px-8 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="relative mb-16 flex justify-center">
          <h2 className="text-5xl font-black tracking-tight text-white">
            Recent{" "}
            <span className="relative inline-block">
              Projects
              <span
                className="absolute -top-9 right-0 whitespace-nowrap text-2xl text-gray-500"
                style={{ fontFamily: "var(--font-caveat)", transform: "rotate(3deg)" }}
              >
                hand-picked work
              </span>
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, y: 40 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.15 },
                    transition: { duration: 0.65, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] },
                  })}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* View All Projects button */}
        <div className="mt-16 flex justify-center">
          <a
            href="/work"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-bold text-white transition-all duration-300"
            style={{
              background: "linear-gradient(#0c120c,#0c120c) padding-box, linear-gradient(135deg,#37ca37,#188bf6) border-box",
              border: "1.5px solid transparent",
            }}
          >
            <span
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: "linear-gradient(135deg,#37ca37,#188bf6)" }}
            />
            <span className="relative z-10 uppercase tracking-[0.12em]">View All Projects</span>
            <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/20 group-hover:translate-x-1">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 stroke-white">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
