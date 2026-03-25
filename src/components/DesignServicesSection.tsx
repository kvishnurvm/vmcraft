import { motion } from "framer-motion";
import { Palette, Image, Youtube, CreditCard, Package } from "lucide-react";

const designServices = [
  { icon: Palette, title: "Logo Design", desc: "Memorable brand identities that stand out" },
  { icon: Image, title: "Poster Design", desc: "Eye-catching visual media & banners" },
  { icon: Youtube, title: "Thumbnails", desc: "Click-worthy video & social covers" },
  { icon: CreditCard, title: "Business Cards", desc: "Professional card designs that impress" },
  { icon: Package, title: "Product Design", desc: "Packaging, mockups & branding" },
];

const DesignServicesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Chapter header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-primary/40 font-sans text-xs tracking-[0.3em] uppercase">Chapter 05</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">Creative Studio</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
            Design <em className="gold-gradient-text italic">Services</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {designServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="gold-border-glow rounded-2xl p-6 bg-card text-center group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                >
                  <s.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-serif text-sm mb-1 text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-muted-foreground text-xs font-sans leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignServicesSection;
