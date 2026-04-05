import Image from "next/image";
import { technicalSkillSections } from "../portfolio-data";

export default function SkillsSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-zinc-900">Technical Skills</h2>

      <div className="space-y-4">
        {technicalSkillSections.map((group) => (
          <article key={group.title} className="rounded-2xl p-4 md:p-5">
            <h3 className="mb-3 text-xl font-semibold text-zinc-900">{group.title}</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl border border-gray-200 shadow p-4">
              {group.items.map(({ label, iconUrl }) => (
                <div
                  key={label}
                  className="group flex items-center gap-3 rounded-xl border border-[#18181b1a] bg-[#ffffffd9] px-3 py-2.5 text-sm font-medium text-zinc-800 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <Image
                    src={iconUrl}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 shrink-0 object-contain"
                  />
                  <span className="group-hover:text-[rgb(15_90_84)]">{label}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
