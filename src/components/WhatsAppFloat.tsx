import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/918590166939"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center animate-pulse-gold shadow-lg">
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        </div>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-card text-foreground text-xs font-sans rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity gold-border-glow">
          Chat with me
        </span>
      </div>
    </a>
  );
};

export default WhatsAppFloat;
