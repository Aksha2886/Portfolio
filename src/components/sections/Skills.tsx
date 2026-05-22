import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Database, Shield, Terminal, Smartphone, Cpu, Workflow, Code2 } from "lucide-react";

const skillCategories = [
  {
    title: "Power Platform",
    icon: <Cpu size={20} className="text-primary" />,
    color: "from-violet-500/20 to-purple-500/10",
    skills: ["Power Apps (Canvas)", "Power Apps (Model-Driven)", "Power Pages", "Power Automate", "Power Fx", "PCF Controls"],
  },
  {
    title: "Data & Integration",
    icon: <Database size={20} className="text-primary" />,
    color: "from-blue-500/20 to-cyan-500/10",
    skills: ["Dataverse", "SharePoint Lists & Libraries", "Power BI", "REST APIs", "Custom Connectors", "OData"],
  },
  {
    title: "Automation & Workflows",
    icon: <Workflow size={20} className="text-primary" />,
    color: "from-indigo-500/20 to-blue-500/10",
    skills: ["Cloud Flows", "Process Automation", "Microsoft Planner", "Teams Notifications", "Outlook Alerts", "ALM Practices"],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone size={20} className="text-primary" />,
    color: "from-pink-500/20 to-rose-500/10",
    skills: ["Flutter", "Dart", "Firebase", "REST API Integration", "UI/UX Design", "Performance Optimization"],
  },
  {
    title: "Security & Environments",
    icon: <Shield size={20} className="text-primary" />,
    color: "from-emerald-500/20 to-teal-500/10",
    skills: ["RBAC", "Environment Management", "Solution Management", "DLP Policies", "Access Control", "Data Security"],
  },
  {
    title: "Low-Code Platforms",
    icon: <Code2 size={20} className="text-primary" />,
    color: "from-orange-500/20 to-amber-500/10",
    skills: ["Zoho Creator", "Deluge Scripting", "Database Workflows", "Relational Data Mapping", "Form Automation", "Custom Reports"],
  },
  {
    title: "Tools & Source Control",
    icon: <Terminal size={20} className="text-primary" />,
    color: "from-amber-500/20 to-yellow-500/10",
    skills: ["Git", "GitHub", "Bitbucket", "Azure DevOps", "VS Code", "Postman"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="py-16 bg-card/30 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container px-6 md:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Arsenal
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary rounded-full md:mx-0 mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative bg-background border border-border/50 rounded-2xl p-5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all group cursor-default"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-2.5 bg-primary/10 rounded-xl"
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-base font-semibold">{category.title}</h3>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + i * 0.08 + j * 0.04, duration: 0.3 }}
                    whileHover={{ scale: 1.08, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                    className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-md font-mono hover:text-primary transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
