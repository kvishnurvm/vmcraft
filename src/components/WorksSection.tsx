import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  { 
    title: "Icanexa", 
    url: "https://icanexa.in", 
    tags: ["React", ".NET", "PostgreSQL"], 
    desc: "Enterprise web platform with comprehensive digital solutions",
    type: "Enterprise Platform"
  },
  { 
    title: "CS Reality", 
    url: "https://csreality.in", 
    tags: ["Next.js", "Strapi", "Cloudflare"], 
    desc: "Real estate digital platform with property management",
    type: "Real Estate"
  },
  { 
    title: "XcelVend", 
    url: "https://xcelvend.com", 
    tags: ["React", "Node.js", "AWS"], 
    desc: "E-commerce platform for seamless online shopping",
    type: "E-Commerce"
  },
  { 
    title: "Haylah", 
    url: "https://haylah.com", 
    tags: ["Angular", "TypeScript", ".NET"], 
    desc: "Business management suite for modern enterprises",
    type: "Business Suite"
  },
];

const WorksSection = () => {
  return (
    <section id="works" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Chapter header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-primary/40 font-sans text-xs tracking-[0.3em] uppercase">Chapter 04</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-4">
            Selected <em className="gold-gradient-text italic">Works</em>
          </h2>
          <p className="text-muted-foreground font-sans text-sm max-w-md mx-auto">
            Real projects, real results — explore the websites I've crafted for clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -10 }}
              className="gold-border-glow rounded-2xl bg-card group block overflow-hidden relative"
            >
              {/* Preview area */}
              <div className="aspect-[16/10] bg-gradient-to-br from-accent to-secondary relative flex items-center justify-center overflow-hidden">
                {/* Animated grid */}
                <div className="absolute inset-0 grid-overlay opacity-30" />
                
                {/* Project name display */}
                <div className="relative z-10 text-center">
                  <motion.span 
                    className="font-serif text-4xl md:text-5xl gold-gradient-text block"
                    initial={{ scale: 1 }}
                  >
                    {p.title}
                  </motion.span>
                  <span className="text-muted-foreground font-sans text-xs tracking-[0.2em] uppercase mt-2 block">{p.type}</span>
                </div>

                {/* Hover overlay with visit CTA */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-sans text-sm tracking-wider uppercase"
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Corner arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="w-4 h-4 text-foreground" />
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                  <span className="text-primary font-sans text-xs tracking-wider">{p.url.replace("https://", "")}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4 font-sans">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[10px] font-sans tracking-wider bg-accent text-muted-foreground rounded-full border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground font-sans text-sm mb-4">Want a website like these?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary/30 text-primary font-sans text-sm tracking-wider uppercase rounded-full hover:bg-primary/10 transition-all duration-300"
          >
            <span>Let's Build Yours</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorksSection;
