# 김세민 — 포트폴리오

> AI DevOps / Backend Developer | 아이디어를 프로덕션까지 실행하는 엔지니어

배포: Vercel 자동 배포 (push 시 적용)

## 소개

AI 에이전트 12인팀을 설계하고, 6개 마이크로서비스를 혼자 구축한 실행 중심 엔지니어의 포트폴리오입니다. 대표 프로젝트 **AlgoSu**(알고리즘 스터디 관리 플랫폼)의 아키텍처와 기술적 의사결정을 스크롤 기반 인터랙티브 UI로 보여줍니다.

## 기술 스택

| 구분 | 스택 |
|------|------|
| **프론트엔드** | Next.js 16, React 19, Tailwind CSS v4, Framer Motion |
| **다이어그램** | 커스텀 SVG 렌더러 (7개 시스템 설계도, 호버 툴팁) |
| **인터랙션** | 스크롤 기반 sticky 애니메이션, RAF 스무스 스크롤, 스크롤 브레이크 |
| **배포** | Vercel (GitHub push 시 자동 배포) |

## 주요 특징

- **스크롤 기반 UI** — Hero 포커스 풀(blur/scale), 아키텍처 티어 전환, 횡스크롤 기술 카드, 코드 쇼케이스가 모두 스크롤 위치에 연동
- **7개 아키텍처 다이어그램** — Agent Orchestration, Overall, API Gateway, AI Pipeline, Saga Pattern, Monitoring, CI/CD (각 노드에 호버 설명)
- **모노크롬 디자인** — Apple 스타일 블랙/화이트 컨셉, 일관된 타이포그래피와 여백 체계
- **경량화** — ReactFlow(~200KB) 제거, 150줄 커스텀 SVG 렌더러로 대체
- **모바일 대응** — 반응형 레이아웃, 터치 스크롤 최적화

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
├── components/
│   ├── diagrams/           # SVGDiagram + 7개 아키텍처 데이터
│   ├── layout/             # Footer
│   ├── sections/           # Hero, About, Project, Contact
│   └── ui/                 # ScrollProgressBar, SectionDots, SectionBreak
├── hooks/                  # useSmoothScroll, useScrollBrake, useElementProgress
├── lib/                    # 상수, 유틸리티
└── types/                  # TypeScript 인터페이스
```

## 로컬 실행

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인
