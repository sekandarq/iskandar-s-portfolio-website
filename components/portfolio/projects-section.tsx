"use client"

import { motion } from "framer-motion"
import { ProjectCard, type Project } from "./project-card"

const projects: Project[] = [
  {
    title: "Face Recognition Attendance System",
    description: "Real-time facial recognition system for automated attendance tracking. Built with computer vision and deep learning models for 99.2% accuracy.",
    image: "/projects/face-recognition.jpg",
    techStack: ["Python", "OpenCV", "TensorFlow", "FastAPI", "PostgreSQL"],
    results: "Reduced check-in time by 85%",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Automation Workflow Engine",
    description: "Intelligent workflow automation platform that integrates with OpenAI for natural language processing and automated task execution.",
    image: "/projects/ai-automation.jpg",
    techStack: ["Node.js", "OpenAI", "LangChain", "Redis", "Docker"],
    results: "Automated 500+ manual processes",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Full-Stack E-Commerce Platform",
    description: "Scalable e-commerce solution with real-time inventory management, payment processing, and AI-powered product recommendations.",
    image: "/projects/ecommerce.jpg",
    techStack: ["Next.js", "TypeScript", "Stripe", "Prisma", "AWS"],
    results: "$2M+ transactions processed",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "High-performance analytics platform processing millions of events with live visualizations and predictive insights.",
    image: "/projects/analytics.jpg",
    techStack: ["React", "D3.js", "GraphQL", "ClickHouse", "Kafka"],
    results: "10M+ events/day processed",
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
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
            Featured Projects
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            System Architecture
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world systems built for scale, performance, and reliability.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
