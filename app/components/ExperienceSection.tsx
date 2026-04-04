import { timelineItems } from "../portfolio-data";

export default function ExperienceSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-zinc-900 md:text-3xl">Career Timeline</h2>
      <p className="max-w-3xl leading-7 text-zinc-600">
        Career progression across enterprise consulting, e-commerce platforms, UX-led product work,
        and frontend delivery for web applications.
      </p>
      <div className="space-y-4 border-l-2 border-dashed border-zinc-300 pl-5 md:pl-6">
        {timelineItems.map((item) => (
          <article
            key={`${item.company}-${item.duration}`}
            className="relative rounded-xl border border-zinc-200 bg-white p-4 shadow-sm"
          >
            <span className="absolute -left-[1.75rem] top-4 h-2.5 w-2.5 rounded-full bg-emerald-600 ring-4 ring-emerald-100 md:-left-[2.1rem]" />
            <p className="mb-1 inline-block text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {item.duration}
            </p>
            <h3 className="text-lg font-semibold text-zinc-900">{item.role}</h3>
            <p className="mb-2 mt-1 font-medium text-zinc-700">{item.company}</p>
            <p className="leading-7 text-zinc-600">{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
