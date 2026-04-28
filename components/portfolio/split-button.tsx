"use client"

import { motion } from "framer-motion"
import { Download, Linkedin } from "lucide-react"

interface SplitButtonProps {
  resumeUrl?: string
  linkedinUrl?: string
}

export function SplitButton({ 
  resumeUrl = "/resume.pdf", 
  linkedinUrl = "https://linkedin.com/in/yourprofile" 
}: SplitButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="inline-flex rounded-lg overflow-hidden"
    >
      {/* Main Button - Download PDF */}
      <a
        href={resumeUrl}
        download
        className="group relative flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-medium text-sm transition-all hover:bg-primary/90"
      >
        {/* Glow effect on hover */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-green-subtle" />
        <Download className="w-4 h-4 relative z-10" />
        <span className="relative z-10">Download Resume</span>
      </a>
      
      {/* Divider */}
      <div className="w-px bg-primary-foreground/20" />
      
      {/* LinkedIn Icon Button */}
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center px-3 py-3 bg-primary text-primary-foreground transition-all hover:bg-primary/90"
        aria-label="Connect on LinkedIn"
      >
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-green-subtle" />
        <Linkedin className="w-4 h-4 relative z-10" />
      </a>
    </motion.div>
  )
}
