import { projectItems } from "../portfolio-data";

export default function ProjectsSection() {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-semibold text-zinc-900">Projects</h2>
      <p className="max-w-3xl leading-7 text-zinc-600">
        Selected highlights adapted from the resume, covering Gen AI dashboards, enterprise
        platforms, and commerce-focused web experiences.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projectItems.map((project) => (
          <article key={project.name} className="overflow-hidden rounded-2xl">
            <div
              className="flex min-h-32 items-center justify-center p-4"
              style={{
                background:
                  "linear-gradient(145deg, rgb(15 118 110 / 18%), rgb(170 230 215 / 30%), rgb(200 235 225 / 30%))",
              }}
            >
              <span className="eyebrow text-[rgb(15_80_70)]">Project Preview Placeholder</span>
            </div>
            <div className="space-y-2 p-4">
              <h3 className="text-lg font-semibold text-zinc-900">{project.name}</h3>
              <p className="leading-7 text-zinc-600">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
