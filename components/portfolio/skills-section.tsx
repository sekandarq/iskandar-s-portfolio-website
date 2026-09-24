"use client"

import { motion } from "framer-motion"
import {
  Bot,
  Cloud,
  Code2,
  Database,
  Figma,
  GitBranch,
  Globe,
  Layers,
  LayoutPanelTop,
  Palette,
  Server,
  Terminal,
  TestTubeDiagonal,
  Wrench,
  Zap,
} from "lucide-react"

interface Skill {
  name: string
  icon: React.ReactNode
}

interface SkillCategory {
  title: string
  accent: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    accent: "Building interfaces",
    skills: [
      { name: "React.js", icon: <Code2 className="h-4 w-4" /> },
      { name: "Next.js", icon: <Layers className="h-4 w-4" /> },
      { name: "TypeScript, JavaScript", icon: <Code2 className="h-4 w-4" /> },
      { name: "HTML", icon: <Globe className="h-4 w-4" /> },
      { name: "CSS, Tailwind CSS", icon: <Palette className="h-4 w-4" /> },
    ],
  },
  {
    title: "AI / Automation",
    accent: "Practical AI workflows",
    skills: [
      { name: "AI Integration", icon: <Bot className="h-4 w-4" /> },
      { name: "OpenAI API", icon: <Zap className="h-4 w-4" /> },
      { name: "Google Cloud API", icon: <Cloud className="h-4 w-4" /> },
      { name: "n8n", icon: <LayoutPanelTop className="h-4 w-4" /> },
      { name: "Prompt Flows", icon: <Bot className="h-4 w-4" /> },
      { name: "AI Features", icon: <SparkPill /> },
    ],
  },
  {
    title: "Backend",
    accent: "Supporting product logic",
    skills: [
      { name: "Node.js", icon: <Server className="h-4 w-4" /> },
      { name: "REST API", icon: <Zap className="h-4 w-4" /> },
      { name: "FastAPI", icon: <Server className="h-4 w-4" /> },
      { name: "Python", icon: <Code2 className="h-4 w-4" /> },
      { name: "Java", icon: <Code2 className="h-4 w-4" /> },
    ],
  },
  {
    title: "Database",
    accent: "Data foundations",
    skills: [
      { name: "PostgreSQL", icon: <Database className="h-4 w-4" /> },
      { name: "MySQL", icon: <Database className="h-4 w-4" /> },
    ],
  },
  {
    title: "Cloud / DevOps",
    accent: "Shipping and deployment",
    skills: [
      { name: "AWS", icon: <Cloud className="h-4 w-4" /> },
      { name: "Docker", icon: <Layers className="h-4 w-4" /> },
      { name: "CI/CD", icon: <GitBranch className="h-4 w-4" /> },
      { name: "Vercel", icon: <Cloud className="h-4 w-4" /> },
      { name: "GitHub", icon: <GitBranch className="h-4 w-4" /> },
    ],
  },
  {
    title: "Tools",
    accent: "Day-to-day workflow",
    skills: [
      { name: "Git", icon: <GitBranch className="h-4 w-4" /> },
      { name: "Postman", icon: <TestTubeDiagonal className="h-4 w-4" /> },
      { name: "VS Code", icon: <Terminal className="h-4 w-4" /> },
      { name: "Debugging", icon: <Wrench className="h-4 w-4" /> },
      { name: "Figma", icon: <Figma className="h-4 w-4" /> },
    ],
  },
]

function SparkPill() {
  return <Zap className="h-4 w-4" />
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-surface relative py-20 scroll-mt-32 sm:py-28 lg:scroll-mt-36"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-gradient opacity-60" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
            Technical Stack
          </span>
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Tools I Build With Most
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A more visual view of the technologies I use across{" "}
            <span className="text-gradient">frontend</span>,{" "}
            <span className="text-gradient">backend</span>, 
            <span className="text-gradient"> cloud</span>, 
            and practical{" "}
            <span className="text-gradient">AI integration</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: categoryIndex * 0.06 }}
              className="min-w-0"
            >
              <div className="mb-3 px-1">
                <p className="text-xs font-mono uppercase tracking-[0.22em] text-primary/90">
                  {category.title}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {category.accent}
                </p>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 rounded-[22px] border border-primary/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.025))] px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.16)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-[linear-gradient(180deg,rgba(0,255,0,0.08),rgba(255,255,255,0.04))] hover:shadow-[0_16px_28px_rgba(0,0,0,0.2),0_0_0_1px_rgba(0,255,0,0.08)]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-primary/12 bg-background/70 text-primary transition-colors duration-200 group-hover:border-primary/30 group-hover:bg-primary/10">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-foreground/95">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
