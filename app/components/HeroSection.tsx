import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden rounded-[30px] border border-[rgb(19_42_19_/_11%)] p-9 shadow-[0_20px_45px_rgb(10_26_10_/_10%)] max-[640px]:rounded-[20px] max-[640px]:px-4 max-[640px]:py-6"
      style={{
        background:
          "linear-gradient(120deg, rgb(255 255 255 / 90%), rgb(241 248 237 / 86%)), radial-gradient(circle at 85% 25%, rgb(28 103 88 / 16%), transparent 58%), radial-gradient(circle at 20% 85%, rgb(49 124 191 / 12%), transparent 62%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_55%,rgb(255_255_255_/_18%))]"
      />
      <div className="relative z-[1] grid items-center gap-6 [grid-template-columns:minmax(0,1.4fr)_minmax(220px,0.8fr)] max-[640px]:grid-cols-1 max-[640px]:gap-5">
        <div className="max-w-[44rem]">
          <p className="mb-4 inline-block text-[0.78rem] font-bold uppercase tracking-[0.08em] text-[rgb(19_42_19_/_66%)]">
            UI/UX Specialist - Design and Development
          </p>
          <h1>
            <span className="font-[var(--font-display)] block text-[clamp(2.75rem,8vw,5.4rem)] leading-[0.94] tracking-[0.03em] uppercase text-[#132a13]">
              Mohan Madheshwaran
            </span>
            <span className="mt-4 block text-[clamp(1.1rem,2vw,1.6rem)] font-bold tracking-[0.02em] text-[rgb(19_42_19_/_78%)]">
              Frontend Development • UI Design • UX Strategy
            </span>
          </h1>
          <p className="mt-4 max-w-[46rem] text-[1.02rem] leading-[1.7] text-[rgb(19_42_19_/_76%)]">
            Designing and building digital experiences that balance product clarity,
            visual quality, and real-world implementation rigor.
          </p>
        </div>
        <div className="justify-self-end w-[min(100%,290px)] max-[640px]:justify-self-center max-[640px]:w-[min(100%,260px)]">
          <Image
            src="/profile-pic.jpg"
            alt="Mohan profile photo"
            width={360}
            height={420}
            className="h-auto w-full rounded-[20px] border border-[rgb(19_42_19_/_15%)] bg-[linear-gradient(180deg,rgb(255_255_255_/_80%),rgb(226_238_228_/_80%))] object-cover shadow-[0_18px_34px_rgb(10_26_10_/_16%)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}