import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

const links = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    Icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: siteConfig.linkedinUrl.replace(/^https?:\/\//, ""),
    href: siteConfig.linkedinUrl,
    Icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: `github.com/${siteConfig.githubUsername}`,
    href: siteConfig.githubUrl,
    Icon: Github,
    external: true,
  },
];

export function Contact() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="panel p-6 sm:p-8">
        <h3 className="text-xl font-semibold tracking-tight">Let's talk backend</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Open to backend engineering roles and collaborations around Java, Spring Boot and
          distributed systems. Email is the fastest way to reach me.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="h-4 w-4" aria-hidden />
          Email {siteConfig.name.split(" ")[0]}
        </a>
      </div>

      <ul className="grid gap-3">
        {links.map(({ label, value, href, Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              className="panel flex min-w-0 items-center gap-4 p-4 transition-colors hover:border-primary/40 sm:p-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {label}
                </span>
                <span className="block truncate text-sm font-medium">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
