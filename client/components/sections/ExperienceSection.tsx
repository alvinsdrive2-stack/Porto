import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { SectionWrapper } from "./SectionWrapper";

export function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      index="02"
      title="Professional Experience"
      description="Leadership across automation, system design, and game development with a track record of guiding teams to deliver immersive and efficient solutions."
    >
      <div className="grid gap-4">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
            whileHover={{ translateY: -6 }}
            className="group rounded-2xl border border-border/40 bg-card/70 p-4 shadow-card transition-all duration-300 hover:border-accent/40 hover:bg-accent/10"
          >
            <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-accent/70">
                  {experience.company}
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-foreground">
                  {experience.position}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">{experience.period}</p>
            </header>

            <div className="mt-4 flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-accent/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {experience.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" aria-hidden="true" />
                  <span className="leading-relaxed">{responsibility}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
