import { timelineItems } from "../portfolio-data";

export default function ExperienceSection() {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-semibold text-zinc-900">Career Timeline</h2>
      <p className="max-w-3xl leading-7 text-zinc-600">
        Career progression across enterprise consulting, e-commerce platforms, UX-led product work,
        and frontend delivery for web applications.
      </p>
      <div className="space-y-4 border-l-2 border-dashed border-[rgb(15_118_110_/_30%)] pl-5 md:pl-6">
        {timelineItems.map((item) => (
          <article key={`${item.company}-${item.duration}`} className="relative rounded-2xl p-4">
            <span className="absolute -left-[1.75rem] top-4 h-2.5 w-2.5 rounded-full bg-[var(--highlight)] ring-4 ring-[rgb(239_111_63_/_16%)] md:-left-[2.1rem]" />
            <p className="eyebrow mb-1 inline-block text-[0.66rem]">{item.duration}</p>
            <h3 className="text-xl font-semibold text-zinc-900">{item.role}</h3>
            <p className="mb-2 mt-1 font-medium text-zinc-700">{item.company}</p>
            <p className="leading-7 text-zinc-600">{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
