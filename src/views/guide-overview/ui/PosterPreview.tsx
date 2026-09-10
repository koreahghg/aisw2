import Image from "next/image";

export default function PosterPreview() {
  return (
    <div className="w-full shrink-0 sm:w-72">
      <div className="flex aspect-[210/297] w-full items-center justify-center overflow-hidden rounded-xlarge border border-border-default bg-bg-canvas">
        <Image src="/lg.png" alt="포스터 (임시)" width={643} height={154} className="w-full object-contain" />
      </div>
      <a
        href="/lg.png"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block w-full rounded-medium border border-border-default py-2 text-center text-body-s font-semibold text-fg-2 transition-colors duration-150 ease-out hover:border-primary-50 hover:text-primary-60"
      >
        포스터 크게 보기
      </a>
    </div>
  );
}
