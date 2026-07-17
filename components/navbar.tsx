"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#founder", label: "Story" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) return;
    const id = href.replace("/#", "");
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6">
      <div className="relative w-fit rounded-full border border-white/20 bg-white/[0.03] px-5 py-2 backdrop-blur-[20px] shadow-[0_0_0_0.5px_rgba(255,255,255,0.15),0_4px_16px_rgba(0,0,0,0.4)] sm:px-6 sm:py-2.5">
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        <div className="flex items-center gap-6 sm:gap-10">
          <Link href="/" className="shrink-0 text-sm font-semibold tracking-tight text-white sm:text-base">
            LOGO
          </Link>

          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleAnchor(e, link.href)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/#contact"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="shrink-0 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black shadow-sm transition-all hover:bg-white/90 hover:shadow-md active:scale-95 cursor-pointer"
          >
            Start Project
          </a>
        </div>
      </div>
    </nav>
  );
}
