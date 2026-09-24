"use client"

import { motion } from "framer-motion"
import { ChevronDown, Linkedin, Mail } from "lucide-react"
import { TerminalBento } from "./terminal-bento"
import { StatusBar } from "./status-bar"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  };

  const roles = ["Web Developer", "AI Integrator", "Problem Solver"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500); // Change role every 2.5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden py-16 scroll-mt-32 sm:py-20 lg:py-24 lg:scroll-mt-36"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-6 lg:col-span-7 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                Fresh Graduate | Open to Frontend, Backend & AI Roles
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold leading-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Building{" "}
              <span className="text-gradient">Modern Web Apps</span>
              {" "}with{" "}
              <span className="text-gradient">AI-Powered Experiences</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              I'm{" "}
              <span className="font-semibold text-foreground">Aliff Iskandar</span>, a passionate{" "} 
              <span key={currentRoleIndex} className="inline-block font-semibold bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent animate-in fade-in slide-in-from-top-2 duration-500">
              {roles[currentRoleIndex]}
              </span>
              <br></br>dedicated on building <span className="font-semibold text-gradient">high-performance, user-centric web applications</span> with practical
              <span className="font-semibold text-gradient"> AI-powered features</span>
            </motion.p>

            <StatusBar />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Button
                onClick={scrollToProjects}
                className="group h-[52px] w-full rounded-xl bg-primary px-4 text-primary-foreground shadow-[0_0_24px_rgba(0,255,0,0.18)] transition-all hover:bg-primary/90 sm:w-auto"
              >
                View Projects
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </Button>

              <div className="flex w-full items-center gap-3 rounded-xl border border-glass-border bg-secondary/20 px-4 py-3 sm:w-auto">
                <span className="text-sm font-mono text-muted-foreground">Let&apos;s <span className="text-red-500">Connect</span></span>
                <a
                  href="https://www.linkedin.com/in/mohamad-aliff-iskandar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-primary/20 bg-primary/10 p-2 text-primary transition-all hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="mailto:aliff.iskandr02@gmail.com"
                  className="rounded-full border border-primary/20 bg-primary/10 p-2 text-primary transition-all hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
                  aria-label="Send an email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <TerminalBento />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-xs font-mono text-muted-foreground">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
