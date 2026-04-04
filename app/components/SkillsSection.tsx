import Image from "next/image";
import { skillItems, technicalSkillSections } from "../portfolio-data";

export default function SkillsSection() {
  return (
    <section className="grid gap-4">
      <h2 className="text-[clamp(1.25rem,2vw,1.75rem)]">Technical Skills</h2>
      <p className="max-w-[46rem] leading-[1.6] text-[rgb(19_42_19_/_70%)]">
        Frontend engineering and UI/UX delivery across modern React platforms,
        design tooling, and collaborative product workflows.
      </p>

      <div className="grid grid-cols-3 gap-[0.9rem] max-[900px]:grid-cols-2 max-[720px]:grid-cols-1">
        {skillItems.map((label) => (
          <article
            key={label}
            className="flex min-h-full items-center rounded-2xl border border-[rgb(19_42_19_/_10%)] bg-[rgb(255_255_255_/_78%)] p-4 font-semibold text-[rgb(19_42_19_/_82%)] shadow-[0_8px_20px_rgb(19_42_19_/_6%)]"
          >
            {label}
          </article>
        ))}
      </div>

      <div className="grid gap-4">
        {technicalSkillSections.map((group) => (
          <article
            key={group.title}
            className="rounded-[18px] border border-[rgb(19_42_19_/_11%)] bg-[rgb(255_255_255_/_56%)] p-4 shadow-[0_8px_20px_rgb(19_42_19_/_7%)]"
          >
            <h3 className="mb-4 text-[1.02rem]">{group.title}</h3>
            <div className="grid grid-cols-4 gap-[0.9rem] max-[900px]:grid-cols-3 max-[720px]:grid-cols-1">
              {group.items.map(({ label, iconUrl }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-[14px] border border-[rgb(19_42_19_/_9%)] bg-[rgb(255_255_255_/_88%)] px-[0.9rem] py-3 text-[0.9rem] font-semibold text-[rgb(19_42_19_/_82%)]"
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