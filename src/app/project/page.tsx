import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Project | (주)한국농산어촌네트워크",
  description: "탐색 경험, 가치 향상, 지속 기반, 자원 재생 프로젝트를 소개합니다.",
};

const categories = [
  {
    id: "exploration",
    title: "탐색 경험 프로젝트",
    tagline: "새로운 방식의 탐색, 체험 프로그램의 기획·운영을 통해 인구소멸에 대응하는 다양한 대안을 제시합니다.",
    color: "emerald",
    projects: [
      {
        name: "시골언니프로젝트 (2025 1기: 08.18~23 / 2기: 09.08~13)",
        desc: "귀농·귀촌에 관심 있는 20~40대 여성을 대상으로 새로운 지역(원주)에서 이주·정주의 가능성을 경험하고, 스스로 설계해 볼 수 있도록 다양한 탐색·체험을 제공. 참가자의 자연스럽고 적극적인 귀농·귀촌 경험이 실제 이주·정주의 성과로 이어지는 지역 탐색·교육 프로그램 기획 및 운영.",
        images: [{ src: "/4.프로젝트/exploration_1.JPG", alt: "탐색 경험 – 마을·공동체 체험" }, { src: "/4.프로젝트/exploration_2.JPG", alt: "탐색 경험 – 핸즈온 워크숍" }],
      },
      {
        name: "BETTER里 인구감소지역 관광인구 증대 사업",
        desc: "가평 조항마을을 중심으로 지역이 보유한 '사람'과 '삶의 방식'에 집중하고 콘텐츠화하여 방문객이 능동적으로 탐색하고 관계를 맺는 '마을 탐색형 프로그램 Excation' 설계 및 도입. 단순체험·원격근무에서 이주·정착 경험, 설계 및 탐색으로 확장하여 관계인구 확장 거점화 모델 구현.",
        images: [],
      },
    ],
  },
  {
    id: "value",
    title: "가치 향상 프로젝트",
    tagline: "다양한 지역, 다양한 구성원들의 삶의 질을 향상시켜 지속적인 만족도를 제공하는 프로그램 기획·운영, 서비스 개발·개선을 주도합니다.",
    color: "amber",
    projects: [
      {
        name: "동화마을수목원 가을축제 (2025.10.25)",
        desc: "체험·교육·놀이·공연 등 온가족이 함께 즐길 수 있는 프로그램을 통해 산림문화복지 서비스를 제공하고 산림의 공익적 가치를 공유하는 '2025 동화마을수목원 가을축제' 용역 수행.",
        images: [{ src: "/4.프로젝트/value_1.JPG", alt: "동화마을수목원 가을축제 – 가족 체험 활동" }],
      },
      {
        name: "영월 녹전중학교 청소년 푸드아트테라피 (12.24)",
        desc: "학생, 가족, 교원이 함께 놀이·교육·문화·예술·상담·치유를 통합하는 새로운 상담기법인 푸드아트테라피를 통해 소통 증진과 새로운 식문화 형성, 이를 통해 건전한 가정·학교 문화를 조성하는 융합수업과정 기획 및 운영.",
        images: [ {
          src: "/4.프로젝트/value_2.jpg", alt: "영월 녹전중학교 청소년 푸드아트테라피"
        }], // 이미지 없음 (원하면 나중에 추가)
      },
      {
        name: "산촌활력특화사업 횡성 (2차년도)",
        desc: "농산어촌 지역 특성에 맞는 예방·치유 중심의 건강관리를 실현하고, 방문진료·재택의료 중심의 보편의료 서비스를 위한 산촌형 서비스 '의료복지사회적협동조합' 설립 추진.",
        images: [{ src: "/4.프로젝트/value_3.jpg", alt: "의료복지사회적협동조합 설립 발기인대회" }],
      },
    ],
  },
  {
    id: "sustainability",
    title: "지속 기반 구축 프로젝트",
    tagline: "자원의 탐색, 안정적인 활용과 사업화를 통해 지속가능한 삶의 기반을 설계, 구축합니다.",
    color: "teal",
    projects: [
      {
        name: "산촌활력특화사업 '가평 조항마을'",
        desc: "마을이 품고 있는 자원인 국유림 '화백숲'을 활용한 다양한 체험을 바탕으로 지역을 탐색하고, 산촌생활을 경험할 수 있도록 프로그램 기획. 국유림을 활용한 지속가능한 사업화를 위한 '국유림상생포럼' 개최. 자원 활용과 이에 기반한 다양한 사업화를 통한 관계인구 확장, 지역 탐색 프로그램 개발 용역 수행.",
        images: [{ src: "/4.프로젝트/sustainability_1.jpg", alt: "가평 조항마을 – 국유림 화백숲 체험" }],
      },
      {
        name: "산촌활력특화사업 '여주 주어리마을'",
        desc: "주변 관광자원인 양자산과 마을 주요 시설인 해독센터를 연계하는 사업 개발을 통해 마을 주민의 혜택은 물론 방문객 유치 및 방문자 대상 제품(능이버섯차) 기획 및 출시를 통해 지속적으로 수익사업을 전개할 수 있는 순환사업모델 개발 용역 수행.",
        images: [ {
          src: "/4.프로젝트/sustainability_2.jpg", alt: "여주 주어리마을 – 지역 연계 사업"
        }, {
          src: "/4.프로젝트/sustainability_3.jpg", alt: "여주 주어리마을 – 지역 연계 사업"
        }],
      },
      {
        name: "산촌활력특화사업 '양평 수미마을' (2차년도)",
        desc: "청년 임업후계자 교육을 통해 예비 청년농업인들의 임업 유입을 유도하고 정착 성과를 창출. 청년 임업인의 취·창업에 특화된 산촌모델 제시, 임산물 가공기반 체계 수립·강화로 신제품 개발 능력과 생산력 향상, 마을 공장의 안정적인 가동률로 지속가능한 산촌활력 모델 개발 및 완성.",
        images: [{ src: "/4.프로젝트/sustainability_4.jpg", alt: "양평 수미마을 – 청년 임업·가공 기반" }],
      },
    ],
  },
  {
    id: "regeneration",
    title: "자원 재생 프로젝트",
    tagline: "산불피해목을 활용한 브랜드와 제품 개발을 바탕으로 자원의 소비를 넘어 순환과 재생, 이를 통한 생태계 복원을 향해 나아갑니다.",
    color: "stone",
    projects: [
      {
        name: "산불피해목 기반 브랜드 <온림> 런칭 & 제품 개발",
        desc: "산불피해목의 활용 가치에 기반한 브랜드 <온림> 기획·런칭. 지역별 관광자원(산)과 연계를 통한 지속 운영이 가능한 굿즈 시리즈 '다다름'과 숲에 기반해 산림자원(산불피해목)의 사회적·교육적 가치를 공유하는 목재 교구 시리즈 '머무름' 개발. 단순 자원 활용을 넘어 순환, 재생, 생태계복원의 가치를 전달.",
        images: [{ src: "/4.프로젝트/regeneration_1.jpg", alt: "브랜드 온림 – 산불피해목 활용 제품" }],
      },
    ],
  },
];

