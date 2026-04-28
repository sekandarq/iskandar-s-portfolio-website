"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface TimelineItem {
  type: "work" | "education"
  title: string
  organization: string
  period: string
  description: string
  achievements: string[]
  technologies?: string[]
}

const timelineItems: TimelineItem[] = [
  {
    type: "work",
    title: "Senior Backend Engineer",
    organization: "Tech Company",
    period: "2022 - Present",
    description: "Leading backend architecture and AI integration initiatives.",
    achievements: [
      "Reduced API latency by 60% through optimization",
      "Implemented AI-powered automation saving 200+ hours/month",
      "Architected microservices handling 1M+ requests/day",
    ],
    technologies: ["Node.js", "Python", "OpenAI", "AWS"],
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    organization: "Startup Inc",
    period: "2020 - 2022",
    description: "Built and scaled core product features from ground up.",
    achievements: [
      "Developed face recognition system with 99.2% accuracy",
      "Built real-time dashboard processing 10M+ events/day",
      "Led migration to TypeScript, reducing bugs by 40%",
    ],
    technologies: ["React", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    organization: "University",
    period: "2016 - 2020",
    description: "Focus on algorithms, distributed systems, and machine learning.",
    achievements: [
      "GPA: 3.8/4.0",
      "Dean's List all semesters",
      "Senior thesis on neural network optimization",
    ],
  },
]

export function TimelineSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-primary border border-primary/30 rounded-full bg-primary/10">
            Career Path
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey building scalable systems and AI solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={`${item.title}-${item.period}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* Icon */}
                  <div className="absolute left-0 p-2 rounded-lg bg-secondary border border-border">
                    {item.type === "work" ? (
                      <Briefcase className="w-4 h-4 text-primary" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-primary" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="glass-card rounded-xl p-5 sm:p-6 hover:border-primary/30 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.organization}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-primary px-2 py-1 rounded bg-primary/10 w-fit">
                        {item.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {item.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs bg-transparent border-glass-border text-muted-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
