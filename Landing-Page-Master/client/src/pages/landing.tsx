import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ebookCover from "@assets/Guia_1770073369754.jpg";
import alvaroPhoto from "@assets/image_1770073608461.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  Star,
  Globe,
  Clock,
  Target,
  Headphones,
  MessageCircle,
  Award,
  ArrowRight,
  Shield,
  Zap,
  RefreshCw,
  HelpCircle,
  MessageSquare,
  DollarSign,
  Compass,
  CalendarX,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Testimonial } from "@shared/schema";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

function HeroSection() {
  const scrollToPayment = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/30 py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              variants={fadeInUp}
            >
              <span className="text-foreground">Aprende cualquier </span>
              <span className="text-primary">idioma</span>
              <br />
              <span className="text-foreground">de </span>
              <span className="text-primary">verdad</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0"
              variants={fadeInUp}
            >
              Un ebook diseñado para que aprendas inglés (o cualquier otro
              idioma) desde cero o superes el estancamiento que te impide
              avanzar.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6"
              variants={fadeInUp}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" />
                Método paso a paso
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" />
                Enfocado en Inglés
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" />
                Resultados reales
              </span>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap mb-8"
              variants={fadeInUp}
            >
              <Button
                size="lg"
                variant="secondary"
                onClick={scrollToPayment}
                data-testid="button-hero-buy"
              >
                Quiero Aprender Ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("benefits")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-testid="button-hero-learn-more"
              >
                Conocer Más
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {["MG", "CR", "LM", "AL", "SH"].map((initials, i) => (
                    <motion.div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 border-2 border-background flex items-center justify-center text-primary-foreground text-xs font-semibold"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      {initials}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-1 mb-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-secondary text-secondary"
                      />
                    ))}
                </div>
                <span className="text-sm font-medium text-foreground">
                  +100 estudiantes satisfechos
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transform: "rotate(12deg)" }}
              >
                <img 
                  src={ebookCover} 
                  alt="Ebook: Aprende cualquier idioma - Guía completa para todos los niveles"
                  className="w-72 md:w-80 h-auto rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PainPointsSection() {
  const painPoints = [
    {
      icon: RefreshCw,
      text: "Has intentado aprender inglés varias veces pero siempre abandonas",
    },
    {
      icon: HelpCircle,
      text: "Te sientes perdido con tanta gramática y reglas complicadas",
    },
    {
      icon: MessageSquare,
      text: "Te da pena hablar porque crees que pronuncias mal",
    },
    {
      icon: DollarSign,
      text: "Los cursos tradicionales son muy caros o muy largos",
    },
    {
      icon: Compass,
      text: "No sabes por dónde empezar ni qué método seguir",
    },
    {
      icon: CalendarX,
      text: "No tienes tiempo para asistir a clases presenciales",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Te Sientes <span className="text-primary">Identificado</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Si alguna de estas situaciones te suena familiar, este ebook es para
            ti
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover-elevate"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground text-sm md:text-base">
                  {point.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-2">
            ¡No te preocupes!
          </p>
          <p className="text-muted-foreground text-lg mb-3">
            Nuestro ebook está diseñado exactamente para resolver estos
            problemas
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50">
              <Globe className="w-5 h-5 text-foreground" />
              <span className="text-foreground font-medium">Funciona para cualquier idioma</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
              <Target className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Ejercicios enfocados para Inglés</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: Target,
      title: "Desde Cero",
      description:
        "No necesitas conocimientos previos. Empezamos desde lo más básico hasta conceptos avanzados.",
    },
    {
      icon: Globe,
      title: "Método Práctico",
      description:
        "Aprende el paso a paso según tu nivel para poder adquirir un nuevo idioma .",
    },
    {
      icon: Clock,
      title: "A Tu Ritmo",
      description:
        "Estudia cuando quieras, donde quieras. El ebook es tuyo para siempre.",
    },
    {
      icon: Headphones,
      title: "Recursos, mentalidad y planes listos para usar",
      description: "Diseñado para cualquier edad y estilo de vida..",
    },
    {
      icon: MessageCircle,
      title: "Hablar sin miedo y pensar en el idioma",
      description:
        "Deja atrás el bloqueo mental y el miedo a equivocarte. Aprenderás técnicas prácticas para hablar con confianza.",
    },
    {
      icon: Award,
      title: "Crea tu propio sistema",
      description: "Aprenderás a diseñar tu propio ecosistema de aprendizaje.",
    },
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Badge className="mb-4 bg-accent text-accent-foreground border-accent-border">
            <BookOpen className="w-4 h-4 mr-2" />
            Contenido del Ebook
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Todo lo que Necesitas para{" "}
            <span className="text-primary">Dominar el Inglés</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un método estructurado y fácil de seguir que te llevará del cero al
            inglés práctico
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card
                className="p-6 hover-elevate cursor-default bg-background h-full"
                data-testid={`card-benefit-${index}`}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <benefit.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const defaultTestimonials: Testimonial[] = [
    {
      id: "1",
      name: "María García",
      location: "Bogotá",
      content:
        "Siempre pensé que los idiomas no eran lo mío. Había probado apps, cursos y lo dejaba todo a la semana. Con este ebook entendí cómo estudiar sin agobiarme. Empecé desde cero y hoy puedo mantener conversaciones simples sin quedarme en blanco. Lo mejor es que ya no siento frustración.",
      rating: 5,
      avatarInitials: "MG",
    },
    {
      id: "2",
      name: "Alvaro Ramirez",
      location: "Manizales",
      content:
        "He tenido la oportunidad de tener clases con el profesor y lo que enseña no es lo de siempre, así he visto resultados reales",
      rating: 5,
      avatarInitials: "AR",
    },
    {
      id: "3",
      name: "Laura Martínez",
      location: "Cali",
      content:
        "Lo mejor es que puedo estudiar a mi propio ritmo. El contenido está muy bien organizado.",
      rating: 5,
      avatarInitials: "LM",
    },
  ];

  // Always use the hardcoded testimonials for consistency
  const displayTestimonials = defaultTestimonials;

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Badge className="mb-4 bg-secondary text-secondary-foreground border-secondary-border">
            <Star className="w-4 h-4 mr-2" />
            Testimonios
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que Dicen Nuestros{" "}
            <span className="text-primary">Estudiantes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Muchos colombianos ya están aprendiendo inglés con nuestro método
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {isLoading
            ? Array(3)
                .fill(0)
                .map((_, i) => (
                  <Card key={i} className="p-6 animate-pulse">
                    <div className="h-4 bg-muted rounded w-3/4 mb-4" />
                    <div className="h-4 bg-muted rounded w-1/2 mb-6" />
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted" />
                      <div className="h-4 bg-muted rounded w-24" />
                    </div>
                  </Card>
                ))
            : displayTestimonials.map((testimonial, index) => (
                <motion.div key={testimonial.id} variants={scaleIn}>
                  <Card
                    className="p-6 bg-card h-full"
                    data-testid={`card-testimonial-${index}`}
                  >
                    <motion.div
                      className="flex mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                          >
                            <Star className="w-5 h-5 fill-secondary text-secondary" />
                          </motion.div>
                        ))}
                    </motion.div>
                    <p className="text-foreground mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        {testimonial.name === "Alvaro Ramirez" ? (
                          <AvatarImage src={alvaroPhoto} alt={testimonial.name} />
                        ) : null}
                        <AvatarFallback className="bg-primary/10 text-primary font-medium">
                          {testimonial.avatarInitials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
        </motion.div>
      </div>
    </section>
  );
}

