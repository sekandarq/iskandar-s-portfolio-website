"use client"

import { motion } from "framer-motion"

interface StatusItem {
  label: string
  value: string
  isActive?: boolean
}

const statusItems: StatusItem[] = [
  { label: "Status", value: "Ready for Hire", isActive: true },
  { label: "Core Stack", value: "TypeScript, Node.js, OpenAI", isActive: true },
]

export function StatusBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass-card rounded-lg p-4 flex flex-col sm:flex-row gap-4 sm:gap-8"
    >
      {statusItems.map((item, index) => (
        <div key={item.label} className="flex items-center gap-3">
          {/* LED Indicator */}
          <div className="relative">
            <div 
              className={`w-2.5 h-2.5 rounded-full bg-primary ${index === 0 ? "led-pulse" : "led-pulse-delayed"}`}
            />
          </div>
          
          {/* Status Text */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
              {item.label}:
            </span>
            <span className="text-sm text-foreground font-medium">
              {item.value}
            </span>
          </div>
        </div>
      ))}
    </motion.div>
  )
}
