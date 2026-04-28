"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "Email",
    href: "mailto:hello@example.com",
    icon: Mail,
    label: "hello@example.com",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    icon: Linkedin,
    label: "/in/yourprofile",
  },
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: Github,
    label: "@yourusername",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 relative">
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
              {"Let's Work Together"}
            </h2>
            <p className="text-muted-foreground mb-8">
              Have a project in mind or want to discuss opportunities? 
              {"I'm always open to new challenges and collaborations."}
            </p>
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
              <a href="mailto:hello@example.com">
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-green-subtle rounded-lg" />
                <Send className="w-4 h-4 mr-2 relative z-10" />
                <span className="relative z-10">Start a Conversation</span>
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
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
            Designed & Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  )
}
