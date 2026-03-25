import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ChapterTransitionProps {
  nextChapter?: string;
  nextTitle?: string;
  variant?: "wipe-up" | "wipe-gold" | "fade-scale";
}

const ChapterTransition = ({ nextChapter, nextTitle, variant = "wipe-up" }: ChapterTransitionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Shared transforms
  const clipProgress = useTransform(scrollYProgress, [0.1, 0.6], [0, 100]);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.55], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.3, 0.55], [40, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0.0, 0.3, 0.7, 1.0], [0, 1, 1, 0]);

  if (variant === "wipe-gold") {
    return (
      <div ref={ref} className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Dark overlay that wipes in */}
        <motion.div
          className="absolute inset-0 bg-card"
          style={{
            opacity: bgOpacity,
            clipPath: useTransform(clipProgress, (v) => `inset(${100 - v}% 0 0 0)`),
          }}
        />

        {/* Gold accent line that draws across */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
            scaleX: useTransform(scrollYProgress, [0.15, 0.5], [0, 1]),
            opacity: bgOpacity,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
            scaleX: useTransform(scrollYProgress, [0.2, 0.55], [0, 1]),
            opacity: bgOpacity,
          }}
        />

        {/* Center content */}
        <div className="relative z-10 text-center">
          {nextChapter && (
            <motion.p
              className="text-primary/60 font-sans text-xs tracking-[0.5em] uppercase mb-3"
              style={{ opacity: contentOpacity, y: contentY }}
            >
              {nextChapter}
            </motion.p>
          )}
          {nextTitle && (
            <motion.h3
              className="font-serif text-3xl md:text-5xl gold-gradient-text italic"
              style={{
                opacity: useTransform(scrollYProgress, [0.35, 0.6], [0, 1]),
                y: useTransform(scrollYProgress, [0.35, 0.6], [30, 0]),
                scale: useTransform(scrollYProgress, [0.35, 0.6], [0.9, 1]),
              }}
            >
              {nextTitle}
            </motion.h3>
          )}

          {/* Decorative diamond */}
          <motion.div
            className="w-3 h-3 border border-primary/50 rotate-45 mx-auto mt-6"
            style={{
              opacity: contentOpacity,
              scale: useTransform(scrollYProgress, [0.3, 0.5], [0, 1]),
              rotate: useTransform(scrollYProgress, [0.3, 0.5], [0, 45]),
            }}
          />
        </div>
      </div>
    );
  }

  if (variant === "fade-scale") {
    return (
      <div ref={ref} className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Radial glow */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, hsl(var(--primary) / 0.05) 0%, transparent 70%)",
            opacity: bgOpacity,
            scale: useTransform(scrollYProgress, [0.1, 0.5], [0.5, 1.5]),
          }}
        />

        <div className="relative z-10 text-center">
          {/* Horizontal rules that expand */}
          <div className="flex items-center justify-center gap-6 mb-4">
            <motion.div
              className="h-px bg-gradient-to-l from-primary/40 to-transparent"
              style={{
                width: useTransform(scrollYProgress, [0.2, 0.5], [0, 80]),
                opacity: contentOpacity,
              }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-primary/40"
              style={{
                opacity: contentOpacity,
                scale: useTransform(scrollYProgress, [0.2, 0.5], [0, 1]),
              }}
            />
            <motion.div
              className="h-px bg-gradient-to-r from-primary/40 to-transparent"
              style={{
                width: useTransform(scrollYProgress, [0.2, 0.5], [0, 80]),
                opacity: contentOpacity,
              }}
            />
          </div>

          {nextChapter && (
            <motion.p
              className="text-primary/50 font-sans text-[10px] tracking-[0.5em] uppercase"
              style={{ opacity: contentOpacity, y: contentY }}
            >
              {nextChapter}
            </motion.p>
          )}
        </div>
      </div>
    );
  }

  // Default: wipe-up — full page wipe with content reveal
  return (
    <div ref={ref} className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Page wipe overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, hsl(var(--background)), hsl(var(--card)), hsl(var(--background)))",
          clipPath: useTransform(clipProgress, (v) => `inset(${Math.max(0, 50 - v / 2)}% 0 ${Math.max(0, 50 - v / 2)}% 0)`),
          opacity: bgOpacity,
        }}
      />

      {/* Vertical gold line that draws down */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-px"
        style={{
          background: "linear-gradient(to bottom, transparent, hsl(var(--primary) / 0.4), transparent)",
          height: useTransform(scrollYProgress, [0.1, 0.5], ["0%", "60%"]),
          opacity: bgOpacity,
          top: "20%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        {nextChapter && (
          <motion.p
            className="text-primary/60 font-sans text-xs tracking-[0.5em] uppercase mb-4"
            style={{ opacity: contentOpacity, y: contentY }}
          >
            {nextChapter}
          </motion.p>
        )}
        {nextTitle && (
          <motion.h3
            className="font-serif text-4xl md:text-6xl lg:text-7xl gold-gradient-text italic"
            style={{
              opacity: useTransform(scrollYProgress, [0.35, 0.6], [0, 1]),
              y: useTransform(scrollYProgress, [0.35, 0.6], [50, 0]),
              scale: useTransform(scrollYProgress, [0.35, 0.6], [0.85, 1]),
            }}
          >
            {nextTitle}
          </motion.h3>
        )}

        {/* Expanding line below */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto mt-8"
          style={{
            width: useTransform(scrollYProgress, [0.3, 0.6], [0, 200]),
            opacity: contentOpacity,
          }}
        />
      </div>
    </div>
  );
};

export default ChapterTransition;
