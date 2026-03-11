import { createCommunityPost } from "@/app/actions/community";
import Link from "next/link";

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
        <form action={async (formData) => {
          "use server";
          await createCommunityPost(formData);
        }} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">
              분류
            </label>
            <select
              name="category"
              className="w-full rounded-md border border-border px-4 py-2 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            >
              <option value="notice">공지사항</option>
              <option value="article">보도자료</option>
              <option value="free">자유</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">
              제목
            </label>
            <input
              type="text"
              name="title"
              required
              className="w-full rounded-md border border-border px-4 py-2 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              placeholder="게시물 제목을 입력하세요."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">
              내용
            </label>
            <textarea
              name="content"
              required
              rows={15}
              className="w-full rounded-md border border-border px-4 py-2 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand whitespace-pre-wrap"
              placeholder="내용을 작성하세요."
            />
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="rounded-md bg-brand px-6 py-2.5 font-medium text-white hover:bg-brand-hover"
            >
              등록하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
