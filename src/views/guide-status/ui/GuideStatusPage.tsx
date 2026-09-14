import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import EventStatsRow from "@/widgets/event-stats/ui/EventStatsRow";
import CapacityWidget from "@/widgets/capacity-status/ui/CapacityWidget";
import CongestionWidget from "@/widgets/congestion-status/ui/CongestionWidget";
import { guideNavItems } from "@/shared/config/guide-nav";

export default function GuideStatusPage() {
  return (
    <div>
      <PageHero title="실시간 현황" desc="행사장 혼잡도, 주차, 접수 현황을 실시간(예시 데이터)으로 확인하세요." />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="박람회 안내" items={guideNavItems} />

        <div className="min-w-0 flex-1">
          <EventStatsRow />

          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <CapacityWidget />
            <CongestionWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
