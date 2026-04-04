import { projectItems } from "../portfolio-data";

export default function ProjectsSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-zinc-900 md:text-3xl">Projects</h2>
      <p className="max-w-3xl leading-7 text-zinc-600">
        Selected highlights adapted from the resume, covering Gen AI dashboards, enterprise
        platforms, and commerce-focused web experiences.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projectItems.map((project, index) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm"
          >
            <div className="flex min-h-28 items-end bg-zinc-100 p-4">
              <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-700">
                {`0${index + 1}`}
              </span>
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
