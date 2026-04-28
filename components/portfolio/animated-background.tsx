"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    // Grid configuration
    const gridSize = 60
    const lineOpacity = 0.04

    const draw = () => {
      time += 0.002
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw animated grid
      ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`
      ctx.lineWidth = 1

      // Vertical lines with subtle wave
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        for (let y = 0; y <= canvas.height; y += 10) {
          const wave = Math.sin(y * 0.01 + time + x * 0.001) * 2
          ctx.lineTo(x + wave, y)
        }
        ctx.stroke()
      }

      // Horizontal lines with subtle wave
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        for (let x = 0; x <= canvas.width; x += 10) {
          const wave = Math.sin(x * 0.01 + time + y * 0.001) * 2
          ctx.lineTo(x, y + wave)
        }
        ctx.stroke()
      }

      // Draw glowing intersection points
      const glowPoints: { x: number; y: number; intensity: number }[] = []
      for (let x = 0; x <= canvas.width; x += gridSize * 2) {
        for (let y = 0; y <= canvas.height; y += gridSize * 2) {
          const pulse = Math.sin(time * 2 + x * 0.01 + y * 0.01) * 0.5 + 0.5
          if (pulse > 0.7) {
            glowPoints.push({ x, y, intensity: pulse })
          }
        }
      }

      glowPoints.forEach(point => {
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, 30
        )
        gradient.addColorStop(0, `rgba(0, 255, 0, ${0.15 * point.intensity})`)
        gradient.addColorStop(1, "rgba(0, 255, 0, 0)")
        ctx.fillStyle = gradient
        ctx.fillRect(point.x - 30, point.y - 30, 60, 60)
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated Grid Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
      />
      
      {/* Radial Glow Spots */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[30%] -left-[20%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-[20%] -right-[20%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-[40%] right-[10%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-[80px]"
      />

      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,10,0.4)_70%,rgba(10,10,10,0.8)_100%)]" />
    </div>
  )
}
