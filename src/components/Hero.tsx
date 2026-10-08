import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";

const stackFlow = [
  { label: "Client", note: "React / Angular" },
  { label: "API Gateway", note: "Routing · Auth" },
  { label: "Spring Boot Services", note: "Domain logic" },
  { label: "Kafka", note: "Async events" },
  { label: "PostgreSQL / MySQL", note: "Persistence" },
];

export function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden />
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              {siteConfig.title}
            </p>
            <h1 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.4rem]">
              <span className="block text-muted-foreground text-base font-mono uppercase tracking-[0.2em] sm:text-sm">
                {siteConfig.name}
              </span>
              <span className="mt-3 block text-gradient">{siteConfig.headline}</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {siteConfig.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View Projects
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={siteConfig.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download Resume
              </a>
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub profile"
                  className="grid h-11 w-11 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn profile"
                  className="grid h-11 w-11 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
          </div>

          <div className="panel min-w-0 p-4 sm:p-6">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                request flow
              </span>
              <span className="flex gap-1.5" aria-hidden>
                <i className="h-2 w-2 rounded-full bg-border" />
                <i className="h-2 w-2 rounded-full bg-border" />
                <i className="h-2 w-2 rounded-full bg-primary/70" />
              </span>
            </div>
            <ol className="mt-4 space-y-2">
              {stackFlow.map((node, i) => (
                <li key={node.label}>
                  <div className="flex min-w-0 items-center gap-3 rounded-lg border border-border bg-surface-2 px-3 py-3 transition-colors hover:border-primary/50">
                    <span className="font-mono text-xs text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-sm font-medium">
                      {node.label}
                    </span>
                    <span className="hidden shrink-0 font-mono text-xs text-muted-foreground sm:inline">
                      {node.note}
                    </span>
                  </div>
                  {i < stackFlow.length - 1 ? (
                    <div className="ml-6 h-3 w-px bg-border" aria-hidden />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
