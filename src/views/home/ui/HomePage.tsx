import Link from "next/link";
import PromoVideo from "@/widgets/promo-video/ui/PromoVideo";
import TimelineSection from "@/widgets/event-timeline/ui/TimelineSection";
import QuickApplyGroups from "@/widgets/quick-apply/ui/QuickApplyGroups";
import Button from "@/shared/ui/Button";
import Badge from "@/shared/ui/Badge";
import Icon from "@/shared/ui/Icon";

const HERO_FACTS = [
  { label: "일정", value: "10.31(토) - 11.1(일)" },
  { label: "장소", value: "전남광주통합특별시교육청AI교육원" },
  { label: "대상", value: "학생 · 교원 · 일반 시민 누구나" },
];

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-border-default bg-bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-display-s font-bold text-fg-1 sm:text-display-m">
                  2026 전남광주
                  <br />
                  AI·SW체험한마당
                </h1>
                <p className="mt-4 max-w-xl text-body-s text-fg-2 sm:text-body-m">
                  학생을 위한 AI·SW 한마당과 교원을 위한 미래교육박람회가 한자리에.
                  <br />
                  지금 사전신청하고 줄서지 않고 스마트하게 참여하세요.
                </p>
              </div>

              <Button href="/apply/register" size="l" className="mt-8 w-fit">
                사전등록하기
                <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
            </div>

            <PromoVideo />
          </div>

          <div className="mt-10 flex w-full flex-col items-start gap-4 rounded-xlarge border border-border-default bg-bg-canvas px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            {HERO_FACTS.map((f) => (
              <div key={f.label} className="flex items-center gap-3">
                <Badge variant="outlined-primary">{f.label}</Badge>
                <span className="text-body-s font-bold text-fg-1 sm:text-body-m">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <h2 className="text-heading-s font-bold text-fg-1">지금, 미래를 만나보세요</h2>
        <p className="mt-1 text-body-s text-fg-3">
          AI로 연결되는 배움의 장, 2026 전남광주 AI·SW체험한마당. 학생, 교사, 지역사회가 함께 만드는 특별한 경험에 지금 참여하세요.
        </p>
        <div className="mt-4">
          <QuickApplyGroups />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-heading-s font-bold text-fg-1">행사 일정</h2>
          <Link href="/guide/schedule" className="flex shrink-0 items-center gap-1 text-body-s font-semibold text-fg-link hover:underline">
            전체 일정표 보기
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-4">
          <TimelineSection />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-xlarge bg-primary-70 px-6 py-12 text-center text-fg-on-primary sm:px-12">
          <p className="text-heading-m font-bold">AI로 연결되는 배움, 함께 여는 미래</p>
          <p className="mt-3 text-body-s text-white/80">10.31(토) - 11.1(일) · 전남광주통합특별시교육청AI교육원 · 학생·교원·일반 시민 누구나</p>
          <Link
            href="/apply/register"
            className="mt-6 inline-flex h-14 items-center gap-2 rounded-medium bg-bg-canvas px-6 text-body-l font-bold text-primary-70 transition-colors duration-150 ease-out hover:bg-primary-10"
          >
            지금 사전등록하기
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
