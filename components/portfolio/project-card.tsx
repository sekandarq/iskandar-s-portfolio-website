"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export interface Project {
  title: string
  description: string
  image: string
  techStack: string[]
  results: string
  liveUrl?: string
  githubUrl?: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-secondary">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 space-y-4">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Results */}
        <div className="flex items-center gap-2 text-xs font-mono text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          {project.results}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs bg-transparent border-glass-border text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          {project.liveUrl && (
            <Button
              asChild
              size="sm"
              className="flex-1 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/30"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 border-glass-border hover:border-primary/30 hover:bg-glass"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
