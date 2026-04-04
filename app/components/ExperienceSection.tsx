import { timelineItems } from "../portfolio-data";

export default function ExperienceSection() {
  return (
    <section className="grid gap-4">
      <h2 className="text-[clamp(1.25rem,2vw,1.75rem)]">Career Timeline</h2>
      <p className="max-w-[46rem] leading-[1.6] text-[rgb(19_42_19_/_70%)]">
        Career progression across enterprise consulting, e-commerce platforms, UX-led
        product work, and frontend delivery for web applications.
      </p>
      <div className="grid gap-4 border-l-2 border-dashed border-[rgb(19_42_19_/_30%)] pl-5 max-[720px]:pl-4">
        {timelineItems.map((item) => (
          <article
            key={`${item.company}-${item.duration}`}
            className="relative rounded-[18px] border border-[rgb(19_42_19_/_10%)] bg-[rgb(255_255_255_/_84%)] p-4"
          >
            <span className="absolute left-[-1.62rem] top-[1.1rem] h-[10px] w-[10px] rounded-full bg-[#1a7f64] shadow-[0_0_0_5px_rgb(26_127_100_/_18%)] max-[720px]:left-[-1.32rem]" />
            <p className="mb-[0.4rem] inline-block text-[0.76rem] font-bold uppercase tracking-[0.08em] text-[rgb(19_42_19_/_60%)]">
              {item.duration}
            </p>
            <h3>{item.role}</h3>
            <p className="mb-[0.45rem] mt-[0.2rem] font-semibold text-[rgb(19_42_19_/_82%)]">
              {item.company}
            </p>
            <p className="leading-[1.6] text-[rgb(19_42_19_/_74%)]">{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}