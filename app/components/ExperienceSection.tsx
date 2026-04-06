import { timelineItems } from "../portfolio-data";

export default function ExperienceSection() {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-semibold text-zinc-900">Career Timeline</h2>
      <div className="space-y-4 border-l-2 border-dashed border-[#0f766e4d] pl-5 md:pl-6">
        {timelineItems.map((item) => (
          <article key={`${item.company}-${item.duration}`} className="relative rounded-2xl p-4">
            <span className="absolute -left-[1.65rem] top-4 h-2.5 w-2.5 rounded-full bg-[var(--highlight)] ring-4 ring-[#ef6f3f29] md:-left-[1.9rem]" />
            <p className="eyebrow mb-1 inline-block text-[0.66rem]">{item.duration}</p>
            <h3 className="text-xl font-semibold text-zinc-900">{item.role}</h3>
            <p className="mb-2 mt-1 font-medium text-zinc-700">{item.company}</p>
            {"clients" in item ? (
              <div className="mt-2 space-y-5">
                {item.clients.map((client) => (
                  <div key={client.name}>
                    <p className="eyebrow mb-2 text-[0.68rem] text-[rgb(15_90_84)]">
                      Client: {client.name}
                    </p>
                    <ul className="space-y-2">
                      {client.points.map((point) => (
                        <li key={point} className="flex gap-2.5 text-sm leading-6 text-zinc-600">
                          <span
                            aria-hidden="true"
                            className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                    {"notableProjects" in client && client.notableProjects.length > 0 && (
                      <div className="mt-3">
                        <p className="eyebrow mb-1.5 text-[0.66rem]">Notable Projects</p>
                        <ul className="flex flex-wrap gap-2">
                          {client.notableProjects.map((project) => (
                            <li
                              key={project}
                              className="rounded-full border border-[#0f766e33] bg-[rgb(15_118_110_/_8%)] px-2.5 py-1 text-xs text-[rgb(15_80_70)]"
                            >
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : "points" in item ? (
              <div className="mt-2">
                <ul className="space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-6 text-zinc-600">
                      <span
                        aria-hidden="true"
                        className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                {"notableProjects" in item && item.notableProjects.length > 0 && (
                  <div className="mt-3">
                    <p className="eyebrow mb-1.5 text-[0.66rem]">Notable Projects</p>
                    <ul className="flex flex-wrap gap-2">
                      {item.notableProjects.map((project) => (
                        <li
                          key={project}
                          className="rounded-full border border-[#0f766e33] bg-[rgb(15_118_110_/_8%)] px-2.5 py-1 text-xs text-[rgb(15_80_70)]"
                        >
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
