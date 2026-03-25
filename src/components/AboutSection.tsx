import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profileImage from "@/assets/profile.jpeg";

const stats = [
  { value: "9+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "12+", label: "Technologies" },
  { value: "100%", label: "Client Satisfaction" },
];

const timeline = [
  { year: "2015", text: "Started my journey in web development" },
  { year: "2018", text: "Mastered full-stack with .NET & React" },
  { year: "2021", text: "Building enterprise-grade platforms" },
  { year: "2024", text: "Crafting premium digital experiences" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Chapter header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-primary/40 font-sans text-xs tracking-[0.3em] uppercase">Chapter 01</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <motion.div style={{ y: imageY }} className="relative">
              {/* Main image */}
              <div className="relative gold-border-glow rounded-2xl overflow-hidden">
                <div className="aspect-[3/4] max-w-md mx-auto overflow-hidden">
                  <motion.img
                    src={profileImage}
                    alt="Vishnumohan - Full Stack Developer"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-5 py-3 rounded-xl shadow-lg"
                >
                  <p className="font-serif text-2xl font-bold">9+</p>
                  <p className="font-sans text-[10px] tracking-wider uppercase">Years</p>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 border border-primary/20 rounded-2xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/5 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">Who Am I</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              I'm <em className="gold-gradient-text italic">Vishnumohan</em>
            </h2>
            
            <motion.div
              className="w-20 h-0.5 bg-gradient-to-r from-primary to-primary/0 mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ transformOrigin: "left" }}
            />

            <p className="text-foreground/90 leading-relaxed mb-4 font-sans text-base">
              A passionate Full Stack Developer who transforms ideas into stunning digital experiences. 
              I build websites that don't just work — they <span className="text-primary font-medium">captivate</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 font-sans text-sm">
              With over 9 years of crafting digital solutions, I specialize in building scalable, 
              performant web applications — from elegant static sites to complex dynamic platforms. 
              Every pixel, every line of code is crafted with purpose.
            </p>

            <blockquote className="border-l-2 border-primary/40 pl-6 mb-10 py-2">
              <p className="text-foreground/70 italic font-serif text-lg leading-relaxed">
                "I'm passionate about building meaningful technical solutions, contributing to impactful 
                projects, and continuously growing — beyond titles or roles."
              </p>
            </blockquote>

            {/* Mini Timeline */}
            <div className="mb-10 space-y-3">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <span className="text-primary font-sans text-xs font-bold tracking-wider min-w-[3rem]">{item.year}</span>
                  <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-125 transition-all" />
                  <span className="text-muted-foreground text-sm font-sans">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="gold-border-glow rounded-xl p-4 text-center bg-card hover:bg-card/80 transition-colors group"
                >
                  <motion.p
                    className="font-serif text-2xl md:text-3xl gold-gradient-text"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-muted-foreground text-[10px] tracking-wider uppercase mt-1 font-sans leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
