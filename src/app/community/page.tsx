import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Community | (주)한국농산어촌네트워크",
  description: "공지사항과 보도자료를 확인하세요.",
};

export default async function CommunityPage() {
  const { data: posts, error } = await supabase
    .from("community_posts")
    .select("id, category, title, user_id, views, created_at, community_comments(count)")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching community posts:", error);
  }

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
                <option value="recent">최신순</option>
                <option value="views">조회순</option>
                <option value="oldest">오래된순</option>
              </select>
            </div>

            <div className="bg-white">
              <ul className="divide-y divide-border border-b border-border">
                {!posts || posts.length === 0 ? (
                  <li className="px-4 py-16 text-center text-muted">
                    등록된 게시물이 없습니다.
                  </li>
                ) : (
                  posts.map((item) => (
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
                            {item.category === 'notice' ? '공지' : item.category === 'article' ? '보도자료' : '자유'}
                          </span>
                        </div>

                        {/* Title */}
                        <div className="truncate pr-4 text-sm font-medium text-foreground sm:text-base">
                          {item.title}
                          {item.community_comments && item.community_comments[0].count > 0 && (
                            <span className="ml-2 text-brand text-xs font-semibold">
                              [{item.community_comments[0].count}]
                            </span>
                          )}
                        </div>

                        {/* Writer */}
                        <div className="text-center border-l border-border/50 text-xs sm:text-sm text-muted hidden sm:block">
                          관리자
                        </div>

                        {/* Views */}
                        <div className="text-center border-l border-border/50 text-xs sm:text-sm text-stone-400">
                          {item.views}
                        </div>

                        {/* Date */}
                        <div className="text-center border-l border-border/50 text-xs sm:text-sm text-stone-400">
                          {new Date(item.created_at).toLocaleDateString('ko-KR', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                          }).replace(/\.$/, '')}
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
