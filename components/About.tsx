import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0 } as const,
  whileInView: { opacity: 1 } as const,
  viewport: { once: true } as const,
  transition: { duration: 1, delay, ease: "easeOut" as const },
});

const About = () => {
  return (
    <section id="about" className="py-32 lg:py-44 section-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p {...fade()} className="editorial-subheading text-gold mb-6 tracking-[0.35em]">
            O Nas
          </motion.p>

          <motion.h2 {...fade(0.15)} className="editorial-heading text-heading mb-10">
            Autorytet. Struktura.
            <br />
            <span className="italic text-gold">Doskonałość.</span>
          </motion.h2>

          <motion.div {...fade(0.3)} className="w-12 h-px bg-gold mx-auto mb-14" />

          <motion.p {...fade(0.4)} className="editorial-body text-base lg:text-lg mb-8 max-w-2xl mx-auto">
            Jesteśmy marką premium na styku medycyny estetycznej i edukacji profesjonalnej. Naszą misją jest dostarczanie mierzalnych rezultatów poprzez zaawansowane zabiegi — jednocześnie kształtując nowe pokolenie pewnych siebie, dobrze zorganizowanych specjalistów medycznych.
          </motion.p>

          <motion.p {...fade(0.5)} className="editorial-body text-base lg:text-lg mb-20 max-w-2xl mx-auto">
            Każdy protokół, każde szkolenie i każde partnerstwo odzwierciedla jedną zasadę: bezkompromisową jakość w połączeniu z organizacyjną klarownością.
          </motion.p>

          {/* Stats */}
          <motion.div {...fade(0.6)} className="grid grid-cols-3 gap-8 pt-12 border-t border-border max-w-xl mx-auto">
            {[
              { value: "500+", label: "Przeszkolonych" },
              { value: "12+", label: "Lat Doświadczenia" },
              { value: "98%", label: "Zadowolenia" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl lg:text-4xl font-light text-gold mb-2">
                  {stat.value}
                </p>
                <p className="font-body font-extralight text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
