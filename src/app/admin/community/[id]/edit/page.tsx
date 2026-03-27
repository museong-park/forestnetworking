import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostForm from "../../PostForm";

export default async function AdminEditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);
  if (isNaN(id)) notFound();

  const { data: post, error } = await supabase
    .from("community_posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !post) {
    notFound();
  }

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-6">
        <Link
          href={`/admin/community/${id}`}
          className="text-stone-500 hover:text-stone-900"
        >
          ← 뒤로가기
        </Link>
        <h2 className="text-2xl font-bold text-brand">커뮤니티 글 수정</h2>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-border p-6 sm:p-8">
        <PostForm initialData={post} />
      </div>
    </div>
  );
}
