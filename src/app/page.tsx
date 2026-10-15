"use client";

import React, { useState, useMemo } from "react";
import { CLASS_MEMBERS, MemberDivision } from "@/data/members";
import { MemberCard } from "@/components/members/MemberCard";
import {
  DoubleChevronIcon,
  EditorialOrnamentPill,
} from "@/components/ui/Icons";

const DIVISIONS: ("ALL" | MemberDivision)[] = [
  "ALL",
  "Officers",
  "Cybersecurity",
  "UI/UX & Creative",
  "Software & AI",
];

export default function MembersPage() {
  const [selectedDivision, setSelectedDivision] = useState<"ALL" | MemberDivision>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = useMemo(() => {
    return CLASS_MEMBERS.filter((member) => {
      const matchesDivision =
        selectedDivision === "ALL" || member.division === selectedDivision;
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        member.name.toLowerCase().includes(q) ||
        member.handle.toLowerCase().includes(q) ||
        member.role.toLowerCase().includes(q) ||
        member.tags.some((t) => t.toLowerCase().includes(q));
      return matchesDivision && matchesQuery;
    });
  }, [selectedDivision, searchQuery]);

  return (
    <div className="px-4 sm:px-8 py-12 sm:py-16 max-w-[1180px] mx-auto space-y-12">
      {/* 1. EDITORIAL HEADER WITH HAIRLINE GRID BORDERS */}
      <section className="border border-white/10 rounded-[24px] bg-surface/50 p-6 sm:p-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-white/10 text-[11px] uppercase tracking-[0.08em] text-muted">
          <div className="space-y-1">
            <p className="text-primary font-medium">DIRECTORY — IT-49-03</p>
            <p>COHORT 001 / 42 VERIFIED PROFILES</p>
          </div>

          <div className="flex items-center md:justify-center">
            <EditorialOrnamentPill />
          </div>

          <div className="space-y-1 md:text-right">
            <p className="text-primary font-medium">DIRECT LINKEDIN ACCESS</p>
            <p>CLICK TOP-LEFT BADGE ON ANY CARD</p>
          </div>
        </div>

        <div className="text-center max-w-[680px] mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight leading-[1.06]">
            Meet the{" "}
            <span className="font-serif italic font-normal text-primary/90">
              42 minds
            </span>{" "}
            of IT-49-03
          </h1>
          <p className="text-sm text-muted leading-relaxed">
            Every student card features a direct{" "}
            <strong className="text-primary font-medium">
              LinkedIn logo button
            </strong>{" "}
            in the top-left corner so recruiters, lecturers, and collaborators
            can connect in a single click.
          </p>
        </div>
      </section>

      {/* 2. FILTER TICKER PILL BAR + SEARCH INPUT */}
      <section aria-label="Filter Class Members" className="space-y-4">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          <div className="flex items-center flex-wrap gap-2">
            {DIVISIONS.map((division, idx) => {
              const isActive = selectedDivision === division;
              const count =
                division === "ALL"
                  ? CLASS_MEMBERS.length
                  : CLASS_MEMBERS.filter((m) => m.division === division).length;

              return (
                <React.Fragment key={division}>
                  <button
                    type="button"
                    onClick={() => setSelectedDivision(division)}
                    className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.08em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                      isActive
                        ? "border border-emerald-400/50 bg-emeraldGlow/40 text-primary font-medium"
                        : "border border-white/20 bg-transparent text-muted hover:border-white/40 hover:text-primary"
                    }`}
                  >
                    {division} ({count})
                  </button>
                  {idx < DIVISIONS.length - 1 && (
                    <DoubleChevronIcon className="w-3 h-3 text-vermilion hidden sm:block" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="relative min-w-[260px]">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 42 members, role, or skill..."
              aria-label="Search class members"
              className="w-full px-4 py-2 rounded-full border border-white/15 bg-surface text-xs text-primary placeholder:text-dim focus:outline-none focus:border-emerald-400"
            />
          </div>
        </div>
      </section>

      {/* 3. 42-MEMBER GRID */}
      {filteredMembers.length > 0 ? (
        <section aria-label="Member Cards Grid">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      ) : (
        <div className="rounded-[24px] border border-white/10 bg-surface p-12 text-center space-y-4">
          <p className="text-base text-primary">
            No member in IT-49-03 matches &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedDivision("ALL");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-full border border-white/20 text-xs uppercase tracking-[0.08em] text-primary hover:bg-white/10"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
