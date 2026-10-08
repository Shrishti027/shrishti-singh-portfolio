import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-8">
        <div className="min-w-0">
          <p className="font-semibold tracking-tight">{siteConfig.name}</p>
          <p className="text-sm text-muted-foreground">{siteConfig.title}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="grid h-11 w-11 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="grid h-11 w-11 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="grid h-11 w-11 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground lg:col-span-2">
          Built with React + TypeScript
        </p>
      </div>
    </footer>
  );
}
