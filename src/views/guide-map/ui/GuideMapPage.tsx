import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { guideNavItems } from "@/shared/config/guide-nav";

export default function GuideMapPage() {
  return (
    <div>
      <PageHero title="부스 배치도" desc="전시장 층별 부스 위치와 체험존 배치를 확인하세요." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="박람회 안내" items={guideNavItems} />

        <div className="min-w-0 flex-1">
          <h2 className="text-heading-s font-bold text-fg-1">부스 배치도</h2>
          <div className="mt-4 flex h-72 items-center justify-center rounded-xlarge border border-dashed border-border-default bg-bg-canvas text-body-s text-fg-3 sm:h-96">
            부스 배치도 이미지 영역 (추후 삽입 예정)
          </div>
        </div>
      </div>
    </div>
  );
}
