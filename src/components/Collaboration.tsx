import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0 } as const,
  whileInView: { opacity: 1 } as const,
  viewport: { once: true } as const,
  transition: { duration: 1, delay, ease: "easeOut" as const },
});

const supports = [
  {
    title: "Budowa Praktyki",
    description: "Wsparcie w zakładaniu lub skalowaniu praktyki estetycznej — od compliance po branding.",
  },
  {
    title: "Strategia Biznesowa",
    description: "Doradztwo oparte na danych w zakresie pozyskiwania pacjentów i efektywności operacyjnej.",
  },
  {
    title: "Model Partnerski",
    description: "Elastyczne ramy współpracy dla trenerów i lekarzy rozwijających się pod zaufaną marką.",
  },
];

const Collaboration = () => {
  return (
    <section id="collaboration" className="py-32 lg:py-44 section-beige">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.p {...fade()} className="editorial-subheading mb-6 tracking-[0.35em]" style={{ color: "hsl(350 18% 58%)" }}>
            Współpraca
          </motion.p>
          <motion.h2 {...fade(0.15)} className="editorial-heading text-heading text-secondary-foreground mb-8">
            Dla Lekarzy <span className="italic" style={{ color: "hsl(350 18% 58%)" }}>&amp; Trenerów</span>
          </motion.h2>
          <motion.div {...fade(0.3)} className="w-12 h-px mx-auto mb-10" style={{ backgroundColor: "hsl(350 18% 58%)" }} />
          <motion.p {...fade(0.4)} className="font-body font-extralight text-base leading-[1.8] max-w-2xl mx-auto" style={{ color: "hsl(0 0% 40%)" }}>
            Kompleksowe wsparcie organizacyjne dla profesjonalistów medycznych, którzy chcą budować, rozwijać lub restrukturyzować swoją praktykę. Nasz model opiera się na wzajemnym rozwoju.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-px max-w-4xl mx-auto" style={{ backgroundColor: "hsl(36 12% 72%)" }}>
          {supports.map((item, i) => (
            <motion.div
              key={item.title}
              {...fade(i * 0.12 + 0.3)}
              className="p-10 bg-beige-surface text-center"
            >
              <p className="font-serif text-xl font-light text-secondary-foreground mb-4">
                {item.title}
              </p>
              <p className="font-body font-extralight text-sm leading-[1.8]" style={{ color: "hsl(0 0% 45%)" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
