import { experiences } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
      {experiences.map((exp) => (
        <li key={exp.company} className="relative">
          <span
            className="absolute -left-[1.68rem] top-2 h-3 w-3 rounded-full border-2 border-primary bg-background sm:-left-[2.18rem]"
            aria-hidden
          />
          <div className="panel p-5 transition-colors hover:border-primary/40 sm:p-6">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:flex sm:items-center sm:justify-between">
              <h3 className="min-w-0 text-lg font-semibold tracking-tight">{exp.company}</h3>
              <span className="shrink-0 rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-xs text-muted-foreground">
                {exp.role}
              </span>
            </div>
            <ul className="mt-4 space-y-2.5">
              {exp.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span className="min-w-0">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
