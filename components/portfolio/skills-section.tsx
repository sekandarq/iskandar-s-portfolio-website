"use client"

import { motion } from "framer-motion"
import { 
  Code2, 
  Server, 
  Brain, 
  Wrench,
  Database,
  Globe,
  Cpu,
  GitBranch,
  Cloud,
  Terminal,
  Layers,
  Zap
} from "lucide-react"

interface Skill {
  name: string
  icon: React.ReactNode
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Globe className="w-5 h-5" />,
    skills: [
      { name: "React", icon: <Code2 className="w-4 h-4" /> },
      { name: "Next.js", icon: <Layers className="w-4 h-4" /> },
      { name: "TypeScript", icon: <Code2 className="w-4 h-4" /> },
      { name: "Tailwind CSS", icon: <Zap className="w-4 h-4" /> },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "Node.js", icon: <Terminal className="w-4 h-4" /> },
      { name: "Python", icon: <Code2 className="w-4 h-4" /> },
      { name: "FastAPI", icon: <Zap className="w-4 h-4" /> },
      { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: "AI / ML",
    icon: <Brain className="w-5 h-5" />,
    skills: [
      { name: "OpenAI", icon: <Cpu className="w-4 h-4" /> },
      { name: "LangChain", icon: <Layers className="w-4 h-4" /> },
      { name: "TensorFlow", icon: <Brain className="w-4 h-4" /> },
      { name: "Computer Vision", icon: <Zap className="w-4 h-4" /> },
    ],
  },
  {
    title: "Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
      { name: "Docker", icon: <Layers className="w-4 h-4" /> },
      { name: "AWS", icon: <Cloud className="w-4 h-4" /> },
      { name: "CI/CD", icon: <Zap className="w-4 h-4" /> },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative">
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
            Technical Stack
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Core Competencies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Battle-tested technologies powering production systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-xl p-6 shimmer-border card-lift"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-glass transition-colors"
                  >
                    <span className="text-muted-foreground">{skill.icon}</span>
                    <span className="text-sm text-foreground">{skill.name}</span>
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
