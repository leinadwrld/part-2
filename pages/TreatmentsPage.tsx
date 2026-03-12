import { motion } from "framer-motion";
import { Syringe, Sparkles, Atom, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fade = (delay = 0) => ({
  initial: { opacity: 0 } as const,
  whileInView: { opacity: 1 } as const,
  viewport: { once: true } as const,
  transition: { duration: 1, delay, ease: "easeOut" as const },
});

const treatments = [
  {
    id: "botox",
    icon: Syringe,
    title: "Botox",
    subtitle: "Precyzja w każdym punkcie",
    description:
      "Iniekcje neurotoksyny botulinowej typu A wykonywane z chirurgiczną precyzją. Naturalnie wygładzają linie mimiczne, zapobiegają powstawaniu nowych zmarszczek i przywracają skórze młodzieńczy spokój — bez utraty ekspresji.",
    details: [
      "Linie lwi, kurze łapki, zmarszczki na czole",
      "Bruksizm i konturowanie żuchwy",
      "Nadmierna potliwość (hiperhidroza)",
      "Lifting brwi techniką neuromodulacji",
    ],
  },
  {
    id: "fillers",
    icon: Sparkles,
    title: "Wypełniacze",
    subtitle: "Harmonia rysów twarzy",
    description:
      "Premiowe formuły kwasu hialuronowego stosowane do odbudowy objętości, modelowania konturów i przywracania naturalnej harmonii. Każdy zabieg projektowany indywidualnie na podstawie anatomii pacjenta.",
    details: [
      "Modelowanie ust i konturowanie",
      "Wolumetria policzków i skroni",
      "Korekta doliny łez",
      "Harmonizacja profilu — nos, broda, żuchwa",
    ],
  },
  {
    id: "biostimulators",
    icon: Atom,
    title: "Biostymulatory",
    subtitle: "Regeneracja od wewnątrz",
    description:
      "Zabiegi nowej generacji oparte na stymulacji naturalnej produkcji kolagenu. Działają głęboko, poprawiając jakość skóry, jędrność i elastyczność na poziomie komórkowym.",
    details: [
      "Stymulatory kolagenowe (PLLA, CaHA)",
      "Polinukleotydy i polideoksyrybonukleotydy",
      "Osocze bogatopłytkowe (PRP)",
      "Mezoterapia igłowa — koktajle rewitalizujące",
    ],
  },
  {
    id: "advanced",
    icon: Layers,
    title: "Zabiegi Zaawansowane",
    subtitle: "Kompleksowe protokoły transformacyjne",
    description:
      "Wielowarstwowe podejście łączące najnowocześniejsze technologie z wiedzą kliniczną. Protokoły projektowane indywidualnie dla osiągnięcia głębokich, trwałych rezultatów.",
    details: [
      "Nici liftingujące PDO / PLLA",
      "Terapia laserowa i IPL",
      "Radiofrekwencja mikroigłowa",
      "Peelingi medyczne — średnie i głębokie",
    ],
  },
];

const beforeAfter = [
  { area: "Modelowanie Ust", label: "Subtelne powiększenie i konturowanie" },
  { area: "Wolumetria Policzków", label: "Odbudowa utraconej objętości" },
  { area: "Linie Mimiczne", label: "Wygładzenie z zachowaniem naturalności" },
  { area: "Rewitalizacja Skóry", label: "Poprawa tekstury i blasku" },
];

const faqs = [
  {
    q: "Czy zabiegi są bolesne?",
    a: "Stosujemy zaawansowane techniki znieczulenia miejscowego. Większość pacjentów opisuje jedynie lekki dyskomfort. Komfort jest dla nas priorytetem.",
  },
  {
    q: "Jak długo utrzymują się efekty?",
    a: "Zależy od zabiegu: toksyna botulinowa 3–6 miesięcy, wypełniacze 8–18 miesięcy, biostymulatory do 2 lat. Dokładny czas omówimy podczas konsultacji.",
  },
  {
    q: "Czy potrzebuję konsultacji przed zabiegiem?",
    a: "Tak. Każdy zabieg poprzedza indywidualna konsultacja, podczas której oceniamy anatomię, omawiamy oczekiwania i projektujemy plan leczenia.",
  },
  {
    q: "Jakie są przeciwwskazania?",
    a: "Ciąża, karmienie piersią, aktywne infekcje skórne, choroby autoimmunologiczne. Pełną listę omawiamy podczas konsultacji.",
  },
  {
    q: "Jak przygotować się do zabiegu?",
    a: "Zalecamy unikanie alkoholu, aspiryny i suplementów rozrzedzających krew 48h przed zabiegiem. Szczegółowe instrukcje otrzymasz po umówieniu wizyty.",
  },
];

const TreatmentsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-20">
        <div className="py-32 lg:py-48 section-dark">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.p {...fade()} className="editorial-subheading text-gold mb-8 tracking-[0.35em]">
              Nasze Zabiegi
            </motion.p>
            <motion.h1 {...fade(0.15)} className="editorial-heading text-display max-w-4xl mx-auto mb-10">
              Estetyczna{" "}
              <span className="italic text-gold">Precyzja</span>
            </motion.h1>
            <motion.div {...fade(0.3)} className="w-16 h-px bg-gold mx-auto mb-12" />
            <motion.p {...fade(0.4)} className="editorial-body text-base max-w-xl mx-auto">
              Każdy zabieg wykonujemy z kliniczną dokładnością i artystyczną intencją.
              Naturalne rezultaty, które mówią same za siebie.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Individual Treatment Sections */}
      {treatments.map((t, idx) => {
        const isBeige = idx % 2 === 0;
        return (
          <section
            key={t.id}
            id={t.id}
            className={isBeige ? "py-32 lg:py-44 section-beige" : "py-32 lg:py-44 section-dark"}
          >
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                <motion.div {...fade()}>
                  <t.icon
                    size={28}
                    strokeWidth={1}
                    className={isBeige ? "mb-8 text-accent" : "mb-8 text-gold"}
                  />
                  <h2
                    className={`editorial-heading text-heading mb-4 ${
                      isBeige ? "text-secondary-foreground" : "text-foreground"
                    }`}
                  >
                    {t.title}
                  </h2>
                  <p
                    className={`font-serif text-lg italic mb-8 ${
                      isBeige ? "text-accent" : "text-gold"
                    }`}
                  >
                    {t.subtitle}
                  </p>
                  <p
                    className="font-body font-extralight text-base leading-[1.9] max-w-md"
                    style={{ color: isBeige ? "hsl(0 0% 40%)" : undefined }}
                  >
                    {t.description}
                  </p>
                </motion.div>

                <motion.div {...fade(0.2)}>
                  <p
                    className={`editorial-subheading mb-8 tracking-[0.3em] ${
                      isBeige ? "text-accent" : "text-gold"
                    }`}
                  >
                    Zakres Zabiegów
                  </p>
                  <ul className="space-y-5">
                    {t.details.map((d) => (
                      <li
                        key={d}
                        className={`font-body font-extralight text-sm leading-[1.8] pl-5 border-l ${
                          isBeige
                            ? "border-accent/30 text-secondary-foreground/70"
                            : "border-gold/30 text-muted-foreground"
                        }`}
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Before / After Gallery */}
      <section className="py-32 lg:py-44 section-beige">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <motion.p {...fade()} className="editorial-subheading mb-6 tracking-[0.35em] text-accent">
              Rezultaty
            </motion.p>
            <motion.h2 {...fade(0.15)} className="editorial-heading text-heading text-secondary-foreground mb-8">
              Przed <span className="italic text-accent">&amp; Po</span>
            </motion.h2>
            <motion.div {...fade(0.3)} className="w-12 h-px mx-auto mb-10 bg-accent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px max-w-5xl mx-auto" style={{ backgroundColor: "hsl(36 12% 72%)" }}>
            {beforeAfter.map((item, i) => (
              <motion.div
                key={item.area}
                {...fade(i * 0.1 + 0.3)}
                className="bg-beige-surface p-10 lg:p-12 text-center"
              >
                <div
                  className="w-full aspect-[3/4] mb-8 flex items-center justify-center"
                  style={{ backgroundColor: "hsl(36 18% 87%)" }}
                >
                  <p className="font-body font-extralight text-[10px] tracking-[0.2em] uppercase text-secondary-foreground/30">
                    Zdjęcie wkrótce
                  </p>
                </div>
                <p className="font-serif text-lg font-light text-secondary-foreground mb-2">{item.area}</p>
                <p className="font-body font-extralight text-xs text-secondary-foreground/50">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 lg:py-44 section-dark">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20">
              <motion.p {...fade()} className="editorial-subheading text-gold mb-6 tracking-[0.35em]">
                FAQ
              </motion.p>
              <motion.h2 {...fade(0.15)} className="editorial-heading text-heading mb-8">
                Najczęściej Zadawane{" "}
                <span className="italic text-gold">Pytania</span>
              </motion.h2>
              <motion.div {...fade(0.3)} className="w-12 h-px bg-gold mx-auto" />
            </div>

            <motion.div {...fade(0.4)}>
              <Accordion type="single" collapsible className="space-y-0">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                    <AccordionTrigger className="font-serif text-lg font-light text-foreground hover:text-gold hover:no-underline py-6">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-body font-extralight text-sm leading-[1.9] text-muted-foreground pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-32 lg:py-44 section-beige">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.h2 {...fade()} className="editorial-heading text-heading text-secondary-foreground mb-8 max-w-2xl mx-auto">
            Gotowa na <span className="italic text-accent">Przemianę</span>?
          </motion.h2>
          <motion.p {...fade(0.15)} className="font-body font-extralight text-base leading-[1.8] max-w-md mx-auto mb-14" style={{ color: "hsl(0 0% 40%)" }}>
            Umów indywidualną konsultację i pozwól nam zaprojektować Twój plan zabiegowy.
          </motion.p>
          <motion.a
            {...fade(0.3)}
            href="/kontakt"
            className="inline-block editorial-subheading px-14 py-5 border border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-beige-surface transition-colors duration-500"
          >
            Umów Konsultację
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TreatmentsPage;
