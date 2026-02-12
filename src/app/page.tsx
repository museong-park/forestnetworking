import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <Image
            src="/1.MAIN/main.png"
            alt="자연과 자원"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* 어두운 오버레이 (텍스트 가독성) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
          {/* 부드러운 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand/10 via-transparent to-brand/20" />
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 max-w-3xl">
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
        </div>
      </section>

      {/* Mission Banner - 로고 + 슬로건 */}
      <section className="relative overflow-hidden border-t border-border bg-gradient-to-r from-purple-800/95 via-purple-900/90 to-purple-950 px-6 py-16 sm:px-8 sm:py-20">
        <div className="relative z-10 mx-auto max-w-6xl space-y-8">
          {/* 슬로건 - 가운데 정렬 */}
          <div className="text-center">
            <p className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              &lsquo;Go&rsquo; Anywhere,
            </p>
            <p className="mt-1 text-3xl font-bold leading-tight text-white sm:ml-6 md:ml-8 sm:text-4xl md:text-5xl lg:text-6xl">
              Make Your Life
            </p>
          </div>
        </div>
      </section>

      {/* 배너 이미지 섹션 */}
      <section className="border-t border-border bg-surface px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/1.MAIN/1.jpg"
                alt="Go농 Go촌 배너"
                width={1200}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 파트너사 로고 섹션 */}
      <section className="border-t border-border bg-stone-50 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden">
            <div className="flex animate-scroll gap-6 sm:gap-8">
              {[
                "partner1.png",
                "partner2.png",
                "partner3.png",
                "partner4.svg",
                "partner5.svg",
                "partner6.png",
                "partner7.svg",
                "partner8.svg",
              ].map((filename, i) => (
                <div
                  key={i}
                  className="flex h-16 shrink-0 items-center justify-center sm:h-20"
                >
                  <Image
                    src={`/1.MAIN/${filename}`}
                    alt={`파트너사 ${i + 1}`}
                    width={90}
                    height={45}
                    className="h-full w-auto max-w-[90px] object-contain opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
              {/* 무한 스크롤을 위한 복제 */}
              {[
                "partner1.png",
                "partner2.png",
                "partner3.png",
                "partner4.svg",
                "partner5.svg",
                "partner6.png",
                "partner7.svg",
                "partner8.svg",
              ].map((filename, i) => (
                <div
                  key={`duplicate-${i}`}
                  className="flex h-16 shrink-0 items-center justify-center sm:h-20"
                >
                  <Image
                    src={`/1.MAIN/${filename}`}
                    alt={`파트너사 ${i + 1}`}
                    width={90}
                    height={45}
                    className="h-full w-auto max-w-[90px] object-contain opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
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
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
