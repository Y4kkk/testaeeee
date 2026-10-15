"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ACHIEVEMENT_CATEGORIES,
  CLASS_ACHIEVEMENTS,
} from "@/data/achievements";
import {
  ClassGeometricEmblem,
  DoubleChevronIcon,
  HandDrawnOval,
} from "@/components/ui/Icons";

export default function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredAchievements =
    activeCategory === "ALL"
      ? CLASS_ACHIEVEMENTS
      : CLASS_ACHIEVEMENTS.filter((a) => a.category === activeCategory);

  return (
    <div className="px-4 sm:px-8 py-12 sm:py-16 max-w-[1180px] mx-auto space-y-20">
      {/* 1. ARCHITECTURAL BENTO HERO */}
      <section aria-label="Achievements Hero Bento" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-4 grid grid-cols-2 gap-4 items-stretch">
          <div className="flex flex-col justify-between py-2">
            <p className="text-[11px] uppercase tracking-[0.08em] leading-relaxed text-primary/90">
              WE COMPETE ACROSS NATIONAL HACKATHONS, CAPTURE THE FLAG ARENAS,
              AND RESEARCH LABS BY CODE, DESIGN, AND SECURITY.
            </p>

            <div className="relative z-20 -mr-14 my-6">
              <p className="font-script text-3xl sm:text-4xl text-vermilion leading-[0.95] -rotate-2">
                Pushing boundaries
                <br />
                together in IT-49-03
              </p>
            </div>
          </div>

          <div className="relative min-h-[300px] sm:min-h-[360px] rounded-[4px] overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80"
              alt="IT-49-03 Cybersecurity & Code"
              fill
              sizes="(max-width: 1024px) 50vw, 20vw"
              className="object-cover grayscale contrast-125"
            />
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col items-center justify-between py-4 border-y lg:border-y-0 lg:border-x border-white/10">
          <ClassGeometricEmblem className="w-20 h-20 text-vermilion mb-4" />

          <div className="my-auto flex items-center justify-center py-6 lg:py-0">
            <h1 className="font-condensed uppercase text-6xl sm:text-7xl lg:text-[78px] leading-[0.86] tracking-tight text-primary lg:-rotate-90 whitespace-nowrap select-none">
              WIN{" "}
              <span className="block text-primary/95">GLOBALLY</span>
            </h1>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[380px] rounded-[4px] overflow-hidden border border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&auto=format&fit=crop&q=80"
            alt="IT-49-03 National Hackathon Stage"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute bottom-3 right-3 px-3 py-1 bg-canvas/85 border border-white/15 text-[10px] uppercase tracking-[0.08em] text-primary">
            IT-49-03 • HALL OF HONORS
          </div>
        </div>
      </section>

      {/* 2. CATEGORY TICKER PILL STRIP */}
      <section aria-label="Achievement Categories" className="py-4 border-y border-white/10">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("ALL")}
            className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.08em] border transition-colors ${
              activeCategory === "ALL"
                ? "border-vermilion bg-vermilion/15 text-primary font-medium"
                : "border-white/30 text-primary/80 hover:border-white"
            }`}
          >
            ALL HONORS
          </button>

          {ACHIEVEMENT_CATEGORIES.map((category) => (
            <React.Fragment key={category}>
              <DoubleChevronIcon className="w-3.5 h-3.5 text-vermilion" />
              <button
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.08em] border transition-colors ${
                  activeCategory === category
                    ? "border-vermilion bg-vermilion/15 text-primary font-medium"
                    : "border-white/30 text-primary/80 hover:border-white"
                }`}
              >
                {category}
              </button>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 3. MONUMENTAL DISPLAY SHOWCASE */}
      <section aria-label="Monumental Class Showcase" className="space-y-6">
        <div className="relative text-center">
          <h2 className="font-condensed uppercase text-[68px] sm:text-[130px] lg:text-[168px] leading-[0.82] tracking-tight text-primary select-none">
            MILESTONES
          </h2>

          <p className="font-script text-4xl sm:text-6xl text-vermilion absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 pointer-events-none drop-shadow">
            All-in-one cohort
          </p>
        </div>

        <div className="relative w-full h-[280px] sm:h-[440px] rounded-[4px] overflow-hidden border border-white/15 -mt-6 sm:-mt-10 z-10">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&auto=format&fit=crop&q=80"
            alt="IT-49-03 Collective Achievement Showcase"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="px-2.5 py-1 rounded bg-vermilion text-canvas text-[10px] font-bold uppercase tracking-[0.08em]">
                FEATURED COHORT WIN
              </span>
              <h3 className="text-xl sm:text-2xl font-medium text-primary mt-2">
                AstraPay & IoT Telemetry Hackathon + National CTF Finals 2026
              </h3>
            </div>
            <span className="text-xs uppercase tracking-[0.08em] text-primary/80">
              BANDUNG, INDONESIA
            </span>
          </div>
        </div>

        <p className="text-[11px] sm:text-xs uppercase tracking-[0.06em] text-primary/80 text-center max-w-[860px] mx-auto leading-relaxed pt-2">
          IT-49-03 UNITES FOUR CORE SPECIALIZATIONS ACROSS TELKOM UNIVERSITY:
          CYBERSECURITY, UI/UX & VISUAL BRANDING, SOFTWARE ENGINEERING, AND
          IOT/AI RESEARCH. OUR COLLECTIVE PROJECTS COMBINE TECHNICAL RIGOR WITH
          DESIGN EXCELLENCE.
        </p>
      </section>

      {/* 4. BENTO GRID OF ACHIEVEMENT CARDS */}
      <section aria-label="Achievement Bento Cards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredAchievements.map((ach, index) => (
          <article
            key={ach.id}
            className={`group rounded-[20px] border border-white/10 bg-surface overflow-hidden flex flex-col justify-between hover:border-vermilion/50 transition-all ${
              index === 0 ? "md:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={ach.imageUrl}
                alt={ach.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-canvas/85 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-[0.08em] text-vermilion font-medium">
                  {ach.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-canvas/85 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-[0.08em] text-primary">
                  {ach.metric}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <p className="text-[11px] uppercase tracking-[0.08em] text-dim">
                  {ach.date}
                </p>
                <h3 className="text-xl font-medium text-primary leading-snug">
                  {ach.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.07] flex items-center justify-between gap-2 flex-wrap">
                <span className="text-[10px] uppercase tracking-[0.08em] text-dim">
                  Contributors:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {ach.participants.map((person) => (
                    <span
                      key={person}
                      className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-primary/90"
                    >
                      {person}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* 5. TILTED PODIUM CARDS + HAND-DRAWN VERMILION OVAL CALLOUT */}
      <section aria-label="Cohort Highlight Callout" className="relative pt-10 pb-8 overflow-hidden">
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-[980px] mx-auto opacity-55">
          <div className="relative h-44 sm:h-64 rounded-[4px] overflow-hidden border border-white/15 -rotate-3">
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80"
              alt="Code session"
              fill
              sizes="33vw"
              className="object-cover grayscale"
            />
          </div>
          <div className="relative h-44 sm:h-64 rounded-[4px] overflow-hidden border border-white/15 rotate-2 translate-y-3">
            <Image
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=80"
              alt="Design session"
              fill
              sizes="33vw"
              className="object-cover grayscale"
            />
          </div>
          <div className="relative h-44 sm:h-64 rounded-[4px] overflow-hidden border border-white/15 -rotate-2">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80"
              alt="Hardware lab"
              fill
              sizes="33vw"
              className="object-cover grayscale"
            />
          </div>
        </div>

        <div className="relative z-20 -mt-20 sm:-mt-28 text-center space-y-2 px-2">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.1em] text-primary/90">
            BUILDING THE NEXT GENERATION OF ENGINEERS WITH GUARANTEED EXCELLENCE
          </p>
          <h2 className="font-condensed uppercase text-4xl sm:text-6xl lg:text-7xl leading-[0.95] text-primary tracking-tight">
            CELEBRATING{" "}
            <span className="relative inline-block px-3">
              HIGH-IMPACT
              <HandDrawnOval className="w-[115%] h-[135%] -left-[7%] -top-[18%] absolute" />
            </span>
            <br />
            ACHIEVEMENTS FOR IT-49-03
          </h2>
        </div>
      </section>
    </div>
  );
}
