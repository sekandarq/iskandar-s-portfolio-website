"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Briefcase, GraduationCap, MapPin, Sparkles } from "lucide-react"

const strengths = [
  "Build responsive interfaces with React, Next.js, TypeScript, and Tailwind CSS.",
  "Translate product ideas into practical user flows with clear frontend structure.",
  "Work across frontend, backend, and AI features integration when a project needs end-to-end ownership.",
  "Learn quickly, communicate clearly, and improve through iteration and feedback.",
]

const aboutHighlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Computer Engineering graduate from Kyung Hee University Global Campus under a full scholarship.",
  },
  {
    icon: Briefcase,
    title: "Role Focus",
    description: "Seeking frontend, backend and AI automation & integration opportunities where I can contribute quickly and learn from the very best.",
  },
  {
    icon: MapPin,
    title: "Based In",
    description: "Setiawangsa, Kuala Lumpur, with international study experience in South Korea.",
  },
  {
    icon: Sparkles,
    title: "What I Build",
    description: "Responsive web interfaces, practical AI-powered tools, and product-focused features that make real user daily tasks easier.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 scroll-mt-32 sm:py-28 lg:scroll-mt-36">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
            About Me
          </span>
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Find Joy in Building Scalable Web & AI Solutions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I enjoy building clean, responsive interfaces with practical
            AI-enhanced features that solve <span className="text-gradient">real user problems</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card mb-8 rounded-2xl border border-primary/10 p-6 sm:p-7"
        >
          <div className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.18em] text-primary">
            <p>Why<span className="text-red-500"> Hire </span>Me?</p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="mx-auto w-full max-w-sm lg:mx-0">
              <div className="relative overflow-hidden rounded-[28px] border border-primary/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] border border-white/8 bg-secondary/60">
                  <Image
                    src="/about-me.jpg"
                    alt="Placeholder portrait for About section"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 420px, 100vw"
                  />
                </div>

                <div className="absolute right-6 bottom-6 rounded-2xl border border-primary/20 bg-background/85 px-4 py-3 backdrop-blur-md">
                  <div className="mb-1 flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
                    <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(0,255,0,0.8)]" />
                    Open to Opportunities
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    Full Stack & AI Developer
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Kuala Lumpur, Malaysia
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-6 text-sm leading-relaxed text-foreground sm:text-base">
                I'm a Computer Engineering graduate focused on building practical software that solves real problems with clear user flows and responsive interfaces.
                <br></br><br></br>
                I enjoy working across the full development lifecycle, from designing interfaces and building APIs to deploying cloud-based solutions and improving workflows through AI.                
                <br></br><br></br>
                My projects reflect my interest in practical problem-solving, scalable systems, and modern development tools. I also bring a
                strong willingness to learn fast and adapt, taking feedback from colleagues & seniors, and contribute to the team's success.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {strengths.map((strength) => (
                  <div
                    key={strength}
                    className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary align-middle" />
                    <span className="align-middle">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {aboutHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
