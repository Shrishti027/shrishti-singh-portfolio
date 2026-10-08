import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink, FileText, Github } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";
import {
  aboutParagraphs,
  aboutStack,
  principles,
  projects,
  skillGroups,
} from "@/data/portfolio";

const TITLE = "Shrishti Singh | Java Backend Developer";
const DESCRIPTION =
  "Java Backend Developer specializing in Spring Boot, REST APIs, microservices, databases, AWS and scalable backend systems.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: siteConfig.name,
          jobTitle: siteConfig.title,
          email: `mailto:${siteConfig.email}`,
          sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />

        <Section id="about" ariaLabel="About">
          <SectionHeader eyebrow="About" title="Backend engineering, end to end" />
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-4">
              {aboutParagraphs.map((p) => (
                <p key={p} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {p}
                </p>
              ))}
            </div>
            <div className="panel p-5 sm:p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                Works with
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {aboutStack.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface-2 px-2.5 py-1.5 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="experience" ariaLabel="Experience">
          <SectionHeader
            eyebrow="Experience"
            title="Where I've built things"
            description="Roughly 3.5–4 years across enterprise backend systems, automation and internal platforms."
          />
          <ExperienceTimeline />
        </Section>

        <Section id="skills" ariaLabel="Skills">
          <SectionHeader eyebrow="Skills" title="Technologies I work with" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <SkillCard key={group.category} category={group.category} items={group.items} />
            ))}
          </div>
        </Section>

        <Section id="projects" ariaLabel="Featured projects">
          <SectionHeader
            eyebrow="Projects"
            title="Featured work"
            description="A mix of professional engineering work and personal projects. Expand any card for details."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>

        <Section id="architecture" ariaLabel="Architecture">
          <SectionHeader
            eyebrow="Architecture"
            title="A system I'd design today"
            description="An event-driven, cloud-native reference architecture. Click a component to see its role."
          />
          <ArchitectureDiagram />
        </Section>

        <Section id="principles" ariaLabel="Engineering principles">
          <SectionHeader eyebrow="Principles" title="How I Build Software" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title} className="panel p-5 transition-colors hover:border-primary/40">
                <h3 className="text-sm font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="github" ariaLabel="GitHub repositories">
          <SectionHeader
            eyebrow="GitHub"
            title="Repositories"
            description={`Repositories live at github.com/${siteConfig.githubUsername}. Update the username in src/config/site.ts.`}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.id} className="panel flex flex-col p-5">
                <h3 className="text-sm font-semibold tracking-tight">{project.name}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border bg-surface-2 px-2 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                  >
                    <Github className="h-4 w-4" aria-hidden />
                    GitHub
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-3.5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden />
                      Live demo
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="resume" ariaLabel="Resume">
          <div className="panel grid gap-6 p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="min-w-0">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Interested in working together?
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Grab the full resume — place the PDF at{" "}
                <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-xs">
                  public{siteConfig.resumePath}
                </code>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download Resume
              </a>
              <a
                href={siteConfig.resumePath}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <FileText className="h-4 w-4" aria-hidden />
                View Resume
              </a>
            </div>
          </div>
        </Section>

        <Section id="contact" ariaLabel="Contact">
          <SectionHeader eyebrow="Contact" title="Get in touch" />
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
