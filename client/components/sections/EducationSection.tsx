import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { SectionWrapper } from "./SectionWrapper";

export function EducationSection() {
  return (
    <SectionWrapper
      id="education"
      index="05"
      title="Education"
      description="A foundation built on scholarship and multidisciplinary exploration, balancing technical excellence with creative leadership."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item, index) => (
          <motion.article
            key={item.institution}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="rounded-2xl border border-border/40 bg-card/60 p-4 shadow-card transition-all duration-300 hover:border-accent/40 hover:bg-accent/10"
          >
            <header>
              <p className="text-xs uppercase tracking-[0.35em] text-accent/70">
                {item.period}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                {item.institution}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {item.degree}
              </p>
            </header>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.details}
            </p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
