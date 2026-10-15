import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FeaturedMemberCarousel } from "@/components/members/FeaturedMemberCarousel";
import { MARQUEE_GALLERY_ROWS, CLASS_ACHIEVEMENTS } from "@/data/achievements";
import {
  EditorialOrnamentPill,
  SparkleStar,
  DoubleChevronIcon,
} from "@/components/ui/Icons";

export default function HomePage() {
  return (
    <div className="space-y-24 py-12 sm:py-16">
      {/* 1. HERO SECTION */}
      <section className="relative px-4 sm:px-8 pt-4 text-center max-w-[820px] mx-auto">
        <SparkleStar className="w-3.5 h-3.5 text-white/20 absolute top-6 left-10 hidden sm:block" />
        <SparkleStar className="w-3 h-3 text-white/15 absolute bottom-8 right-12 hidden sm:block" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/15 bg-white/[0.04] text-xs text-primary/90 mb-6">
          <span>IT-49-03 Cohort</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-medium tracking-tight leading-[1.06] text-primary">
          We have{" "}
          <span className="font-serif italic font-normal text-primary/90">
            the brightest
          </span>
          <br />
          <span className="font-serif italic font-normal text-primary/90">
            minds
          </span>{" "}
          in our class
        </h1>

        <p className="mt-5 text-sm sm:text-[15px] text-muted max-w-[46ch] mx-auto leading-relaxed">
          IT-49-03 was built on a simple idea: every developer, designer, and
          security researcher deserves a worthy stage.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] uppercase tracking-[0.08em] text-dim">
          <span>S1 TEKNOLOGI INFORMASI</span>
          <EditorialOrnamentPill />
          <span>42 VERIFIED MEMBERS</span>
        </div>
      </section>

      {/* 2. FEATURED MEMBERS CAROUSEL */}
      <section aria-label="Featured Class Members" className="px-4 sm:px-8 space-y-6">
        <FeaturedMemberCarousel />

        <div className="text-center pt-2">
          <Link
            href="/members"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] hover:border-white/30 text-xs sm:text-sm text-primary transition-all"
          >
            <span>View All 42 Class Members & LinkedIn Profiles</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* 3. 3-ROW STAGGERED PHOTO MARQUEE */}
      <section aria-label="IT-49-03 Cohort Gallery" className="space-y-4 overflow-hidden py-4 marquee-mask">
        {MARQUEE_GALLERY_ROWS.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex items-center justify-center gap-4 ${
              rowIndex === 1
                ? "translate-x-8 sm:translate-x-12"
                : rowIndex === 2
                ? "-translate-x-6"
                : ""
            }`}
          >
            {row.map((imgUrl, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="relative shrink-0 w-[130px] h-[130px] sm:w-[168px] sm:h-[168px] rounded-[20px] overflow-hidden border border-white/10 bg-surface group"
              >
                <Image
                  src={imgUrl}
                  alt={`IT-49-03 cohort moment ${rowIndex + 1}-${colIndex + 1}`}
                  fill
                  sizes="168px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* 4. CLASS ACHIEVEMENTS BENTO TEASER */}
      <section className="px-4 sm:px-8 max-w-[1160px] mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.08em] text-vermilion font-medium mb-2">
              COHORT TRACK RECORD — SS26
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
              Class{" "}
              <span className="font-serif italic font-normal">
                Achievements
              </span>
            </h2>
          </div>

          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-primary hover:text-vermilion transition-colors"
          >
            <span>Open Full Bento Archive</span>
            <DoubleChevronIcon className="w-3.5 h-3.5 text-vermilion" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CLASS_ACHIEVEMENTS.slice(0, 3).map((ach) => (
            <Link
              key={ach.id}
              href="/achievements"
              className="group rounded-[20px] border border-white/10 bg-surface overflow-hidden flex flex-col justify-between hover:border-vermilion/50 transition-all"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={ach.imageUrl}
                  alt={ach.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-canvas/80 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-[0.08em] text-vermilion">
                  {ach.category}
                </span>
              </div>

              <div className="p-5 space-y-2">
                <p className="text-[11px] uppercase tracking-[0.08em] text-dim">
                  {ach.date} • {ach.metric}
                </p>
                <h3 className="text-base font-medium text-primary group-hover:text-vermilion transition-colors">
                  {ach.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
