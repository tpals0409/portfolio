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
  title: "김세민 | AI DevOps Engineer",
  description:
    "AI 에이전트 12인팀을 설계하고, 6개 마이크로서비스를 구축한 AI DevOps 엔지니어 김세민의 포트폴리오",
  keywords: [
    "AI DevOps",
    "Backend Developer",
    "Portfolio",
    "김세민",
    "Kim Semin",
    "AlgoSu",
  ],
  authors: [{ name: "김세민" }],
  openGraph: {
    title: "김세민 | AI DevOps Engineer",
    description:
      "AI 에이전트 12인팀을 설계하고 프로덕션까지 배포한 실행 중심 엔지니어",
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
