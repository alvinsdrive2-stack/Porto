import { Mail, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem, PersonalInfo, SectionId } from "@/data/portfolio";

interface SidebarProps {
  navItems: NavItem[];
  personalInfo: PersonalInfo;
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

export function Sidebar({
  navItems,
  personalInfo,
  activeSection,
  onNavigate,
}: SidebarProps) {
  return (
    <aside className="pointer-events-auto hidden md:fixed md:inset-y-0 md:flex md:w-[300px] md:z-30">
      <div className="relative flex h-full w-full flex-col justify-between border-r border-sidebar-border/60 bg-sidebar-background/85 px-9 py-12 backdrop-blur-xl">
        <div>
          <span className="text-xs uppercase tracking-[0.4em] text-accent/80">
            {personalInfo.title}
          </span>
          <h1 className="mt-5 font-heading text-2xl font-semibold leading-tight text-foreground">
            {personalInfo.name}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {personalInfo.tagline}
          </p>

          <nav aria-label="Primary" className="mt-10">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = item.id === activeSection;
                return (
                  <li key={item.id} className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onNavigate(item.id)}
                      className={cn(
                        "flex items-center gap-3 text-left transition-all duration-300 group",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      <span
                        className={cn(
                          "h-2 w-2 rounded-full transition-all duration-300 flex-shrink-0",
                          isActive
                            ? "bg-accent shadow-glow scale-150"
                            : "bg-border group-hover:bg-accent/60 group-hover:scale-125",
                        )}
                        aria-hidden="true"
                      />
                      <span className={cn(
                        "text-sm font-medium transition-all duration-300",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      )}>
                        {item.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-5 text-sm text-muted-foreground">
          <div className="space-y-1">
            <br></br>
            <a
              href={`mailto:${personalInfo.email}`}
              className="block text-muted-foreground transition-colors hover:text-accent"
            >
              {personalInfo.email}
            </a>
            <p>{personalInfo.phone}</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              aria-label="Email"
              href={`mailto:${personalInfo.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-transparent text-accent transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              aria-label="LinkedIn"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-transparent text-accent transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
