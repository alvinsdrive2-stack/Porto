import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Calendar, Tag } from "lucide-react";
import { ProjectDetail } from "@/components/ui/ProjectDetail";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore my recent work and creative endeavors
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group"
            onClick={() => setSelectedProject(project.id)}
          >
            <div className="content-card h-full flex flex-col shadow-soft hover:shadow-glow cursor-pointer">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm ${
                    project.status === 'completed'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : project.status === 'in-progress'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : project.status === 'pending'
                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status === 'completed' ? 'Completed' :
                     project.status === 'in-progress' ? 'In Progress' :
                     project.status === 'pending' ? 'Pending' : 'Prototype'}
                  </span>
                </div>

                {/* Quick Actions Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-background/90 p-3 text-foreground transition-all duration-300 hover:bg-accent hover:text-background hover:scale-110"
                      aria-label="View live project"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-background/90 p-3 text-foreground transition-all duration-300 hover:bg-accent hover:text-background hover:scale-110"
                      aria-label="View source code"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                    {project.category}
                  </span>
                </div>

                <p className="mb-3 text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-accent/10 px-2 py-1 text-xs font-medium text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{project.period.split(' – ')[0]}</span>
                  </div>
                  <div className="flex items-center gap-1 text-accent">
                    <span>Click to view details</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProjectData && (
        <ProjectDetail
          project={selectedProjectData}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}