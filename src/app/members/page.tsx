import React from "react";

export function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function GitHubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function SparkleStar({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

export function EditorialOrnamentPill({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center justify-between px-3 py-1 rounded-full border border-white/25 min-w-[116px] text-primary/80 ${className}`}
      aria-hidden="true"
    >
      <SparkleStar className="w-2.5 h-2.5" />
      <span className="w-12 h-[1px] bg-white/20 mx-2" />
      <SparkleStar className="w-2.5 h-2.5" />
    </div>
  );
}

export function DoubleChevronIcon({ className = "w-3.5 h-3.5 text-vermilion" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.5 5.5L11 12L4.5 18.5V5.5ZM13 5.5L19.5 12L13 18.5V5.5Z" />
    </svg>
  );
}

export function ClassGeometricEmblem({ className = "w-16 h-16 text-vermilion" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <circle cx="50" cy="50" r="14" />
      <path d="M36 22 A18 18 0 0 1 64 22 L58 32 A10 10 0 0 0 42 32 Z" />
      <path d="M36 78 A18 18 0 0 0 64 78 L58 68 A10 10 0 0 1 42 68 Z" />
      <path d="M22 36 A18 18 0 0 0 22 64 L32 58 A10 10 0 0 1 32 42 Z" />
      <path d="M78 36 A18 18 0 0 1 78 64 L68 58 A10 10 0 0 0 68 42 Z" />
      <circle cx="50" cy="12" r="5" />
      <circle cx="50" cy="88" r="5" />
      <circle cx="12" cy="50" r="5" />
      <circle cx="88" cy="50" r="5" />
    </svg>
  );
}

export function HandDrawnOval({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 320 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M28 62C14 34 68 12 162 10C254 8 308 28 304 56C300 84 232 100 144 98C62 96 12 76 22 48C30 26 98 16 178 18"
        stroke="#FF3B00"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  );
}