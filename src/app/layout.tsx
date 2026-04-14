import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "김세민 | Agentic AI Engineer & Builder",
  description:
    "에이전트를 설계·지휘하며 E2E, A2A 프로덕션 시스템을 구축합니다.",
  keywords: [
    "Agentic AI",
    "AI Agent",
    "AI Orchestration",
    "Portfolio",
    "김세민",
    "Kim Semin",
    "AlgoSu",
  ],
  authors: [{ name: "김세민" }],
  openGraph: {
    title: "김세민 | Agentic AI Engineer & Builder",
    description:
      "에이전트를 설계·지휘하며 E2E, A2A 프로덕션 시스템을 구축합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
