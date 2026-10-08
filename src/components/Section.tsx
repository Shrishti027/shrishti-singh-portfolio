import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  ariaLabel,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabel: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("scroll-mt-20 border-t border-border/60 py-16 sm:py-20 md:py-24", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
