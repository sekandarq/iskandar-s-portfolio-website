"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TiltCard } from "./tilt-card"

export interface Project {
  title: string
  description: string
  image: string
  role: string
  techStack: string[]
  results: string
  highlights: string[]
  liveUrl?: string
  githubUrl?: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const visibleTech = project.techStack.slice(0, 4)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full perspective-1000"
    >
      <TiltCard className="group glass-card relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-2xl border border-white/6 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
        <div className="relative h-56 overflow-hidden bg-secondary">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus-within:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute left-4 top-4 inline-flex rounded-full border border-primary/20 bg-background/75 px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-primary backdrop-blur-md">
            Featured Build
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-gradient">
                {project.title}
              </h3>
              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary group-focus-within:text-primary" />
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {visibleTech.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-glass-border bg-transparent text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > visibleTech.length && (
                <Badge
                  variant="outline"
                  className="border-primary/20 bg-primary/5 text-xs text-primary"
                >
                  +{project.techStack.length - visibleTech.length}
                </Badge>
              )}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-end bg-[linear-gradient(180deg,rgba(7,17,11,0.06),rgba(7,17,11,0.88)_40%,rgba(7,17,11,0.97))] opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
          <div className="w-full translate-y-6 p-4 transition-transform duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0 sm:p-5">
            <div className="max-h-full space-y-4 overflow-y-auto rounded-[22px] border border-white/10 bg-background/86 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <div className="rounded-xl border border-glass-border bg-secondary/30 px-3 py-2.5">
                <div className="mb-1 text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
                  Impact
                </div>
                <p className="text-sm text-foreground/95">
                  {project.results}
                </p>
              </div>

              <div className="rounded-xl border border-white/6 bg-white/[0.02] px-3 py-2.5">
                <div className="mb-1 text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
                  Role
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.role}
                </p>
              </div>

              <div className="flex gap-3">
                {project.liveUrl && (
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
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
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  )
}
