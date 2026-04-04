import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-10">
      <div className="grid items-center gap-6 md:grid-cols-[1.35fr_0.85fr] md:gap-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            UI/UX Specialist - Design and Development
          </p>
          <h1>
            <span className="block text-4xl leading-tight text-zinc-900 [font-family:var(--font-display)] sm:text-5xl md:text-6xl">
              Mohan Madheshwaran
            </span>
            <span className="mt-3 block text-lg font-semibold text-zinc-700 md:text-2xl">
              Frontend Development • UI Design • UX Strategy
            </span>
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Designing and building digital experiences that balance product clarity, visual quality,
            and real-world implementation rigor.
          </p>
        </div>
        <div className="w-full max-w-[280px] justify-self-center md:justify-self-end">
          <Image
            src="/profile-pic.jpg"
            alt="Mohan profile photo"
            width={360}
            height={420}
            className="h-auto w-full rounded-xl border border-zinc-200 object-cover shadow-sm"
            priority
          />
        </div>
      </div>
    </section>
  );
}
