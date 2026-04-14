import type { T } from "./types";

export const UI_LABELS = {
  "ui.navName": { ko: "김세민", en: "S. Kim" },
  "ui.role": { ko: "Role", en: "Role" },
  "ui.systemDesign": { ko: "System Design", en: "System Design" },
  "ui.implementation": { ko: "Implementation", en: "Implementation" },
  "ui.techDecisionsSub": { ko: "Tech Decisions & Troubleshooting", en: "Tech Decisions & Troubleshooting" },
  "ui.techDecisions": { ko: "기술적 의사결정", en: "Tech Decisions" },
  "ui.scrollMore": { ko: "스크롤하여 더 보기", en: "Scroll for more" },
  "ui.scroll": { ko: "scroll", en: "scroll" },
  "ui.lessonsLearned": { ko: "Lessons Learned", en: "Lessons Learned" },
  "ui.troubleshooting": { ko: "Troubleshooting", en: "Troubleshooting" },
  "ui.footerText": { ko: "© 2026 Portfolio. Built with passion.", en: "© 2026 Portfolio. Built with passion." },
  "ui.notFound": { ko: "페이지를 찾을 수 없습니다", en: "Page not found" },
  "ui.goHome": { ko: "홈으로", en: "Go Home" },
  "ui.writing": { ko: "Blog", en: "Blog" },
  "ui.featured": { ko: "Featured", en: "Featured" },
  "ui.blogCta": { ko: "blog.algo-su.com 에서 더 보기", en: "Read more on blog.algo-su.com" },
} as const satisfies Record<string, T>;

export type UILabelKey = keyof typeof UI_LABELS;
