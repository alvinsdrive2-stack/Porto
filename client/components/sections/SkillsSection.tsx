import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import { softSkills, technicalSkills } from "@/data/portfolio";
import { SectionWrapper } from "./SectionWrapper";

export function SkillsSection() {
  const [pausedSection, setPausedSection] = useState<string | null>(null);
  
  // Track animation progress
  const [animationProgress, setAnimationProgress] = useState({
    programming: 0,
    frameworks: 0,
  });
  
  // Track posisi saat pause untuk offset
  const [pausedPosition, setPausedPosition] = useState({
    programming: 0,
    frameworks: 0,
  });
  
  // Mouse tracking for parallax effect - SEPARATE per section
  const programmingMouseX = useMotionValue(0);
  const programmingMouseY = useMotionValue(0);
  const frameworksMouseX = useMotionValue(0);
  const frameworksMouseY = useMotionValue(0);
  
  // Smooth spring animation - SEPARATE per section
  const programmingSpringX = useSpring(programmingMouseX, { stiffness: 50, damping: 20 });
  const programmingSpringY = useSpring(programmingMouseY, { stiffness: 50, damping: 20 });
  const frameworksSpringX = useSpring(frameworksMouseX, { stiffness: 50, damping: 20 });
  const frameworksSpringY = useSpring(frameworksMouseY, { stiffness: 50, damping: 20 });

  const handleMouseEnter = (section: string) => {
    setPausedSection(section);
    // Save posisi saat di-pause
    if (section === "programming") {
      setPausedPosition(prev => ({ ...prev, programming: animationProgress.programming }));
    } else if (section === "frameworks") {
      setPausedPosition(prev => ({ ...prev, frameworks: animationProgress.frameworks }));
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, section: string) => {
    if (pausedSection !== section) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate percentage position
    const xPercent = (x / rect.width - 0.5) * 2; // -1 to 1
    const yPercent = (y / rect.height - 0.5) * 2; // -1 to 1
    
    // Apply subtle movement based on section
    if (section === "programming") {
      programmingMouseX.set(xPercent * 30);
      programmingMouseY.set(yPercent * 15);
    } else if (section === "frameworks") {
      frameworksMouseX.set(xPercent * 30);
      frameworksMouseY.set(yPercent * 15);
    }
  };

  const handleMouseLeave = (section: string) => {
    setPausedSection(null);
    
    // Reset specific section
    if (section === "programming") {
      programmingMouseX.set(0);
      programmingMouseY.set(0);
    } else if (section === "frameworks") {
      frameworksMouseX.set(0);
      frameworksMouseY.set(0);
    }
  };

  return (
    <SectionWrapper
      id="skills"
      index="04"
      title="Skills & Expertise"
      description="A multi-disciplinary toolkit across programming, tooling, and leadership to deliver resilient digital experiences."
    >

      <div className="flex flex-col gap-8">

        {/* Programming Languages - Horizontal Slideshow */}
{/* Frameworks & Tools - Horizontal Slideshow */}
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading text-xl font-semibold text-foreground">
              Frameworks & Tools
            </h3>
            <span className="h-px w-24 bg-accent/30" aria-hidden="true" />
          </div>

          <div className="overflow-hidden"
               onMouseEnter={() => handleMouseEnter("frameworks")}
               onMouseMove={(e) => handleMouseMove(e, "frameworks")}
               onMouseLeave={() => handleMouseLeave("frameworks")}>
            <div className="relative">
              <motion.div
                className="flex gap-6"
                animate={pausedSection === "frameworks" ? { 
                  x: pausedPosition.frameworks 
                } : {
                  x: [animationProgress.frameworks, -2400],
                }}
                onUpdate={(latest) => {
                  if (latest.x !== undefined && pausedSection !== "frameworks") {
                    const currentX = latest.x as number;
                    if (currentX <= -2400) {
                      setAnimationProgress(prev => ({ ...prev, frameworks: 0 }));
                    } else {
                      setAnimationProgress(prev => ({ ...prev, frameworks: currentX }));
                    }
                  }
                }}
                style={{ 
                  width: "fit-content",
                }}
                transition={{
                  x: pausedSection === "frameworks" ? {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  } : {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicate for infinity effect */}
                {[...technicalSkills[1].items, ...technicalSkills[1].items].map((skill, index) => {
                  const Icon = skill.icon;
                  const originalIndex = index % technicalSkills[1].items.length;
                  return (
                    <motion.div
                      key={`${skill.name}-${originalIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: originalIndex * 0.1, duration: 0.5 }}
                      className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/70 p-5 transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 flex-shrink-0 w-80"
                      style={{
                        x: pausedSection === "frameworks" ? frameworksSpringX : 0,
                        y: pausedSection === "frameworks" ? frameworksSpringY : 0,
                      }}
                    >
                      <div className="absolute -right-10 top-6 h-20 w-20 rounded-full bg-accent/5 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative z-10 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/70">
                            {skill.level}
                          </span>
                        </div>
                        <div>
                          <p className="text-base font-medium text-foreground">
                            {skill.name}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Frameworks & Tools - Horizontal Slideshow */}
       {/* Programming Languages - Horizontal Slideshow */}
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading text-xl font-semibold text-foreground">
              Programming Languages
            </h3>
            <span className="h-px w-24 bg-accent/30" aria-hidden="true" />
          </div>

          <div className="overflow-hidden"
               onMouseEnter={() => handleMouseEnter("programming")}
               onMouseMove={(e) => handleMouseMove(e, "programming")}
               onMouseLeave={() => handleMouseLeave("programming")}>
            <div className="relative">
              <motion.div
                className="flex gap-6"
                animate={pausedSection === "programming" ? { 
                  x: pausedPosition.programming 
                } : {
                  x: [animationProgress.programming, -1920],
                }}
                onUpdate={(latest) => {
                  if (latest.x !== undefined && pausedSection !== "programming") {
                    const currentX = latest.x as number;
                    if (currentX <= -1920) {
                      setAnimationProgress(prev => ({ ...prev, programming: 0 }));
                    } else {
                      setAnimationProgress(prev => ({ ...prev, programming: currentX }));
                    }
                  }
                }}
                style={{ 
                  width: "fit-content",
                }}
                transition={{
                  x: pausedSection === "programming" ? {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  } : {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicate for infinity effect */}
                {[...technicalSkills[0].items, ...technicalSkills[0].items].map((skill, index) => {
                  const Icon = skill.icon;
                  const originalIndex = index % technicalSkills[0].items.length;
                  return (
                    <motion.div
                      key={`${skill.name}-${originalIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: originalIndex * 0.1, duration: 0.5 }}
                      className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/70 p-5 transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 flex-shrink-0 w-80"
                      style={{
                        x: pausedSection === "programming" ? programmingSpringX : 0,
                        y: pausedSection === "programming" ? programmingSpringY : 0,
                      }}
                    >
                      <div className="absolute -right-10 top-6 h-20 w-20 rounded-full bg-accent/5 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative z-10 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/70">
                            {skill.level}
                          </span>
                        </div>
                        <div>
                          <p className="text-base font-medium text-foreground">
                            {skill.name}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/15 via-card/70 to-card/40 p-4 shadow-glow"
        >
          <div className="absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -right-8 top-0 h-24 w-24 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative z-10">
            <h3 className="font-heading text-xl font-semibold text-foreground">
              Soft Skills
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Human-centered skills that blend creativity, adaptability, and mentorship to elevate every collaboration.
            </p>
            <div className="mt-4 grid gap-3">
              {softSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-border/30 bg-card/70 p-3 transition-all duration-300 hover:border-accent/30 hover:bg-accent/10"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {skill.name}
                        </p>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/70">
                          {skill.level}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
