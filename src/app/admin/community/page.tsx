import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default async function AdminCommunityPage() {
  const { data: posts, error } = await supabase
    .from("community_posts")
    .select(`
      id,
      title,
      category,
      created_at,
      views,
      community_comments (count)
    `)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-brand">커뮤니티 관리</h2>
        <Link
          href="/admin/community/new"
          className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-hover"
        >
          새 글 작성
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
        <table className="w-full text-left text-sm text-stone-600">
          <thead className="bg-stone-50 text-stone-700 font-medium border-b border-border">
            <tr>
              <th className="px-6 py-4">No</th>
              <th className="px-6 py-4">분류</th>
              <th className="px-6 py-4 w-1/2">제목</th>
              <th className="px-6 py-4 text-center">조회수</th>
              <th className="px-6 py-4 text-center">작성일</th>
              <th className="px-6 py-4 text-center">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {!posts || posts.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-stone-500">
                  작성된 글이 없습니다.
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id} className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4">{post.id}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-stone-100 px-2 py-1 text-xs font-semibold text-stone-600">
                      {post.category === "notice" ? "공지" : post.category === "article" ? "보도자료" : "자유"}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-stone-900 truncate">
                    {post.title}
                    {post.community_comments[0].count > 0 && (
                      <span className="ml-2 text-brand text-xs">
                        [{post.community_comments[0].count}]
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">{post.views}</td>
                  <td className="px-6 py-4 text-center">
                    {new Date(post.created_at).toLocaleDateString("ko-KR")}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Link
                      href={`/admin/community/${post.id}`}
                      className="text-brand hover:underline font-medium"
                    >
                      상세/댓글
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
