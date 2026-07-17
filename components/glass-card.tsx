"use client";

import { useState } from "react";

interface GlassCardProps {
  size: number | { w: number; h: number };
  image?: string;
  title: string;
  description: string;
  color?: string;
  padding?: number;
  bg?: string;
  className?: string;
  tilt?: "right" | "stable";
}

export default function GlassCard({
  size,
  image,
  title,
  description,
  color = "#37ca37",
  padding = 24,
  bg,
  className = "",
  tilt,
}: GlassCardProps) {
  const w = typeof size === "number" ? size : size.w;
  const h = typeof size === "number" ? size : size.h;
  const [hovered, setHovered] = useState(false);

  const tilted = tilt === "right";
  const idleRotate = tilted ? "rotate(4deg)" : "rotate(0deg)";
  const hoverRotate = tilted ? "rotate(0deg)" : "rotate(3deg)";

  return (
    <div
      className={`group flex flex-col ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="rounded-3xl border border-white/20 bg-white/10 p-3 shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-2xl transition-transform duration-500 ease-out"
        style={{ transform: hovered ? hoverRotate : idleRotate }}
      >
        <div
          className="flex items-center justify-center rounded-2xl"
          style={{
            width: w + padding * 2,
            height: h + padding * 2,
            backgroundColor: color,
          }}
        >
          {image ? (
            <img
              src={image}
              alt={title}
              className="block rounded-xl object-cover"
              style={{ width: w, height: h, background: bg }}
            />
          ) : (
            <div
              className="flex items-center justify-center rounded-xl bg-white/5"
              style={{ width: w, height: h, background: bg }}
            />
          )}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="inline-flex items-center gap-2 text-xl font-medium text-white">
          {title}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="transition-all duration-300 ease-out"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateX(4px)" : "translateX(-8px)",
            }}
          >
            <path
              d="M4 10H15M15 10L11 6M15 10L11 14"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h3>
        <p className="mt-0.5 text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}
