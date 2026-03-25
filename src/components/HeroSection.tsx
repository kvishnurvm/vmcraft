import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; pulse: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(42, 78%, 55%, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        const glow = Math.sin(p.pulse) * 0.15 + 0.85;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * glow, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(42, 78%, 55%, ${p.opacity * glow})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };
    draw();
  }, []);

  useEffect(() => {
    animate();
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [animate]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

const HeroSection = ({ started = false }: { started?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Staggered delay base — waits for splash to finish
  const d = started ? 0 : 99;

  const title = "VM Crafts";

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div className="grid-overlay absolute inset-0 z-0" />

      <AnimatePresence>
        {started && <motion.div key="particles" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}><Particles /></motion.div>}
      </AnimatePresence>

      {/* Cinematic light sweep */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(105deg, transparent 40%, hsla(42, 78%, 55%, 0.03) 45%, transparent 50%)",
        }}
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 8, ease: "linear" }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={started ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 border border-primary/30 rounded-full text-primary font-sans text-xs tracking-[0.3em] uppercase">
            Senior Full Stack Developer
          </span>
        </motion.div> */}

        {/* Hello text */}
        <div className="overflow-hidden mb-2">
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={started ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="text-muted-foreground font-sans text-sm md:text-base tracking-[0.2em] uppercase"
          >
            Welcome to
          </motion.p>
        </div>

        {/* Name — letter by letter with dramatic entrance */}
        <div className="overflow-hidden mb-4">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-light leading-none flex justify-center flex-wrap">
            {title.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 80, rotateX: -90 }}
                animate={started ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{
                  delay: 0.6 + i * 0.06,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                }}
                className="gold-gradient-text inline-block"
                style={{ transformOrigin: "bottom center" }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Tagline */}
        <div className="overflow-hidden mb-8">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            animate={started ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light italic text-foreground/80"
          >
            Crafting Digital <em className="gold-gradient-text">Experiences</em>
          </motion.h2>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.6 }}
          className="text-muted-foreground font-sans text-sm md:text-base tracking-wide mb-12 max-w-lg mx-auto"
        >
          {/* Full Stack Developer · Designer · 9+ Years of Crafting Premium Digital Solutions */}
          Let's Build Something Meaningful
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#works"
            className="group relative px-10 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-wider uppercase rounded-sm overflow-hidden"
          >
            <span className="relative z-10">View Works</span>
            <motion.div
              className="absolute inset-0 bg-primary/80"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border border-primary/30 text-foreground font-sans text-sm tracking-wider uppercase rounded-sm hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
          >
            Let's Talk
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : {}}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-muted-foreground text-[10px] tracking-[0.3em] uppercase font-sans">Discover My Story</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
