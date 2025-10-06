import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { SectionId } from "@/data/portfolio";

interface SectionWrapperProps {
  id: SectionId;
  index: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function SectionWrapper({
  id,
  index,
  title,
  description,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="rounded-3xl border border-border/30 bg-card/40 p-4 shadow-card backdrop-blur-lg md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-4 text-accent/70">
              <span className="text-sm font-semibold uppercase tracking-[0.35em]">
                {index}
              </span>
              <span className="hidden h-px flex-1 bg-border/50 md:block" aria-hidden="true" />
            </div>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-foreground md:text-4xl">
              {title}
            </h2>
          </div>
          {description ? (
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {description}
            </p>
          ) : null}
        </div>

        <div className="mt-6">
          {children}
        </div>
      </div>
    </section>
  );
}
