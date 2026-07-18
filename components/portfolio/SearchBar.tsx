"use client";

import { useEffect, useRef, useState } from "react";

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  placeholders: string[];
}

export default function SearchBar({
  value,
  onChange,
  placeholders,
}: SearchBarProps) {
  const [displayed, setDisplayed] = useState("");
  const [phIndex, setPhIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Typing effect for placeholder
  useEffect(() => {
    if (value) return; // stop animation when user is typing
    const current = placeholders[phIndex];

    if (typing) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60,
        );
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          35,
        );
      } else {
        setPhIndex((i) => (i + 1) % placeholders.length);
        setTyping(true);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, typing, phIndex, value, placeholders]);

  return (
    <div
      className="relative flex items-center w-full max-w-lg rounded-full px-5 py-2.5 transition-all duration-300 focus-within:border-white/30 shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.2)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* top shimmer — same as navbar */}
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      {/* Search icon */}
      <svg
        className="mr-3 h-4 w-4 shrink-0 text-gray-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      <div className="relative flex-1">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-sm text-white outline-none placeholder-transparent"
          spellCheck={false}
        />
        {/* Animated placeholder — only shown when input is empty */}
        {!value && (
          <span className="pointer-events-none absolute inset-0 flex items-center text-sm text-gray-500 select-none">
            Try &quot;{displayed}
            <span className="animate-pulse">|</span>&quot;
          </span>
        )}
      </div>

      {/* Clear button */}
      {value && (
        <button
          onClick={() => {
            onChange("");
            inputRef.current?.focus();
          }}
          className="ml-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="h-3 w-3"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}
