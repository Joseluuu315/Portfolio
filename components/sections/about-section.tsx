"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Users, Zap } from "lucide-react";
import dynamic from "next/dynamic";

const AboutScene = dynamic(() => import("@/components/3d/about-scene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-background" />,
});

const features = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Especializado en crear aplicaciones web modernas con tecnologias de vanguardia y mejores practicas de la industria.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Disfruto enfrentando desafios complejos y encontrando soluciones innovadoras que aportan valor real.",
  },
  {
    icon: Users,
    title: "Colaboracion",
    description:
      "Creo en el poder del trabajo en equipo y la comunicacion efectiva para lograr resultados excepcionales.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizo cada linea de codigo para garantizar experiencias rapidas y fluidas para los usuarios.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden py-20 lg:py-32"
    >
      <AboutScene />
      
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
            Sobre Mi
          </motion.span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Desarrollador con{" "}
            <span className="gradient-text-cyan">pasion</span> por la innovacion
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Soy Jose Luis Fuentes Parra, un desarrollador fullstack apasionado
            con un ojo agudo para crear soluciones eficientes y elegantes.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="animated-border rounded-2xl p-8 lg:p-10">
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-cyan-glow/10 px-3 py-1.5 text-sm font-medium text-cyan-glow">
                  <span className="size-2 rounded-full bg-cyan-glow" />
                  Quien soy
                </div>
                <p className="mb-6 text-lg leading-relaxed text-foreground/90">
                  Hola, soy un desarrollador fullstack apasionado con experiencia
                  en transformar problemas complejos en soluciones simples,
                  hermosas e intuitivas que realmente funcionan para los usuarios.
                </p>
                <p className="mb-8 text-muted-foreground">
                  Me especializo en el desarrollo de aplicaciones web modernas
                  utilizando las tecnologias mas actuales. Mi objetivo es crear
                  experiencias digitales que no solo sean visualmente atractivas,
                  sino tambien funcionales y eficientes.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "2+", label: "Anos Exp." },
                    { value: "10+", label: "Proyectos" },
                    { value: "100%", label: "Dedicacion" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-cyan-glow lg:text-3xl">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group relative rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-cyan-glow/30 hover:bg-card"
              >
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-cyan-glow/10 text-cyan-glow transition-colors group-hover:bg-cyan-glow/20">
                  <feature.icon className="size-6" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 -z-10 rounded-xl bg-cyan-glow/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
