import type { Metadata } from "next";
import Image from "next/image";
import CertGallery from "@/components/CertGallery";
import OurPathTimeline from "@/components/OurPathTimeline";

export const metadata: Metadata = {
  title: "About | (주)한국농산어촌네트워크",
  description: "대표 인사말, 연혁, 인증서를 소개합니다.",
};

const history = [
  {
    year: "2020",
    items: [
      "3월: 창업기업등록",
      "3월: 산학연 지역관광 프로젝트",
      "8월: 산림특화 사회적경제 모델 수립",
      "10월: 골든포레스트페스티벌 운영",
      "12월: 선도산림경영단지 6차산업모델연구",
    ],
  },
  {
    year: "2021",
    items: [
      "4월: 강원어촌마을 현황조사",
      "4월: 귀산촌 스타트업 교육기관 선정",
    ],
  },
  {
    year: "2022",
    items: [
      "4월: 전문교육기관 지정 (산림청)",
      "5월: 관광벤처기업 선정",
      "9월: 탄소중립체험캠페인 운영",
      "12월: 사회적기업 인증",
    ],
  },
  {
    year: "2023",
    items: [
      "3월: 여성기업 지정",
      "5월: 시골언니프로젝트 운영기관 선정(~25)",
      "9월: 동화마을수목원 가을축제 운영 (~25)",
    ],
  },
  {
    year: "2024",
    items: ["5월: 산촌활력특화사업(양평, 횡성)"],
  },
];

/** "3월: 텍스트" → { month: 3, monthLabel: "3월", label, highlight } */
function parseItem(
  item: string,
  options: { highlight?: "green" | "orange" } = {}
): { month: number; monthLabel: string; label: string; highlight?: "green" | "orange" } {
  const match = item.match(/^(\d{1,2})월:\s*(.+)$/);
  if (!match) return { month: 1, monthLabel: "1월", label: item, ...options };
  const month = parseInt(match[1], 10);
  const monthLabel = `${month}월`;
  return { month, monthLabel, label: match[2].trim(), ...options };
}

const highlightKeywords: Record<string, "green" | "orange"> = {
  창업기업등록: "orange",
  사회적기업: "green",
  관광벤처: "green",
  여성기업: "green",
  시골언니: "green",
};

function getHighlight(label: string, year: string, index: number): "green" | "orange" | undefined {
  if (year === "2020" && index === 0) return "orange";
  for (const [key, type] of Object.entries(highlightKeywords)) {
    if (label.includes(key)) return type;
  }
  return undefined;
}

type TimelineEvent = {
  month: number;
  monthLabel: string;
  label: string;
  highlight?: "green" | "orange";
};

function buildTimelineEvents(): { year: string; events: TimelineEvent[] }[] {
  return history.map(({ year, items }) => ({
    year,
    events: items.map((item, i) => {
      const parsed = parseItem(item);
      const highlight = getHighlight(parsed.label, year, i);
      return { ...parsed, highlight };
    }),
  }));
}

