import { motion } from "framer-motion";
import { organizationExperience } from "@/data/portfolio";
import { SectionWrapper } from "./SectionWrapper";

export function OrganizationsSection() {
  return (
    <SectionWrapper
      id="organizations"
      index="06"
      title="Organizations"
      description="Community leadership that builds inclusive systems and elevates every participant’s contribution."
    >
      <div className="grid gap-4">
        {organizationExperience.map((experience, index) => (
          <motion.article
            key={experience.organization}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
            className="rounded-2xl border border-border/40 bg-card/60 p-4 shadow-card transition-all duration-300 hover:border-accent/40 hover:bg-accent/10"
          >
            <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-accent/70">
                  {experience.organization}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-foreground">
                  {experience.position}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">{experience.period}</p>
            </header>

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
