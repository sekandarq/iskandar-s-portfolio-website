"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const bootSequence = [
  { text: "$ initializing system...", delay: 0 },
  { text: "[OK] Core modules loaded", delay: 400 },
  { text: "", delay: 600 },
  { text: "$ loading skill_matrix...", delay: 800 },
  { text: "", delay: 1000 },
  { text: "├── Web Development", delay: 1200 },
  { text: "│   ├── React / Next.js", delay: 1400 },
  { text: "│   ├── TypeScript", delay: 1600 },
  { text: "│   └── Tailwind CSS", delay: 1800 },
  { text: "│", delay: 2000 },
  { text: "├── Backend Integration", delay: 2200 },
  { text: "│   ├── Node.js / Express", delay: 2400 },
  { text: "│   ├── PostgreSQL / MongoDB", delay: 2600 },
  { text: "│   └── REST / GraphQL APIs", delay: 2800 },
  { text: "│", delay: 3000 },
  { text: "└── AI Automation", delay: 3200 },
  { text: "    ├── OpenAI / LangChain", delay: 3400 },
  { text: "    ├── Python / FastAPI", delay: 3600 },
  { text: "    └── ML Pipelines", delay: 3800 },
  { text: "", delay: 4000 },
  { text: "[SUCCESS] All systems operational", delay: 4200 },
  { text: "$ status: ready_for_deployment_", delay: 4600 },
]

const LOOP_DELAY = 6000

export function TerminalBento() {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    const runSequence = () => {
      setVisibleLines(0)
      
      bootSequence.forEach((_, index) => {
        const timer = setTimeout(() => {
          setVisibleLines(index + 1)
        }, bootSequence[index].delay)
        timers.push(timer)
      })

      const loopTimer = setTimeout(() => {
        runSequence()
      }, bootSequence[bootSequence.length - 1].delay + LOOP_DELAY)
      timers.push(loopTimer)
    }

    runSequence()

    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="glass-card rounded-xl overflow-hidden animate-float glow-pulse"
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1A1A1A] border-b border-[rgba(255,255,255,0.1)]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
        </div>
        <span className="ml-4 text-xs text-muted-foreground font-mono">system_boot.sh</span>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-6 bg-[rgba(0,0,0,0.8)] min-h-[320px] sm:min-h-[380px] font-mono text-xs sm:text-sm">
        <div className="space-y-1">
          {bootSequence.slice(0, visibleLines).map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className={`
                ${line.text.startsWith("$") ? "text-primary" : ""}
                ${line.text.startsWith("[OK]") || line.text.startsWith("[SUCCESS]") ? "text-primary" : ""}
                ${line.text.startsWith("├") || line.text.startsWith("│") || line.text.startsWith("└") ? "text-muted-foreground" : ""}
                ${line.text.includes("React") || line.text.includes("TypeScript") || line.text.includes("Node") || line.text.includes("OpenAI") ? "text-foreground" : ""}
              `}
            >
              {line.text}
              {index === visibleLines - 1 && line.text.endsWith("_") && (
                <span className={`inline-block w-2 h-4 ml-1 bg-primary ${showCursor ? "opacity-100" : "opacity-0"}`} />
              )}
            </motion.div>
          ))}
          {visibleLines === bootSequence.length && (
            <span className={`inline-block w-2 h-4 bg-primary ${showCursor ? "opacity-100" : "opacity-0"}`} />
          )}
        </div>
      </div>
    </motion.div>
  )
}
