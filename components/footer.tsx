"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const footerLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre Mi", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Joseluuu315",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jos%C3%A9-luis-fuentes-parra-80bb96257/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:joselufupa2016@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-border bg-card/30">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 size-80 -translate-x-1/2 rounded-full bg-cyan-glow/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-cyan-glow/10 border border-cyan-glow/30">
                <span className="text-lg font-bold text-cyan-glow">JL</span>
              </div>
              <span className="text-lg font-semibold text-foreground">
                Jose Luis Fuentes
              </span>
            </div>
            <p className="mb-6 max-w-sm text-sm text-muted-foreground">
              Fullstack Developer apasionado por crear experiencias web modernas,
              eficientes y elegantes.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex size-10 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-all hover:border-cyan-glow/50 hover:bg-cyan-glow/10 hover:text-cyan-glow"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="size-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:text-center"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Enlaces Rapidos
            </h3>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 lg:justify-center">
              {footerLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-muted-foreground transition-colors hover:text-cyan-glow"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:text-right"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Estado
            </h3>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Disponible para trabajar
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Abierto a proyectos freelance y oportunidades de tiempo completo.
            </p>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Jose Luis Fuentes Parra. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Hecho con <Heart className="size-4 text-red-500" /> en Espana
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
