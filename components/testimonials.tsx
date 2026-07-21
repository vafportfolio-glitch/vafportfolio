"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const VIDEOS = [
  "https://storage.googleapis.com/msgsndr/XgKDe6KOSdIG9IWlQxy3/media/695ed18da0a484dd212381d5.mp4",
  "https://storage.googleapis.com/msgsndr/XgKDe6KOSdIG9IWlQxy3/media/695ed1603561601c795548c8.mp4",
  "https://storage.googleapis.com/msgsndr/XgKDe6KOSdIG9IWlQxy3/media/695ed1c0a0a4848825238967.mp4",
  "https://storage.googleapis.com/msgsndr/XgKDe6KOSdIG9IWlQxy3/media/695ed17cc98330d2c8317094.mp4",
];

const TEXT_TESTIMONIALS = [
  {
    stars: 5,
    text: "So quick! Thanks mate for helping me getting A2P registration done! I look forward to working with you again.",
    name: "Mackeyjohn",
    role: "Verified Client",
    glow: "#FEC503",
  },
  {
    stars: 5,
    text: "Amazing! You are a true GHL wizard. Thanks Ahtisham for helping me nurturing my email domain.",
    name: "Tonyjan104",
    role: "Business Owner",
    glow: "#0098FD",
  },
  {
    stars: 5,
    text: "Ayesha and her entire team have done an outstanding job, making the entire process seamless and efficient.",
    name: "Tiffany Coley",
    role: "Agency Owner",
    glow: "#00D001",
  },
  {
    stars: 5,
    text: "The automation works seamlessly and has made appointment coordination much easier for our team.",
    name: "Lola Iparraguirre",
    role: "Operations Manager",
    glow: "#FEC503",
  },
  {
    stars: 5,
    text: "Ahtisham and his team have been nothing short of INCREDIBLE! One of my best experiences with an upwork seller in the last 15 years. If you are looking for a solid team that is reliable, communicates in a timely manner and delivers top quality work then I highly suggest these guys!!!",
    name: "David Shabot",
    role: "Owner",
    glow: "#0098FD",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FEC503">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ScrollingCards() {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);

  // duplicate for seamless loop
  const items = [...TEXT_TESTIMONIALS, ...TEXT_TESTIMONIALS];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      if (!paused) {
        posRef.current += 0.4;
        const half = track.scrollHeight / 2;
        if (posRef.current >= half) posRef.current = 0;
        track.style.transform = `translateY(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused]);

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: 520 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* top fade */}
      <div className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #000, transparent)" }} />
      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, #000, transparent)" }} />

      <div ref={trackRef} className="flex flex-col gap-4 will-change-transform">
        {items.map((t, i) => (
          <div
            key={i}
            className="relative rounded-2xl p-5 overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${t.glow}30`,
              boxShadow: `0 0 24px ${t.glow}10`,
            }}
          >
            {/* glow blob */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl pointer-events-none"
              style={{ background: t.glow, opacity: 0.12 }}
            />
            <Stars count={t.stars} />
            <p className="text-gray-300 text-sm leading-relaxed mb-4">"{t.text}"</p>
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                style={{ background: `${t.glow}30`, border: `1px solid ${t.glow}50` }}
              >
                {t.name[0].toUpperCase()}
              </div>
              <div>
                <p className="text-white text-xs font-semibold">{t.name}</p>
                <p className="text-gray-500 text-[10px]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [videoIndex, setVideoIndex] = useState(0);
  const [muted0, setMuted0] = useState(true);
  const [muted1, setMuted1] = useState(true);
  const videoRef0 = useRef<HTMLVideoElement>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);

  const idx0 = videoIndex;
  const idx1 = (videoIndex + 1) % VIDEOS.length;

  const goTo = (idx: number) => {
    setVideoIndex(idx);
    setMuted0(true);
    setMuted1(true);
  };
  const prev = () => goTo((videoIndex - 1 + VIDEOS.length) % VIDEOS.length);
  const next = () => goTo((videoIndex + 1) % VIDEOS.length);

  useEffect(() => {
    videoRef0.current?.load();
    videoRef0.current?.play().catch(() => {});
    videoRef1.current?.load();
    videoRef1.current?.play().catch(() => {});
  }, [videoIndex]);

  function MuteBtn({ muted, toggle }: { muted: boolean; toggle: () => void }) {
    return (
      <button
        onClick={toggle}
        className="absolute bottom-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
        style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}
      >
        {muted ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
        )}
      </button>
    );
  }

  function VideoCard({
    src, vref, animKey, muted, onToggleMute,
  }: {
    src: string; vref: React.RefObject<HTMLVideoElement | null>; animKey: number; muted: boolean; onToggleMute: () => void;
  }) {
    return (
      <div
        className="relative rounded-2xl overflow-hidden w-full"
        style={{ aspectRatio: "9/16", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        <AnimatePresence mode="wait">
          <motion.video
            key={animKey}
            ref={vref}
            src={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted={muted}
            playsInline
            loop
          />
        </AnimatePresence>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)" }} />
        <MuteBtn muted={muted} toggle={onToggleMute} />
      </div>
    );
  }

  return (
    <section id="testimonials" className="relative bg-black px-8 py-24" style={{ fontFamily: "var(--font-outfit)" }}>
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-[0_0_80px_rgba(0,152,253,0.06),0_0_80px_rgba(254,197,3,0.06)] px-6 py-14 sm:px-10 lg:px-16">
          {/* inner tint */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0098FD]/5 via-transparent to-[#FEC503]/5" />

          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{ background: "#0098FD10" }} />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{ background: "#FEC50310" }} />

          {/* heading */}
          <div className="relative text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white font-semibold leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              What Our Clients Say About VA Force
            </motion.h2>
          </div>

          {/* two-col layout */}
          <div className="relative flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">

            {/* LEFT — videos */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 shrink-0 flex flex-col gap-3"
            >
              {/* desktop: 2 videos side by side */}
              <div className="hidden lg:flex gap-3">
                <VideoCard src={VIDEOS[idx0]} vref={videoRef0} animKey={idx0} muted={muted0} onToggleMute={() => setMuted0(m => !m)} />
                <VideoCard src={VIDEOS[idx1]} vref={videoRef1} animKey={idx1} muted={muted1} onToggleMute={() => setMuted1(m => !m)} />
              </div>

              {/* mobile: single centered video */}
              <div className="lg:hidden flex justify-center">
                <div className="w-64">
                  <VideoCard src={VIDEOS[idx0]} vref={videoRef0} animKey={idx0} muted={muted0} onToggleMute={() => setMuted0(m => !m)} />
                </div>
              </div>

              {/* controls */}
              <div className="flex items-center justify-between px-1">
                <div className="flex gap-2">
                  <button onClick={prev} className="w-9 h-9 rounded-full flex items-center justify-center text-white text-lg transition-all hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>‹</button>
                  <button onClick={next} className="w-9 h-9 rounded-full flex items-center justify-center text-white text-lg transition-all hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>›</button>
                </div>
                <div className="flex gap-1.5 items-center">
                  {VIDEOS.map((_, i) => (
                    <button key={i} onClick={() => goTo(i)} className="rounded-full transition-all"
                      style={{ width: i === videoIndex ? 20 : 6, height: 6, background: i === videoIndex ? "#0098FD" : "rgba(255,255,255,0.25)" }} />
                  ))}
                </div>
                <div className="w-9" />
              </div>
            </motion.div>

            {/* RIGHT — scrolling text cards */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full lg:w-1/2"
            >
              <ScrollingCards />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
