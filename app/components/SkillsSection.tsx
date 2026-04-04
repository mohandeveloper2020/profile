import Image from "next/image";
import { skillItems, technicalSkillSections } from "../portfolio-data";

export default function SkillsSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-zinc-900 md:text-3xl">Technical Skills</h2>

      {/* <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skillItems.map((label) => (
          <article
            key={label}
            className="rounded-xl border border-zinc-200 bg-white p-4 font-medium text-zinc-800 shadow-sm"
          >
            {label}
          </article>
        ))}
      </div> */}

      <div className="space-y-4">
        {technicalSkillSections.map((group) => (
          <article
            key={group.title}
            className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm md:p-5"
          >
            <h3 className="mb-3 text-lg font-semibold text-zinc-900">{group.title}</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {group.items.map(({ label, iconUrl }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm font-medium text-zinc-800"
                >
                  <Image
                    src={iconUrl}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 shrink-0 object-contain"
                  />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
