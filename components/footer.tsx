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
              href="mailto:hello@vaforce.io"
              className="text-sm text-gray-500 transition-colors hover:text-white"
            >
              hello@vaforce.io
            </a>
            <div className="mt-6 flex gap-4">
              {[
                { label: "LinkedIn", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Instagram", href: "#" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-xs font-semibold uppercase tracking-wider text-gray-600 transition-colors hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "2rem" }}>
          <p className="text-xs text-gray-700">
            &copy; {year} VA Force. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
