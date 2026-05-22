import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const WA_NUMBER = "918200022676";
const WA_MESSAGE = encodeURIComponent("Hi Mihir, I came across your portfolio and would like to discuss a project.");
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9980] flex flex-col items-end gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 8 }}
            transition={{ duration: 0.2 }}
            className="relative bg-card border border-border/60 rounded-xl px-4 py-3 shadow-xl max-w-[200px] text-sm font-medium text-center"
          >
            <button
              onClick={() => setDismissed(true)}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground"
            >
              <X size={10} />
            </button>
            Chat with me on WhatsApp!
            <div className="absolute -bottom-2 right-5 w-4 h-4 bg-card border-r border-b border-border/60 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_28px_rgba(37,211,102,0.6)] transition-shadow"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="white">
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.76 1.8 6.76L2 30l7.46-1.76A13.94 13.94 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.4c-2.18 0-4.22-.6-5.96-1.64l-.42-.26-4.44 1.04 1.06-4.32-.28-.44A11.36 11.36 0 014.6 16C4.6 9.7 9.7 4.6 16 4.6S27.4 9.7 27.4 16 22.3 27.4 16 27.4zm6.22-8.54c-.34-.17-2.02-.99-2.33-1.1-.31-.12-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.25-.74.08-.34-.17-1.43-.53-2.72-1.68-1.01-.9-1.69-2.01-1.88-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.08-.17-.77-1.86-1.05-2.55-.28-.67-.57-.58-.77-.59H10.1c-.2 0-.51.08-.78.4-.26.31-1 .99-1 2.4s1.02 2.78 1.17 2.97c.14.2 2.03 3.1 4.92 4.34.69.3 1.22.47 1.64.6.69.22 1.32.19 1.81.12.55-.08 2.02-.83 2.3-1.63.28-.8.28-1.49.2-1.63-.08-.14-.3-.22-.64-.39z" />
        </svg>

        {/* Pulse ring */}
        <motion.span
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: "rgba(37,211,102,0.3)" }}
        />
      </motion.a>
    </div>
  );
}
