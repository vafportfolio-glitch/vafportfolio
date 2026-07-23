"use client";

const LOGO_SRC =
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/XgKDe6KOSdIG9IWlQxy3/media/694591cc8cae8f7688f413a5.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black px-8 pb-10 pt-16" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <img src={LOGO_SRC} alt="VA Force" className="mb-3 h-9 w-auto" />
            <p className="max-w-[30ch] text-sm leading-relaxed text-gray-500">
              Automation, software, and brand design for businesses that want to grow without the noise.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-gray-600">Navigate</p>
            <ul className="space-y-2.5">
              {[
                { label: "Home", id: "home" },
                { label: "Work", id: "work" },
                { label: "Testimonials", id: "testimonials" },
                { label: "Connect", id: "contact" },
              ].map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={id === "home" ? "/" : `/#${id}`}
                    onClick={(e) => {
                      if (id === "home") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        return;
                      }
                      const el = document.getElementById(id);
                      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }); }
                    }}
                    className="text-sm text-gray-500 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/work" className="text-sm text-gray-500 transition-colors hover:text-white">
                  All Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-gray-600">Get in touch</p>
            <a
              href="mailto:admin@vaforce.us"
              className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              admin@vaforce.us
            </a>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/company/vaforce-us/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:text-white"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.56V9h3.554v11.452z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vaforceofficial?igsh=amtoemFxZGJwamk="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:text-white"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "2rem" }}>
          <p className="text-xs text-gray-700">
            &copy; {year} VA Force. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
