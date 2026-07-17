"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black px-8 pb-10 pt-16" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="mb-3 text-lg font-black tracking-tight text-white">VA Force</p>
            <p className="max-w-[30ch] text-sm leading-relaxed text-gray-500">
              Automation, software, and brand design for businesses that want to grow without the noise.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-gray-600">Navigate</p>
            <ul className="space-y-2.5">
              {[
                { label: "Work", id: "work" },
                { label: "Story", id: "founder" },
                { label: "Contact", id: "contact" },
              ].map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`/#${id}`}
                    onClick={(e) => {
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
