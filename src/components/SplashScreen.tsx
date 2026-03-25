import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"logo" | "reveal" | "done">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("reveal"), 1800);
    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Gold line sweep */}
          <motion.div
            className="absolute top-1/2 left-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent w-full"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Expanding circle wipe */}
          {phase === "reveal" && (
            <motion.div
              className="absolute rounded-full bg-primary/10"
              initial={{ width: 0, height: 0 }}
              animate={{ width: "300vmax", height: "300vmax" }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
            />
          )}

          {/* Logo mark */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="font-serif text-5xl md:text-7xl gold-gradient-text"
                animate={phase === "reveal" ? { scale: 1.2, opacity: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                VM
              </motion.h1>
              <motion.p
                className="text-muted-foreground font-sans text-xs tracking-[0.5em] uppercase mt-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Portfolio
              </motion.p>
            </motion.div>
          </div>

          {/* Corner accents */}
          <motion.div
            className="absolute top-8 left-8 w-12 h-12 border-l border-t border-primary/30"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-primary/30"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
