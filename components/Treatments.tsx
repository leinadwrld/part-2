import { motion } from "framer-motion";
import { Syringe, Sparkles, Atom, Layers } from "lucide-react";

const treatments = [
  {
    icon: Syringe,
    title: "Botox",
    description: "Precyzyjne iniekcje neuromodulatorem w celu naturalnego wygładzenia ekspresji i profilaktyki zmarszczek.",
  },
  {
    icon: Sparkles,
    title: "Wypełniacze",
    description: "Premiowe formuły kwasu hialuronowego do wolumetrii, konturowania i harmonizacji rysów twarzy.",
  },
  {
    icon: Atom,
    title: "Biostymulatory",
    description: "Zabiegi nowej generacji stymulujące produkcję kolagenu dla głębokiej regeneracji skóry.",
  },
  {
    icon: Layers,
    title: "Zabiegi Zaawansowane",
    description: "Kompleksowe protokoły łączące najnowsze technologie w celu transformacyjnych rezultatów.",
  },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0 } as const,
  whileInView: { opacity: 1 } as const,
  viewport: { once: true } as const,
  transition: { duration: 1, delay, ease: "easeOut" as const },
});

const Treatments = () => {
  return (
    <section id="treatments" className="py-32 lg:py-44 section-beige">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <motion.p {...fade()} className="editorial-subheading mb-6 tracking-[0.35em]" style={{ color: "hsl(350 18% 58%)" }}>
            Nasze Zabiegi
          </motion.p>
          <motion.h2 {...fade(0.15)} className="editorial-heading text-heading text-secondary-foreground mb-8">
            Estetyczna <span className="italic" style={{ color: "hsl(350 18% 58%)" }}>Precyzja</span>
          </motion.h2>
          <motion.div {...fade(0.3)} className="w-12 h-px mx-auto mb-10" style={{ backgroundColor: "hsl(350 18% 58%)" }} />
          <motion.p {...fade(0.4)} className="font-body font-extralight text-base max-w-xl mx-auto leading-[1.8]" style={{ color: "hsl(0 0% 40%)" }}>
            Każdy zabieg wykonywany jest z kliniczną precyzją i artystyczną intencją.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "hsl(36 12% 72%)" }}>
          {treatments.map((treatment, i) => (
            <motion.div
              key={treatment.title}
              {...fade(i * 0.1 + 0.3)}
              className="p-10 lg:p-12 bg-beige-surface group"
            >
              <treatment.icon
                size={24}
                strokeWidth={1}
                className="mb-8 transition-colors duration-500"
                style={{ color: "hsl(0 0% 35%)" }}
              />
              <h3 className="font-serif text-2xl font-light text-secondary-foreground mb-4">
                {treatment.title}
              </h3>
              <p className="font-body font-extralight text-sm leading-[1.8]" style={{ color: "hsl(0 0% 45%)" }}>
                {treatment.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
