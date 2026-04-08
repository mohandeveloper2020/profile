import Image from "next/image";
import { visionStatements } from "../portfolio-data";

export default function HeroSection() {
  return (
    <section className="space-y-4">
      <div className="grid items-center gap-6 md:grid-cols-[1.35fr_0.8fr] md:gap-8">
        <div>
          <p className="eyebrow mb-3">UI/UX Specialist - Design and Development</p>
          <h1 className="space-y-1">
            <span className="section-title block text-[clamp(3.2rem,8vw,6rem)] leading-[0.92] text-[#132a13]">
              Mohan Madheshwaran
            </span>
            <span className="section-title block text-[clamp(1.1rem,3vw,1.75rem)] leading-tight tracking-wide text-[#132a13]">
              Frontend Development &#8226; UI Design &#8226; UX Strategy
            </span>
          </h1>
          <p className="mt-4 text-sm italic text-[rgb(19_42_19_/72%)]">
            I enjoy making the web <strong>" Beautiful and User-Friendly "</strong>.
          </p>
        </div>
        <div className="w-full max-w-70 justify-self-center md:justify-self-end">
          <Image
            src="/profile-pic.jpg"
            alt="Mohan profile photo"
            width={360}
            height={420}
            className="h-auto w-full rounded-2xl object-cover shadow-[0_12px_28px_rgb(10_26_10_/18%)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
