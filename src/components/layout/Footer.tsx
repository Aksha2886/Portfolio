import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 bg-background/50">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-bold tracking-tighter"
          >
            M<span className="text-primary">.</span>C
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm text-muted-foreground font-light text-center"
          >
            © {new Date().getFullYear()} Mihir Chauhan. Designed & Built with intention.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 text-sm font-medium text-muted-foreground"
          >
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
