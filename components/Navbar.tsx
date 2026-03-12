import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Zabiegi", href: "/zabiegi" },
  { label: "Akademia", href: "/akademia" },
  { label: "Współpraca", href: "/wspolpraca" },
  { label: "O Nas", href: "/#about" },
  { label: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="font-serif text-xl font-light tracking-[0.15em] text-gold">
            ÉLEVE
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-body font-extralight text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-gold transition-colors duration-500"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="/kontakt"
            className="hidden lg:inline-block font-body font-extralight text-[11px] tracking-[0.2em] uppercase px-7 py-3 border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground transition-colors duration-500"
          >
            Umów Wizytę
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground/70"
            aria-label="Menu"
          >
            {isOpen ? <X size={22} strokeWidth={1} /> : <Menu size={22} strokeWidth={1} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border/50"
          >
            <div className="container mx-auto px-6 py-10 flex flex-col gap-7">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-body font-extralight text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
