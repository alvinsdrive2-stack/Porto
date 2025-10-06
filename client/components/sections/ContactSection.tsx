import { Mail, Linkedin } from "lucide-react";
import type { PersonalInfo } from "@/data/portfolio";
import { SectionWrapper } from "./SectionWrapper";

interface ContactSectionProps {
  personalInfo: PersonalInfo;
}

export function ContactSection({ personalInfo }: ContactSectionProps) {
  return (
    <SectionWrapper
      id="contact"
      index="07"
      title="Let’s Build Something"
      description="Ready to collaborate on high-impact systems, immersive products, or automation initiatives."
    >
      <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/20 via-card/80 to-card/50 p-6 text-center shadow-glow">
        <div className="absolute -left-12 top-0 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <h3 className="font-heading text-3xl font-semibold text-foreground">
            Get In Touch
          </h3>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Whether it's building a new platform, reimagining an existing product, or exploring creative collaborations, I'm always excited to discuss ideas and opportunities.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 rounded-full border border-accent/40 bg-accent/10 px-8 py-3 text-sm font-medium text-accent transition-all duration-300 hover:border-accent/60 hover:bg-accent/20"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-full border border-border/60 bg-transparent px-8 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
