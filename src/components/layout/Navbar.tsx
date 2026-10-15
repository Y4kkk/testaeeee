import React from "react";
import Image from "next/image";
import { ClassMember } from "@/data/members";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/ui/Icons";

type MemberCardProps = {
  member: ClassMember;
  highlightGlow?: boolean;
};

export function MemberCard({ member, highlightGlow = false }: MemberCardProps) {
  const showActiveGlow = highlightGlow || member.isFeatured;

  return (
    <article
      className={`group relative overflow-hidden rounded-[24px] border p-6 flex flex-col justify-between min-h-[320px] transition-all duration-300 ${
        showActiveGlow
          ? "border-emerald-400/25 bg-surface shadow-[0_0_50px_-15px_rgba(46,90,54,0.45)]"
          : "border-white/10 bg-surface hover:border-white/25"
      }`}
    >
      {/* Ambient Radial Spotlight Glow (Ref 1 Center Card) */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
          showActiveGlow ? "opacity-95" : "opacity-35 group-hover:opacity-80"
        }`}
        style={{
          background:
            "radial-gradient(circle at 50% 38%, rgba(46, 90, 54, 0.55) 0%, rgba(18, 18, 18, 0) 70%)",
        }}
      />

      {/* TOP-LEFT SOCIAL ACTION BAR — Mandatory LinkedIn per member + Optional GitHub/Instagram */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          {/* Slot 1: Mandatory LinkedIn Logo Button */}
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${member.name}'s LinkedIn profile`}
            title={`Connect with ${member.name} on LinkedIn`}
            className="w-9 h-9 rounded-full border border-white/15 bg-white/[0.06] hover:bg-linkedin hover:border-linkedin text-primary flex items-center justify-center transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          {/* Slot 2: Optional GitHub Button */}
          {member.githubUrl && (
            <a
              href={member.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${member.name}'s GitHub profile`}
              title={`${member.name}'s GitHub`}
              className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/20 hover:border-white/30 text-primary/90 flex items-center justify-center transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
          )}

          {/* Slot 3: Optional Instagram Button */}
          {member.instagramUrl && (
            <a
              href={member.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${member.name}'s Instagram profile`}
              title={`${member.name}'s Instagram`}
              className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/20 hover:border-white/30 text-primary/90 flex items-center justify-center transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Subtle Role Pill on Top-Right */}
        <span className="text-[10px] uppercase tracking-[0.08em] text-dim px-2.5 py-1 rounded-full border border-white/[0.07] bg-canvas/40">
          {member.division}
        </span>
      </div>

      {/* CENTER IDENTITY: Circular Avatar + Name + Handle + Bio (Ref 1) */}
      <div className="relative z-10 my-6 flex flex-col items-center text-center">
        <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden border border-white/20 mb-3.5 shadow-md">
          <Image
            src={member.avatarUrl}
            alt={member.name}
            fill
            sizes="72px"
            className="object-cover"
          />
        </div>

        <h3 className="text-lg font-medium text-primary tracking-tight leading-snug">
          {member.name}
        </h3>
        <p className="text-xs text-muted mt-0.5">
          {member.handle} • {member.role}
        </p>

        <p className="text-xs text-muted/90 leading-relaxed mt-3 max-w-[26ch] line-clamp-2">
          {member.bio}
        </p>
      </div>

      {/* BOTTOM 3 TAG PILLS (Ref 1 Stat Pills Adaptation) */}
      <div className="relative z-10 flex items-center justify-center flex-wrap gap-1.5 pt-2">
        {member.tags.map((tag, idx) => (
          <span
            key={tag}
            className={`px-3 py-1 rounded-full text-[11px] border ${
              idx === 0 && showActiveGlow
                ? "border-emerald-400/30 bg-emeraldGlow/30 text-primary"
                : "border-white/10 bg-white/[0.03] text-muted"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}