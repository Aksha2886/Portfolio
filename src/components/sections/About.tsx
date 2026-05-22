import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Phone } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "5+", label: "Projects Delivered" },
  { value: "3", label: "Companies" },
  { value: "MCA", label: "Post Graduate" },
];

export function About() {
  const ref = useRef(null);
  const imgRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden" ref={ref}>
      {/* Subtle bg accent */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          {/* Text */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                Engineering{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                  Vision
                </span>
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 80 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-primary rounded-full"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 text-base text-muted-foreground font-light leading-relaxed">
              <p>
                I'm a Power Platform Developer with 3+ years of experience building scalable, enterprise-grade business applications using Microsoft Power Platform. My expertise spans Canvas Apps, Model-Driven Apps, Power Automate, and Dataverse — delivering efficient, user-friendly solutions that drive real operational impact.
              </p>
              <p>
                I specialize in workflow automation, system integration via REST APIs and Custom Connectors, and implementing secure role-based access control. Alongside Power Platform, I've built production Flutter mobile applications with a strong foundation in data architecture, security practices, and enterprise ALM.
              </p>
            </motion.div>

            {/* Stat pills row */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -3, borderColor: "hsl(var(--primary))" }}
                  className="flex flex-col items-center py-3 px-2 bg-card border border-border/50 rounded-xl text-center transition-colors"
                >
                  <span className="text-2xl font-black text-primary">{value}</span>
                  <span className="text-xs text-muted-foreground mt-1 font-mono">{label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-1">
              {[
                { icon: <MapPin size={14} />, text: "Ahmedabad, Gujarat", href: null },
                { icon: <Briefcase size={14} />, text: "3+ Years Experience", href: null },
                { icon: <GraduationCap size={14} />, text: "MCA — Indus University", href: null },
                { icon: <Phone size={14} />, text: "+91-82000-22676", href: "tel:+918200022676" },
              ].map(({ icon, text, href }) => (
                href ? (
                  <motion.a
                    key={text}
                    href={href}
                    whileHover={{ scale: 1.06, borderColor: "hsl(var(--primary))" }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full text-sm font-medium hover:text-primary hover:border-primary transition-colors"
                  >
                    <span className="text-primary">{icon}</span>
                    {text}
                  </motion.a>
                ) : (
                  <motion.div
                    key={text}
                    whileHover={{ scale: 1.04 }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full text-sm font-medium cursor-default"
                  >
                    <span className="text-primary">{icon}</span>
                    {text}
                  </motion.div>
                )
              ))}
            </motion.div>
          </div>

          {/* Image with parallax */}
          <motion.div
            ref={imgRef}
            variants={itemVariants}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl -rotate-6 translate-x-4 translate-y-4" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-2xl rotate-3 blur-md" />

              <div className="absolute inset-0 bg-card rounded-2xl overflow-hidden border border-border/50 z-10 group shadow-2xl">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <motion.img
                  style={{ y: imgY }}
                  src="/avatar.png"
                  alt="Mihir Chauhan avatar"
                  className="w-full h-full object-cover scale-110"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-5 bg-background border border-primary/30 px-4 py-3 rounded-xl shadow-xl z-20 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                  <span className="font-mono text-sm font-bold">Open to Work</span>
                </div>
              </motion.div>

              {/* Floating tech badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -top-4 -right-4 bg-primary/10 border border-primary/30 px-3 py-2 rounded-xl shadow-xl z-20 backdrop-blur-sm"
              >
                <span className="font-mono text-xs text-primary font-bold">Power Platform</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
