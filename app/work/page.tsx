"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import ProjectCard, { ProjectCardProps } from "@/components/project-card";
import Link from "next/link";

// Simulated fetch - replace with real API call later
async function fetchProjects(): Promise<ProjectCardProps[]> {
  await new Promise((r) => setTimeout(r, 1800));
  return [
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
    {
      tags: ["BRANDING", "STRATEGY"],
      image: "https://res.cloudinary.com/dmx22dkwy/image/upload/v1759188538/n5-2_mt3oqm.png",
      eyebrow: "FINTECH",
      title: "ClearLedger Finance",
      description: "Brand overhaul and marketing site for a B2B fintech startup entering a competitive market.",
      duration: "3 Months",
      stats: [
        { icon: "users", value: "8k", label: "BETA SIGNUPS" },
        { icon: "trending", value: "220%", label: "INVESTOR INTEREST" },
        { icon: "eye", value: "1.1m", label: "LAUNCH REACH" },
      ],
      quote: "We closed our seed round two weeks after the new brand launched. Timing was everything.",
    },
    {
      tags: ["WEB DESIGN", "DEVELOPMENT"],
      image: "https://res.cloudinary.com/dmx22dkwy/image/upload/v1759188538/n5-2_mt3oqm.png",
      eyebrow: "HEALTH & WELLNESS",
      title: "Vitara Wellness",
      description: "A calming, conversion-focused website for a wellness brand expanding into digital coaching.",
      duration: "2 Months",
      stats: [
        { icon: "trending", value: "74%", label: "BOOKING RATE LIFT" },
        { icon: "eye", value: "+4min", label: "AVG. SESSION TIME" },
        { icon: "users", value: "3.2x", label: "NEWSLETTER GROWTH" },
      ],
      quote: "Our online bookings tripled in the first month. The site finally matches the quality of our service.",
    },
  ];
}

function CardSkeleton() {
  return (
    <div className="w-full rounded-[20px] overflow-hidden" style={{ background: "#0c120c", border: "1.5px solid #1a2e1a" }}>
      {/* tags */}
      <div className="flex gap-2.5 px-[22px] pt-[18px]">
        <div className="h-7 w-20 rounded-full bg-white/5 animate-pulse" />
        <div className="h-7 w-24 rounded-full bg-white/5 animate-pulse" />
      </div>
      {/* image */}
      <div className="mx-[22px] mt-4 rounded-[14px] bg-white/5 animate-pulse" style={{ aspectRatio: "16/9" }}>
        {/* shimmer sweep */}
        <div className="h-full w-full rounded-[14px] overflow-hidden relative">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        </div>
      </div>
      {/* body lines */}
      <div className="px-[26px] pt-[22px] pb-[26px] space-y-3">
        <div className="h-3 w-28 rounded bg-white/5 animate-pulse" />
        <div className="h-6 w-48 rounded bg-white/5 animate-pulse" />
        <div className="h-3 w-full rounded bg-white/5 animate-pulse" />
        <div className="h-3 w-4/5 rounded bg-white/5 animate-pulse" />
        <div className="mt-4 grid grid-cols-3 gap-2 rounded-[14px] p-5" style={{ background: "#0a120a", border: "1px solid #1a2e1a" }}>
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="h-5 w-5 rounded bg-white/5 animate-pulse" />
              <div className="h-5 w-10 rounded bg-white/5 animate-pulse" />
              <div className="h-2.5 w-16 rounded bg-white/5 animate-pulse" />
            </div>
          ))}
        </div>
        <div className="h-3 w-full rounded bg-white/5 animate-pulse" />
        <div className="h-3 w-3/4 rounded bg-white/5 animate-pulse" />
      </div>
    </div>
  );
}

export default function WorkPage() {
  const [projects, setProjects] = useState<ProjectCardProps[] | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  return (
    <main className="min-h-screen bg-black px-8 pb-24 pt-36">
      <div className="mx-auto max-w-7xl">
        {/* Back link */}
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 stroke-current">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back home
        </Link>

        {/* Heading */}
        <div className="mb-16">
          <h1 className="text-6xl font-black leading-none tracking-tight text-white lg:text-7xl">
            All{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#37ca37,#188bf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </h1>
          <p className="mt-4 text-base text-gray-500">
            {projects ? `${projects.length} projects` : "Loading..."}
          </p>
        </div>

        {/* Loading skeletons */}
        {!projects && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Loaded cards */}
        {projects && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                {...(reduce
                  ? {}
                  : {
                      initial: { opacity: 0, y: 32 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
                    })}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
