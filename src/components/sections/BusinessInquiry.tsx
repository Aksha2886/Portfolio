import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2, Upload, X } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_x7ab12c";
const TEMPLATE_ID = "template_9l4npxn";
const PUBLIC_KEY = "YF2d_JTMlx5F3-_tC";

const serviceOptions = [
  "Power Apps Development",
  "Power Automate",
  "SharePoint Solutions",
  "Zoho Creator",
  "Flutter Development",
  "API Integration",
  "Enterprise Automation",
  "Other",
];

const budgetOptions = [
  "Under ₹10,000",
  "₹10,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
];

const inputClass =
  "w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-muted-foreground/40";

const labelClass = "block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5";

type Status = "idle" | "sending" | "success" | "error";

export function BusinessInquiry() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [status, setStatus] = useState<Status>("idle");
  const [fileName, setFileName] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    setFileName(f ? f.name : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...form,
          time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        },
        PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", company: "", email: "", phone: "", service: "", budget: "", timeline: "", message: "" });
      setFileName(null);
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="inquiry" className="py-16 md:py-20 bg-card/20 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/6 via-transparent to-transparent pointer-events-none" />

      <div className="container px-6 md:px-12 mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="inline-block px-4 py-1 mb-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest">
            Work With Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
            Let's Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Business Solution
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary rounded-full mx-auto mb-4"
          />
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Describe your requirements and I'll contact you with the best enterprise solution for your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-blue-500 to-violet-500" />

            {/* Success message */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="mb-6 flex items-center gap-3 px-4 py-3 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm"
              >
                <CheckCircle size={18} className="shrink-0" />
                Thank you! Your inquiry has been submitted successfully. I'll get back to you soon.
              </motion.div>
            )}

            {/* Error message */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="mb-6 flex items-center gap-3 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm"
              >
                <AlertCircle size={18} className="shrink-0" />
                Something went wrong. Please try again or email me directly at mihirchauhan.techdev@gmail.com
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Mihir Chauhan" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Company Name</label>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Your Company" className={inputClass} />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputClass} />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Service Needed *</label>
                  <select name="service" value={form.service} onChange={handleChange} required className={inputClass}>
                    <option value="">Select a service…</option>
                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Project Budget</label>
                  <select name="budget" value={form.budget} onChange={handleChange} className={inputClass}>
                    <option value="">Select budget range…</option>
                    {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className={labelClass}>Timeline</label>
                <input name="timeline" value={form.timeline} onChange={handleChange} placeholder="e.g. 2 weeks, 1 month, ASAP…" className={inputClass} />
              </div>

              {/* Message */}
              <div>
                <label className={labelClass}>Requirement Description *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Describe your project requirements, goals, and any specific features you need…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* File upload */}
              <div>
                <label className={labelClass}>Attachment (optional)</label>
                <label className="flex items-center gap-3 w-full bg-background border border-border border-dashed rounded-xl px-4 py-3 cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all group">
                  <Upload size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-1 truncate">
                    {fileName ? fileName : "Upload requirement doc, wireframe, or screenshot…"}
                  </span>
                  {fileName && (
                    <button
                      type="button"
                      onClick={(e) => { e.preventDefault(); setFileName(null); }}
                      className="text-muted-foreground hover:text-red-400 transition-colors shrink-0"
                    >
                      <X size={14} />
                    </button>
                  )}
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" onChange={handleFile} />
                </label>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "sending" ? 1 : 1.02, y: status === "sending" ? 0 : -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 bg-gradient-to-r from-primary to-blue-500 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(139,92,246,0.35)] hover:shadow-[0_4px_30px_rgba(139,92,246,0.5)] transition-shadow disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending Inquiry…
                  </>
                ) : (
                  <>
                    Submit Inquiry
                    <Send size={15} />
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-muted-foreground">
                Your inquiry is sent directly — no mail app required. I typically respond within 24 hours.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
