"use client";

import { motion, useReducedMotion } from "motion/react";
import ProjectCard, { ProjectCardProps } from "@/components/project-card";

const projects: ProjectCardProps[] = [
  {
    tags: ["CRM", "Sales Automation", "Lead Management", "Workflow Automation"],
    image: "https://res.cloudinary.com/k73rnh8k/image/upload/v1784756653/oeps6ardt6tci1qbhqn1.png",
    eyebrow: "SALES ENGINE",
    title: "Enertia Flow",
    description: "A CRM and deal-flow automation platform that captures, nurtures, and converts leads through automated multi-channel communication and sales pipelines.",
    duration: "Ongoing",
    stats: [
      { icon: "users", value: "Auto-Capture", label: "MORE LEADS CONVERTED AUTOMATICALLY" },
      { icon: "eye", value: "Multi-Channel", label: "SMS · EMAIL · WHATSAPP · AI VOICE" },
      { icon: "trending", value: "Predictable", label: "A REPEATABLE, SCALABLE SALES ENGINE" },
    ],
    quote: "Turn your leads into loyal customers with an automated sales engine that captures, nurtures, and converts opportunities 24/7.",
  },
  {
    tags: ["Self-Service Kiosk", "Visitor Management System", "Front Desk Automation", "GoHighLevel"],
    image: "https://res.cloudinary.com/k73rnh8k/image/upload/v1784757269/nzrhqkqzk5hapsirqnwu.png",
    eyebrow: "SELF-SERVICE KIOSK",
    title: "Kiosk Check-In System",
    description: "A self-service check-in kiosk that streamlines front desk operations, automates staff notifications, and keeps customer records synced using GoHighLevel and Make.com.",
    duration: "3 Weeks",
    stats: [
      { icon: "users", value: "Self-Service", label: "CHECK IN WITHIN SECONDS, NO WAIT" },
      { icon: "eye", value: "Smart Routing", label: "AUTO-DETECTS APPOINTMENTS & WALK-INS" },
      { icon: "trending", value: "Real-Time Sync", label: "INSTANT STAFF ALERTS & CRM SYNC" },
    ],
    quote: "Transform your front desk into a fully automated, self-service experience that delights visitors and saves your team hours every day.",
  },
  {
    tags: ["CRM", "Tax Software", "Marketing Automation", "Client Communication"],
    image: "https://res.cloudinary.com/k73rnh8k/image/upload/v1784757477/ez5jmku1hwn812cknzyj.png",
    eyebrow: "TAX CRM PLATFORM",
    title: "Tax Nitro",
    description: "An all-in-one CRM and marketing automation platform built for tax professionals to manage leads, automate follow-ups, and streamline client communication and payments.",
    duration: "Ongoing",
    stats: [
      { icon: "users", value: "All-in-One", label: "LEADS, PAYMENTS & MARKETING IN ONE PLACE" },
      { icon: "eye", value: "Automated", label: "EMAIL, SMS & WORKFLOW FOLLOW-UPS" },
      { icon: "trending", value: "Faster Growth", label: "MORE LEADS, MORE CLIENTS CONVERTED" },
    ],
    quote: "Everything your tax business needs to attract, convert, and retain clients—all in one powerful platform.",
  },
  {
    tags: ["Legal CRM", "AI Receptionist", "GoHighLevel", "Client Intake Automation"],
    image: "https://res.cloudinary.com/k73rnh8k/image/upload/v1784757589/fftfedl8imqb1hq2fulw.png",
    eyebrow: "LEGAL CRM & AI VOICE",
    title: "Ritchie Reiersen Law",
    description: "A full GoHighLevel CRM buildout for a law firm, paired with a Vapi AI voice receptionist that answers calls, qualifies leads, and books consultations automatically.",
    duration: "Ongoing",
    stats: [
      { icon: "users", value: "24/7 AI Intake", label: "ANSWERS, QUALIFIES & BOOKS CALLS AUTOMATICALLY" },
      { icon: "eye", value: "Centralized CRM", label: "LEADS, PIPELINES & REPORTING IN ONE PLACE" },
      { icon: "trending", value: "End-to-End", label: "AUTOMATED WORKFLOWS, CALLS & SCHEDULING" },
    ],
    quote: "From the first phone call to a booked consultation, let AI and automation handle your client intake—so your team can focus on winning cases.",
  },
];

export default function PortfolioProjects() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="relative bg-black px-8 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="relative mb-16 flex flex-col items-center gap-1">
          <span
            className="text-2xl text-gray-500"
            style={{ fontFamily: "var(--font-caveat)", transform: "rotate(-2deg)", display: "block" }}
          >
            from 2020 till today
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Recent Projects
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
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-bold transition-colors duration-300"
            style={{ background: "#FEC503" }}
          >
            <span
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: "#0098FD" }}
            />
            <span className="relative z-10 uppercase tracking-[0.12em] text-black transition-colors duration-300 group-hover:text-white">
              View All Projects
            </span>
            <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition-all duration-300 group-hover:bg-white/20 group-hover:translate-x-2">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 stroke-black transition-colors duration-300 group-hover:stroke-white">
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
