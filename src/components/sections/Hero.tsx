import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Download } from "lucide-react";

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 4,
  duration: Math.random() * 6 + 4,
}));

const name = "Mihir Chauhan".split("");

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const orbY1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary/40"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Background orbs with parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: orbY1 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div
          style={{ y: orbY2 }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-blue-500/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] h-[20vw] rounded-full bg-violet-400/20 blur-[80px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <motion.div style={{ y: contentY, opacity }} className="container relative z-10 px-6 md:px-12 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 mb-5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for new opportunities
          </motion.div>

          <div className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="block"
            >
              Hi, I'm
            </motion.span>
            <div className="overflow-hidden flex justify-center flex-wrap">
              {name.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className={char === " " ? "mr-4" : "text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500"}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="text-lg md:text-xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto"
          >
            Microsoft Power Platform Developer building scalable business applications — from Canvas Apps to intelligent workflow automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
              View Projects
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight size={18} />
              </motion.span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-border text-foreground rounded-full font-medium hover:bg-muted hover:border-primary/50 transition-all"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Mihir_Chauhan_Resume.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-primary/40 text-primary rounded-full font-medium hover:bg-primary/10 hover:border-primary transition-all flex items-center justify-center gap-2 group"
            >
              <Download size={16} className="group-hover:animate-bounce" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            {[["3+", "Years Exp."], ["6+", "Projects"], ["3", "Companies"]].map(([num, label]) => (
              <div key={label} className="px-5 py-2 rounded-full bg-card/60 border border-border/50 backdrop-blur-sm flex items-center gap-2">
                <span className="text-primary font-bold font-mono">{num}</span>
                <span className="text-muted-foreground text-sm">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
