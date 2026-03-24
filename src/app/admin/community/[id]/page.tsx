import { supabase } from "@/lib/supabase";
import { deleteCommunityPost, deleteCommunityComment } from "@/app/actions/community";
import Link from "next/link";
import { notFound } from "next/navigation";
import RichTextContent from "@/components/RichTextContent";

export default async function AdminCommunityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);
  if (isNaN(id)) notFound();

  const { data: post, error } = await supabase
    .from("community_posts")
    .select(`
      *,
      community_comments (*)
    `)
    .eq("id", id)
    .single();

  if (error || !post) {
    notFound();
  }

  // 최신 댓글이 위에 오도록 정렬
  const comments = [...(post.community_comments || [])].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return (
    <div className="max-w-4xl space-y-8">
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/admin/community"
          className="text-stone-500 hover:text-stone-900"
        >
          ← 목록으로
        </Link>
        <form action={async () => {
          "use server";
          await deleteCommunityPost(id);
        }}>
          <button className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 transition-colors">
            게시물 삭제
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-border p-6 sm:p-8">
        <div className="mb-6">
          <span className="inline-flex rounded-full bg-stone-100 px-2.5 py-1 text-xs font-semibold text-stone-600 mb-2">
            {post.category === "notice" ? "공지" : post.category === "article" ? "보도자료" : "자유"}
          </span>
          <h1 className="text-2xl font-bold text-stone-900 mb-2">{post.title}</h1>
          <div className="flex items-center text-sm text-stone-500 gap-4">
            <span>작성자: {post.user_id}</span>
            <span>작성일: {new Date(post.created_at).toLocaleString("ko-KR")}</span>
            <span>조회수: {post.views}</span>
          </div>
        </div>

        <RichTextContent html={post.content} className="border-t border-border pt-6" />
      </div>

      <div>
        <h3 className="text-xl font-bold text-stone-900 mb-4">
          댓글 관리 ({comments.length})
        </h3>
        {comments.length === 0 ? (
          <p className="text-sm text-stone-500 bg-white p-6 rounded-xl border border-border text-center">
            작성된 댓글이 없습니다.
          </p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment) => (
              <li key={comment.id} className="bg-white p-4 rounded-xl border border-border flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-stone-900 text-sm">{comment.user_id}</span>
                    <span className="text-xs text-stone-500">
                      {new Date(comment.created_at).toLocaleString("ko-KR")}
                    </span>
                  </div>
                  <p className="text-stone-800 whitespace-pre-wrap">{comment.content}</p>
                </div>
                <form action={async () => {
                  "use server";
                  await deleteCommunityComment(comment.id, id);
                }}>
                  <button className="text-xs text-red-500 hover:text-red-700 font-medium px-2 py-1 rounded bg-red-50 hover:bg-red-100 transition-colors">
                    삭제
                  </button>
                </form>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
