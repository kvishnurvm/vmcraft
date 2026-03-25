import { motion } from "framer-motion";
import { Globe, Server, Cloud, Paintbrush, ArrowUpRight } from "lucide-react";

const services = [
  { 
    num: "01", 
    title: "Web Development", 
    desc: "From stunning static websites to complex dynamic platforms — I build custom, responsive web applications that captivate users and drive results.", 
    icon: Globe,
    features: ["React & Next.js", "Angular", "TypeScript", "Responsive Design"]
  },
  { 
    num: "02", 
    title: "Backend & Database", 
    desc: "Robust server-side architecture powering your applications with scalable APIs, secure authentication, and optimized database performance.", 
    icon: Server,
    features: [".NET & Node.js", "REST APIs", "PostgreSQL", "MongoDB"]
  },
  { 
    num: "03", 
    title: "Cloud & Hosting", 
    desc: "Deployment on leading cloud platforms with CI/CD pipelines, ensuring your applications are fast, secure, and always available.", 
    icon: Cloud,
    features: ["Vercel & AWS", "Cloudflare", "CI/CD Pipelines", "Performance Tuning"]
  },
  { 
    num: "04", 
    title: "Design & SEO", 
    desc: "Beautiful interfaces paired with search engine optimization that drives organic traffic and builds your digital presence.", 
    icon: Paintbrush,
    features: ["UI/UX Design", "Figma & Photoshop", "Technical SEO", "Core Web Vitals"]
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Chapter header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-primary/40 font-sans text-xs tracking-[0.3em] uppercase">Chapter 03</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">What I Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-4">
            Services That <em className="gold-gradient-text italic">Deliver</em>
          </h2>
          <p className="text-muted-foreground font-sans text-sm max-w-md mx-auto">
            End-to-end digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8 }}
              className="gold-border-glow rounded-2xl p-8 bg-card group relative overflow-hidden cursor-pointer"
            >
              {/* Background number */}
              <span className="absolute -right-4 -top-6 font-serif text-[120px] font-bold text-primary/[0.04] leading-none group-hover:text-primary/[0.08] transition-colors duration-500">
                {s.num}
              </span>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <s.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground/0 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                
                <h3 className="font-serif text-2xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans mb-6">{s.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 text-[10px] font-sans tracking-wider bg-accent/50 text-muted-foreground rounded-full border border-border/50 group-hover:border-primary/20 transition-colors"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
