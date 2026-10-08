import { useState } from "react";
import { ChevronDown, Github, Network } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const panelId = `project-details-${project.id}`;

  return (
    <article className="panel flex flex-col p-5 transition-colors hover:border-primary/40 sm:p-6">
      {project.tag ? (
        <span className="mb-3 w-fit rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-primary">
          {project.tag}
        </span>
      ) : null}
      <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-md border border-border bg-surface-2 px-2 py-1 font-mono text-xs text-muted-foreground"
          >
            {t}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-5 inline-flex w-fit items-center gap-2 rounded-md text-sm font-medium text-primary"
      >
        {open ? "Hide details" : "Show details"}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>

      <div id={panelId} hidden={!open} className="mt-4">
        <ul className="space-y-2 border-l border-border pl-4">
          {project.details.map((d) => (
            <li key={d} className="text-sm leading-relaxed text-muted-foreground">
              {d}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 pt-1">
        {project.architectureLink ? (
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Network className="h-4 w-4" aria-hidden />
            View Architecture
          </a>
        ) : null}
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          <Github className="h-4 w-4" aria-hidden />
          GitHub
        </a>
      </div>
    </article>
  );
}
