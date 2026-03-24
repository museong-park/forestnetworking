import Link from "next/link";
import NewPostForm from "./NewPostForm";

export default function AdminNewPostPage() {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/admin/community"
          className="text-stone-500 hover:text-stone-900"
        >
          ← 뒤로가기
        </Link>
        <h2 className="text-2xl font-bold text-brand">새 커뮤니티 글 작성</h2>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-border p-6 sm:p-8">
        <NewPostForm />
      </div>
    </div>
  );
}
