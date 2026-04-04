import { visionStatements } from "../portfolio-data";

export default function VisionSection() {
  return (
    <section className="grid gap-4">
      <h2 className="text-[clamp(1.25rem,2vw,1.75rem)]">Vision</h2>
      <p className="max-w-184 leading-[1.6] text-[rgb(19_42_19_/70%)]">
        The values and aspirations behind the portfolio, from craft quality to
        broader product and organizational impact.
      </p>
      <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-2 max-[720px]:grid-cols-1">
        {visionStatements.map((statement) => (
          <article
            key={statement}
            className="rounded-[20px] border border-[rgb(19_42_19_/11%)] bg-[linear-gradient(135deg,rgb(255_255_255_/92%),rgb(240_247_242_/88%))] px-[1.4rem] py-[1.6rem] shadow-[0_12px_28px_rgb(19_42_19_/8%)]"
          >
            <p className="text-[1.08rem] italic leading-[1.8] text-[rgb(19_42_19_/88%)]">{statement}</p>
          </article>
        ))}
      </div>
    </section>
  );
}