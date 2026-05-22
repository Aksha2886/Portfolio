import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications",
    short: "MCA",
    institution: "Indus University",
    location: "Ahmedabad, Gujarat",
    period: "2021 – 2023",
    grade: "CGPA 7.5",
    description:
      "Focused on advanced software engineering, enterprise application development, database management systems, and cloud computing. Developed strong foundations in object-oriented programming and system design that directly fuel my Power Platform expertise.",
    highlights: ["Software Engineering", "Database Systems", "Cloud Computing", "Enterprise Apps"],
    color: "from-violet-500 to-purple-600",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    accent: "violet",
  },
  {
    degree: "Bachelor of Computer Applications",
    short: "BCA",
    institution: "Som-lalit College",
    location: "Ahmedabad, Gujarat",
    period: "2018 – 2021",
    grade: "First Class",
    description:
      "Built a comprehensive foundation in computer science principles, programming languages, web technologies, and software development methodologies. Cultivated problem-solving skills and analytical thinking through hands-on project work.",
    highlights: ["Programming Fundamentals", "Web Technologies", "Software Development", "Data Structures"],
    color: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    accent: "blue",
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-16 md:py-20 relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] rounded-full bg-primary/4 blur-[120px] pointer-events-none" />

      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
            Academic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Foundation
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary rounded-full md:mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.short}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className="group relative bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/40 hover:shadow-[0_12px_40px_rgba(139,92,246,0.15)] transition-all overflow-hidden"
            >
              {/* Gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${edu.color}`} />

              {/* Faint background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-blue-500/0 group-hover:from-primary/3 group-hover:to-blue-500/3 transition-all duration-500 rounded-2xl pointer-events-none" />

              {/* Large watermark letter */}
              <div className="absolute -bottom-4 -right-2 text-[120px] font-black text-foreground/[0.03] select-none leading-none pointer-events-none">
                {edu.short}
              </div>

              <div className="relative">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`p-3 rounded-xl border ${edu.iconBg} shrink-0`}
                  >
                    <GraduationCap size={22} className="text-primary" />
                  </motion.div>
                  <div>
                    <span className="text-xs font-mono text-primary uppercase tracking-widest">{edu.short}</span>
                    <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-base font-semibold text-muted-foreground">{edu.institution}</p>
                  </div>
                </div>

                {/* Meta row */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar size={12} className="text-primary" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin size={12} className="text-primary" />
                    {edu.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                    <Award size={11} />
                    {edu.grade}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Highlight tags */}
                <div className="flex flex-wrap gap-1.5">
                  {edu.highlights.map((h, j) => (
                    <motion.span
                      key={h}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.15 + j * 0.05 }}
                      whileHover={{ scale: 1.06 }}
                      className="px-2.5 py-1 bg-background border border-border text-xs font-mono text-muted-foreground rounded-md hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {h}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline summary strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-0 mt-10 max-w-lg mx-auto"
        >
          {[
            { year: "2018", label: "Started BCA" },
            { year: "2021", label: "Graduated BCA" },
            { year: "2023", label: "Completed MCA" },
            { year: "Now", label: "Industry" },
          ].map((node, i, arr) => (
            <div key={node.year} className="flex items-center">
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                  className="w-10 h-10 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center text-xs font-mono font-bold text-primary shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                >
                  {node.year === "Now" ? "✦" : node.year.slice(2)}
                </motion.div>
                <span className="text-xs text-muted-foreground mt-1 text-center whitespace-nowrap">{node.label}</span>
              </div>
              {i < arr.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.55 + i * 0.1, duration: 0.4 }}
                  className="h-px w-10 sm:w-16 bg-gradient-to-r from-primary/50 to-primary/20 origin-left mx-1"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
