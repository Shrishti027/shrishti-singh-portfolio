import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { architectureNodes, serviceDescriptions } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ArchitectureDiagram() {
  const [selected, setSelected] = useState<string>("frontend");
  const [service, setService] = useState<string | null>(null);

  const active = architectureNodes.find((n) => n.id === selected) ?? architectureNodes[0]!;
  const description = service ? serviceDescriptions[service] : active.description;

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
      <div className="panel p-4 sm:p-6">
        <ol className="space-y-1">
          {architectureNodes.map((node, i) => (
            <li key={node.id}>
              <button
                type="button"
                onClick={() => {
                  setSelected(node.id);
                  setService(null);
                }}
                aria-pressed={selected === node.id && !service}
                className={cn(
                  "w-full rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors",
                  selected === node.id && !service
                    ? "border-primary/60 bg-primary/10 text-foreground"
                    : "border-border bg-surface-2 text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                {node.label}
              </button>

              {node.children ? (
                <div className="mt-2 grid grid-cols-1 gap-2 pl-4 sm:grid-cols-2">
                  {node.children.map((child) => (
                    <button
                      key={child}
                      type="button"
                      onClick={() => {
                        setSelected(node.id);
                        setService(child);
                      }}
                      aria-pressed={service === child}
                      className={cn(
                        "rounded-md border px-3 py-2 text-left font-mono text-xs transition-colors",
                        service === child
                          ? "border-primary/60 bg-primary/10 text-foreground"
                          : "border-border bg-surface text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {child}
                    </button>
                  ))}
                </div>
              ) : null}

              {i < architectureNodes.length - 1 ? (
                <div className="flex justify-center py-2" aria-hidden>
                  <ArrowDown className="h-4 w-4 text-muted-foreground" />
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      <aside className="panel h-fit p-5 sm:p-6 lg:sticky lg:top-24" aria-live="polite">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Component</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">{service ?? active.label}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <p className="mt-5 border-t border-border pt-4 font-mono text-xs text-muted-foreground">
          Select any component to read what it does.
        </p>
      </aside>
    </div>
  );
}
