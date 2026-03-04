import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import CommentSection from "@/components/CommentSection";

export const metadata: Metadata = {
    title: "Community | (주)한국농산어촌네트워크",
    description: "게시글 상세 페이지",
};

type Props = {
    params: Promise<{ id: string }>;
};

export default async function CommunityDetailPage(props: Props) {
    const params = await props.params;
    const id = params.id;

    // Placeholder post data matching the style of the list
    const post = {
        id,
        type: "공지",
        title: "해당 게시판의 상세 내용을 확인할 수 있습니다.",
        writer: "관리자",
        views: "1.2 k",
        date: "2025.03.05",
        content: `안녕하세요, (주)한국농산어촌네트워크입니다.

지금 보시는 페이지는 커뮤니티 게시글의 상세 내용을 보여주는 예시 페이지입니다.
현재는 데이터베이스가 연결되어 있지 않아 내용을 임시로 표기하고 있습니다.

하단의 댓글 창을 통해 방문자가 직접 댓글을 작성할 수 있습니다. 
새로고침 시 임시 데이터는 초기화됩니다.

감사합니다.`,
    };

    return (
        <main className="min-h-screen bg-background pb-20">
            <section className="px-4 pt-16 pb-8 sm:px-6 sm:pt-24 mt-8">
                <FadeIn className="mx-auto max-w-4xl" direction="up">
                    <Link
                        href="/community"
                        className="mb-6 inline-flex flex-col text-sm text-brand font-medium hover:underline sm:text-base cursor-pointer"
                    >
                        &larr; 목록으로 돌아가기
                    </Link>
                    <div className="mb-4 flex items-center gap-3">
                        <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-sm font-semibold text-brand">
                            {post.type}
                        </span>
                        <span className="text-sm text-muted">No. {post.id}</span>
                    </div>
                    <h1 className="mb-6 text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center justify-between gap-4 border-y border-border py-4 text-sm text-muted sm:text-base">
                        <div className="flex items-center gap-4">
                            <span className="font-medium text-foreground">{post.writer}</span>
                            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-border"></span>
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>조회 {post.views}</span>
                        </div>
                    </div>
                </FadeIn>
            </section>

            <div className="px-4 sm:px-6">
                <div className="mx-auto max-w-4xl">
                    <FadeIn direction="up" delay={0.1}>
                        {/* Article Content */}
                        <div className="min-h-[30vh] whitespace-pre-line py-8 text-base leading-loose text-foreground sm:py-12 sm:text-lg">
                            {post.content}
                        </div>

                        {/* Comments Section */}
                        <CommentSection />
                    </FadeIn>
                </div>
            </div>
        </main>
    );
}
