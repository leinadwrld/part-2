import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.2, delay, ease: "easeOut" as const },
});

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center py-32">
        <motion.div {...fade(0.3)} className="w-16 h-px bg-gold mx-auto mb-16" />

        <motion.h1
          {...fade(0.6)}
          className="editorial-heading text-display text-foreground mb-10 max-w-4xl mx-auto"
        >
          Zabiegi Estetyczne
          <br />
          <span className="italic text-gold">&amp; Edukacja Medyczna</span>
        </motion.h1>

        <motion.p
          {...fade(1.0)}
          className="font-body font-extralight text-lg md:text-xl text-muted-foreground max-w-md mx-auto mb-20 tracking-wide"
        >
          Tam, gdzie ekspertyza spotyka strukturę.
        </motion.p>

        <motion.div
          {...fade(1.4)}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="#treatments"
            className="editorial-subheading px-14 py-5 bg-gold text-primary-foreground hover:bg-gold-light transition-colors duration-500"
          >
            Poznaj Zabiegi
          </a>
          <a
            href="#academy"
            className="editorial-subheading px-14 py-5 border border-foreground/20 text-foreground hover:border-gold hover:text-gold transition-colors duration-500"
          >
            Poznaj Akademię
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
