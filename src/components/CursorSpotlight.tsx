import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Trail {
  id: number;
  x: number;
  y: number;
}

let trailId = 0;

function CursorSpotlightInner() {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const [trails, setTrails] = useState<Trail[]>([]);
  const [isPointer, setIsPointer] = useState(false);

  const springConfig = { damping: 28, stiffness: 280, mass: 0.6 };
  const dotX = useSpring(cursorX, springConfig);
  const dotY = useSpring(cursorY, springConfig);

  const glowSpring = { damping: 45, stiffness: 120, mass: 1.2 };
  const glowX = useSpring(cursorX, glowSpring);
  const glowY = useSpring(cursorY, glowSpring);

  const trailTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastPos = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      lastPos.current = { x: e.clientX, y: e.clientY };

      const el = document.elementFromPoint(e.clientX, e.clientY);
      setIsPointer(
        el
          ? window.getComputedStyle(el).cursor === "pointer" ||
            el.tagName === "A" ||
            el.tagName === "BUTTON"
          : false
      );
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [cursorX, cursorY]);

  useEffect(() => {
    trailTimerRef.current = setInterval(() => {
      const { x, y } = lastPos.current;
      if (x === -200) return;
      const id = ++trailId;
      setTrails((prev) => [...prev.slice(-12), { id, x, y }]);
      setTimeout(() => setTrails((prev) => prev.filter((t) => t.id !== id)), 700);
    }, 45);
    return () => {
      if (trailTimerRef.current) clearInterval(trailTimerRef.current);
    };
  }, []);

  return (
    <>
      {/* Large outer glow — very soft, lags behind */}
      <motion.div
        className="fixed pointer-events-none z-[9988] rounded-full"
        style={{
          width: 500,
          height: 500,
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.10) 0%, rgba(99,102,241,0.05) 45%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      {/* Mid glow ring — blurry halo */}
      <motion.div
        className="fixed pointer-events-none z-[9990] rounded-full"
        style={{
          width: isPointer ? 90 : 60,
          height: isPointer ? 90 : 60,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(139,92,246,0.08) 60%, transparent 80%)",
          filter: "blur(10px)",
          transition: "width 0.2s, height 0.2s",
        }}
      />

      {/* Trail sparkles */}
      {trails.map((trail, i) => {
        const age = trails.length - 1 - i;
        const size = Math.max(4, 18 - age * 1.2);
        return (
          <motion.div
            key={trail.id}
            className="fixed pointer-events-none z-[9994] rounded-full"
            initial={{ opacity: 0.8, scale: 1, x: trail.x, y: trail.y }}
            animate={{ opacity: 0, scale: 0.2, y: trail.y - 28 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{
              width: size,
              height: size,
              translateX: "-50%",
              translateY: "-50%",
              background: `hsl(${255 + i * 6}, 75%, 68%)`,
              filter: `blur(${4 + age * 0.4}px)`,
              boxShadow: `0 0 ${8 + i * 2}px 3px hsl(${255 + i * 6}, 80%, 60%)`,
            }}
          />
        );
      })}

      {/* Thin ring that grows on pointer hover */}
      <motion.div
        className="fixed pointer-events-none z-[9996] rounded-full border border-violet-400/40"
        style={{
          width: isPointer ? 48 : 28,
          height: isPointer ? 48 : 28,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          filter: "blur(0.5px)",
          transition: "width 0.18s, height 0.18s",
        }}
      />

      {/* Core dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          width: isPointer ? 14 : 10,
          height: isPointer ? 14 : 10,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          background: "rgba(192, 162, 255, 0.9)",
          filter: "blur(3px)",
          boxShadow:
            "0 0 12px 4px rgba(139,92,246,0.8), 0 0 24px 8px rgba(139,92,246,0.3)",
          transition: "width 0.15s, height 0.15s",
        }}
      />
    </>
  );
}

export function CursorSpotlight() {
  // Don't render the heavy cursor overlay on touch/mobile devices
  const isTouch =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  if (isTouch) return null;
  return <CursorSpotlightInner />;
}
