import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { PersonalInfo, SectionId } from "@/data/portfolio";

interface HeroSectionProps {
  personalInfo: PersonalInfo;
  onNavigate: (id: SectionId) => void;
}

export function HeroSection({ personalInfo, onNavigate }: HeroSectionProps) {
  return (
    <section id="about" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl glass-effect px-4 py-8 shadow-card md:px-6 md:py-10 hover-lift"
      >
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-16 top-16 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute inset-0 bg-hero-grid opacity-60" />
        </div>

        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-accent/80">
              Hello, I am
            </span>
            <h1 className="max-w-3xl font-heading text-2xl font-semibold leading-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base text-balance">
              {personalInfo.summary}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="content-card hover-lift shadow-soft p-3">
              <p className="text-xs uppercase tracking-[0.25em] text-accent/70">
                Core Focus
              </p>
              <p className="mt-2 text-xs font-medium text-foreground">
                Scalable system design, automation, and game development leadership.
              </p>
            </div>
            <div className="content-card hover-lift shadow-soft p-3">
              <p className="text-xs uppercase tracking-[0.25em] text-accent/70">
                Impact
              </p>
              <p className="mt-2 text-xs font-medium text-foreground">
                Drives cross-functional teams to deliver immersive experiences and efficient tooling.
              </p>
            </div>
            <div className="content-card hover-lift shadow-soft p-3">
              <p className="text-xs uppercase tracking-[0.25em] text-accent/70">
                Currently
              </p>
              <p className="mt-2 text-xs font-medium text-foreground">
                Scholarship student at BINUS University exploring modular product architectures.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => onNavigate("experience")}
              className="flex items-center gap-2 rounded-full border border-accent/50 bg-accent/15 px-4 py-2 text-xs font-medium text-accent transition-all duration-300 hover:border-accent hover:bg-accent/25 hover:shadow-glow hover-lift"
            >
              Explore Experience
              <ArrowDownRight className="h-3 w-3" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="flex items-center gap-2 rounded-full border border-border/60 bg-transparent px-4 py-2 text-xs font-medium text-foreground transition-all duration-300 hover:border-accent/50 hover:bg-accent/15 hover:text-accent hover:shadow-soft hover-lift"
            >
              Start a Conversation
              <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
