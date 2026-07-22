"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const CATEGORIES = [
  {
    label: "GoHighLevel",
    icon: "https://res.cloudinary.com/k73rnh8k/image/upload/v1784647671/kycw5ubzqp7konos4jve.png",
    glow: "#FEC503",
    desc: "CRM & pipeline automation",
  },
  {
    label: "Automations",
    icon: "https://res.cloudinary.com/k73rnh8k/image/upload/v1784645972/snv5cwiwfnryo4jsxvna.png",
    glow: "#0098FD",
    desc: "End-to-end workflow systems",
  },
  {
    label: "Integrations",
    icon: "https://res.cloudinary.com/k73rnh8k/image/upload/v1784647154/epv8f94x2un0hlrnlh7t.png",
    glow: "#00D001",
    desc: "Connect your entire stack",
  },
  {
    label: "AI Agents",
    icon: "https://res.cloudinary.com/k73rnh8k/image/upload/v1784647153/lhj6mbdb66kptnayrvne.png",
    glow: "#FEC503",
    desc: "Intelligent autonomous systems",
  },
  {
    label: "Conversational AI",
    icon: "https://res.cloudinary.com/k73rnh8k/image/upload/v1784647153/g96arvfo3x0gokttlvyp.png",
    glow: "#0098FD",
    desc: "AI that talks, sells & supports",
  },
  {
    label: "CMS",
    icon: "https://res.cloudinary.com/k73rnh8k/image/upload/v1784665373/hhvio24z2gerdl494a1w.png",
    glow: "#00D001",
    desc: "CMS website builds & management",
  },
];

