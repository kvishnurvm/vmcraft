import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Story", href: "#about" },
  { label: "Tech", href: "#tech" },
  { label: "Services", href: "#services" },
  { label: "My Works", href: "#works" },
];

const ctaLink = { label: "Let's Connect", href: "#contact" };

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/20" : ""
        }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <Logo size={28} showText={true} />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="text-muted-foreground text-xs font-sans tracking-wider uppercase hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <motion.a
            href={ctaLink.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + navLinks.length * 0.05 }}
            className="px-5 py-2 border border-primary/40 text-primary text-xs font-sans tracking-wider uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            {ctaLink.label}
          </motion.a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground text-sm font-sans tracking-wider uppercase hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={ctaLink.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => setOpen(false)}
                className="mt-2 text-center px-5 py-3 bg-primary text-primary-foreground text-sm font-sans tracking-wider uppercase rounded-sm"
              >
                {ctaLink.label}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
