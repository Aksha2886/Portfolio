import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    role: "Power Apps Developer",
    company: "SPETEQ Technologies",
    period: "Feb 2025 – Present",
    current: true,
    description:
      "Architecting and delivering scalable Power Apps (Canvas & Model-Driven) with intuitive UI and robust functionality. Engineering automated workflows via Power Automate, managing Dataverse and SharePoint data models, and integrating external systems via REST APIs. Implementing RBAC across Dev/Test/Prod with ALM practices. Additionally built an automated Job & Inventory application from scratch using Zoho Creator — programmed complex Deluge scripts for real-time pending-quantity math, multi-form data sync, and strict dispatch limit validations.",
    technologies: ["Power Apps", "Power Automate", "Dataverse", "SharePoint", "REST APIs", "RBAC", "Zoho Creator", "Deluge Scripting"],
  },
  {
    role: "Flutter Developer",
    company: "Silverstar Infosystem",
    period: "Aug 2023 – Dec 2024",
    current: false,
    description:
      "Developed and maintained Flutter applications with a strong focus on performance and scalability. Designed clean, user-friendly UIs for superior user experience. Integrated REST APIs and Firebase for robust data handling. Performed code optimization for stable, reliable production apps.",
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "UI/UX", "Performance Optimization"],
  },
  {
    role: "Mobile App Developer Intern",
    company: "Tops Technologies",
    period: "Jan 2023 – Jun 2023",
    current: false,
    description:
      "Gained hands-on experience in Power Apps development through active involvement in real-world projects. Collaborated with senior developers to debug and optimize applications. Applied industry best practices in low-code app development, ensuring scalability and usability.",
    technologies: ["Power Apps", "Power Automate", "Low-Code Development", "Debugging"],
  },
];

export function Experience() {
  const ref = useRef(null);
  const lineRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: lineRef, offset: ["start 80%", "end 20%"] });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-16 md:py-20 relative" ref={ref}>
      <div className="container px-6 md:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Journey
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary rounded-full md:mx-auto"
          />
        </motion.div>

        <div className="max-w-3xl mx-auto relative" ref={lineRef}>
          {/* Animated vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border/40">
            <motion.div
              style={{ scaleY: lineScaleY, originY: 0 }}
              className="absolute inset-0 bg-gradient-to-b from-primary to-blue-500"
            />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + index * 0.18, ease: "easeOut" }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.18, type: "spring" }}
                  className="absolute left-[19px] md:left-[27px] top-5 -translate-x-1/2 z-10"
                >
                  <div className={`w-4 h-4 rounded-full border-2 border-background ${exp.current ? "bg-primary shadow-[0_0_12px_rgba(139,92,246,0.7)]" : "bg-muted-foreground/60"}`} />
                  {exp.current && (
                    <motion.div
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-primary"
                    />
                  )}
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4, borderColor: "hsl(var(--primary) / 0.4)" }}
                  transition={{ duration: 0.2 }}
                  className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-5 hover:bg-card transition-all group"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-0.5">
                        <Building2 size={13} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-primary font-mono text-xs shrink-0">
                      <Calendar size={12} />
                      {exp.period}
                      {exp.current && (
                        <span className="ml-1 px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-bold">Current</span>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-0.5 bg-background border border-border rounded text-xs font-mono text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
