export default function PageHero({ title, desc }: { title: string; desc: string }) {
  return (
    <section className="border-b border-border-default border-t-[3px] border-t-primary-50 bg-bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h1 className="text-heading-l font-bold text-fg-1">{title}</h1>
        <p className="mt-2 max-w-2xl text-body-m text-fg-2">{desc}</p>
      </div>
    </section>
  );
}
