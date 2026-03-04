import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Community | (주)한국농산어촌네트워크",
  description: "공지사항과 보도자료를 확인하세요.",
};

type Post = {
  id: number;
  type: "공지" | "보도자료";
  title: string;
  writer: string;
  views: string;
  date: string;
};

// placeholder - 추후 CMS/API 연동 시 교체
const POSTS: Post[] = [
  { id: 40, type: "공지", title: "2025 산촌활력 특화사업 성과 보고대회에서 '가평 조항마을'이 우수 산촌마을로 선정되었습니다.", writer: "관리자", views: "17.0 k", date: "21:15" },
  { id: 39, type: "보도자료", title: "가평 조항마을의 귀촌 체험형 프로그램 '일편단쉼'이 동아일보에 소개되었습니다.", writer: "관리자", views: "14.2 k", date: "21:48" },
  { id: 38, type: "공지", title: "2024 하반기 신규 사업 프로젝트 참여자 모집 안내", writer: "관리자", views: "15.3 k", date: "2024.12.30" },
  { id: 37, type: "공지", title: "(주)한국농산어촌네트워크 본사 이전 안내", writer: "관리자", views: "15.7 k", date: "2024.12.28" },
  { id: 36, type: "공지", title: "동화마을수목원 가을축제 운영 결과 보고서", writer: "관리자", views: "15.4 k", date: "2024.11.20" },
  { id: 35, type: "보도자료", title: "산림특화 사회적경제 모델, 우수 사례로 언론 보도", writer: "관리자", views: "5043", date: "2024.11.18" },
  { id: 34, type: "공지", title: "시골언니 프로젝트 3기 참가자 선정 결과 발표", writer: "관리자", views: "10.2 k", date: "2024.11.08" },
  { id: 33, type: "공지", title: "지역 비즈니스 활성화 포럼 개최 안내", writer: "관리자", views: "16.4 k", date: "2024.10.25" },
  { id: 32, type: "공지", title: "귀산촌 스타트업 교육 프로그램 상세 일정안내", writer: "관리자", views: "9322", date: "2024.10.05" },
  { id: 31, type: "보도자료", title: "한국농산어촌네트워크, 탄소중립체험캠페인 성료", writer: "관리자", views: "10.9 k", date: "2024.09.25" },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background pb-20">
      <section className="px-4 pt-16 pb-8 sm:px-6 sm:pt-24 mt-8">
        <FadeIn className="mx-auto max-w-5xl" direction="up">
          <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            공지사항
          </h1>
          <p className="text-lg text-muted font-medium">
            (주)한국농산어촌네트워크의 정보와 현황을 제공합니다.
          </p>
        </FadeIn>
      </section>

      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-5xl space-y-4">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center justify-between mb-2 border-b-2 border-foreground/30 pb-4">
              <select className="px-3 py-1.5 border border-border rounded-md text-sm text-muted bg-white cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand">
                <option value="recent">추천순</option>
                <option value="views">조회순</option>
                <option value="oldest">오래된순</option>
              </select>
            </div>

            <div className="bg-white">
              <ul className="divide-y divide-border border-b border-border">
                {POSTS.length === 0 ? (
                  <li className="px-4 py-16 text-center text-muted">
                    등록된 게시물이 없습니다.
                  </li>
                ) : (
                  POSTS.map((item) => (
                    <li key={item.id} className="group">
                      <Link
                        href={`/community/${item.id}`}
                        className="grid grid-cols-[3rem_auto_1fr_4rem_4rem_4rem] sm:grid-cols-[4rem_5rem_1fr_5rem_5rem_5rem] items-center gap-2 sm:gap-4 px-2 py-4 transition-colors hover:bg-stone-50"
                      >
                        {/* No */}
                        <div className="flex justify-center">
                          <span className="flex h-6 w-8 items-center justify-center rounded bg-stone-100 text-xs font-semibold text-stone-500 group-hover:bg-brand/10 group-hover:text-brand">
                            {item.id}
                          </span>
                        </div>

                        {/* Category */}
                        <div className="text-center">
                          <span className="inline-flex items-center rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-600 sm:px-3">
                            {item.type}
                          </span>
                        </div>

                        {/* Title */}
                        <div className="truncate pr-4 text-sm font-medium text-foreground sm:text-base">
                          {item.title}
                        </div>

                        {/* Writer */}
                        <div className="text-center border-l border-border/50 text-xs sm:text-sm text-muted hidden sm:block">
                          {item.writer}
                        </div>

                        {/* Views */}
                        <div className="text-center border-l border-border/50 text-xs sm:text-sm text-stone-400">
                          {item.views}
                        </div>

                        {/* Date */}
                        <div className="text-center border-l border-border/50 text-xs sm:text-sm text-stone-400">
                          {item.date}
                        </div>
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
