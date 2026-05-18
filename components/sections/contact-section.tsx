"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "joselufupa2016@gmail.com",
    href: "mailto:joselufupa2016@gmail.com",
    description: "Respondo en menos de 24h",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Jose Luis Fuentes Parra",
    href: "https://www.linkedin.com/in/jos%C3%A9-luis-fuentes-parra-80bb96257/",
    description: "Conectemos profesionalmente",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "Joseluuu315",
    href: "https://github.com/Joseluuu315",
    description: "Mira mis repositorios",
  },
  {
    icon: MapPin,
    title: "Ubicacion",
    value: "Espana",
    href: null,
    description: "Disponible remoto",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden py-20 lg:py-32"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 size-96 rounded-full bg-cyan-glow/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 size-96 rounded-full bg-cyan-muted/5 blur-3xl" />
      </div>

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
            Contacto
          </motion.span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Hablemos de tu{" "}
            <span className="gradient-text-cyan">proyecto</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Siempre estoy interesado en escuchar sobre nuevos proyectos y
            oportunidades. No dudes en contactarme.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block h-full rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-cyan-glow/30 hover:bg-card"
                  >
                    <ContactCardContent method={method} />
                  </a>
                ) : (
                  <div className="block h-full rounded-xl border border-border bg-card/50 p-6">
                    <ContactCardContent method={method} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="animated-border rounded-2xl p-8 lg:p-12">
              <div className="relative z-10 text-center">
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-cyan-glow/10">
                  <Send className="size-8 text-cyan-glow" />
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Listo para comenzar?
                </h3>
                
                <p className="mb-8 text-muted-foreground">
                  Estoy disponible para proyectos freelance, colaboraciones o
                  posiciones a tiempo completo. Enviame un mensaje y hablemos.
                </p>
                
                <motion.a
                  href="mailto:joselufupa2016@gmail.com"
                  className="group inline-flex items-center gap-2 rounded-full bg-cyan-glow px-8 py-4 font-semibold text-background transition-all hover:bg-cyan-glow/90"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enviar mensaje
                  <Mail className="size-5 transition-transform group-hover:translate-x-1" />
                </motion.a>
                
                <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    Disponible para trabajar
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCardContent({ method }: { method: typeof contactMethods[number] }) {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex size-12 items-center justify-center rounded-lg bg-cyan-glow/10 text-cyan-glow transition-colors group-hover:bg-cyan-glow/20">
          <method.icon className="size-6" />
        </div>
        {method.href && (
          <ArrowUpRight className="size-5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </div>
      <h3 className="mb-1 font-semibold text-foreground">{method.title}</h3>
      <p className="mb-2 text-sm text-cyan-glow">{method.value}</p>
      <p className="text-xs text-muted-foreground">{method.description}</p>
    </>
  );
}
