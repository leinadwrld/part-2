import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0 } as const,
  whileInView: { opacity: 1 } as const,
  viewport: { once: true } as const,
  transition: { duration: 1, delay, ease: "easeOut" as const },
});

const testimonials = [
  {
    quote: "Poziom precyzji i troski jest niezrównany. Rezultaty naturalne, wyrafinowane i transformacyjne.",
    name: "Dr Elżbieta W.",
    role: "Dermatolog, Warszawa",
  },
  {
    quote: "Ich programy szkoleniowe dały mi pewność siebie i strukturę, by otworzyć własną praktykę.",
    name: "Dr Marek T.",
    role: "Lekarz Medycyny Estetycznej, Kraków",
  },
  {
    quote: "Rzadkie połączenie klinicznej doskonałości i prawdziwego partnerstwa.",
    name: "Katarzyna S.",
    role: "Trener Kosmetyczny, Gdańsk",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 lg:py-44 section-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <motion.p {...fade()} className="editorial-subheading text-gold mb-6 tracking-[0.35em]">
            Opinie
          </motion.p>
          <motion.h2 {...fade(0.15)} className="editorial-heading text-heading mb-8">
            Głosy <span className="italic text-gold">Zaufania</span>
          </motion.h2>
          <motion.div {...fade(0.3)} className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              {...fade(i * 0.15 + 0.3)}
              className="text-center"
            >
              <p className="font-serif text-lg font-light italic leading-[1.7] mb-10 text-foreground/80">
                „{t.quote}"
              </p>
              <div className="w-8 h-px bg-gold/40 mx-auto mb-6" />
              <p className="font-body text-sm font-light text-foreground">{t.name}</p>
              <p className="font-body font-extralight text-[10px] text-muted-foreground mt-1 tracking-[0.2em] uppercase">
                {t.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
