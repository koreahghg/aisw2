import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import Badge from "@/shared/ui/Badge";
import { guideNavItems } from "@/shared/config/guide-nav";
import PosterPreview from "./PosterPreview";

const OVERVIEW = [
  { label: "행사명", value: "2026 전남광주통합특별시교육청 AI·SW체험한마당" },
  { label: "주제", value: "AI로 연결하고, 미래를 열다 (예정)" },
  { label: "일정", value: "2026. 10. 31.(토) 9:30 ~ 17:00 / 11. 1.(일) 9:30 ~ 16:00 (행사장 개장 9:00 예정)" },
  { label: "장소", value: "전남광주통합특별시교육청AI교육원 일원 (주차장 야외 부스 포함)" },
  { label: "대상", value: "관내 초‧중‧고‧특수학교 학생, 교직원, 학부모, 일반시민 등" },
  { label: "주최", value: "전남광주통합특별시교육청" },
  { label: "주관", value: "전남광주통합특별시교육청AI교육원" },
];

export default function GuideOverviewPage() {
  return (
    <div>
      <PageHero title="행사 개요" desc="행사 개요부터 오시는 길까지, 2026 전남광주통합특별시교육청 AI·SW체험한마당의 모든 기본 정보를 확인하세요." />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="박람회 안내" items={guideNavItems} />

        <div className="min-w-0 flex-1">
          <h2 className="text-heading-s font-bold text-fg-1">행사 개요</h2>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row">
            <PosterPreview />
            <dl className="grid min-w-0 flex-1 grid-cols-1 items-center gap-x-5 gap-y-4 rounded-xlarge border border-border-default bg-bg-canvas p-6 md:grid-cols-[auto_1fr]">
              {OVERVIEW.map((row) => (
                <div key={row.label} className="contents">
                  <dt>
                    <Badge variant="solid-primary" className="w-full justify-center whitespace-nowrap px-4 py-1.5 text-body-s">
                      {row.label}
                    </Badge>
                  </dt>
                  <dd className="text-body-s leading-relaxed text-fg-2">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
