"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Paqui Barroso Sevilla",
    description:
      "Sitio web profesional para servicios de belleza y estetica. Diseno elegante y moderno con sistema de citas online, galeria de trabajos e informacion detallada de servicios.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["WordPress", "PHP", "CSS3", "JavaScript"],
    liveUrl: "https://paquibarrososevilla.com/",
    status: "live" as const,
  },
  {
    title: "La Nuya",
    description:
      "Plataforma web completa para un negocio local con catalogo de productos, sistema de pedidos online y gestion de inventario. Totalmente responsive y optimizado para SEO.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["HTML5", "CSS3", "JavaScript", "Python"],
    liveUrl: "https://lanuya.com/",
    status: "live" as const,
  },
  {
    title: "Portfolio Personal",
    description:
      "Mi portfolio personal desarrollado con tecnologias modernas. Incluye animaciones 3D, diseno responsive, tema oscuro y optimizacion de rendimiento.",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "React", "Three.js", "Tailwind", "TypeScript"],
    githubUrl: "https://github.com/Joseluuu315/Portfolio",
    status: "development" as const,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden py-20 lg:py-32"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10 grid-pattern opacity-50" />
      
      {/* Gradient overlays */}
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
            Portfolio
          </motion.span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Proyectos{" "}
            <span className="gradient-text-cyan">Destacados</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Una seleccion de mis trabajos mas recientes que demuestran mis
            habilidades y experiencia en desarrollo web.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`group relative grid gap-8 lg:grid-cols-2 lg:gap-12 ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          project.status === "live"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-amber-500/20 text-amber-400"
                        }`}
                      >
                        {project.status === "live" ? "En Vivo" : "En Desarrollo"}
                      </span>
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex size-10 items-center justify-center rounded-full bg-foreground/10 backdrop-blur-sm transition-colors hover:bg-cyan-glow/20"
                          >
                            <ExternalLink className="size-5 text-foreground" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex size-10 items-center justify-center rounded-full bg-foreground/10 backdrop-blur-sm transition-colors hover:bg-cyan-glow/20"
                          >
                            <Github className="size-5 text-foreground" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner glow */}
                  <div className="absolute -right-20 -top-20 size-40 rounded-full bg-cyan-glow/20 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.div>
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span
                    className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                      project.status === "live"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-amber-500/10 text-amber-400"
                    }`}
                  >
                    {project.status === "live" ? "En Vivo" : "En Desarrollo"}
                  </span>
                  
                  <h3 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
                    {project.title}
                  </h3>
                  
                  <p className="mb-6 text-muted-foreground">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className={`mb-6 flex flex-wrap gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-cyan-glow transition-colors hover:text-cyan-glow/80"
                        whileHover={{ x: 4 }}
                      >
                        Ver Sitio
                        <ArrowUpRight className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        whileHover={{ x: 4 }}
                      >
                        Ver Codigo
                        <Github className="size-4" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
