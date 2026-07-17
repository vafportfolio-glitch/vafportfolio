"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { id: "founder", label: "Story" },
  { id: "work",    label: "Work"  },
  { id: "contact", label: "Connect" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    setOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center sm:pt-6 sm:px-4">
      <div className="relative w-full rounded-none border-0 border-b border-white/10 bg-white/[0.03] backdrop-blur-[20px] shadow-[0_4px_16px_rgba(0,0,0,0.4)] sm:w-fit sm:rounded-full sm:border sm:border-white/20">
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        <div className="flex items-center justify-between gap-4 px-5 py-2.5 sm:gap-10 sm:px-6">
          {/* Logo */}
          <Link href="/" className="shrink-0 text-sm font-semibold tracking-tight text-white sm:text-base">
            LOGO
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 sm:flex">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`/#${link.id}`}
                  onClick={(e) => scrollTo(e, link.id)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="/#contact"
            onClick={(e) => scrollTo(e, "contact")}
            className="hidden sm:inline-flex shrink-0 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black shadow-sm transition-all hover:bg-white/90 active:scale-95 cursor-pointer"
          >
            Start Project
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex sm:hidden h-8 w-8 flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="flex flex-col gap-1 border-t border-white/10 px-4 pb-4 pt-3 sm:hidden">
            {links.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={(e) => scrollTo(e, link.id)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={(e) => scrollTo(e, "contact")}
              className="mt-2 rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold text-black"
            >
              Start Project
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
