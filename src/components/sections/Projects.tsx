import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Crompton – Task Orchestration",
    description:
      "Enterprise project management platform with Canvas App, RBAC dashboards, Dataverse architecture for projects/tasks/milestones, real-time Microsoft Planner sync via Power Automate, and dynamic progress tracking with overdue analysis.",
    image: "/project-1.png",
    gradient: null,
    tags: ["Power Apps", "Dataverse", "Power Automate", "Microsoft Planner", "RBAC"],
    number: "01",
  },
  {
    title: "Phaidros Healthcare – Packaging Variants",
    description:
      "Model-Driven app for packaging variant management with JS business logic, auto-generated Packaging IDs, sequential version control for Image Codes (v1/v2/v3), and SharePoint document automation via Power Automate.",
    image: "/project-2.png",
    gradient: null,
    tags: ["Power Apps", "Dataverse", "JavaScript", "SharePoint", "Power Automate"],
    number: "02",
  },
  {
    title: "Leave Management System",
    description:
      "Desktop Canvas App for employee leave processes with dynamic galleries, advanced Power Fx logic for leave balance calculations, date-based filtering, Dataverse visibility, and approval workflows with Teams and Outlook notifications.",
    image: "/project-3.png",
    gradient: null,
    tags: ["Power Apps", "Power Fx", "Dataverse", "Power Automate", "REST APIs"],
    number: "03",
  },
  {
    title: "Job & Inventory Management System",
    description:
      "Comprehensive automated Job & Inventory app built on Zoho Creator to eliminate manual supply chain tracking. Features relational data architecture syncing Job Masters, Material Acquisitions, Job Sheets & Dispatches; complex Deluge scripting for real-time pending-quantity math; strict Dispatch Limit Validation; quality-control rejection metrics; and granular dashboards with multi-layer grouping to highlight bottlenecks.",
    image: null,
    gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/5",
    tags: ["Zoho Creator", "Deluge Scripting", "Workflow Automation", "Inventory Management", "Low-Code"],
    number: "04",
    badge: "Zoho Creator",
  },
  {
    title: "Kontech – Automation App",
    description:
      "Canvas App letting users submit forms with image attachments via SharePoint Lists. Configured Power Automate workflows to convert images into Word documents and auto-generate PDFs stored in a designated SharePoint location — fully automated document handling end-to-end.",
    image: null,
    gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/5",
    tags: ["Power Apps", "SharePoint", "Power Automate", "PDF Automation", "Canvas App"],
    number: "05",
    badge: null,
  },
  {
    title: "Carnival – Cruise Booking App",
    description:
      "Responsive Canvas Apps for desktop and mobile enabling users to explore and book cruise ships. Business logic with Power Fx for dynamic functionality and validations, Dataverse tables, optimized performance across devices.",
    image: "/project-4.png",
    gradient: null,
    tags: ["Power Apps", "Canvas App", "Power Fx", "Dataverse", "Mobile"],
    number: "06",
    badge: null,
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-16 md:py-20 bg-card/20 relative" ref={ref}>
      <div className="container px-6 md:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
            Selected{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Works
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary rounded-full md:mx-auto mb-4"
          />
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Enterprise-grade business applications built with Microsoft Power Platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-400 hover:shadow-[0_12px_40px_rgba(139,92,246,0.18)]"
            >
              {/* Image or gradient banner */}
              <div className="relative h-[220px] overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                {project.image ? (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                    {/* Animated grid lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:20px_20px]" />
                    {/* Floating orbs */}
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute w-24 h-24 rounded-full bg-white/5 blur-2xl top-4 left-8"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                      transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                      className="absolute w-16 h-16 rounded-full bg-white/5 blur-xl bottom-4 right-8"
                    />
                    {/* Platform badge */}
                    {project.badge && (
                      <div className="relative z-10 px-5 py-2.5 bg-background/30 border border-white/20 rounded-full backdrop-blur-sm text-sm font-mono font-bold text-white/80">
                        {project.badge}
                      </div>
                    )}
                  </div>
                )}
                {/* Project number */}
                <div className="absolute top-4 left-4 z-20 font-mono text-5xl font-black text-white/10 select-none">
                  {project.number}
                </div>
                {/* Hover arrow */}
                <motion.div
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ArrowUpRight size={16} className="text-white" />
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="px-2.5 py-1 bg-background border border-border rounded-md text-xs font-mono text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
