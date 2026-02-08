import type { Metadata } from "next";
import Link from "next/link";

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
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Community
          </h1>
          <p className="text-muted">
            (주)한국농산어촌네트워크의 정보와 현황, 보도자료를 제공합니다.
          </p>
        </div>
      </section>

      <div className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-12">
          <section>
            <h2 className="mb-6 text-lg font-bold text-foreground">
              공지사항
            </h2>
            <ul className="divide-y divide-border rounded-lg border border-border bg-surface">
              {notices.length === 0 ? (
                <li className="px-4 py-8 text-center text-muted">
                  등록된 공지사항이 없습니다.
                </li>
              ) : (
                notices.map((item) => (
                  <li key={item.id}>
                    <Link
                      href="#"
                      className="flex items-center justify-between px-4 py-4 transition-colors hover:bg-stone-50 sm:px-6"
                    >
                      <span className="font-medium text-foreground">
                        {item.title}
                      </span>
                      <span className="text-sm text-muted">{item.date}</span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </section>

          <section>
            <h2 className="mb-6 text-lg font-bold text-foreground">
              보도자료
            </h2>
            <ul className="divide-y divide-border rounded-lg border border-border bg-surface">
              {press.length === 0 ? (
                <li className="px-4 py-8 text-center text-muted">
                  등록된 보도자료가 없습니다.
                </li>
              ) : (
                press.map((item) => (
                  <li key={item.id}>
                    <Link
                      href="#"
                      className="flex items-center justify-between px-4 py-4 transition-colors hover:bg-stone-50 sm:px-6"
                    >
                      <span className="font-medium text-foreground">
                        {item.title}
                      </span>
                      <span className="text-sm text-muted">{item.date}</span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