function PricingSection() {
  const handleBuyClick = () => {
    window.location.href = "/checkout";
  };

  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-gradient-to-b from-card/50 to-background relative overflow-hidden"
    >
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Badge className="mb-4 bg-accent text-accent-foreground border-accent-border">
            <Award className="w-4 h-4 mr-2" />
            Oferta Especial
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Invierte en Tu <span className="text-primary">Futuro</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un solo pago, acceso de por vida al ebook y todas las
            actualizaciones
          </p>
        </motion.div>

        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 bg-background border-2 border-primary relative overflow-visible">
            <motion.div
              className="absolute -top-4 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Badge className="bg-secondary text-secondary-foreground border-secondary-border px-4 py-1">
                Más Vendido
              </Badge>
            </motion.div>

            <div className="text-center mb-8">
              <motion.div
                className="flex items-baseline justify-center gap-1 mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <span className="text-2xl font-medium text-muted-foreground">
                  $
                </span>
                <span className="text-5xl md:text-6xl font-bold text-foreground">
                  35.000
                </span>
                <span className="text-xl font-medium text-muted-foreground">
                  COP
                </span>
              </motion.div>
              <p className="text-muted-foreground">
                Pago único - Sin cargos adicionales
              </p>
            </div>

            <motion.div
              className="space-y-4 mb-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                "Ebook completo en PDF de alta calidad",
                "Descarga instantánea después del pago",
                "Acceso de por vida al contenido",
                "Ejercicios prácticos incluidos",
                "Método comprobado",
                "Soporte por correo electrónico",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  variants={{
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                  }}
                  transition={{ delay: 0.1 * index }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="w-full"
                size="lg"
                onClick={handleBuyClick}
                data-testid="button-buy-now"
              >
                Comprar Ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>Pago Seguro</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4" />
                <span>Entrega Inmediata</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2">
            © {new Date().getFullYear()} Aprende Inglés Desde Cero. Todos los
            derechos reservados.
          </p>
          <p className="text-sm">Desarrollado con amor en Colombia</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PainPointsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
