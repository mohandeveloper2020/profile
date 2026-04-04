import { projectItems } from "../portfolio-data";

export default function ProjectsSection() {
  return (
    <section className="grid gap-4">
      <h2 className="text-[clamp(1.25rem,2vw,1.75rem)]">Projects</h2>
      <p className="max-w-[46rem] leading-[1.6] text-[rgb(19_42_19_/_70%)]">
        Selected highlights adapted from the resume, covering Gen AI dashboards,
        enterprise platforms, and commerce-focused web experiences.
      </p>
      <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[720px]:grid-cols-1">
        {projectItems.map((project, index) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-[20px] border border-[rgb(19_42_19_/_11%)] bg-[rgb(255_255_255_/_92%)] shadow-[0_10px_30px_rgb(19_42_19_/_8%)]"
          >
            <div
              className="grid min-h-40 place-items-end-start p-4"
              style={{
                background:
                  "linear-gradient(135deg, rgb(170 233 221 / 56%), rgb(163 217 245 / 48%)), repeating-linear-gradient(-45deg, transparent, transparent 12px, rgb(255 255 255 / 28%) 12px, rgb(255 255 255 / 28%) 24px)",
              }}
            >
              <span className="rounded-full bg-[rgb(255_255_255_/_72%)] px-[0.65rem] py-[0.4rem] text-[0.72rem] font-bold uppercase tracking-[0.08em]">
                {`0${index + 1}`}
              </span>
            </div>
            <div className="grid gap-[0.65rem] p-4">
              <h3>{project.name}</h3>
              <p className="leading-[1.6] text-[rgb(19_42_19_/_74%)]">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}