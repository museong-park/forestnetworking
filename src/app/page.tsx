import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="bg-background">
      {/* 1. Hero Section */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
        <div className="absolute inset-0">
          <Image
            src="/1.MAIN/main.png"
            alt="자연과 자원"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand/10 via-transparent to-brand/20" />
        </div>

        <FadeIn className="relative z-10 max-w-3xl" direction="up">
          <h1 className="mb-6 text-2xl font-bold leading-tight text-white drop-shadow-lg sm:text-3xl md:text-4xl">
            &ldquo;자연과 자원이 있는 어느 곳에서든
            <br />
            우리의 삶이 지속 가능하도록 함께합니다&rdquo;
          </h1>
          <p className="text-lg font-medium text-white/95 drop-shadow-md sm:text-xl">
            (주)한국농산어촌네트워크
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-brand-hover hover:shadow-xl sm:px-8 sm:py-3.5"
            >
              우리를 만나보기
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white/90 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white sm:px-8 sm:py-3.5"
            >
              협업 문의
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 2. Mission Banner */}
      <section className="relative overflow-hidden border-t border-border bg-gradient-to-r from-brand/95 via-brand/90 to-brand-hover px-6 py-16 sm:px-8 sm:py-20">
        <div className="relative z-10 mx-auto max-w-6xl space-y-8">
          <FadeIn className="text-center" direction="up">
            <p className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              &lsquo;Go&rsquo; Anywhere,
            </p>
            <p className="mt-1 text-3xl font-bold leading-tight text-white sm:ml-6 md:ml-8 sm:text-4xl md:text-5xl lg:text-6xl">
              Make Your Life
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. About Section (EXCATION 요약) */}
      <section className="border-t border-border bg-surface px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn className="space-y-6" direction="right">
              <p className="text-sm font-bold uppercase tracking-widest text-brand">About Us</p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Life Localization<br />Supporter
              </h2>
              <p className="text-lg leading-relaxed text-muted sm:text-xl">
                &ldquo;농사짓지 않아도 괜찮아&rdquo;
              </p>
              <p className="leading-relaxed text-muted">
                우리는 자연과 자원이 주는 가치에 기반한 지속적인 삶의 방식을 찾고 주도합니다.
                단순한 귀농·귀촌(歸)을 넘어, 지역이 <strong className="font-semibold text-foreground">탐색과 경험(EXCATION)</strong>으로 가득 찬 공간이 될 수 있도록 돕습니다.
              </p>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-brand-hover"
                >
                  우리의 철학 자세히 보기
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
            <FadeIn className="relative aspect-square overflow-hidden rounded-2xl shadow-xl" direction="left" delay={0.2}>
              <Image
                src="/2.ABOUT/130667122.1.jpg"
                alt="탐색과 경험"
                fill
                className="object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Projects Section (주요 활동 요약) */}
      <section className="border-t border-border bg-stone-50 px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="mb-12 text-center lg:mb-16" direction="up">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">Our Projects</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              함께 만드는 지역의 변화
            </h2>
            <p className="mt-4 text-muted">다양한 프로젝트를 통해 자원과 사람을 연결합니다.</p>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { id: "exploration", title: "탐색 경험", desc: "시골언니프로젝트 등 인구소멸 대응 대안 제시", color: "bg-emerald-50 text-emerald-700 border-emerald-100", borderHover: "hover:border-emerald-300" },
              { id: "value", title: "가치 향상", desc: "지역 축제 및 교육을 통한 삶의 질 향상", color: "bg-amber-50 text-amber-700 border-amber-100", borderHover: "hover:border-amber-300" },
              { id: "sustainability", title: "지속 기반", desc: "산촌활력특화사업 등 삶의 기반 구축", color: "bg-teal-50 text-teal-700 border-teal-100", borderHover: "hover:border-teal-300" },
              { id: "regeneration", title: "자원 재생", desc: "산불피해목 브랜드 <온림> 등 자원 순환", color: "bg-stone-100 text-stone-700 border-stone-200", borderHover: "hover:border-stone-400" },
            ].map((cat, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className={`group flex h-full flex-col justify-between rounded-xl border-2 p-6 transition-all duration-300 ${cat.color} ${cat.borderHover}`}>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">{cat.title}</h3>
                    <p className="text-sm leading-relaxed opacity-80">{cat.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-12 text-center" direction="up" delay={0.4}>
            <Link
              href="/project"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-medium text-foreground shadow-xs transition-colors hover:bg-stone-50"
            >
              모든 프로젝트 보기
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 5. Community Section (공지사항 요약) */}
      <section className="border-t border-border bg-surface px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <FadeIn className="mb-10 flex items-center justify-between" direction="up">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand">Community</p>
              <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">네트워크 소식</h2>
            </div>
            <Link
              href="/community"
              className="hidden text-sm font-semibold text-brand hover:underline sm:block"
            >
              전체 보기 &rarr;
            </Link>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <ul className="divide-y divide-border border-y border-border">
              {[
                { id: 1, title: "가평 조항마을 우수 산촌마을 선정 소식 (보도자료)", date: "2025.01.15" },
                { id: 2, title: "2025년도 상반기 '시골언니프로젝트' 참여자 모집 안내", date: "2025.02.01" }
              ].map((item) => (
                <li key={item.id}>
                  <Link
                    href="/community"
                    className="flex flex-col gap-2 py-5 transition-colors hover:bg-stone-50 sm:flex-row sm:items-center sm:justify-between sm:px-4"
                  >
                    <span className="font-medium text-foreground sm:text-lg">{item.title}</span>
                    <span className="text-sm text-muted">{item.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          <div className="mt-6 text-center sm:hidden">
            <Link
              href="/community"
              className="text-sm font-semibold text-brand hover:underline"
            >
              전체 보기 &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 6. 파트너사 로고 섹션 (Hero/Brand Section - no fadein or minimal fade in required) */}
      <FadeIn className="border-t border-border bg-stone-50 px-4 py-8 sm:px-6" direction="up">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden">
            <div className="flex animate-scroll gap-6 sm:gap-8">
              {[
                "partner1.png", "partner2.png", "partner3.png", "partner4.svg",
                "partner5.svg", "partner6.png", "partner7.svg", "partner8.svg",
              ].map((filename, i) => (
                <div key={i} className="flex h-12 shrink-0 items-center justify-center sm:h-16">
                  <Image
                    src={`/1.MAIN/${filename}`}
                    alt={`파트너사 ${i + 1}`}
                    width={90}
                    height={45}
                    className="h-full w-auto max-w-[80px] object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:max-w-[100px]"
                  />
                </div>
              ))}
              {[
                "partner1.png", "partner2.png", "partner3.png", "partner4.svg",
                "partner5.svg", "partner6.png", "partner7.svg", "partner8.svg",
              ].map((filename, i) => (
                <div key={`duplicate-${i}`} className="flex h-12 shrink-0 items-center justify-center sm:h-16">
                  <Image
                    src={`/1.MAIN/${filename}`}
                    alt={`파트너사 ${i + 1}`}
                    width={90}
                    height={45}
                    className="h-full w-auto max-w-[80px] object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:max-w-[100px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 7. 협업 문의 폼 */}
      <section className="border-t border-border bg-stone-100 px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-xl">
          <FadeIn className="mb-10 text-center" direction="up">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              언제, 어디서든 협업이 필요할 땐
            </h2>
            <p className="mt-3 text-muted">
              지역의 변화를 함께 만들어갈 파트너를 기다립니다.
            </p>
          </FadeIn>
          <FadeIn className="rounded-2xl bg-surface p-6 shadow-xl sm:p-10" direction="up" delay={0.2}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
