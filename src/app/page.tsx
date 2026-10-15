export type AchievementItem = {
  id: string;
  title: string;
  category: "HACKATHONS" | "CTF WINS" | "ACADEMIC HONORS" | "RESEARCH & IOT" | "CREATIVE";
  date: string;
  metric: string;
  description: string;
  imageUrl: string;
  participants: string[];
};

export const ACHIEVEMENT_CATEGORIES = [
  "HACKATHONS",
  "CTF WINS",
  "ACADEMIC HONORS",
  "RESEARCH & IOT",
  "CREATIVE",
] as const;

export const CLASS_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-01",
    title: "1st Place — National FinTech & IoT Telemetry Hackathon",
    category: "HACKATHONS",
    date: "JUN 2026",
    metric: "TOP 1% OF 320+ TEAMS",
    description:
      "Engineered an end-to-end vehicle telemetry and seamless digital payment integration prototype with real-time edge verification.",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&auto=format&fit=crop&q=80",
    participants: ["I Gede Arya Yoga Saputra", "Dimas Satrio Wibowo", "Farhan Rizky Darmawan"],
  },
  {
    id: "ach-02",
    title: "Finalist — National Cyber Defense & CTF Championship",
    category: "CTF WINS",
    date: "MAY 2026",
    metric: "14 CHALLENGES SOLVED",
    description:
      "Cleared digital forensics, OSINT, web exploitation, and binary reverse-engineering categories in a 36-hour nonstop sprint.",
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
    participants: ["Raka Aditya Nugraha", "I Gede Arya Yoga Saputra", "Ilham Akbar Maulana"],
  },
  {
    id: "ach-03",
    title: "Best UI/UX Design System — Digital Literacy Platform",
    category: "CREATIVE",
    date: "MAR 2026",
    metric: "98/100 JURY SCORE",
    description:
      "Recognized for accessible dark-mode token architecture, micro-interactions, and high-contrast editorial typography.",
    imageUrl:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&auto=format&fit=crop&q=80",
    participants: ["I Gede Arya Yoga Saputra", "Nadine Kusuma Wardhani", "Tiara Anindya Larasati"],
  },
  {
    id: "ach-04",
    title: "Gold Medal — Biometric ESP32 IoT Verification Prototype",
    category: "RESEARCH & IOT",
    date: "FEB 2026",
    metric: "PATENT PENDING",
    description:
      "Hardware-level fingerprint authentication paired with offline SD logging and real-time cloud synchronization.",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
    participants: ["Farhan Rizky Darmawan", "Reza Mahendra Putra", "Naufal Pratama Wijaya"],
  },
  {
    id: "ach-05",
    title: "12 Laboratory Teaching Assistants Selected from IT-49-03",
    category: "ACADEMIC HONORS",
    date: "AUG 2026",
    metric: "HIGHEST IN COHORT",
    description:
      "Twelve members appointed as Algorithm & Programming, Computer Network, and Operating System practicum assistants.",
    imageUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80",
    participants: ["I Gede Arya Yoga Saputra", "Fajar Ramadhan Hidayat", "Alya Maharani Putri"],
  },
  {
    id: "ach-06",
    title: "Best Open-Source CLI & Agent Workflow Tooling",
    category: "RESEARCH & IOT",
    date: "SEP 2026",
    metric: "1.2K+ GITHUB STARS",
    description:
      "High-speed Go and C++ task management CLI and multi-provider AI routing utilities built by the class developer collective.",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
    participants: ["Kevin Alexander Tan", "Aldi Pratama Putra", "Dimas Satrio Wibowo"],
  },
];

export const MARQUEE_GALLERY_ROWS: string[][] = [
  [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=80",
  ],
];