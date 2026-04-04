import { visionStatements } from "../portfolio-data";

export default function VisionSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-zinc-900 md:text-3xl">Vision</h2>
      <p className="max-w-3xl leading-7 text-zinc-600">
        The values and aspirations behind the portfolio, from craft quality to broader product and
        organizational impact.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {visionStatements.map((statement) => (
          <article
            key={statement}
            className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <p className="text-[1.06rem] italic leading-8 text-zinc-700">{statement}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
