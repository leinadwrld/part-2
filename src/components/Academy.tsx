import { motion } from "framer-motion";
import { BookOpen, Microscope, BadgeEuro, Crown } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Szkolenia Kosmetyczne",
    description: "Zaawansowane techniki kosmetyczne, wiedza produktowa i sztuka konsultacji z klientem.",
  },
  {
    icon: Microscope,
    title: "Szkolenia z Medycyny Estetycznej",
    description: "Praktyczne szkolenia kliniczne z zakresu iniekcji, laserów i medycyny estetycznej.",
  },
  {
    icon: BadgeEuro,
    title: "Programy Dofinansowane",
    description: "Subsydiowane szkolenia dla kwalifikujących się specjalistów — doskonałość bez kompromisów.",
  },
  {
    icon: Crown,
    title: "Masterclassy",
    description: "Ekskluzywne sesje prowadzone przez międzynarodowo uznanych praktyków.",
  },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0 } as const,
  whileInView: { opacity: 1 } as const,
  viewport: { once: true } as const,
  transition: { duration: 1, delay, ease: "easeOut" as const },
});

const Academy = () => {
  return (
    <section id="academy" className="py-32 lg:py-44 section-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <motion.p {...fade()} className="editorial-subheading text-gold mb-6 tracking-[0.35em]">
            Akademia
          </motion.p>
          <motion.h2 {...fade(0.15)} className="editorial-heading text-heading mb-8">
            Podnieś Swoje <span className="italic text-gold">Kompetencje</span>
          </motion.h2>
          <motion.div {...fade(0.3)} className="w-12 h-px bg-gold mx-auto mb-10" />
          <motion.p {...fade(0.4)} className="editorial-body text-base max-w-xl mx-auto">
            Platforma edukacyjna dla profesjonalistów, którzy wymagają doskonałości.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              {...fade(i * 0.1 + 0.3)}
              className="p-10 border border-border group hover:border-gold/30 transition-colors duration-500"
            >
              <program.icon size={24} strokeWidth={1} className="text-gold/60 mb-8" />
              <h3 className="font-serif text-xl lg:text-2xl font-light mb-4 group-hover:text-gold transition-colors duration-500">
                {program.title}
              </h3>
              <p className="editorial-body text-sm">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academy;
