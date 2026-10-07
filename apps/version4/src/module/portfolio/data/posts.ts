import type { PostItem } from "./types";

/**
 * 블로그 최근 글. 글 내용을 가져오지 않고, 아래 객체만 직접 관리합니다.
 * - title: 글 제목
 * - href: 실제 글 링크 (새 창으로 열림)
 * - createdAt: 작성일 (YYYY-MM-DD)
 * 화면에는 createdAt 내림차순으로 최근 3개만 표시됩니다.
 * TODO: 제목/날짜/링크가 실제 블로그와 맞는지 한 번 확인해 주세요.
 */
export const posts: PostItem[] = [
  {
    title: "Git 기본 구조 이해하기",
    href: "https://jaemin96.github.io/posts/git/git-step-first/",
    createdAt: "2026-07-03",
  },
  {
    title: "RWD (Responsive Web Design)",
    href: "https://jaemin96.github.io/posts/notes/rwd/",
    createdAt: "2026-05-13",
  },
  {
    title: "성능 최적화 지표 Web Core Vitals",
    href: "https://jaemin96.github.io/posts/notes/web-core-vitals/",
    createdAt: "2026-05-04",
  },
];

export const RECENT_POST_COUNT = 3;

export const recentPosts = [...posts]
  .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  .slice(0, RECENT_POST_COUNT);
