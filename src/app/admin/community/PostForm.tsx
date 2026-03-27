"use client";

import { useRef, useState } from "react";
import RichTextEditor from "@/components/RichTextEditor";
import { createCommunityPost, updateCommunityPost } from "@/app/actions/community";

interface PostFormProps {
  initialData?: {
    id: number;
    title: string;
    content: string;
    category: string;
  };
}

export default function PostForm({ initialData }: PostFormProps) {
  const [content, setContent] = useState(initialData?.content || "");
  const [isPending, setIsPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isPending) return;
    setIsPending(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      formData.set("content", content);

      let result;
      if (initialData) {
        result = await updateCommunityPost(initialData.id, formData);
      } else {
        result = await createCommunityPost(formData);
      }

      if (result?.error) {
        alert(result.error);
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          분류
        </label>
        <select
          name="category"
          defaultValue={initialData?.category || "notice"}
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
          defaultValue={initialData?.title}
          required
          className="w-full rounded-md border border-border px-4 py-2 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          placeholder="게시물 제목을 입력하세요."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          내용
        </label>
        <RichTextEditor name="content" initialValue={initialData?.content} onChange={setContent} />
      </div>

      <div className="flex justify-end pt-4 gap-4">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-brand px-6 py-2.5 font-medium text-white hover:bg-brand-hover disabled:opacity-50"
        >
          {isPending ? "처리 중..." : (initialData ? "수정하기" : "등록하기")}
        </button>
      </div>
    </form>
  );
}
