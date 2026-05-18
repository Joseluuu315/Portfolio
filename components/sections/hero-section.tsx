"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/3d/hero-scene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 -z-10 bg-background" />
  ),
});

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <HeroScene />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-5 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-glow/30 bg-cyan-glow/5 px-4 py-2 text-sm text-cyan-glow"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-glow opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-cyan-glow" />
            </span>
            Disponible para nuevos proyectos
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block text-foreground">Hola, soy</span>
            <span className="mt-2 block gradient-text-cyan text-glow-cyan">
              Jose Luis Fuentes
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl lg:text-2xl"
          >
            <span className="font-semibold text-foreground">Fullstack Developer</span>
            {" "}especializado en crear experiencias web modernas, eficientes y elegantes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-cyan-glow px-8 py-4 font-semibold text-background transition-all hover:bg-cyan-glow/90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contactar</span>
              <Mail className="relative z-10 size-5" />
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-cyan-glow to-cyan-muted opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.a>
            
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-8 py-4 font-semibold text-foreground transition-colors hover:border-cyan-glow/50 hover:bg-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Proyectos
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/Joseluuu315", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/jos%C3%A9-luis-fuentes-parra-80bb96257/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:joselufupa2016@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex size-12 items-center justify-center rounded-full border border-border bg-card/50 transition-all hover:border-cyan-glow/50 hover:bg-cyan-glow/10"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon className="size-5 text-muted-foreground transition-colors group-hover:text-cyan-glow" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-cyan-glow"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="size-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
