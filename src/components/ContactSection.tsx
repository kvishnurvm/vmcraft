import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MessageSquare, MapPin, Globe, Phone, Send, ArrowUpRight, Heart } from "lucide-react";

const services = [
  "Static Website",
  "Dynamic Website",
  "E-Commerce Website",
  "Landing Page",
  "SEO Optimization",
  "Website Redesign",
  "Multilingual Website",
  "Other",
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", query: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Vishnumohan! 👋\n\n` +
      `*Name:* ${form.name.trim()}\n` +
      `*Phone:* ${form.phone.trim()}\n` +
      `*Service:* ${form.service}\n` +
      `*Query:* ${form.query.trim()}`
    );
    window.open(`https://wa.me/918590166939?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Chapter header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-primary/40 font-sans text-xs tracking-[0.3em] uppercase">Final Chapter</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-6">Get In Touch</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 leading-tight">
            Let's Build Something{" "}
            <em className="gold-gradient-text italic">Meaningful</em>
          </h2>
          <motion.div
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-muted-foreground font-sans text-base md:text-lg max-w-xl mx-auto">
            Prefer a WhatsApp message first? Fill the form below and it goes straight to my chat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Location Card */}
            <div className="p-6 rounded-sm border border-border bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-sans text-sm tracking-wider uppercase text-foreground mb-2">Where I Am</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Currently based in <span className="text-foreground font-medium">Bangalore, Karnataka</span>
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Hometown: <span className="text-foreground font-medium">Thrissur, Kerala</span>
                  </p>
                  <p className="text-muted-foreground/60 text-xs mt-2">Available for remote & on-site projects across India</p>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="p-6 rounded-sm border border-border bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-sans text-sm tracking-wider uppercase text-foreground mb-2">Multilingual Websites</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    I build websites in multiple languages — <span className="text-foreground">English</span>, <span className="text-foreground">Malayalam</span>, <span className="text-foreground">Arabic (RTL)</span> — all in a single site.
                  </p>
                  <div className="flex gap-2">
                    {["EN", "ML", "AR"].map((l) => (
                      <span key={l} className="px-3 py-1 text-xs font-sans tracking-wider bg-primary/10 text-primary rounded-full">{l}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Preference */}
            <div className="p-6 rounded-sm border border-border bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-sans text-sm tracking-wider uppercase text-foreground mb-2">Preferred Contact</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Please <span className="text-primary font-medium">WhatsApp first</span> before calling — 
                    it helps me respond faster and keep track of your project details.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <a
                      href="https://wa.me/918590166939"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> +91 85901 66939
                    </a>
                    <a
                      href="mailto:vishnuambadathrvm@gmail.com"
                      className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5" /> vishnuambadathrvm@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - WhatsApp Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-sm border border-border bg-card/60 backdrop-blur-sm space-y-5"
            >
              <h3 className="font-serif text-xl mb-1">
                Send a <span className="gold-gradient-text">WhatsApp</span> Message
              </h3>
              <p className="text-muted-foreground text-xs mb-4">Fill in the details and hit send — it opens your WhatsApp directly.</p>

              {/* Name */}
              <div>
                <label className="text-xs font-sans tracking-wider uppercase text-muted-foreground mb-1.5 block">Your Name</label>
                <input
                  name="name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm font-sans text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-xs font-sans tracking-wider uppercase text-muted-foreground mb-1.5 block">Contact Number</label>
                <input
                  name="phone"
                  required
                  maxLength={20}
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm font-sans text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              {/* Service */}
              <div>
                <label className="text-xs font-sans tracking-wider uppercase text-muted-foreground mb-1.5 block">Select Service</label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm font-sans text-foreground focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                >
                  <option value="" disabled>Choose a service…</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Query */}
              <div>
                <label className="text-xs font-sans tracking-wider uppercase text-muted-foreground mb-1.5 block">Your Query</label>
                <textarea
                  name="query"
                  required
                  maxLength={1000}
                  rows={4}
                  value={form.query}
                  onChange={handleChange}
                  placeholder="Tell me about your project…"
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm font-sans text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
                Send via WhatsApp
              </motion.button>

              <p className="text-muted-foreground/50 text-[10px] text-center">
                This opens WhatsApp with your message pre-filled. No data is stored.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="mt-32 border-t border-border relative">
        <div className="container mx-auto px-6 max-w-6xl py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h4 className="font-serif text-xl gold-gradient-text mb-3">Vishnumohan</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Freelance web developer crafting stunning static &amp; dynamic websites from Bangalore, India.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-sans text-xs tracking-[0.2em] uppercase text-foreground mb-4">Navigate</h5>
              <ul className="space-y-2">
                {["About", "Tech Stack", "Services", "Works", "Contact"].map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-muted-foreground text-xs hover:text-primary transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h5 className="font-sans text-xs tracking-[0.2em] uppercase text-foreground mb-4">Services</h5>
              <ul className="space-y-2">
                {["Static Websites", "Dynamic Platforms", "E-Commerce", "Multilingual Sites", "SEO Optimization"].map((s) => (
                  <li key={s} className="text-muted-foreground text-xs">{s}</li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="font-sans text-xs tracking-[0.2em] uppercase text-foreground mb-4">Reach Out</h5>
              <ul className="space-y-3">
                <li>
                  <a href="https://wa.me/918590166939" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-xs hover:text-primary transition-colors inline-flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" /> +91 85901 66939
                  </a>
                </li>
                <li>
                  <a href="mailto:vishnuambadathrvm@gmail.com" className="text-muted-foreground text-xs hover:text-primary transition-colors inline-flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" /> vishnuambadathrvm@gmail.com
                  </a>
                </li>
                <li className="text-muted-foreground text-xs inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Bangalore &amp; Thrissur, India
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground/60 text-xs font-sans">
              © {new Date().getFullYear()} Vishnumohan. All Rights Reserved.
            </p>
            <p className="text-muted-foreground/40 text-xs font-sans inline-flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-primary" /> by Vishnumohan
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground/60 hover:text-primary transition-colors text-xs inline-flex items-center gap-1">
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
              <a href="#" className="text-muted-foreground/60 hover:text-primary transition-colors text-xs inline-flex items-center gap-1">
                GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
