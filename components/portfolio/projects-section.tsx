"use client"

import { motion } from "framer-motion"
import { ProjectCard, type Project } from "./project-card"

const projects: Project[] = [
  {
    title: "AI Powered Resume Analyser",
    description:
      "A resume review tool that helps job seekers compare resumes against job descriptions and spot where their application needs improvement.",
    image: "/projects/resumatch.png",
    role: "Designed and built the frontend experience for resume upload, job description input, and structured AI-generated feedback flows.",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "JavaScript", "Puter.js"],
    results: "Turned ATS-style analysis into an interactive, easy-to-understand workflow with structured scoring, feedback, and improvement guidance.",
    highlights: [
      "Supported multiple job description input methods including text, OCR, and URL-based input.",
      "Presented ATS score, keyword alignment, and suggestions in a clear user-facing interface.",
      "Focused on a practical frontend flow that helps job seekers review resumes quickly.",
    ],
    githubUrl: "https://github.com/sekandarq/ai-powered-resume-analyzer",
    liveUrl: "https://resumatch-ai-powered-analyzer.vercel.app/",
  },
  {
    title: "DocuQuiz",
    description:
      "An AI-powered study platform that converts uploaded PDF materials into quizzes to make revision more interactive and personalized.",
    image: "/projects/docuquiz.png",
    role: "Worked on product logic and interface flows for quiz generation, upload handling, authentication, and reporting features.",
    techStack: ["TypeScript", "JavaScript", "CSS", "Node.js", "AWS", "Docker"],
    results: "Delivered an end-to-end quiz workflow that combined PDF processing, generated assessments, and analytics-backed reporting.",
    highlights: [
      "Built API-backed flows for authentication, PDF upload, quiz generation, and answer evaluation.",
      "Added reporting features to make quiz outcomes more useful to learners.",
      "Worked with AWS services and deployment tooling to support a more complete product workflow.",
    ],
  },
  {
    title: "Student Attendance System with Face Recognition",
    description:
      "A classroom attendance system that combines a web interface with face recognition services to make registration and attendance tracking faster.",
    image: "/icon.svg",
    role: "Built and connected the frontend experience for registration and attendance tracking across backend and edge-device services.",
    techStack: ["React.js", "TypeScript", "Python", "Django", "FastAPI", "Raspberry Pi"],
    results: "Connected the user-facing interface with camera-based attendance processing and multi-service backend coordination.",
    highlights: [
      "Integrated a React frontend with Django backend services and a FastAPI edge server.",
      "Enabled student registration and facial vector enrollment workflows.",
      "Created a practical interface for professor-led attendance tracking with Raspberry Pi support.",
    ],
    githubUrl: "https://github.com/sekandarq/capstone1"
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="section-surface relative py-20 scroll-mt-32 sm:py-28 lg:scroll-mt-36">
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
            Projects Built From Curiosity & Experiments
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Selected work that shows how I approach <span className="text-gradient">web development</span>, <span className="text-gradient">problem-solving</span>, and practical <span className="text-gradient">AI-supported</span> experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
