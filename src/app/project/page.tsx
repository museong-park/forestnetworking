import type { Metadata } from "next";

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
      },
      {
        name: "BETTER里 인구감소지역 관광인구 증대 사업",
        desc: "가평 조항마을을 중심으로 지역이 보유한 '사람'과 '삶의 방식'에 집중하고 콘텐츠화하여 방문객이 능동적으로 탐색하고 관계를 맺는 '마을 탐색형 프로그램 Excation' 설계 및 도입. 단순체험·원격근무에서 이주·정착 경험, 설계 및 탐색으로 확장하여 관계인구 확장 거점화 모델 구현.",
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
      },
      {
        name: "영월 녹전중학교 청소년 푸드아트테라피 (12.24)",
        desc: "학생, 가족, 교원이 함께 놀이·교육·문화·예술·상담·치유를 통합하는 새로운 상담기법인 푸드아트테라피를 통해 소통 증진과 새로운 식문화 형성, 이를 통해 건전한 가정·학교 문화를 조성하는 융합수업과정 기획 및 운영.",
      },
      {
        name: "산촌활력특화사업 횡성 (2차년도)",
        desc: "농산어촌 지역 특성에 맞는 예방·치유 중심의 건강관리를 실현하고, 방문진료·재택의료 중심의 보편의료 서비스를 위한 산촌형 서비스 '의료복지사회적협동조합' 설립 추진.",
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
      },
      {
        name: "산촌활력특화사업 '여주 주어리마을'",
        desc: "주변 관광자원인 양자산과 마을 주요 시설인 해독센터를 연계하는 사업 개발을 통해 마을 주민의 혜택은 물론 방문객 유치 및 방문자 대상 제품(능이버섯차) 기획 및 출시를 통해 지속적으로 수익사업을 전개할 수 있는 순환사업모델 개발 용역 수행.",
      },
      {
        name: "산촌활력특화사업 '양평 수미마을' (2차년도)",
        desc: "청년 임업후계자 교육을 통해 예비 청년농업인들의 임업 유입을 유도하고 정착 성과를 창출. 청년 임업인의 취·창업에 특화된 산촌모델 제시, 임산물 가공기반 체계 수립·강화로 신제품 개발 능력과 생산력 향상, 마을 공장의 안정적인 가동률로 지속가능한 산촌활력 모델 개발 및 완성.",
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
      },
    ],
  },
];

const colorClasses: Record<string, string> = {
  emerald: "border-emerald-200 bg-brand-muted/50",
  amber: "border-emerald-200 bg-brand-muted/50",
  teal: "border-emerald-200 bg-brand-muted/50",
  stone: "border-emerald-200 bg-brand-muted/50",
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border bg-brand-muted/50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Project 2025
          </h1>
          <p className="text-lg text-muted">
            &lsquo;Go농, Go촌&rsquo;을 향해 쉼 없이 나아갑니다.
          </p>
        </div>
      </section>

      <div className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl space-y-16">
          {categories.map((cat) => (
            <section
              key={cat.id}
              className={`rounded-2xl border p-6 sm:p-8 ${colorClasses[cat.color]}`}
            >
              <h2 className="mb-2 text-xl font-bold text-foreground">
                {cat.title}
              </h2>
              <p className="mb-8 text-muted">{cat.tagline}</p>
              <ul className="space-y-8">
                {cat.projects.map((proj, i) => (
                  <li key={i} className="border-b border-border pb-8 last:border-0 last:pb-0">
                    <h3 className="mb-2 font-semibold text-foreground">
                      {proj.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {proj.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
