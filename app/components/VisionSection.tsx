import { visionStatements } from "../portfolio-data";

export default function VisionSection() {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-semibold text-zinc-900">Vision</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {visionStatements.map((statement) => (
          <article key={statement} className="rounded-2xl p-6">
            <p className="text-[1.06rem] italic leading-8 text-zinc-700">{statement}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
