"use client";

import Script from "next/script";
import { motion, useReducedMotion } from "motion/react";

export default function CtaSection() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="relative bg-black px-8 py-14" style={{ fontFamily: "var(--font-outfit)" }}>
      <div className="mx-auto max-w-7xl">
        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-10 sm:px-10 sm:py-12 lg:px-14"
          style={{ background: "#0c0c0c" }}
        >
          {/* soft multi-brand ambient glow behind the heading */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[80%] -translate-x-1/2"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(0,152,253,0.3) 0%, rgba(0,208,1,0.15) 40%, rgba(254,197,3,0.1) 60%, transparent 75%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-10 text-center">
            <div className="max-w-2xl">
              <motion.p
                {...(reduce ? {} : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } })}
                className="mb-4 text-lg"
                style={{ fontFamily: "var(--font-caveat)", color: "#FEC503" }}
              >
                Ready when you are
              </motion.p>

              <motion.h2
                {...(reduce ? {} : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] } })}
                className="mb-4 text-white font-semibold leading-tight tracking-tight"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                Let&apos;s build something{" "}
                <span className="inline-block break-words" style={{ color: "#FEC503" }}>
                  remarkable.
                </span>
              </motion.h2>

              <motion.p
                {...(reduce ? {} : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] } })}
                className="mx-auto max-w-[46ch] text-base leading-relaxed text-gray-400"
              >
                From brand identity to full-stack automation - we turn your vision into a product that works and a brand people remember.
              </motion.p>
            </div>

            {/* Embedded form — full width below, no internal scroll: rendered at its natural height */}
            <motion.div
              {...(reduce ? {} : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] } })}
              className="w-full rounded-2xl"
            >
              <iframe
                src="https://link.vaforce.us/widget/form/VDcZu7SZnztkvJBtP8TP"
                style={{ width: "100%", height: "717px", border: "none", borderRadius: "8px" }}
                id="inline-VDcZu7SZnztkvJBtP8TP"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 7"
                data-height="717"
                data-layout-iframe-id="inline-VDcZu7SZnztkvJBtP8TP"
                data-form-id="VDcZu7SZnztkvJBtP8TP"
                title="Form 7"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <Script src="https://link.vaforce.us/js/form_embed.js" strategy="lazyOnload" />
    </section>
  );
}
