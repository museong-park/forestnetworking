"use client";

import { useState } from "react";

export type TimelineEvent = {
  month: number;
  monthLabel: string;
  label: string;
  highlight?: "green" | "orange";
};

type YearTimeline = {
  year: string;
  events: TimelineEvent[];
};

type Props = {
  data: YearTimeline[];
};

export default function OurPathTimeline({ data }: Props) {
  const [activeYear, setActiveYear] = useState<string | null>(null);

  const toggleYear = (year: string) => {
    setActiveYear((prev) => (prev === year ? null : year));
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-[5rem_1fr] gap-x-6 gap-y-0 sm:grid-cols-[6rem_1fr]">
        {data.map(({ year, events }) => {
          const uniqueMonths = Array.from(
            new Map(events.map((e) => [e.month, e])).values()
          ).sort((a, b) => a.month - b.month);
          const isActive = activeYear === year;

          return (
            <div
              key={year}
              className="group col-span-2 grid grid-cols-subgrid gap-x-6"
              onMouseEnter={() => setActiveYear(year)}
              onMouseLeave={() => setActiveYear(null)}
            >
              {/* Year cell - 고정 너비, 클릭/호버로 연혁 표시 */}
              <div className="flex min-h-[4.25rem] items-center py-3 sm:min-h-[4.5rem] sm:py-4">
                <button
                  type="button"
                  onClick={() => toggleYear(year)}
                  className={`text-left text-lg font-bold transition-colors hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 sm:text-xl ${
                    isActive ? "text-brand" : "text-foreground"
                  }`}
                  aria-expanded={isActive}
                  aria-label={`${year}년 연혁 ${isActive ? "접기" : "펼치기"}`}
                >
                  {year}
                </button>
              </div>

              {/* Timeline track: 라인과 마커 수직 중앙 정렬 */}
              <div className="relative min-h-[4.25rem] pb-1 pt-3 sm:min-h-[4.5rem] sm:pt-4">
                <div className="relative h-10">
                  <div
                    className="absolute left-0 right-0 top-1/2 h-px -translate-y-px bg-foreground/25"
                    aria-hidden
                  />
                  {uniqueMonths.map((evt) => {
                    const leftPercent = ((evt.month - 0.5) / 12) * 100;
                    const isOrange = evt.highlight === "orange";
                    const isGreen = evt.highlight === "green";
                    return (
                      <div
                        key={`${year}-${evt.month}-${evt.label}`}
                        className="absolute flex flex-col items-center gap-0.5"
                        style={{
                          left: `${leftPercent}%`,
                          top: "calc(50% - 6px)",
                          transform: "translate(-50%, 0)",
                        }}
                      >
                        <span
                          className={`block shrink-0 border-2 ${
                            isOrange
                              ? "border-amber-500 bg-amber-500"
                              : isGreen
                                ? "border-brand bg-brand rounded-full"
                                : "border-stone-300 bg-stone-100 rounded-full"
                          } ${isOrange ? "h-3.5 w-3.5" : "h-3 w-3"}`}
                          style={
                            isOrange
                              ? {
                                  clipPath:
                                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                                }
                              : undefined
                          }
                        />
                        <span className="mt-0.5 whitespace-nowrap text-[10px] font-medium text-muted sm:text-xs">
                          {evt.monthLabel}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* 호버/클릭 시 해당 연도 연혁 카드 */}
                <div
                  className={`overflow-hidden transition-all duration-200 ease-out ${
                    isActive ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="rounded-xl border border-border bg-surface px-5 py-4 shadow-sm">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand">
                      {year} 연혁
                    </p>
                    <ul className="space-y-2">
                      {events.map((evt, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed text-muted"
                        >
                          <span className="shrink-0 font-medium text-foreground">
                            {evt.monthLabel}
                          </span>
                          <span>{evt.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-center text-sm text-muted">
        연도에 마우스를 올리거나 클릭하면 해당 연도의 연혁을 확인할 수
        있습니다.
      </p>
    </div>
  );
}
