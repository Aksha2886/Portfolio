import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle } from "lucide-react";

const HIRE_MSG =
  "Hi Mihir,\n\nI came across your portfolio and I'd like to hire you for a project.\n\nPlease let me know your availability and we can discuss further.";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Pre-fill message when user arrives via "Hire Me" button
  useEffect(() => {
    const checkHireFlag = () => {
      if (sessionStorage.getItem("hire_me") === "1") {
        setMessage(HIRE_MSG);
        sessionStorage.removeItem("hire_me");
      }
    };
    // Check immediately (if already scrolled) and on hash change
    checkHireFlag();
    window.addEventListener("hashchange", checkHireFlag);
    return () => window.removeEventListener("hashchange", checkHireFlag);
  }, []);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Hi Mihir,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
    );
    window.open(
      `mailto:mihirchauhan.techdev@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-16 md:py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/8 via-background to-background pointer-events-none" />
      <div className="absolute top-0 left-0 w-[30vw] h-[30vw] rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />

      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Touch
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary rounded-full md:mx-auto"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* Left info panel */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-3">
                Let's build something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                  incredible.
                </span>
              </h3>
              <p className="text-muted-foreground font-light">
                Currently open for new opportunities. Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              {[
                { icon: <Mail size={18} />, label: "Email", value: "mihirchauhan.techdev@gmail.com", href: "mailto:mihirchauhan.techdev@gmail.com" },
                { icon: <Phone size={18} />, label: "Phone", value: "+91-82000-22676", href: "tel:+918200022676" },
                { icon: <MapPin size={18} />, label: "Location", value: "Ahmedabad, Gujarat, India", href: null },
              ].map(({ icon, label, value, href }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center text-primary group-hover:bg-primary/10 group-hover:border-primary/50 transition-all shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a href={href} className="font-medium hover:text-primary transition-colors text-sm">{value}</a>
                    ) : (
                      <p className="font-medium text-sm">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Contact form */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border/50 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-blue-500" />

            <h3 className="text-xl font-bold mb-5">Send a message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/50"
                    placeholder="Mihir Chauhan"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/50"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none placeholder:text-muted-foreground/50"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium flex items-center justify-center gap-2 group shadow-[0_4px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_4px_28px_rgba(139,92,246,0.5)] transition-shadow"
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} className="text-green-300" />
                    Mail client opened!
                  </>
                ) : (
                  <>
                    Send Message
                    <motion.span
                      animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
                      transition={{ duration: 1.4, repeat: Infinity }}
                    >
                      <Send size={16} />
                    </motion.span>
                  </>
                )}
              </motion.button>

              <p className="text-xs text-muted-foreground text-center">
                Clicking send will open your mail client with the message pre-filled.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
