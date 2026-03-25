import { motion } from "framer-motion";
import { TrendingUp, Gauge, Search, BarChart3 } from "lucide-react";

const metrics = [
  { icon: Gauge, label: "Performance", value: "98+", desc: "Lighthouse Score" },
  { icon: TrendingUp, label: "Ranking", value: "Top 3", desc: "Search Results" },
  { icon: Search, label: "Optimization", value: "100%", desc: "SEO Score" },
  { icon: BarChart3, label: "Growth", value: "3x", desc: "Organic Traffic" },
];

const SEOSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">Results</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            SEO <em className="gold-gradient-text italic">Metrics</em>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="gold-border-glow card-lift rounded-lg p-6 bg-card text-center"
            >
              <m.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="font-serif text-3xl gold-gradient-text mb-1">{m.value}</p>
              <p className="font-sans text-sm text-foreground mb-1">{m.label}</p>
              <p className="text-muted-foreground text-xs font-sans">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOSection;
