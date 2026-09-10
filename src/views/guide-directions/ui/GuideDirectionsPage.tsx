import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import Icon from "@/shared/ui/Icon";
import { guideNavItems } from "@/shared/config/guide-nav";

export default function GuideDirectionsPage() {
  return (
    <div>
      <PageHero title="오시는 길" desc="대중교통·자가용 등 행사장까지 오시는 방법을 안내합니다." />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="박람회 안내" items={guideNavItems} />

        <div className="min-w-0 flex-1">
          <h2 className="text-heading-s font-bold text-fg-1">오시는 길</h2>

          <div className="mt-4 flex aspect-[16/9] w-full items-center justify-center rounded-xlarge border border-dashed border-border-default bg-bg-subtle text-body-s text-fg-3">
            카카오 지도 준비중 (전남광주통합특별시교육청AI교육원)
          </div>

          <div className="mt-6 flex flex-col items-start gap-4 rounded-xlarge border border-border-default bg-bg-canvas p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 text-body-s font-semibold text-fg-1">
              <Icon name="map-pin" className="h-4 w-4 text-primary-60" />
              전남광주통합특별시 북구 능안로 30번길 7 (오치동 5-25)
            </p>
            <a
              href="https://map.kakao.com/link/search/전남광주통합특별시 북구 능안로 30번길 7"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-small border border-primary-50 px-4 py-2 text-body-s font-semibold text-primary-60 transition-colors duration-150 ease-out hover:bg-primary-10"
            >
              카카오맵 길찾기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
