"use client";

import { useRef, useState } from "react";
import RichTextEditor from "@/components/RichTextEditor";
import { createCommunityPost } from "@/app/actions/community";

export default function NewPostForm() {
  const [content, setContent] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    // hidden input의 값이 항상 최신 content로 세팅되므로 그대로 사용
    formData.set("content", content);
    await createCommunityPost(formData);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
        <RichTextEditor name="content" onChange={setContent} />
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
  );
}
