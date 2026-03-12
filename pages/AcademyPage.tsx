import { motion } from "framer-motion";
import { BookOpen, Microscope, BadgeEuro, Crown, Award, ShieldCheck, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = (delay = 0) => ({
  initial: { opacity: 0 } as const,
  whileInView: { opacity: 1 } as const,
  viewport: { once: true } as const,
  transition: { duration: 1, delay, ease: "easeOut" as const },
});

const categories = [
  {
    icon: BookOpen,
    title: "Szkolenia Kosmetyczne",
    description:
      "Zaawansowane techniki kosmetyczne, wiedza produktowa i sztuka profesjonalnej konsultacji z klientem. Programy dla kosmetologów na każdym poziomie zaawansowania.",
  },
  {
    icon: Microscope,
    title: "Szkolenia z Medycyny Estetycznej",
    description:
      "Praktyczne szkolenia kliniczne z zakresu iniekcji, laserów i procedur medycyny estetycznej. Prowadzone przez doświadczonych lekarzy praktyków.",
  },
  {
    icon: BadgeEuro,
    title: "Programy Dofinansowane",
    description:
      "Subsydiowane szkolenia dla kwalifikujących się specjalistów. Doskonałość merytoryczna bez kompromisów finansowych — dostępna dla szerokiego grona profesjonalistów.",
  },
  {
    icon: Crown,
    title: "Masterclassy",
    description:
      "Ekskluzywne sesje prowadzone przez międzynarodowo uznanych praktyków. Limitowana liczba miejsc, najwyższy poziom transferu wiedzy.",
  },
];

const modelSteps = [
  {
    step: "01",
    title: "Analiza Potrzeb",
    description: "Indywidualna ocena poziomu wiedzy i doświadczenia uczestnika. Dopasowanie ścieżki szkoleniowej.",
  },
  {
    step: "02",
    title: "Program Szkoleniowy",
    description: "Strukturalny program łączący teorię z intensywną praktyką kliniczną pod nadzorem eksperta.",
  },
  {
    step: "03",
    title: "Praktyka Kliniczna",
    description: "Hands-on training na modelach z pełnym wsparciem mentorskim i natychmiastowym feedbackiem.",
  },
  {
    step: "04",
    title: "Certyfikacja & Wsparcie",
    description: "Formalna certyfikacja potwierdzająca kompetencje oraz długoterminowy program mentoringowy.",
  },
];

const certifications = [
  {
    icon: Award,
    title: "Certyfikat Ukończenia",
    description: "Każdy uczestnik otrzymuje formalny certyfikat potwierdzający ukończenie programu szkoleniowego.",
  },
  {
    icon: ShieldCheck,
    title: "Akredytacja",
    description: "Nasze programy spełniają wymogi formalne i są zgodne z obowiązującymi standardami branżowymi.",
  },
  {
    icon: GraduationCap,
    title: "Rozwój Ciągły",
    description: "Dostęp do programu mentorskiego i społeczności absolwentów wspierającej dalszy rozwój zawodowy.",
  },
];

const AcademyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-20">
        <div className="py-32 lg:py-48 section-dark">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.p {...fade()} className="editorial-subheading text-gold mb-8 tracking-[0.35em]">
              Akademia
            </motion.p>
            <motion.h1 {...fade(0.15)} className="editorial-heading text-display max-w-4xl mx-auto mb-10">
              Profesjonalna{" "}
              <span className="italic text-gold">Edukacja</span>
            </motion.h1>
            <motion.div {...fade(0.3)} className="w-16 h-px bg-gold mx-auto mb-12" />
            <motion.p {...fade(0.4)} className="editorial-body text-base max-w-xl mx-auto">
              Strukturalne programy szkoleniowe dla profesjonalistów,
              którzy wymagają doskonałości i szukają sprawdzonej ścieżki rozwoju.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section className="py-32 lg:py-44 section-beige">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <motion.p {...fade()} className="editorial-subheading mb-6 tracking-[0.35em] text-accent">
              Programy
            </motion.p>
            <motion.h2 {...fade(0.15)} className="editorial-heading text-heading text-secondary-foreground mb-8">
              Kategorie <span className="italic text-accent">Szkoleń</span>
            </motion.h2>
            <motion.div {...fade(0.3)} className="w-12 h-px mx-auto mb-10 bg-accent" />
          </div>

          <div className="grid md:grid-cols-2 gap-px max-w-4xl mx-auto" style={{ backgroundColor: "hsl(36 12% 72%)" }}>
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                {...fade(i * 0.1 + 0.3)}
                className="p-10 lg:p-14 bg-beige-surface"
              >
                <cat.icon size={24} strokeWidth={1} className="text-accent/60 mb-8" />
                <h3 className="font-serif text-xl lg:text-2xl font-light text-secondary-foreground mb-4">
                  {cat.title}
                </h3>
                <p className="font-body font-extralight text-sm leading-[1.9]" style={{ color: "hsl(0 0% 45%)" }}>
                  {cat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Training Model */}
      <section className="py-32 lg:py-44 section-dark">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <motion.p {...fade()} className="editorial-subheading text-gold mb-6 tracking-[0.35em]">
              Metodologia
            </motion.p>
            <motion.h2 {...fade(0.15)} className="editorial-heading text-heading mb-8">
              Strukturalny Model{" "}
              <span className="italic text-gold">Szkoleniowy</span>
            </motion.h2>
            <motion.div {...fade(0.3)} className="w-12 h-px bg-gold mx-auto mb-10" />
            <motion.p {...fade(0.4)} className="editorial-body text-base max-w-xl mx-auto">
              Każdy program opiera się na sprawdzonym, czterostopniowym modelu gwarantującym
              transfer wiedzy i realne kompetencje kliniczne.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-4 gap-px max-w-5xl mx-auto" style={{ backgroundColor: "hsl(40 6% 14%)" }}>
            {modelSteps.map((s, i) => (
              <motion.div
                key={s.step}
                {...fade(i * 0.1 + 0.3)}
                className="p-10 bg-background"
              >
                <p className="font-serif text-3xl font-light text-gold/30 mb-6">{s.step}</p>
                <h3 className="font-serif text-lg font-light text-foreground mb-4">{s.title}</h3>
                <p className="font-body font-extralight text-sm leading-[1.8] text-muted-foreground">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funded Training Info */}
      <section className="py-32 lg:py-44 section-beige">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fade()} className="text-center mb-16">
              <p className="editorial-subheading mb-6 tracking-[0.35em] text-accent">Dofinansowanie</p>
              <h2 className="editorial-heading text-heading text-secondary-foreground mb-8">
                Szkolenia <span className="italic text-accent">Dofinansowane</span>
              </h2>
              <div className="w-12 h-px mx-auto mb-10 bg-accent" />
            </motion.div>

            <motion.div {...fade(0.2)} className="space-y-8">
              <p className="font-body font-extralight text-base leading-[1.9] text-center" style={{ color: "hsl(0 0% 40%)" }}>
                Współpracujemy z instytucjami finansującymi rozwój zawodowy, oferując możliwość
                uczestnictwa w naszych programach szkoleniowych przy znacznie obniżonych kosztach.
                Pomagamy w kompletowaniu dokumentacji i koordynujemy cały proces aplikacyjny.
              </p>
              <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: "hsl(36 12% 72%)" }}>
                {[
                  { label: "Pomoc w Aplikowaniu", desc: "Kompleksowe wsparcie formalne" },
                  { label: "Koordynacja Procesu", desc: "Od wniosku do certyfikacji" },
                  { label: "Pełna Transparentność", desc: "Jasne warunki i rozliczenia" },
                ].map((item, i) => (
                  <motion.div key={item.label} {...fade(i * 0.1 + 0.3)} className="p-8 bg-beige-surface text-center">
                    <p className="font-serif text-lg font-light text-secondary-foreground mb-2">{item.label}</p>
                    <p className="font-body font-extralight text-xs" style={{ color: "hsl(0 0% 50%)" }}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-32 lg:py-44 section-dark">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <motion.p {...fade()} className="editorial-subheading text-gold mb-6 tracking-[0.35em]">
              Certyfikacja
            </motion.p>
            <motion.h2 {...fade(0.15)} className="editorial-heading text-heading mb-8">
              Potwierdzenie{" "}
              <span className="italic text-gold">Kompetencji</span>
            </motion.h2>
            <motion.div {...fade(0.3)} className="w-12 h-px bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-px max-w-4xl mx-auto" style={{ backgroundColor: "hsl(40 6% 14%)" }}>
            {certifications.map((c, i) => (
              <motion.div key={c.title} {...fade(i * 0.1 + 0.3)} className="p-10 bg-background text-center">
                <c.icon size={24} strokeWidth={1} className="text-gold/60 mx-auto mb-8" />
                <h3 className="font-serif text-lg font-light text-foreground mb-4">{c.title}</h3>
                <p className="font-body font-extralight text-sm leading-[1.8] text-muted-foreground">
                  {c.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-44 section-beige">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.h2 {...fade()} className="editorial-heading text-heading text-secondary-foreground mb-8 max-w-2xl mx-auto">
            Rozpocznij Swoją{" "}
            <span className="italic text-accent">Ścieżkę</span>
          </motion.h2>
          <motion.p {...fade(0.15)} className="font-body font-extralight text-base leading-[1.8] max-w-md mx-auto mb-14" style={{ color: "hsl(0 0% 40%)" }}>
            Aplikuj na wybrany program szkoleniowy lub skontaktuj się, aby poznać szczegóły.
          </motion.p>
          <motion.div {...fade(0.3)} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontakt"
              className="inline-block editorial-subheading px-14 py-5 border border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-beige-surface transition-colors duration-500"
            >
              Aplikuj Teraz
            </a>
            <a
              href="/kontakt"
              className="inline-block editorial-subheading px-14 py-5 text-secondary-foreground/50 hover:text-secondary-foreground transition-colors duration-500"
            >
              Zapytaj o Szczegóły
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AcademyPage;
