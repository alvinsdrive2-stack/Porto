import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Linkedin, Mail, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem, PersonalInfo, SectionId } from "@/data/portfolio";

interface MobileNavProps {
  navItems: NavItem[];
  personalInfo: PersonalInfo;
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

export function MobileNav({
  navItems,
  personalInfo,
  activeSection,
  onNavigate,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);

  const handleNavigate = useCallback(
    (id: SectionId) => {
      onNavigate(id);
      setOpen(false);
    },
    [onNavigate],
  );

  useEffect(() => {
    if (!open) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.removeProperty("overflow");
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border/60 bg-background/95 px-6 py-4 backdrop-blur-md md:hidden">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-accent/70">
            {personalInfo.title}
          </p>
          <p className="mt-1 font-heading text-base font-semibold text-foreground">
            {personalInfo.name.split(" ").slice(0, 2).join(" ")}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/80 text-accent transition-all duration-300 hover:border-accent/50 hover:bg-accent/10"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
              className="ml-auto flex h-full w-full max-w-sm flex-col justify-between border-l border-border/60 bg-card/30 px-8 py-16"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-accent/60">
                  Navigate
                </p>
                <h2 className="mt-4 font-heading text-2xl font-semibold text-foreground">
                  {personalInfo.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {personalInfo.tagline}
                </p>

                <nav aria-label="Mobile navigation" className="mt-10">
                  <ul className="space-y-3">
                    {navItems.map((item) => {
                      const isActive = item.id === activeSection;
                      return (
                        <li key={item.id}>
                          <button
                            type="button"
                            onClick={() => handleNavigate(item.id)}
                            className={cn(
                              "group flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition-all duration-300",
                              isActive
                                ? "border-accent/40 bg-accent/10 text-foreground shadow-glow"
                                : "border-transparent text-muted-foreground hover:border-accent/20 hover:bg-accent/5 hover:text-foreground",
                            )}
                          >
                            <span className="flex items-center gap-3">
                              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent/70">
                                {item.index}
                              </span>
                              <span className="font-medium">{item.label}</span>
                            </span>
                            <span
                              className={cn(
                                "h-2 w-2 rounded-full transition-colors",
                                isActive
                                  ? "bg-accent"
                                  : "bg-border group-hover:bg-accent/60",
                              )}
                              aria-hidden="true"
                            />
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              <div className="space-y-3 text-sm">
                <p className="font-medium text-foreground">Get in touch</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="block text-muted-foreground transition-colors hover:text-accent"
                >
                  {personalInfo.email}
                </a>
                <p className="text-muted-foreground">{personalInfo.phone}</p>

                <div className="mt-4 flex items-center gap-3">
                  <a
                    aria-label="Email"
                    href={`mailto:${personalInfo.email}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-accent transition-all duration-300 hover:border-accent/40 hover:bg-accent/10"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    aria-label="LinkedIn"
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-accent transition-all duration-300 hover:border-accent/40 hover:bg-accent/10"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
