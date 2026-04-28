"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Certification {
  name: string
  issuer: string
  logo: string
  date: string
  credentialUrl?: string
}

const certifications: Certification[] = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    logo: "/certifications/aws.jpg",
    date: "2023",
    credentialUrl: "#",
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google Cloud",
    logo: "/certifications/gcp.jpg",
    date: "2023",
    credentialUrl: "#",
  },
  {
    name: "Meta Backend Developer",
    issuer: "Meta",
    logo: "/certifications/meta.jpg",
    date: "2022",
    credentialUrl: "#",
  },
  {
    name: "TensorFlow Developer",
    issuer: "Google",
    logo: "/certifications/tensorflow.jpg",
    date: "2022",
    credentialUrl: "#",
  },
]

interface Achievement {
  title: string
  description: string
}

const achievements: Achievement[] = [
  { title: "500+", description: "GitHub Contributions" },
  { title: "99.9%", description: "System Uptime" },
  { title: "50+", description: "Projects Delivered" },
  { title: "10M+", description: "API Requests/Day" },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-primary border border-primary/30 rounded-full bg-primary/10">
            Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials and measurable impact.
          </p>
        </motion.div>

        {/* Achievements Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-xl p-5 sm:p-6 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                {achievement.title}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {achievement.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.name}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-xl p-5 sm:p-6 hover:border-primary/30 transition-all duration-300 block"
            >
              {/* Logo */}
              <div className="relative w-12 h-12 mb-4 rounded-lg overflow-hidden bg-secondary">
                <Image
                  src={cert.logo}
                  alt={cert.issuer}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
