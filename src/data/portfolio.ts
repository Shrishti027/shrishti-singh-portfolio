export type Experience = {
  company: string;
  role: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    company: "ACT Fibernet",
    role: "Software Engineer",
    points: [
      "Worked on backend systems and enterprise applications using Java and Spring Boot.",
      "Automated offers and discount workflows serving approximately 11 lakh customers.",
      "Developed WhatsApp modules for payment links and message templates.",
      "Improved internal dashboards supporting approximately 17,000 employees and 11 lakh customers.",
      "Optimized MySQL stored procedures, reducing execution time from approximately 1–2 minutes to around 4 seconds.",
    ],
  },
  {
    company: "Relanto",
    role: "Software Engineer",
    points: [
      "Backend development for enterprise applications using Java and Spring Boot.",
      "Designed and maintained REST APIs backed by relational databases.",
      "Worked across distributed systems and service-to-service integrations.",
      "Contributed to Cisco-related engineering work on distributed application performance (see Featured Projects).",
    ],
  },
  {
    company: "Renovite Technologies",
    role: "Software Development",
    points: [
      "Java and backend development across service-oriented applications.",
      "Worked with REST APIs, databases and core Java application logic.",
    ],
  },
];

export type SkillGroup = { category: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "JPA",
      "Hibernate",
      "JDBC",
      "REST APIs",
      "Microservices",
    ],
  },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Kafka", "Linux"] },
  { category: "Frontend", items: ["Angular", "React", "TypeScript", "HTML", "CSS"] },
  { category: "Tools", items: ["Git", "Bitbucket", "Maven", "IntelliJ IDEA", "VS Code"] },
];

export type Project = {
  id: string;
  name: string;
  tag?: string;
  description: string;
  tech: string[];
  details: string[];
  repo: string;
  demo?: string;
  architectureLink?: boolean;
};

export const projects: Project[] = [
  {
    id: "tracing",
    name: "Distributed Performance Tracing Engine",
    tag: "Engineering work",
    description:
      "An engineering system focused on analyzing distributed application performance and understanding dependencies across microservices.",
    tech: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Distributed Tracing",
      "REST APIs",
      "Performance Analysis",
    ],
    details: [
      "Distributed tracing across service boundaries",
      "Microservice dependency mapping",
      "Critical Path Analysis",
      "Latency optimization",
      "Causal analysis of request flows",
      "Performance bottleneck identification",
    ],
    repo: "https://github.com/shrishti-singh/distributed-tracing-engine",
    architectureLink: true,
  },
  {
    id: "tasks",
    name: "Enterprise Task Management Platform",
    description:
      "An enterprise task-management application for organising work across teams, with scheduling, notes and structured views.",
    tech: ["Java", "Spring Boot", "REST API", "Angular", "PostgreSQL", "Hibernate"],
    details: [
      "Task creation and status management",
      "Important, Today, Upcoming, Inbox and Trash views",
      "Calendar and scheduling",
      "Rich text notes and links",
      "Search and filtering",
    ],
    repo: "https://github.com/shrishti-singh/task-management-platform",
  },
  {
    id: "offers",
    name: "Customer Offer Automation Platform",
    tag: "Based on professional work",
    description:
      "A backend automation platform for managing customer offers and discount workflows at scale.",
    tech: ["Java", "Spring Boot", "REST APIs", "MySQL", "Microservices"],
    details: [
      "Rule-driven offer and discount workflow automation",
      "Real-world workflows supported approximately 11 lakh customers",
      "Batch and scheduled processing for large customer sets",
      "Query and stored procedure optimization for throughput",
    ],
    repo: "https://github.com/shrishti-singh/offer-automation",
  },
  {
    id: "orders",
    name: "Cloud-Native Order & Payment Platform",
    tag: "Personal / learning project",
    description:
      "A personal learning project exploring event-driven, cloud-native service design for orders and payments.",
    tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "AWS"],
    details: [
      "Flow: React → API Gateway → Spring Boot Services → Kafka → PostgreSQL",
      "Asynchronous order and payment events over Kafka",
      "Containerized services with Docker",
      "Cloud-ready configuration and deployment on AWS",
    ],
    repo: "https://github.com/shrishti-singh/cloud-native-orders",
  },
];

export type ArchNode = {
  id: string;
  label: string;
  description: string;
  children?: string[];
};

export const architectureNodes: ArchNode[] = [
  {
    id: "frontend",
    label: "Frontend",
    description:
      "React / Angular client. Talks only to the API Gateway over HTTPS and never directly to internal services.",
  },
  {
    id: "gateway",
    label: "API Gateway",
    description:
      "Single entry point handling routing, authentication, rate limiting and request validation before traffic reaches services.",
  },
  {
    id: "services",
    label: "Spring Boot Microservices",
    description:
      "Independently deployable services owning their own domain logic and data access.",
    children: ["User Service", "Order Service", "Payment Service", "Notification Service"],
  },
  {
    id: "kafka",
    label: "Kafka",
    description:
      "Event backbone for asynchronous communication between services — order events, payment events and notifications.",
  },
  {
    id: "postgres",
    label: "PostgreSQL",
    description:
      "Durable relational storage with per-service schemas, indexing and query tuning for predictable latency.",
  },
];

export const serviceDescriptions: Record<string, string> = {
  "User Service": "Accounts, profiles and identity data exposed through REST APIs.",
  "Order Service": "Order lifecycle, validation and state transitions; publishes order events.",
  "Payment Service": "Payment initiation, confirmation and reconciliation against orders.",
  "Notification Service": "Consumes events and delivers email, SMS and messaging notifications.",
};

export const principles = [
  {
    title: "Clean Architecture",
    body: "Clear layering between controllers, domain logic and persistence so business rules stay testable.",
  },
  {
    title: "API-First Design",
    body: "Contracts defined before implementation — predictable resources, versioning and error shapes.",
  },
  {
    title: "Performance Optimization",
    body: "Measure before tuning: profiling, query plans and hot-path analysis over guesswork.",
  },
  {
    title: "Scalable Systems",
    body: "Stateless services, async messaging and horizontal scaling as the default posture.",
  },
  {
    title: "Observability",
    body: "Structured logs, metrics and distributed traces so failures are diagnosable in production.",
  },
  {
    title: "Database Optimization",
    body: "Right indexes, tuned stored procedures and careful transaction boundaries.",
  },
  {
    title: "Secure APIs",
    body: "Authentication, authorization, strict input validation and least-privilege access.",
  },
  {
    title: "Cloud-Ready Applications",
    body: "Containerized, externally configured and built to run identically across environments.",
  },
];

export const aboutParagraphs = [
  "I'm a Java and backend focused software engineer with roughly 3.5–4 years of professional experience building backend systems, REST APIs, automation workflows, internal dashboards and enterprise applications.",
  "My day-to-day work spans designing services, modelling data, tuning slow queries and making sure systems stay reliable as traffic and complexity grow.",
];

export const aboutStack = [
  "Java",
  "Spring Boot",
  "REST APIs",
  "Microservices",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Kubernetes",
  "Kafka",
  "Angular",
];
