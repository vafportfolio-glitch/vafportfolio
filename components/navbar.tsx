"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LOGO_SRC =
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/XgKDe6KOSdIG9IWlQxy3/media/694591cc8cae8f7688f413a5.png";

const links = [
  { id: "founder", label: "Story" },
  { id: "work", label: "Work" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Connect" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Hysteresis band instead of one threshold — avoids the border flickering
    // on/off when normal scroll jitter hovers right around a single pixel value.
    const onScroll = () => {
      setScrolled((prev) => {
        if (window.scrollY > 40) return true;
        if (window.scrollY < 10) return false;
        return prev;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    setOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Mobile: single full-width bar */}
      <div className="sm:hidden border-b border-white/10 bg-white/[0.03] backdrop-blur-[20px] shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
        <div className="flex items-center justify-between px-5 py-2.5">
          <Link href="/" className="shrink-0 flex items-center">
            <img src={LOGO_SRC} alt="VA Force" className="h-11 w-auto" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {open && (
          <div className="flex flex-col gap-1 border-t border-white/10 px-4 pb-4 pt-3">
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

      {/* Desktop: logo far left, glossy pill (links only) centered, CTA far right — all independent */}
      <div
        className={`relative hidden sm:flex items-center justify-between px-8 py-3 lg:px-12 transition-all duration-300 ${
          scrolled ? "bg-white/[0.04] backdrop-blur-[20px] border-b border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.4)]" : ""
        }`}
      >
        <Link href="/" className="shrink-0 flex items-center">
          <img src={LOGO_SRC} alt="VA Force" className="h-16 w-auto" />
        </Link>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-[20px] shadow-[0_4px_16px_rgba(0,0,0,0.4)] px-5 py-2.5 sm:px-6">
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <ul className="flex items-center gap-1">
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
        </div>

        <a
          href="/#contact"
          onClick={(e) => scrollTo(e, "contact")}
          className="shrink-0 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black shadow-sm transition-all hover:bg-white/90 active:scale-95 cursor-pointer"
        >
          Start Project
        </a>
      </div>
    </nav>
  );
}
