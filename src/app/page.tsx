import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center bg-gradient-to-b from-brand-muted/60 to-surface px-4 py-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-100/30 via-transparent to-transparent" />
        <div className="relative max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand">
            G0농 Go촌
          </p>
          <h1 className="mb-6 text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
            &ldquo;자연과 자원이 있는 어느 곳에서든
            <br />
            우리의 삶이 지속 가능하도록 함께합니다&rdquo;
          </h1>
          <p className="text-lg font-medium text-brand">
            (주)한국농산어촌네트워크
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
            >
              우리를 만나보기
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-brand px-6 py-3 text-sm font-medium text-brand transition-colors hover:bg-brand-muted"
            >
              협업 문의
            </Link>
          </div>
        </div>
      </section>

      {/* Core identity */}
      <section className="border-t border-border bg-surface px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-xl font-bold text-foreground sm:text-2xl">
            우리는
          </h2>
          <p className="mb-4 leading-relaxed text-muted">
            자원의 소중함과 가치에 기반한 활용을 제공하고,
            <br />
            사람과 사람을 잇는 다양한 커뮤니티를 제안하며,
            <br />
            자원과 사람을 연결해 지역과 공간의 가치 향상에 주목하는
          </p>
          <p className="text-2xl font-bold text-brand sm:text-3xl">
            Life Localization Supporter
          </p>
          <p className="mt-4 text-muted">입니다.</p>
        </div>
      </section>

      {/* 협업 문의 폼 */}
      <section className="border-t border-border bg-stone-100 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-2 text-center text-xl font-bold text-foreground sm:text-2xl">
            언제, 어디서든 협업이 필요할 땐
          </h2>
          <p className="mb-8 text-center text-muted">Contact</p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
