import React from "react";
import Link from "next/link";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/ui/Icons";

export function BentoFooter() {
  return (
    <footer className="px-4 sm:px-8 pt-16 pb-10 border-t border-white/[0.08]">
      <div className="max-w-[1160px] mx-auto space-y-12">
        {/* Top Pre-Footer Split (Ref 1 Contact / Community Section) */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Left: Rotating Circular Monogram Badge */}
          <div className="space-y-5">
            <div className="text-xs text-muted flex items-center gap-1.5">
              <span className="font-serif italic text-sm text-primary">(49)</span>
              <span>Class Identity</span>
            </div>

            <div className="relative w-28 h-28 flex items-center justify-center rounded-full border border-white/10 bg-surface">
              <svg
                className="w-24 h-24 animate-spin-slow text-dim"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                  />
                </defs>
                <text className="text-[7.5px] uppercase tracking-[0.22em] fill-current">
                  <textPath href="#circlePath">
                    • IT-49-03 • S1 TEKNOLOGI INFORMASI
                  </textPath>
                </text>
              </svg>
              <span className="absolute font-serif italic text-2xl text-primary">
                49
              </span>
            </div>
          </div>

          {/* Right: Editorial Heading + Directory Link */}
          <div className="md:text-right space-y-3">
            <p className="text-sm text-muted">S1 Teknologi Informasi</p>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight leading-[1.08]">
              Meet the{" "}
              <span className="font-serif italic font-normal text-primary/90">
                Cohort
              </span>
            </h2>
            <div className="pt-2 flex md:justify-end">
              <Link
                href="/members"
                className="inline-flex items-center gap-2.5 text-sm text-primary underline underline-offset-4 decoration-white/30 hover:decoration-emerald-400 group"
              >
                <span>Explore all 42 members</span>
                <span className="w-6 h-6 rounded-full bg-primary text-canvas flex items-center justify-center text-xs font-semibold group-hover:translate-x-0.5 transition-transform">
                  ›
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Micro-Metadata Divider Line (Ref 1) */}
        <div className="flex items-center justify-between text-[11px] text-dim pt-4 border-t border-white/[0.07]">
          <span>• Telkom University</span>
          <span>• Class of IT-49-03</span>
        </div>

        {/* Bottom 2-Card Asymmetric Bento Footer (Ref 1 — Clean Non-Agency Version) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left 7-Column Brand Card */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-[24px] border border-white/10 bg-surface p-7 sm:p-9 flex flex-col justify-between min-h-[250px]">
            {/* Subtle Giant Watermark */}
            <span
              aria-hidden="true"
              className="pointer-events-none select-none absolute -bottom-10 right-6 font-serif italic text-[180px] leading-none text-white/[0.03]"
            >
              49
            </span>

            <div className="space-y-3 max-w-sm relative z-10">
              <div className="text-2xl tracking-tight text-primary flex items-baseline">
                <span className="font-serif italic font-normal text-[28px] pr-0.5">
                  it
                </span>
                <span className="font-sans font-semibold tracking-tighter">
                  -49-03
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-muted leading-relaxed">
                We are a collective of 42 undergraduate students building across
                cybersecurity, software engineering, and visual design.
              </p>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 relative z-10">
              <p className="text-[11px] text-dim">
                IT-49-03 © 2026. All Rights Reserved.
              </p>

              <div className="flex flex-wrap gap-1.5">
                <Link
                  href="/"
                  className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] hover:border-white/25 text-[11px] text-muted hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/members"
                  className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] hover:border-white/25 text-[11px] text-muted hover:text-primary transition-colors"
                >
                  42 Members
                </Link>
                <Link
                  href="/achievements"
                  className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] hover:border-white/25 text-[11px] text-muted hover:text-primary transition-colors"
                >
                  Achievements
                </Link>
              </div>
            </div>
          </div>

          {/* Right 5-Column Class Socials & Cohort Status Card (No Newsletter Input) */}
          <div className="lg:col-span-5 rounded-[24px] border border-white/10 bg-surface p-7 sm:p-9 flex flex-col justify-between min-h-[250px]">
            <div className="space-y-4">
              <h3 className="text-base font-medium text-primary leading-snug">
                Explore the Socials
                <br />
                of IT-49-03
              </h3>

              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="IT-49-03 LinkedIn Network"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] hover:bg-linkedin hover:border-linkedin flex items-center justify-center text-primary transition-all"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="IT-49-03 Class Instagram"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/15 flex items-center justify-center text-primary transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="IT-49-03 GitHub Organization"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/15 flex items-center justify-center text-primary transition-all"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="space-y-2.5 pt-6">
              <p className="text-[11px] uppercase tracking-[0.08em] text-dim">
                Cohort Directory Status
              </p>
              <div className="w-full px-4 py-2.5 rounded-full border border-white/10 bg-canvas/60 flex items-center justify-between text-xs text-muted">
                <span>S1 Teknologi Informasi</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emeraldGlow/40 border border-emerald-500/30 text-emerald-300 text-[11px] font-medium">
                  42 Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}