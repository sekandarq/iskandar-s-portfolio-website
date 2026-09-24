"use client"

import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#09120d_0%,#08110c_38%,#060d09_72%,#040906_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(25,255,160,0.1)_0%,transparent_28%),radial-gradient(circle_at_78%_18%,rgba(0,255,140,0.06)_0%,transparent_24%),radial-gradient(circle_at_bottom_right,rgba(70,160,110,0.08)_0%,transparent_30%)]" />

      <motion.div
        animate={{
          opacity: [0.14, 0.2, 0.14],
          scale: [1, 1.06, 1],
          x: [0, 18, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-[18%] top-[-12%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(circle,rgba(0,255,140,0.16)_0%,rgba(0,255,140,0.08)_26%,transparent_62%)] blur-[120px]"
      />

      <motion.div
        animate={{
          opacity: [0.08, 0.14, 0.08],
          scale: [1, 1.08, 1],
          x: [0, -16, 0],
          y: [0, 12, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[-20%] right-[-14%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(60,180,120,0.14)_0%,rgba(60,180,120,0.06)_28%,transparent_66%)] blur-[130px]"
      />

      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_92%)]" />

      <div className="absolute inset-0 opacity-[0.045] [background-image:radial-gradient(rgba(255,255,255,0.8)_0.7px,transparent_0.7px)] [background-size:24px_24px] [mask-image:linear-gradient(180deg,transparent_0%,black_18%,black_82%,transparent_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.015),transparent_18%,transparent_82%,rgba(255,255,255,0.012))]" />

      <div
        className="absolute inset-0 opacity-[0.012] mix-blend-soft-light"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,7,5,0.18)_62%,rgba(2,5,3,0.5)_100%)]" />
    </div>
  )
}
