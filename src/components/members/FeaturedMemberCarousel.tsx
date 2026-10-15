"use client";

import React, { useState } from "react";
import { CLASS_MEMBERS } from "@/data/members";
import { MemberCard } from "@/components/members/MemberCard";

export function FeaturedMemberCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const total = CLASS_MEMBERS.length;

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const visibleMembers = [
    CLASS_MEMBERS[startIndex % total],
    CLASS_MEMBERS[(startIndex + 1) % total],
    CLASS_MEMBERS[(startIndex + 2) % total],
  ];

  return (
    <div className="relative max-w-[1120px] mx-auto px-2 sm:px-6">
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous featured members"
        className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/15 bg-surface/80 backdrop-blur-md hover:border-white/40 text-primary flex items-center justify-center transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      >
        ‹
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {visibleMembers.map((member, index) => (
          <MemberCard
            key={member.id}
            member={member}
            highlightGlow={index === 1}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next featured members"
        className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/15 bg-surface/80 backdrop-blur-md hover:border-white/40 text-primary flex items-center justify-center transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      >
        ›
      </button>
    </div>
  );
}
