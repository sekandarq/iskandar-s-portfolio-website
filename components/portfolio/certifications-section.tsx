"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  status?: string;
  logo?: string;
  credentialUrl?: string;
}

const certifications: Certification[] = [
  {
    name: "TOPIK Level 4",
    issuer: "Korean Language Proficiency",
    date: "Completed",
    status: "Earned",
  },
  {
    name: "Meta Certificate",
    issuer: "Meta",
    date: "Completed",
    status: "Earned",
    logo: "/certifications/meta.png",
  },
  {
    name: "Google Cloud Certificate",
    issuer: "Google Cloud",
    date: "Completed",
    status: "Earned",
    logo: "/certifications/gcp.png",
  },
  {
    name: "AWS Certificate",
    issuer: "Amazon Web Services",
    date: "Completed",
    status: "Earned",
    logo: "/certifications/aws.png",
  },
  {
    name: "TensorFlow Certificate",
    issuer: "TensorFlow",
    date: "Completed",
    status: "Earned",
    logo: "/certifications/tensorflow.png",
  },
];

interface Achievement {
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  { title: "3", description: "Portfolio Projects Featured" },
  { title: "3.54", description: "Degree CGPA" },
  { title: "3.92", description: "Foundation CGPA" },
  { title: "5", description: "Credentials Highlighted" },
];

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="relative py-20 scroll-mt-32 sm:py-28 lg:scroll-mt-36"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
            Highlights
          </span>
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Credentials & Highlights
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Quick <span className="text-gradient">proof points</span> that
            reinforce my academic background, language proficiency, and
            continued learning across frontend, cloud, and AI-related topics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 grid grid-cols-2 gap-4 sm:mb-16 sm:gap-6 lg:grid-cols-4"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-xl p-5 text-center transition-all duration-300 hover:border-primary/30 sm:p-6"
            >
              <div className="mb-1 text-2xl font-bold text-primary sm:text-3xl">
                {achievement.title}
              </div>
              <div className="text-xs text-muted-foreground sm:text-sm">
                {achievement.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group glass-card block rounded-xl p-5 transition-all duration-300 hover:border-primary/30 sm:p-6"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-primary/15 bg-white/95 p-2 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
                {cert.logo ? (
                  <Image
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    width={48}
                    height={48}
                    className="h-auto w-auto max-h-12 max-w-12 object-contain"
                  />
                ) : (
                  <span className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-slate-700">
                    TOPIK
                  </span>
                )}
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {cert.issuer} | {cert.date}
                  </p>
                  {cert.status && (
                    <span className="mt-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-[10px] font-mono uppercase tracking-wide text-primary">
                      {cert.status}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
