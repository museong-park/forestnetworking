import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import { createCommunityComment } from "@/app/actions/community";
import RichTextContent from "@/components/RichTextContent";

export const metadata: Metadata = {
  title: "Community Detail | (주)한국농산어촌네트워크",
  description: "게시물을 확인하세요.",
};

export default async function CommunityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);
  if (isNaN(id)) notFound();

  // 조회수 증가 및 데이터 조회 병렬 실행
  const [, postResult] = await Promise.all([
    supabase.rpc('increment_view_count', { row_id: id }),
    supabase
      .from("community_posts")
      .select(`
        *,
        community_comments (*)
      `)
      .eq("id", id)
      .single()
  ]);

  const { data: post, error } = postResult;

  if (error || !post) {
    notFound();
  }

  // 최신 댓글이 아래에 오도록 정렬
  const comments = [...(post.community_comments || [])].sort(
    (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  return (
    <main className="min-h-screen bg-background pb-20">
      <section className="px-4 pt-16 pb-8 sm:px-6 sm:pt-24 mt-8">
        <FadeIn className="mx-auto max-w-4xl" direction="up">
          <div className="mb-4">
            <Link href="/community" className="text-sm font-medium text-brand hover:underline">
              ← 목록으로
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-10 shadow-sm">
            <div className="mb-8 border-b border-border pb-6">
              <span className="mb-4 inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-sm font-medium text-stone-600">
                {post.category === "notice" ? "공지" : post.category === "article" ? "보도자료" : "자유"}
              </span>
              <h1 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">작성자</span> 관리자
                </span>
                <span className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Date</span>{" "}
                  {new Date(post.created_at).toLocaleDateString("ko-KR")}
                </span>
                <span className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Views</span> {post.views}
                </span>
              </div>
            </div>
            
            <RichTextContent html={post.content} />
          </div>
        </FadeIn>
      </section>

      {/* 댓글 표시 및 작성 섹션 */}
      <section className="px-4 sm:px-6">
        <FadeIn className="mx-auto max-w-4xl" direction="up" delay={0.2}>
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-10 shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-6">
              댓글 {comments.length}
            </h3>
            
            <div className="space-y-6 mb-8">
              {comments.length === 0 ? (
                <p className="text-sm text-stone-500 text-center py-4">
                  첫 번째 댓글을 남겨주세요.
                </p>
              ) : (
                comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold">
                      {comment.user_id.charAt(0)}
                    </div>
                    <div className="flex-1 border border-border rounded-xl p-4 bg-stone-50">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm text-stone-900">{comment.user_id}</span>
                        <span className="text-xs text-stone-400">
                          {new Date(comment.created_at).toLocaleString("ko-KR")}
                        </span>
                      </div>
                      <p className="text-sm text-stone-800 whitespace-pre-wrap">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="text-lg font-medium text-foreground mb-4">댓글 작성</h4>
              <form action={async (formData) => {
                "use server";
                const content = formData.get("content") as string;
                const author = formData.get("author") as string;
                if (!content || !author) return;
                await createCommunityComment(id, content, author);
              }} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="author"
                    required
                    placeholder="작성자명 (예: 홍길동)"
                    className="w-full sm:w-1/3 rounded-lg border border-border px-4 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <textarea
                    name="content"
                    required
                    rows={4}
                    placeholder="댓글 내용을 입력하세요."
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="rounded-full bg-brand px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
                  >
                    등록
                  </button>
                </div>
              </form>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
