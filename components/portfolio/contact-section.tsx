"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const trustFacts = [
  { label: "Based In", value: "Kuala Lumpur, Malaysia" },
  { label: "Role Focus", value: "Frontend Developer, Backend Developer, and AI Automation & Integration" },
]

const socialLinks = [
  {
    name: "Email",
    href: "mailto:aliff.iskandr02@gmail.com",
    icon: Mail,
    label: "aliff.iskandr02@gmail.com",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamad-aliff-iskandar/",
    icon: Linkedin,
    label: "/in/mohamad-aliff-iskandar",
  },
  {
    name: "GitHub",
    href: "https://github.com/sekandarq",
    icon: Github,
    label: "@sekandarq",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 scroll-mt-32 sm:py-28 lg:scroll-mt-36">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-gradient" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-primary border border-primary/30 rounded-full bg-primary/10">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let&apos;s Connect
            </h2>
            <p className="mb-8 text-muted-foreground">
              I&apos;m actively looking for frontend, backend and AI automation & integration opportunities and would be
              glad to connect on <span className="text-gradient">entry-level roles, protege opportunities, or collaborative web projects</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-8 grid grid-cols-1 gap-3 text-left sm:grid-cols-2"
          >
            {trustFacts.map((fact) => (
              <div
                key={fact.label}
                className="glass-card rounded-xl border border-primary/10 px-4 py-4 shadow-[0_14px_32px_rgba(0,0,0,0.14)]"
              >
                <div className="mb-1 text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
                  {fact.label}
                </div>
                <p className="text-sm text-foreground">{fact.value}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10"
          >
            <Button
              asChild
              size="lg"
              className="group relative bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="mailto:aliff.iskandr02@gmail.com">
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-green-subtle rounded-lg" />
                <Send className="w-4 h-4 mr-2 relative z-10" />
                <span className="relative z-10">Email Me</span>
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-5"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-glass transition-colors"
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-mono">
                  {link.label}
                </span>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mx-auto mb-4 flex max-w-xl items-center justify-center gap-2 rounded-xl border border-glass-border bg-secondary/20 px-4 py-3 text-sm text-muted-foreground"
          >
            <MapPin className="h-4 w-4 text-primary" />
            Available for remote, hybrid, and on-site opportunities.
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-border text-center"
        >
          <p className="text-xs text-muted-foreground font-mono">
            Designed & Built by Iskandar with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  )
}
