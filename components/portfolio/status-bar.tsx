"use client"

import { motion } from "framer-motion"

interface StatusItem {
  label: string
  value: string
}

const statusItems: StatusItem[] = [
  { label: "Role Focus", value: "Frontend/Backend + AI Automation & Integration" },
  { label: "Projects", value: "3 Featured Builds" },
  { label: "Core Stack", value: "React, TypeScript, Node.js" },
  { label: "Highlight", value: "TOPIK Level 4" },
]

export function StatusBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass-card rounded-2xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 border border-primary/10"
    >
      {statusItems.map((item, index) => (
        <div
          key={item.label}
          className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-3"
        >
          {/* LED Indicator */}
          <div className="relative mt-1 shrink-0">
            <div 
              className={`w-2.5 h-2.5 rounded-full bg-primary ${index % 2 === 0 ? "led-pulse" : "led-pulse-delayed"}`}
            />
          </div>
          
          {/* Proof Text */}
          <div className="min-w-0">
            <span className="text-[11px] text-muted-foreground font-mono uppercase tracking-[0.2em]">
              {item.label}
            </span>
            <p className="text-sm text-foreground font-medium leading-snug mt-1">
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  )
}
