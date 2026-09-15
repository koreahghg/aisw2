import Button from "@/shared/ui/Button";
import Icon from "@/shared/ui/Icon";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <p className="text-display-l font-bold text-primary-50">404</p>
      <h1 className="mt-4 text-heading-l font-bold text-fg-1">페이지를 찾을 수 없습니다</h1>
      <p className="mt-3 max-w-md text-body-m text-fg-3">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.
        <br />
        아직 준비 중인 페이지일 수 있습니다.
      </p>
      <Button href="/" size="l" className="mt-8">
        <Icon name="home" className="h-4 w-4" />
        홈으로 돌아가기
      </Button>
    </div>
  );
}
