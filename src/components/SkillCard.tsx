export function SkillCard({ category, items }: { category: string; items: string[] }) {
  return (
    <div className="panel p-5 transition-colors hover:border-primary/40">
      <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{category}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-border bg-surface-2 px-2.5 py-1.5 text-sm text-foreground/90"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