const timelineData = buildTimelineEvents();

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* 우리의 미션 - 히어로 섹션 */}
      <section className="relative flex min-h-[65vh] flex-col items-center justify-center overflow-hidden border-b border-border px-4 py-28 text-center sm:min-h-[70vh] sm:py-36">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          {/* 어두운 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          {/* 브랜드 컬러 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand/20 via-transparent to-brand/30" />
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/90 sm:text-base">
            우리의 미션
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
            Go Anywhere,
            <br />
            Make Your Life
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/95 sm:text-xl">
            자연과 자원이 있는 어느 곳에서든
            <br />
            우리의 삶이 지속 가능하도록 함께합니다
          </p>
        </div>
      </section>

      {/* 歸 → Go: 돌아가는 곳이 아닌 찾아가는 공간으로 */}
      <section className="border-b border-border bg-stone-50 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* 이미지 */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/2.ABOUT/main_center.png"
                  alt="Go농 Go촌"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* 텍스트 */}
            <div className="order-1 space-y-4 lg:order-2">
              <p className="text-2xl font-bold text-brand sm:text-3xl">
                歸 → Go
              </p>
              <p className="text-lg leading-relaxed text-muted sm:text-xl">
                돌아가는 곳이 아닌
                <br />
                <strong className="text-foreground">찾아가는 공간</strong>으로
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXCATION: 탐색과 경험이 가득 찬 공간으로 */}
      <section className="relative overflow-hidden border-b border-border px-4 py-20 sm:px-6 sm:py-24">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <Image
            src="/2.ABOUT/130667122.1.jpg"
            alt="탐색과 경험"
            fill
            className="object-cover"
          />
          {/* 어두운 오버레이 */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* 왼쪽: EXCATION 텍스트 */}
            <div className="space-y-4 text-white">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                EXCATION
              </h2>
              <p className="text-lg leading-relaxed sm:text-xl">
                탐색과 경험이 가득 찬 공간으로
              </p>
            </div>

            {/* 오른쪽: EXPLORATION + LOCATION = EXCATION */}
            <div className="flex flex-col items-center justify-center space-y-2 rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md sm:space-y-4 sm:p-10">
              <p className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                EXPLORATION
              </p>
              <p className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                +
              </p>
              <p className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                LOCATION
              </p>
              <p className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                =
              </p>
              <p className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                EXCATION
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* about_1: 우리는 자연과 자원이 주는 가치에 기반한 */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="flex flex-col">
          <div className="relative aspect-[16/10] w-full min-h-[40vh]">
            <Image
              src="/2.ABOUT/about_1.png"
              alt="자연과 자원"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-stone-100 px-6 py-12 sm:px-10 sm:py-16">
            <p className="mx-auto max-w-3xl text-2xl font-bold leading-relaxed text-foreground sm:text-3xl md:text-4xl">
              우리는 자연과 자원이 주는 가치에 기반한
            </p>
          </div>
        </div>
      </section>

      {/* about_2: 지속적인 삶의 방식을 찾고 주도함으로써 */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="flex flex-col">
          <div className="relative aspect-[16/10] w-full min-h-[40vh]">
            <Image
              src="/2.ABOUT/about_2.png"
              alt="지속적인 삶의 방식"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-stone-100 px-6 py-12 sm:px-10 sm:py-16">
            <p className="mx-auto max-w-3xl text-2xl font-bold leading-relaxed text-foreground sm:text-3xl md:text-4xl">
              지속적인 삶의 방식을 찾고 주도함으로써
            </p>
          </div>
        </div>
      </section>

      {/* about_3: 새로운 방식의 지역 탐색과 확장의 변화를 만들어 냅니다. */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="flex flex-col">
          <div className="relative aspect-[16/10] w-full min-h-[40vh]">
            <Image
              src="/2.ABOUT/about_3.png"
              alt="지역 탐색과 확장"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-stone-100 px-6 py-12 sm:px-10 sm:py-16">
            <p className="mx-auto max-w-3xl text-2xl font-bold leading-relaxed text-foreground sm:text-3xl md:text-4xl">
              새로운 방식의 지역 탐색과 확장의 변화를 만들어 냅니다.
            </p>
          </div>
        </div>
      </section>

      {/* 대표 인사말 */}
      <section className="bg-surface px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-2 text-xl font-bold text-foreground">
            대표 인사말
          </h2>
          <p className="mb-10 text-muted">
            자연과 지역을 바탕으로 한 우리의 방향을 말씀드립니다.
          </p>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              우리는 자연과 자원이 주는 가치에 기반한 지속적인 삶의 방식을 찾고
              주도함으로써, 새로운 방식의 지역 탐색과 확장의 변화를 만들어
              냅니다.
            </p>
            <p>
              (주)한국농산어촌네트워크는 사물의 이치를 끝까지 파고드는
              &lsquo;격물치지(格物致知)&rsquo;를 실천합니다. 우리는 책상 위의
              데이터가 아닌 현장의 틈새를 파고들어, 지역이 가진 진짜 문제와
              기회를 식별하고 그에 맞는 실질적인 솔루션을 설계합니다.
            </p>
            <p className="border-l-4 border-brand bg-brand-muted/50 py-3 pl-5 pr-4 font-medium text-brand">
              &ldquo;농사짓지 않아도 괜찮아&rdquo;
            </p>
            <p>
              우리의 모토는 명확합니다. 농산어촌을 &lsquo;생산&rsquo;의 공간을
              넘어 다양한 재능과 전문성이 지역에서 비즈니스로 발현되도록 돕습니다.
              농사를 짓지 않더라도 지역의 구성원으로서 제 역할을 다하고 수익을
              창출할 수 있는 구조를 만드는 것, 이것이 우리가 실행하는 다양성의
              핵심입니다.
            </p>
            <p>
              우리는 지역 생태계라는 거친 바다에서 개별 주체들이 어떻게
              살아남아야 하는지 고민합니다. 작은 물고기들이 떼를 지어 고래처럼
              움직이며 거대한 흐름을 만들어내듯, 우리는 지역의 자원과 사람을
              전략적으로 엮습니다. 단순히 머무는 것에 그치지 않고, 서로가
              서로의 생존을 뒷받침하는 단단한 네트워크를 구축하여 지역
              비즈니스의 새로운 판을 짭니다.
            </p>
            <p>
              (주)한국농산어촌네트워크는 지역의 본질을 꿰뚫는 통찰과 실행력으로
              농산어촌의 새로운 미래를 증명하겠습니다.
            </p>
            <p className="font-bold text-brand">
              우리의 걸음이 지역의 흐름이 됩니다.
            </p>
            <p className="pt-4 text-sm text-muted">
              ㈜한국농산어촌네트워크 대표 김소민
            </p>
          </div>
        </div>
      </section>

      {/* 연혁 - 시각화 타임라인 (연도 호버 시 해당 연도 연혁 표시) */}
      <section className="border-t border-border bg-stone-100 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 text-xl font-bold text-foreground">
            우리의 경로
          </h2>
          <p className="mb-12 text-muted">
            우리는 지나온 경로의 확인을 통해 목적지를 더욱 확고히 합니다.
          </p>
          <OurPathTimeline data={timelineData} />
        </div>
      </section>

      {/* 인증서 */}
      <section className="border-t border-border bg-background px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 text-xl font-bold text-foreground">
            인증서
          </h2>
          <p className="mb-10 text-muted">
            우리가 받은 인증입니다.
          </p>
          <CertGallery />
        </div>
      </section>
    </main>
  );
}
