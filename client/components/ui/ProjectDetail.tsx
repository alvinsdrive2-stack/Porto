import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Calendar, Tag, Code, Play, ArrowRight } from "lucide-react";
import type { ProjectItem } from "@/data/portfolio";

interface ProjectDetailProps {
  project: ProjectItem;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetail({ project, isOpen, onClose }: ProjectDetailProps) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-3xl glass-effect shadow-glow"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 text-foreground transition-all duration-200 hover:bg-accent hover:text-background"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Scrollable Content */}
            <div className="max-h-[90vh] overflow-y-auto">
              {/* Hero Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-6 left-6">
                  <span className={`rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm ${
                    project.status === 'completed'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : project.status === 'in-progress'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : project.status === 'pending'
                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status === 'completed' ? '✓ Completed' :
                     project.status === 'in-progress' ? '🚧 In Progress' :
                     project.status === 'pending' ? '⏳ Pending' : '⚡ Prototype'}
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                    {project.title}
                  </h2>
                  <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    About Project
                  </h3>
                  <p className="text-foreground/90 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5 text-accent" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-accent/10 border border-accent/20 px-4 py-2 text-sm font-medium text-accent hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Key Features
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-sm text-foreground/90">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-accent/50 bg-accent/15 px-6 py-3 text-sm font-medium text-accent transition-all duration-300 hover:border-accent hover:bg-accent/25 hover:shadow-glow"
                    >
                      <Play className="h-4 w-4" />
                      View Live Project
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-border/60 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/50 hover:bg-accent/15 hover:text-accent hover:shadow-soft"
                    >
                      <Github className="h-4 w-4" />
                      View Source Code
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}