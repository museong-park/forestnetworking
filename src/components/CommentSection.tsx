"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

type Comment = {
    id: number;
    author: string;
    text: string;
    date: string;
};

export default function CommentSection() {
    const [comments, setComments] = useState<Comment[]>([
        {
            id: 1,
            author: "오미자 농부",
            text: "정말 유익한 정보 감사합니다! 앞으로도 좋은 소식 기대할게요.",
            date: "2025.03.01 10:23",
        },
        {
            id: 2,
            author: "관심있는 청년",
            text: "산촌 생활에 관심이 많은데 좋은 프로그램이네요. 자세한 내용 참고하겠습니다.",
            date: "2025.03.02 14:05",
        },
    ]);
    const [newComment, setNewComment] = useState("");
    const [authorName, setAuthorName] = useState("방문자");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        const now = new Date();
        const dateStr = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, "0")}.${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

        const added: Comment = {
            id: Date.now(),
            author: authorName.trim() || "방문자",
            text: newComment,
            date: dateStr,
        };

        setComments([...comments, added]);
        setNewComment("");
    };

    return (
        <div className="mt-16 border-t border-border pt-8">
            <FadeIn direction="up">
                <h3 className="mb-6 text-xl font-bold text-foreground">
                    댓글 <span className="text-brand">{comments.length}</span>
                </h3>

                {/* Comment Input */}
                <form onSubmit={handleSubmit} className="mb-10 rounded-xl border border-border bg-stone-50 p-4 sm:p-6">
                    <div className="mb-4 flex items-center gap-4">
                        <input
                            type="text"
                            value={authorName}
                            onChange={(e) => setAuthorName(e.target.value)}
                            placeholder="작성자명"
                            className="w-32 rounded-md border border-border px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                        />
                    </div>
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="댓글을 남겨주세요."
                        rows={3}
                        className="mb-4 w-full resize-none rounded-md border border-border p-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={!newComment.trim()}
                            className="rounded-md bg-brand px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark disabled:opacity-50"
                        >
                            등록하기
                        </button>
                    </div>
                </form>

                {/* Comment List */}
                <div className="space-y-6">
                    {comments.length === 0 ? (
                        <p className="text-center text-sm text-muted">첫 번째 댓글을 남겨보세요.</p>
                    ) : (
                        comments.map((comment) => (
                            <div key={comment.id} className="border-b border-border pb-6 last:border-0">
                                <div className="mb-2 flex items-center justify-between">
                                    <span className="font-semibold text-foreground">{comment.author}</span>
                                    <span className="text-xs text-muted">{comment.date}</span>
                                </div>
                                <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground sm:text-base">
                                    {comment.text}
                                </p>
                            </div>
                        ))
                    )}
                </div>
            </FadeIn>
        </div>
    );
}
