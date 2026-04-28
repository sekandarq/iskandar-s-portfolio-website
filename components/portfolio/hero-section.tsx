"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { TerminalBento } from "./terminal-bento"
import { StatusBar } from "./status-bar"
import { SplitButton } from "./split-button"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-radial-gradient" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Available for new projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
            >
              Engineering{" "}
              <span className="text-gradient">Scalable Backends</span>
              {" "}&{" "}
              <span className="text-gradient">AI-Driven</span>
              {" "}Experiences.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Full-stack developer specializing in building robust backend systems, 
              API integrations, and intelligent automation workflows that scale.
            </motion.p>

            {/* Status Bar */}
            <StatusBar />

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <SplitButton />
              
              <Button
                variant="outline"
                onClick={scrollToProjects}
                className="group border-glass-border hover:bg-glass hover:border-primary/30 transition-all"
              >
                View System Architecture
                <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Right Content - 5 columns */}
          <div className="lg:col-span-5">
            <TerminalBento />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
