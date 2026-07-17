"use client";

import { useState } from "react";

export interface ProjectStat {
  icon: "users" | "eye" | "trending";
  value: string;
  label: string;
}

export interface ProjectCardProps {
  tags: string[];
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  duration: string;
  stats: [ProjectStat, ProjectStat, ProjectStat];
  quote: string;
}

const icons = {
  users: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[#188bf6] mb-2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[#188bf6] mb-2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  trending: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[#188bf6] mb-2">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
};

export default function ProjectCard({
  tags,
  image,
  eyebrow,
  title,
  description,
  duration,
  stats,
  quote,
}: ProjectCardProps) {
  const [mediaHovered, setMediaHovered] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);

  return (
    <div
      className="w-full rounded-[20px] overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        border: "1.5px solid transparent",
        background: cardHovered
          ? "linear-gradient(#0c120c,#0c120c) padding-box, linear-gradient(135deg,#188bf6,#37ca37) border-box"
          : "linear-gradient(#0c120c,#0c120c) padding-box, linear-gradient(135deg,#1a2e1a,#0d1a2e) border-box",
        boxShadow: cardHovered
          ? "0 0 0 1px rgba(24,139,246,0.45), 0 20px 40px -20px rgba(24,139,246,0.45)"
          : "none",
      }}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      {/* Tags */}
      <div className="flex gap-2.5 px-[22px] pt-[18px]">
        {tags.map((t) => (
          <span
            key={t}
            className="text-[11px] font-bold tracking-[0.04em] text-white px-[14px] py-[7px] rounded-full"
            style={{ background: "#0e0b12", border: "1px solid #1a3a1a" }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Media */}
      <div
        className="relative mx-[22px] mt-4 rounded-[14px] overflow-hidden"
        style={{ aspectRatio: "16/9", background: "#0d1a0d" }}
        onMouseEnter={() => setMediaHovered(true)}
        onMouseLeave={() => setMediaHovered(false)}
      >
        {/* photo lifts on media hover */}
        <div
          className="absolute inset-0 transition-transform duration-300 ease-out will-change-transform"
          style={{ transform: mediaHovered ? "translateY(-8px)" : "translateY(0)" }}
        >
          <img src={image} alt={title} className="w-full h-full object-cover object-center block" />
        </div>

        {/* FAB arrow */}
        <div
          className="absolute right-[14px] z-10 w-[46px] h-[46px] rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: "linear-gradient(135deg,#37ca37,#188bf6)",
            boxShadow: "0 8px 20px -6px rgba(24,139,246,0.6)",
            opacity: mediaHovered ? 1 : 0,
            bottom: mediaHovered ? 14 : -40,
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] stroke-white">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>

      {/* Body */}
      <div className="px-[26px] pt-[22px] pb-[26px]">
        <div className="flex justify-between items-start">
          <p
            className="text-[12px] font-extrabold tracking-[0.06em] mb-1.5"
            style={{
              background: "linear-gradient(135deg,#37ca37,#188bf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {eyebrow}
          </p>
          <span className="text-[13px] text-[#9a94a3] whitespace-nowrap">{duration}</span>
        </div>

        <h3 className="text-[26px] font-extrabold tracking-[0.01em] text-white mb-3">{title}</h3>
        <p className="text-[14.5px] leading-[1.55] text-[#9a94a3] mb-[22px] max-w-[520px]">{description}</p>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-2 rounded-[14px] px-2.5 py-[22px] mb-[22px]"
          style={{ background: "#0a120a", border: "1px solid #1a2e1a" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center px-1.5">
              {icons[s.icon]}
              <div className="text-[19px] font-extrabold text-white mb-1">{s.value}</div>
              <div className="text-[10.5px] font-bold tracking-[0.04em] text-[#9a94a3]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <p
          className="text-[14px] italic leading-[1.6] text-[#c9c3ce] pl-4"
          style={{ borderLeft: "3px solid #37ca37" }}
        >
          {quote}
        </p>
      </div>
    </div>
  );
}
