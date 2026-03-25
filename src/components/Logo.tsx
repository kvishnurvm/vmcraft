import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

const Logo = ({ className = "", size = 40, showText = false }: LogoProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        {/* Continuous Line Monogram "VM" - Variant 2 Fluid Style */}
        <motion.path
          d="M20 30 
             C 20 10, 35 10, 40 30 
             L 50 70 
             L 60 30 
             C 65 10, 80 10, 80 30 
             L 80 80 
             C 80 90, 70 95, 60 85 
             L 40 40"
          stroke="url(#gold-gradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            initial: { pathLength: 0, opacity: 0 },
            animate: { 
              pathLength: 1, 
              opacity: 1, 
              transition: { duration: 2.5, ease: "easeInOut" } 
            }
          }}
        />
        
        {/* Decorative flourish line */}
        <motion.path
          d="M30 40 C 30 25, 40 25, 40 40 L 40 60 C 40 70, 50 70, 50 60 L 50 40 C 50 25, 60 25, 60 40 L 60 70"
          stroke="url(#gold-gradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.3"
          variants={{
            initial: { pathLength: 0, opacity: 0 },
            animate: { 
              pathLength: 1, 
              opacity: 0.3, 
              transition: { duration: 1.5, delay: 0.8, ease: "easeInOut" } 
            }
          }}
        />

        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" />
            <stop offset="50%" stopColor="#F1D08A" />
            <stop offset="100%" stopColor="#8A6E3D" />
          </linearGradient>
        </defs>
      </motion.svg>
      
      {showText && (
        <span className="font-serif text-2xl tracking-tight">
          <span className="gold-gradient-text uppercase">VM</span>
          <span className="text-foreground/90 ml-0.5">Crafts</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
