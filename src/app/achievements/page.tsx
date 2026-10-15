"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/members", label: "Members" },
  { href: "/achievements", label: "Achievements" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 px-4 sm:px-8 py-5 bg-elevated/80 backdrop-blur-md border-b border-white/[0.06]">
      <nav
        aria-label="Main Navigation"
        className="max-w-[1200px] mx-auto flex items-center justify-between gap-4"
      >
        {/* Left Class Wordmark (Ref 1 + Ref 2 style) */}
        <Link
          href="/"
          className="text-xl sm:text-2xl tracking-tight text-primary flex items-baseline group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg px-1"
        >
          <span className="font-serif italic font-normal text-2xl sm:text-[26px] pr-0.5 group-hover:text-emerald-400 transition-colors">
            it
          </span>
          <span className="font-sans font-semibold tracking-tighter">-49-03</span>
        </Link>

        {/* Center Route Pills (Ref 1) */}
        <ul className="flex items-center gap-1 sm:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                    isActive
                      ? "border border-white/25 bg-white/[0.07] text-primary font-medium shadow-sm"
                      : "border border-transparent text-muted hover:text-primary hover:bg-white/[0.03]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Static Class Badge (Non-agency clean cohort tag) */}
        <div className="hidden sm:flex items-center gap-2">
          <Link
            href="/members"
            className="px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.03] hover:border-white/30 text-xs text-primary transition-colors flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>42 Members</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}