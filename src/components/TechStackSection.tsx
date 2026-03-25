import { motion } from "framer-motion";
import { 
  Code2, Server, Database, Cloud, Paintbrush, Search,
  Blocks, FileCode, Globe, Cpu, Layers, Zap
} from "lucide-react";

const techCategories = [
  { 
    title: "Frontend", 
    icon: Code2,
    color: "from-blue-500/20 to-cyan-500/20",
    techs: [
      { name: "React", icon: Blocks },
      { name: "TypeScript", icon: FileCode },
      { name: "Angular", icon: Zap },
      { name: "Next.js", icon: Globe },
      { name: "Tailwind CSS", icon: Layers },
    ]
  },
  { 
    title: "Backend", 
    icon: Server,
    color: "from-emerald-500/20 to-green-500/20",
    techs: [
      { name: ".NET", icon: Cpu },
      { name: "Strapi", icon: Server },
      { name: "Node.js", icon: Zap },
      { name: "Express", icon: Globe },
      { name: "REST APIs", icon: Layers },
    ]
  },
  { 
    title: "Database", 
    icon: Database,
    color: "from-orange-500/20 to-amber-500/20",
    techs: [
      { name: "PostgreSQL", icon: Database },
      { name: "MSSQL", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "MongoDB", icon: Layers },
    ]
  },
  { 
    title: "Cloud & DevOps", 
    icon: Cloud,
    color: "from-purple-500/20 to-violet-500/20",
    techs: [
      { name: "Vercel", icon: Globe },
      { name: "Cloudflare", icon: Cloud },
      { name: "Supabase", icon: Database },
      { name: "AWS", icon: Server },
    ]
  },
  { 
    title: "Design", 
    icon: Paintbrush,
    color: "from-pink-500/20 to-rose-500/20",
    techs: [
      { name: "Figma", icon: Paintbrush },
      { name: "Photoshop", icon: Layers },
      { name: "UI/UX", icon: Blocks },
      { name: "Responsive", icon: Globe },
    ]
  },
  { 
    title: "SEO & Analytics", 
    icon: Search,
    color: "from-primary/20 to-yellow-500/20",
    techs: [
      { name: "Technical SEO", icon: Search },
      { name: "Analytics", icon: Zap },
      { name: "Core Web Vitals", icon: Cpu },
      { name: "Schema Markup", icon: FileCode },
    ]
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const TechStackSection = () => {
  return (
    <section id="tech" className="section-padding relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/[0.03] blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-primary/[0.03] blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Chapter header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-primary/40 font-sans text-xs tracking-[0.3em] uppercase">Chapter 02</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">My Arsenal</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-4">
            Technologies I <em className="gold-gradient-text italic">Master</em>
          </h2>
          <p className="text-muted-foreground font-sans text-sm max-w-md mx-auto">
            A curated collection of tools and technologies I use to build exceptional digital products
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {techCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="gold-border-glow rounded-2xl bg-card group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 p-7">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"
                  >
                    <cat.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h3 className="font-serif text-xl text-foreground">{cat.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {cat.techs.map((tech, j) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.05 }}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg bg-accent/50 hover:bg-accent transition-colors group/tech"
                    >
                      <tech.icon className="w-3.5 h-3.5 text-primary/60 group-hover/tech:text-primary transition-colors" />
                      <span className="text-sm font-sans text-muted-foreground group-hover/tech:text-foreground transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