function MobileTile({
  cat,
  active,
  i,
}: {
  cat: (typeof CATEGORIES)[0];
  active: boolean;
  i: number;
}) {
  return (
    <div
      className="relative flex flex-col items-center gap-2 rounded-2xl p-3 overflow-hidden"
      style={{
        background: active ? `${cat.glow}15` : "rgba(255,255,255,0.04)",
        border: active
          ? `1.5px solid ${cat.glow}55`
          : "1px solid rgba(255,255,255,0.08)",
        boxShadow: active ? `0 0 20px ${cat.glow}18` : "none",
      }}
    >
      {active && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${cat.glow}15, transparent 70%)`,
          }}
        />
      )}
      <motion.img
        src={cat.icon}
        alt={cat.label}
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 3 + i * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.2,
        }}
        style={{
          width: 52,
          height: 52,
          objectFit: "contain",
          position: "relative",
        }}
      />
      <p className="text-white text-xs font-semibold text-center leading-tight">
        {cat.label}
      </p>
      <p className="text-gray-500 text-[10px] text-center leading-tight">
        {cat.desc}
      </p>
      {active && (
        <div
          className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full animate-pulse"
          style={{ background: cat.glow }}
        />
      )}
    </div>
  );
}

export default function TypingHero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = CATEGORIES[wordIndex].label;
    if (!deleting && subIndex === currentWord.length) {
      const t = setTimeout(() => setDeleting(true), 1400);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % CATEGORIES.length);
      return;
    }
    const t = setTimeout(
      () => setSubIndex((i) => i + (deleting ? -1 : 1)),
      deleting ? 40 : 80,
    );
    return () => clearTimeout(t);
  }, [subIndex, deleting, wordIndex]);

  const typedText = CATEGORIES[wordIndex].label.slice(0, subIndex);
  const active = CATEGORIES[wordIndex];
  const otherCats = CATEGORIES.filter((_, i) => i !== wordIndex);
  const isOtherCatsOdd = otherCats.length % 2 === 1;

  return (
    <section
      id="typing-hero"
      className="relative w-full bg-black lg:h-screen lg:overflow-hidden"
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      <div className="flex flex-col lg:flex-row lg:absolute lg:inset-0 items-center gap-6 px-6 sm:px-10 lg:px-20 pt-48 pb-12 lg:pt-24 lg:pb-0">
        {/* ── LEFT — text ── */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/60"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#00D001] animate-pulse" />
            AI-Powered Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-semibold leading-tight tracking-tight text-white mb-5"
            style={{ fontSize: "clamp(2rem, 3.6vw, 3.5rem)" }}
          >
            The Force Behind
            <br />
            <span className="inline-flex items-center gap-3 flex-wrap mt-1">
              <span>Your</span>
              <span
                className="inline-flex items-center rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(12px)",
                  padding: "0.05em 0.4em",
                  whiteSpace: "nowrap",
                  color: active.glow,
                }}
              >
                {typedText}
                <span
                  className="inline-block animate-pulse ml-1"
                  style={{
                    width: "0.06em",
                    height: "0.75em",
                    background: "currentColor",
                  }}
                />
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 leading-relaxed mb-8"
            style={{
              fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)",
              maxWidth: "40ch",
            }}
          >
            We build the automation, AI, and systems that scale your business —
            done for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-black transition-all duration-300 hover:scale-105"
              style={{
                background: "#FEC503",
                boxShadow: "0 0 24px rgba(254,197,3,0.35)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
              See Our Work
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(12px)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Let's Connect
            </a>
          </motion.div>
        </div>

        {/* ── MOBILE — bento tile grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="lg:hidden w-full mt-2"
        >
          {/* row 1 — 3 tiles */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            {CATEGORIES.slice(0, 3).map((cat, i) => (
              <MobileTile
                key={cat.label}
                cat={cat}
                active={i === wordIndex}
                i={i}
              />
            ))}
          </div>
          {/* row 2 — 3 tiles */}
          <div className="grid grid-cols-3 gap-3">
            {CATEGORIES.slice(3, 6).map((cat, i) => (
              <MobileTile
                key={cat.label}
                cat={cat}
                active={3 + i === wordIndex}
                i={3 + i}
              />
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT — bento grid (desktop) ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:grid w-1/2 shrink-0 gap-3"
          style={{
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "auto auto auto",
          }}
        >
          {/* Large featured card — active category, spans 2 rows */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`featured-${wordIndex}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="relative flex flex-col justify-between rounded-3xl p-6 overflow-hidden"
              style={{
                gridRow: "1 / 3",
                gridColumn: "1",
                minHeight: 280,
                background: "rgba(255,255,255,0.04)",
                border: `1.5px solid ${active.glow}50`,
                boxShadow: `0 0 40px ${active.glow}20`,
              }}
            >
              {/* ambient glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${active.glow}18, transparent 70%)`,
                }}
              />
              <div>
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-semibold mb-4"
                  style={{ background: `${active.glow}20`, color: active.glow }}
                >
                  Active
                </span>
                <p className="text-white font-semibold text-lg leading-snug">
                  {active.label}
                </p>
                <p className="text-gray-500 text-sm mt-1">{active.desc}</p>
              </div>
              {/* floating icon */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex items-end justify-center mt-4"
              >
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full blur-2xl"
                  style={{
                    width: 80,
                    height: 20,
                    background: active.glow,
                    opacity: 0.5,
                  }}
                />
                <img
                  src={active.icon}
                  alt={active.label}
                  style={{ width: 110, height: 110, objectFit: "contain" }}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* smaller cards — every other category */}
          {otherCats.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex items-center gap-3 rounded-2xl p-4 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                gridColumn: isOtherCatsOdd && i === otherCats.length - 1 ? "1 / -1" : undefined,
              }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="relative shrink-0"
              >
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full blur-lg"
                  style={{
                    width: 30,
                    height: 8,
                    background: cat.glow,
                    opacity: 0.45,
                  }}
                />
                <img
                  src={cat.icon}
                  alt={cat.label}
                  style={{ width: 48, height: 48, objectFit: "contain" }}
                />
              </motion.div>
              <div className="min-w-0">
                <p className="text-white text-sm font-medium truncate">
                  {cat.label}
                </p>
                <p className="text-gray-500 text-xs truncate mt-0.5">
                  {cat.desc}
                </p>
              </div>
              {/* subtle glow dot */}
              <div
                className="absolute top-3 right-3 h-1.5 w-1.5 rounded-full"
                style={{ background: cat.glow, opacity: 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
