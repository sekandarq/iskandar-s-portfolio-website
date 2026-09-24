"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TimelineItem {
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

const timelineItems: TimelineItem[] = [
  {
    type: "work",
    title: "Student President",
    organization: "MARA Scholarship Students Association, Kyung Hee University",
    period: "2022 - 2026",
    description:
      "Represented student concerns and coordinated communication while strengthening leadership, collaboration, and problem-solving skills.",
    achievements: [
      "Represented and coordinated matters involving Malaysian MARA scholarship students at Kyung Hee University.",
      "Worked with MARA officers in Malaysia and South Korea on student welfare and administrative matters.",
      "Built leadership, communication, and coordination experience that supports team-based product work.",
    ],
    technologies: ["Leadership", "Communication", "Coordination"],
  },
  {
    type: "education",
    title: "Bachelor's Degree in Computer Engineering",
    organization: "Kyung Hee University Global Campus, South Korea",
    period: "Feb 2022 - Feb 2026",
    description:
      "Computer engineering studies with strong exposure to frontend development, UI/UX, backend systems, cloud services, and applied software engineering.",
    achievements: [
      "CGPA: 3.54",
      "Relevant coursework includes Data Structures, UI/UX, Databases, Full Stack, Artificial Intelligence, and Cloud Computing.",
      "Built a wider technical foundation while developing a stronger interest in frontend-focused product experiences.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "UI/UX",
      "Databases",
      "Cloud Computing",
    ],
  },
  {
    type: "education",
    title: "Foundation in Science and Technology",
    organization: "University of Kuala Lumpur MIIT, Malaysia",
    period: "Jul 2020 - Dec 2021",
    description:
      "Built a strong academic base in programming, mathematics, and object-oriented problem solving before entering degree studies.",
    achievements: [
      "CGPA: 3.92",
      "Relevant coursework includes Object-Oriented Programming, Calculus 1, and Basic Programming.",
      "Strengthened early foundations in coding, analytical thinking, and technical communication.",
    ],
  },
];

export function TimelineSection() {
  return (
    <section
      id="experience"
      className="section-surface relative py-20 scroll-mt-32 sm:py-28 lg:scroll-mt-36"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />

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
            Experience and Education
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Learning Journey and Leadership
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A concise view of{" "}
            <span className="text-gradient">
              my academic and leadership experience
            </span>{" "}
            shaping my early-career path in becoming a full-stack developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={`${item.title}-${item.period}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* Icon */}
                  <div className="absolute left-0 p-2 rounded-lg bg-secondary border border-border">
                    {item.type === "work" ? (
                      <Briefcase className="w-4 h-4 text-primary" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-primary" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="glass-card rounded-xl border border-white/6 p-5 transition-all duration-300 hover:border-primary/30 sm:p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.organization}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-primary px-2 py-1 rounded bg-primary/10 w-fit">
                        {item.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mb-4 text-sm text-muted-foreground">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {item.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs bg-transparent border-glass-border text-muted-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
