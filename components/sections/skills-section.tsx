"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const SkillsScene = dynamic(() => import("@/components/3d/skills-scene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-background" />,
});

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3/Tailwind", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 85 },
      { name: "Vue.js", level: 75 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Python", level: 85 },
      { name: "PHP", level: 78 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 72 },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 75 },
      { name: "Linux", level: 72 },
      { name: "WordPress", level: 85 },
    ],
  },
];

const technologies = [
  "React", "Next.js", "Vue.js", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "MongoDB", "Docker", "Git", "Tailwind CSS", "Figma",
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden py-20 lg:py-32"
    >
      <SkillsScene />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-5 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:mb-24"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full border border-cyan-glow/30 bg-cyan-glow/5 px-4 py-1.5 text-sm font-medium text-cyan-glow"
          >
            Habilidades
          </motion.span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Stack{" "}
            <span className="gradient-text-cyan">Tecnologico</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Domino un amplio conjunto de tecnologias que me permiten crear
            soluciones completas de principio a fin.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card/50 p-6 transition-all hover:border-cyan-glow/30 hover:bg-card"
            >
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-glow to-cyan-muted"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Hover glow */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-cyan-glow/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* Technologies Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="mb-8 text-xl font-semibold text-foreground">
            Tecnologias que uso
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="cursor-default rounded-full border border-border bg-card/50 px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-cyan-glow/50 hover:bg-cyan-glow/10 hover:text-cyan-glow"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
