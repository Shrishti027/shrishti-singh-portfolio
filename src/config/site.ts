/**
 * Central configuration. Edit this file to update personal details everywhere.
 * Place the resume PDF at: public/resume.pdf  (served at /resume.pdf)
 */
export const siteConfig = {
  name: "Shrishti Singh",
  title: "Java Backend Developer",
  headline: "Building scalable backend systems and cloud-ready applications.",
  subheadline:
    "Software engineer focused on Java, Spring Boot, REST APIs, microservices, databases, and cloud technologies.",
  email: "shrishtisingh027@gmail.com",
  githubUsername: "shrishti027",
  githubUrl: "https://github.com/Shrishti027",
  linkedinUrl: "http://linkedin.com/in/shrishtisingh027",
  resumePath: "/resume.pdf",
} as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Contact", href: "#contact" },
] as const;
