import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Cpu, Workflow, Database, Globe, Code2, Smartphone, Settings, Bug,
} from "lucide-react";

const services = [
  {
    icon: <Cpu size={28} />,
    title: "Microsoft Power Apps",
    color: "from-violet-500 to-purple-600",
    bg: "from-violet-500/10 to-purple-600/5",
    border: "hover:border-violet-500/50",
    items: ["Canvas Apps", "Model-Driven Apps", "CRM Systems", "Inventory Systems", "Leave Management"],
  },
  {
    icon: <Workflow size={28} />,
    title: "Power Automate",
    color: "from-blue-500 to-cyan-500",
    bg: "from-blue-500/10 to-cyan-500/5",
    border: "hover:border-blue-500/50",
    items: ["Approval Workflows", "Teams Notifications", "Email Automation", "PDF Automation", "Business Process Automation"],
  },
  {
    icon: <Database size={28} />,
    title: "SharePoint & Dataverse",
    color: "from-indigo-500 to-blue-500",
    bg: "from-indigo-500/10 to-blue-500/5",
    border: "hover:border-indigo-500/50",
    items: ["Document Systems", "Internal Portals", "Data Management", "Dashboard Systems", "Secure Business Data"],
  },
  {
    icon: <Globe size={28} />,
    title: "REST API & Integration",
    color: "from-teal-500 to-emerald-500",
    bg: "from-teal-500/10 to-emerald-500/5",
    border: "hover:border-teal-500/50",
    items: ["ERP Integrations", "CRM Integrations", "Third-party APIs", "Custom Connectors", "External Connectivity"],
  },
  {
    icon: <Code2 size={28} />,
    title: "Zoho Creator",
    color: "from-orange-500 to-amber-500",
    bg: "from-orange-500/10 to-amber-500/5",
    border: "hover:border-orange-500/50",
    items: ["Inventory Management", "Job Tracking Systems", "Workflow Automation", "Deluge Scripting", "Custom Business Apps"],
  },
  {
    icon: <Smartphone size={28} />,
    title: "Flutter Mobile Apps",
    color: "from-pink-500 to-rose-500",
    bg: "from-pink-500/10 to-rose-500/5",
    border: "hover:border-pink-500/50",
    items: ["Android Apps", "iOS Apps", "Firebase Integration", "API Connectivity", "Responsive Business Apps"],
  },
  {
    icon: <Settings size={28} />,
    title: "Enterprise Automation",
    color: "from-sky-500 to-blue-500",
    bg: "from-sky-500/10 to-blue-500/5",
    border: "hover:border-sky-500/50",
    items: ["Manufacturing Systems", "Workflow Digitization", "Role-Based Access", "Internal Platforms", "Process Optimization"],
  },
  {
    icon: <Bug size={28} />,
    title: "Debugging & Optimization",
    color: "from-red-500 to-rose-500",
    bg: "from-red-500/10 to-rose-500/5",
    border: "hover:border-red-500/50",
    items: ["Power Apps Debugging", "Workflow Troubleshooting", "Performance Optimization", "Bug Fixing", "System Improvements"],
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="py-16 md:py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container px-6 md:px-12 mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="inline-block px-4 py-1 mb-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest">
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
            Business Automation &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Enterprise Solutions
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary rounded-full mx-auto mb-4"
          />
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Scalable business applications, workflow automation, enterprise digital solutions, and custom low-code platforms that help businesses streamline operations.
          </p>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {["⚡ Fast Delivery", "🏢 Enterprise Ready", "🔒 Secure Solutions", "🎯 Business Focused"].map((t) => (
            <span key={t} className="px-4 py-1.5 bg-card border border-border/50 rounded-full text-xs font-medium text-muted-foreground">
              {t}
            </span>
          ))}
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`relative group bg-card border border-border/50 rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 ${svc.border} hover:shadow-lg overflow-hidden`}
            >
              {/* BG gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${svc.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`} />

              {/* Icon */}
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center text-white shadow-lg`}>
                  {svc.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="relative text-base font-bold leading-tight group-hover:text-primary transition-colors">
                {svc.title}
              </h3>

              {/* Items */}
              <ul className="relative space-y-1.5 flex-1">
                {svc.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${svc.color} shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="#inquiry"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative mt-auto w-full py-2 rounded-lg text-xs font-semibold text-center bg-gradient-to-r ${svc.color} text-white opacity-90 group-hover:opacity-100 transition-opacity`}
              >
                Get Consultation
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
