import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

const Logo = ({ className = "", size = 40, showText = true }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-baseline"
      >
        <span 
          className="font-serif font-medium gold-gradient-text"
          style={{ fontSize: typeof size === 'number' ? `${size}px` : size }}
        >
          VM
        </span>
        {showText && (
          <span 
            className="font-sans text-foreground/70 uppercase tracking-[0.2em] ml-2"
            style={{ fontSize: typeof size === 'number' ? `${size * 0.4}px` : '0.4em' }}
          >
            Crafts
          </span>
        )}
      </motion.div>
    </div>
  );
};

export default Logo;
