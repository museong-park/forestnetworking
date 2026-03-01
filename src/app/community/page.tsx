import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Community | (주)한국농산어촌네트워크",
  description: "공지사항과 보도자료를 확인하세요.",
};

// placeholder - 추후 CMS/API 연동 시 교체
const notices = [
  { id: 1, title: "공지사항 예시", date: "2025.02.01", type: "notice" },
];
const press = [
  { id: 1, title: "가평 조항마을 우수 산촌마을 선정 소식", date: "2025.01.15", type: "press" },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border bg-brand-muted/50 px-4 py-16 sm:px-6">
        <FadeIn className="mx-auto max-w-3xl" direction="up">
          <h1 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Community
          </h1>
          <p className="text-muted">
            (주)한국농산어촌네트워크의 정보와 현황, 보도자료를 제공합니다.
          </p>
        </FadeIn>
      </section>

      <div className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-12">
          <section>
            <FadeIn direction="up" className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">공지사항</h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div className="overflow-hidden rounded-t-lg border-t-2 border-brand border-x border-b border-border bg-surface shadow-sm">
                <div className="grid grid-cols-[3rem_1fr_6rem] gap-4 border-b border-border bg-stone-50 px-4 py-4 text-sm font-bold text-foreground sm:grid-cols-[4rem_1fr_8rem] sm:px-6">
                  <div className="text-center">No.</div>
                  <div>제목</div>
                  <div className="text-center">등록일</div>
                </div>
                <ul className="divide-y divide-border">
                  {notices.length === 0 ? (
                    <li className="px-4 py-16 text-center text-muted">
                      등록된 공지사항이 없습니다.
                    </li>
                  ) : (
                    notices.map((item, index) => (
                      <li key={item.id}>
                        <Link
                          href="#"
                          className="grid grid-cols-[3rem_1fr_6rem] items-center gap-4 px-4 py-4 transition-colors hover:bg-stone-50/80 sm:grid-cols-[4rem_1fr_8rem] sm:px-6"
                        >
                          <div className="text-center text-sm text-muted">{notices.length - index}</div>
                          <div className="truncate font-medium text-foreground">
                            {item.title}
                          </div>
                          <div className="text-center text-sm text-muted">{item.date}</div>
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </FadeIn>
          </section>

          <section>
            <FadeIn direction="up" className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">보도자료</h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div className="overflow-hidden rounded-t-lg border-t-2 border-brand border-x border-b border-border bg-surface shadow-sm">
                <div className="grid grid-cols-[3rem_1fr_6rem] gap-4 border-b border-border bg-stone-50 px-4 py-4 text-sm font-bold text-foreground sm:grid-cols-[4rem_1fr_8rem] sm:px-6">
                  <div className="text-center">No.</div>
                  <div>제목</div>
                  <div className="text-center">등록일</div>
                </div>
                <ul className="divide-y divide-border">
                  {press.length === 0 ? (
                    <li className="px-4 py-16 text-center text-muted">
                      등록된 보도자료가 없습니다.
                    </li>
                  ) : (
                    press.map((item, index) => (
                      <li key={item.id}>
                        <Link
                          href="#"
                          className="grid grid-cols-[3rem_1fr_6rem] items-center gap-4 px-4 py-4 transition-colors hover:bg-stone-50/80 sm:grid-cols-[4rem_1fr_8rem] sm:px-6"
                        >
                          <div className="text-center text-sm text-muted">{press.length - index}</div>
                          <div className="truncate font-medium text-foreground">
                            {item.title}
                          </div>
                          <div className="text-center text-sm text-muted">{item.date}</div>
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </FadeIn>
          </section>
        </div>
      </div>
    </main>
  );
}
