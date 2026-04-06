const bulletPoints = [
  "Lead end-to-end design efforts from stakeholder discussions, wireframing to final visual designs.",
  "Develop pixel-perfect, responsive web interfaces adapting mobile-first design approach.",
  "Establish and promote design style guidelines, best practices, and industry standards.",
  "Write reusable code, organize, and optimize with focus on speed, accessibility and scalability.",
  "Experience in Agile methodology and Version controls (JIRA, Git, GitLab, Bitbucket).",
  "Passionate about delivering better user experiences with clean design and robust front-end development principles.",
];

export default function SummarySection() {
  return (
    <section className="soft-panel rounded-3xl p-6 md:p-8">
      <p className="eyebrow mb-3">Professional Summary</p>
      <p className="max-w-4xl text-base leading-7 text-zinc-700">
        UI and UX specialist with over 10 years of expertise in Frontend development and User
        Interface Design, skilled in enhancing user experiences and drive project success through
        effective leadership.
      </p>
      <ul className="mt-5 space-y-3">
        {bulletPoints.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-6 text-zinc-600">
            <span
              aria-hidden="true"
              className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
            />
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