const colorClasses: Record<string, { card: string; accent: string }> = {
  emerald: {
    card: "border-emerald-200/80 bg-linear-to-b from-emerald-50/80 to-background shadow-sm",
    accent: "bg-emerald-500",
  },
  amber: {
    card: "border-amber-200/80 bg-linear-to-b from-amber-50/60 to-background shadow-sm",
    accent: "bg-amber-500",
  },
  teal: {
    card: "border-teal-200/80 bg-linear-to-b from-teal-50/60 to-background shadow-sm",
    accent: "bg-teal-500",
  },
  stone: {
    card: "border-stone-200/80 bg-linear-to-b from-stone-50/80 to-background shadow-sm",
    accent: "bg-stone-600",
  },
};

/** 연도·월 순 전체 프로젝트 타임라인 (하단 리스트용) */
const chronologicalProjects: { date: string; description: string }[] = [
  { date: "2020. 03.", description: "한국관광공사 산학연관협력 지역관광 프로젝트 3Go_산촌Go, 감성Go, 맛Go" },
  { date: "2020. 08.", description: "지역상생형 산림특화 사회적경제 모델 수립 1차 (한국임업진흥원)" },
  { date: "2020. 10.", description: "골든포레스트페스티벌 운영" },
  { date: "2020. 12.", description: "선도산림경영단지 6차산업모델연구 (춘천시)" },
  { date: "2021. 03.", description: "지역순환형 임업을 위한 경영주체 현황 및 실태조사 (국립산림과학원)" }, 
  { date: "2021. 03.", description: "지역상생형 산림특화 사회적경제 모델 수립 2차 (한국임업진흥원)" },
  { date: "2021. 04.", description: "강원 어촌마을 현황 조사 (강원귀어귀촌지원센터)" },
  { date: "2021. 04.", description: "귀산촌 스타트업(산림관광비즈니스) 교육기관 선정(한국임업진흥원)" },
  { date: "2021. 04.", description: "문화자원 개발 및 활성화사업(36.5도시프로젝트)(원주시창의문화도시지원센터)" },
  { date: "2021. 05.", description: "경북어촌특화지원센터 자원조사 및 DB구축" },
  { date: "2021. 05.", description: "원주, 삼척 주민사업체의 사업화 관리(한국관광공사)" },
  { date: "2021. 05.", description: "제12회 예비·초기관광벤처사업 추진(한국관광공사)" },
  { date: "2021. 09.", description: "한국관광공사 농어촌상생기금활용 팸투어 프로그램 운영(대중소기업 농어업협력재단)" },
  { date: "2022. 05.", description: "제13회 성장 관광벤처사업 추진(한국관광공사)" },
  { date: "2022. 05.", description: "귀산촌인의 지리산둘레길 인식 실태조사(국립산림과학원)" },
  { date: "2022. 07.", description: "등산, 트레킹 등 숲길 체험활동이 산촌경제와 탄소중립에 기여하는 효과 연구 (산림청)" },
  { date: "2022. 07.", description: "평창홍보영상 제작 및 스마트 스크린 운영관리 대행용역(한국관광공사)" },
  { date: "2022. 08.", description: "횡성 청일 선도산림경영단지 융복합 모델 (횡성군산림조합, 횡성군청)" },
  { date: "2022. 09.", description: "한국관광공사 농어촌상생기금활용 팸투어 프로그램 운영(대·중소기업 농어업협력재단)" },
  { date: "2022. 09.", description: "탄소중립 체험 및 캠페인(설악산 국립공원 친환경여행 캠페인) (한국관광공사)" },
  { date: "2022. 09.", description: "2022 대한민국 독서대전 평가 용역(원주시평생교육원 시립중앙도서관)" },
  { date: "2023. 03.", description: "인제군 진동계곡마을 활성화사업 주민역량강화 용역 (인제군농업기술센터)" },
  { date: "2023. 03.", description: "여성농업인 영농여건 개선 교육 공모선정(농림수산식품교육문화정보원)/(원주, 영월)" },
  { date: "2023. 05.", description: "인구소멸위기지역 찾아가는 청소년산림교육 용역 (산림청, 영월군 주천중학교)" },
  { date: "2023. 05.", description: "시골언니 프로젝트 운영기관 (농림수산식품교육문화정보원)" },
  { date: "2023. 07.", description: "국가숲길, 명품숲길 50 홍보 용역 (산림청)" },
  { date: "2023. 09.", description: "둔내면 도시재생대학 운영 (횡성군)" }, 
  { date: "2024. 02.", description: "목재문화체험장 타당성 조사 (원주시)" },
  { date: "2024. 05.", description: "시골언니 프로젝트 운영기관 (농림수산식품교육문화정보원)" },
  { date: "2025. 05.", description: "시골언니 프로젝트 운영 (농림수산식품교육문화정보원)" },
  { date: "2025. 05.", description: "2024년 산촌활력 특화사업(2차년도 추가지원 양평, 횡성) 운영(한국임업진흥원)" },
  { date: "2025. 06.", description: "직접생산확인증명 기업등록(한국중소벤처기업유통원)" },
  { date: "2025. 06.", description: "인제 용대1리 마을회 야영장 체험 프로그램 개발, 국밥 레시피 개발" },
  { date: "2025. 10.", description: "제3회 동화마을 수목원 가을축제 운영(원주시)" },
  { date: "2025. 11.", description: "동서트레일 거점마을 연계 사업화 모델 연구(산림청)" },
  { date: "2025. 11.", description: "공모전 수상작 교구 제작 및 배포(목재문화진흥회)" },
  { date: "2025. 12.", description: "2025 산림복지 목재 인테리어 지원사업(목재문화진흥회)" },
];

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero - 데스크톱에서도 여유 있게 */}
      <section className="relative flex min-h-[52vh] flex-col items-center justify-center overflow-hidden px-4 py-28 text-center sm:min-h-[58vh] lg:px-8">
        <div className="absolute inset-0 bg-linear-to-br from-brand via-brand to-brand-hover" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.18),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-3xl lg:max-w-5xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
            Our Work
          </p>
          <h1 className="mb-5 text-4xl font-bold leading-tight text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
            Project 2025
          </h1>
          <p className="text-lg font-medium text-white/95 sm:text-xl lg:text-2xl">
            &lsquo;Go농, Go촌&rsquo;을 향해 쉼 없이 나아갑니다.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-white/85 sm:text-base lg:text-lg">
            <span>탐색 경험</span>
            <span className="text-white/50">·</span>
            <span>가치 향상</span>
            <span className="text-white/50">·</span>
            <span>지속 기반</span>
            <span className="text-white/50">·</span>
            <span>자원 재생</span>
          </div>
        </div>
      </section>

      {/* 카테고리별 상세 프로젝트 - 데스크톱에서 넓은 단일 컬럼 */}
      <div className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-12">
        <div className="mx-auto w-full max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl space-y-20 lg:space-y-24">
          {categories.map((cat) => (
            <section
              key={cat.id}
              className={`rounded-2xl border-2 p-6 sm:p-10 lg:p-12 xl:p-14 ${colorClasses[cat.color].card}`}
            >
              <div className="mb-8 flex items-start gap-4 lg:mb-10">
                <span
                  className={`mt-1.5 h-1 w-12 shrink-0 rounded-full ${colorClasses[cat.color].accent} sm:h-1.5 sm:w-14 lg:w-16`}
                  aria-hidden
                />
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                    {cat.title}
                  </h2>
                  <p className="mt-2 text-muted leading-relaxed sm:text-base lg:max-w-4xl lg:text-lg">
                    {cat.tagline}
                  </p>
                </div>
              </div>
              <ul className="space-y-12 lg:space-y-16">
                {cat.projects.map((proj, i) => {
                  const images =
                    "images" in proj && Array.isArray(proj.images) ? proj.images : [];
                  const hasImages = images.length > 0;
                  const imageOnRight = hasImages && i % 2 === 1;
                  const singleImage = images.length === 1;
                  return (
                    <li
                      key={i}
                      className="border-b border-border/80 pb-12 last:border-0 last:pb-0 lg:pb-16 lg:last:pb-0"
                    >
                      <div
                        className={
                          hasImages
                            ? "grid grid-cols-1 gap-6 sm:grid-cols-[1fr_1.25fr] sm:gap-10 lg:grid-cols-[1.1fr_1.5fr] lg:gap-12 xl:gap-14"
                            : ""
                        }
                      >
                        {hasImages && (
                          <div
                            className={`flex flex-col gap-3 sm:min-h-0 ${
                              imageOnRight ? "sm:col-start-2 sm:row-start-1" : ""
                            }`}
                          >
                            {singleImage ? (
                              <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-border/60 bg-stone-100 shadow-md lg:rounded-2xl">
                                <Image
                                  src={images[0].src}
                                  alt={images[0].alt}
                                  fill
                                  className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 38vw"
                                />
                              </div>
                            ) : (
                              <div
                                className={`grid gap-3 lg:gap-4 ${
                                  images.length === 2
                                    ? "grid-cols-2"
                                    : "grid-cols-2 lg:grid-cols-3"
                                }`}
                              >
                                {images.map((img, j) => (
                                  <div
                                    key={j}
                                    className="relative aspect-4/3 overflow-hidden rounded-xl border border-border/60 bg-stone-100 shadow-md lg:rounded-2xl"
                                  >
                                    <Image
                                      src={img.src}
                                      alt={img.alt}
                                      fill
                                      className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 22vw, 18vw"
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                        <div
                          className={`min-w-0 ${imageOnRight ? "sm:col-start-1 sm:row-start-1" : ""}`}
                        >
                          <h3 className="mb-3 text-base font-semibold leading-snug text-foreground sm:text-lg lg:text-xl lg:mb-4">
                            {proj.name}
                          </h3>
                          <p className="text-sm leading-relaxed text-muted sm:text-[15px] lg:max-w-3xl lg:text-base lg:leading-relaxed">
                            {proj.desc}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>

      {/* 연도·월 순 전체 프로젝트 타임라인 - 데스크톱에서 넓게 */}
      <section className="border-t border-border bg-linear-to-b from-surface to-background px-4 py-20 sm:px-6 sm:py-24 lg:px-10 xl:px-12">
        <div className="mx-auto w-full max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl">
          <div className="mb-10 text-center sm:mb-12 lg:mb-14">
            <p className="text-sm font-medium uppercase tracking-widest text-brand">
              Timeline
            </p>
            <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Project History
            </h2>
          </div>
          <div className="overflow-hidden rounded-2xl border-2 border-border bg-surface shadow-sm lg:rounded-3xl">
            <ul className="divide-y divide-border">
              {chronologicalProjects.map((item, i) => (
                <li
                  key={i}
                  className={`flex gap-6 px-5 py-4 transition-colors hover:bg-stone-50/80 sm:px-6 sm:py-5 lg:px-8 lg:py-6 ${
                    i % 2 === 0 ? "bg-surface" : "bg-stone-50/50"
                  }`}
                >
                  <span className="shrink-0 text-sm font-semibold text-brand sm:w-24 sm:text-base lg:w-28 lg:text-lg">
                    {item.date}
                  </span>
                  <span className="min-w-0 flex-1 text-sm leading-relaxed text-foreground sm:text-base lg:text-lg lg:leading-relaxed">
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
