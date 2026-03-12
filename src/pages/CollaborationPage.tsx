import { useState } from "react";
import { motion } from "framer-motion";
import { ClipboardList, Users, FileCheck, Building2, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = (delay = 0) => ({
  initial: { opacity: 0 } as const,
  whileInView: { opacity: 1 } as const,
  viewport: { once: true } as const,
  transition: { duration: 1, delay, ease: "easeOut" as const },
});

const supports = [
  {
    icon: ClipboardList,
    title: "Obsługa Administracyjna",
    description:
      "Przejmujemy pełną obsługę formalną — od dokumentacji przez rozliczenia po raportowanie. Możesz skupić się na merytoryce.",
  },
  {
    icon: Users,
    title: "Zarządzanie Uczestnikami",
    description:
      "Rekrutacja, komunikacja z uczestnikami, listy obecności i ewaluacje — kompleksowo i profesjonalnie.",
  },
  {
    icon: Building2,
    title: "Koordynacja Projektów",
    description:
      "Planowanie harmonogramów, rezerwacja sal, organizacja logistyki szkoleniowej i nadzór nad przebiegiem projektu.",
  },
  {
    icon: FileCheck,
    title: "Strukturalny Model Szkoleniowy",
    description:
      "Sprawdzone ramy organizacyjne, które gwarantują powtarzalną jakość i zgodność z wymogami formalnymi.",
  },
  {
    icon: ShieldCheck,
    title: "Zgodność Formalna",
    description:
      "Zapewniamy pełną compliance z wymaganiami instytucji finansujących, regulacjami branżowymi i standardami jakości.",
  },
];

interface CollabFormData {
  name: string;
  specialization: string;
  trainingType: string;
  city: string;
  phone: string;
  description: string;
}

const emptyForm: CollabFormData = {
  name: "",
  specialization: "",
  trainingType: "",
  city: "",
  phone: "",
  description: "",
};

const CollaborationPage = () => {
  const [form, setForm] = useState<CollabFormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.specialization.trim() || !form.phone.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(emptyForm);
    }, 3000);
  };

  const inputStyle =
    "w-full bg-transparent border-b border-border py-4 font-body font-extralight text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/60 transition-colors duration-500";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-20">
        <div className="py-32 lg:py-48 section-dark">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.p {...fade()} className="editorial-subheading text-gold mb-8 tracking-[0.35em]">
              Współpraca
            </motion.p>
            <motion.h1 {...fade(0.15)} className="editorial-heading text-display max-w-5xl mx-auto mb-10">
              Wsparcie Organizacyjne dla{" "}
              <span className="italic text-gold">Trenerów Medycznych</span>
            </motion.h1>
            <motion.div {...fade(0.3)} className="w-16 h-px bg-gold mx-auto mb-12" />
            <motion.p {...fade(0.4)} className="editorial-body text-base max-w-xl mx-auto">
              Nie jesteśmy agencją marketingową. Jesteśmy partnerem operacyjnym —
              zapewniamy strukturę, stabilność i profesjonalną obsługę, abyś mógł skupić się na tym, co robisz najlepiej.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-32 lg:py-44 section-beige">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <motion.p {...fade()} className="editorial-subheading mb-6 tracking-[0.35em] text-accent">
              Zakres Wsparcia
            </motion.p>
            <motion.h2 {...fade(0.15)} className="editorial-heading text-heading text-secondary-foreground mb-8">
              Co <span className="italic text-accent">Zapewniamy</span>
            </motion.h2>
            <motion.div {...fade(0.3)} className="w-12 h-px mx-auto mb-10 bg-accent" />
          </div>

          <div className="max-w-4xl mx-auto space-y-0">
            {supports.map((s, i) => (
              <motion.div
                key={s.title}
                {...fade(i * 0.08 + 0.2)}
                className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-12 border-b"
                style={{ borderColor: "hsl(36 12% 78%)" }}
              >
                <div className="flex items-start gap-4">
                  <s.icon size={20} strokeWidth={1} className="text-accent/60 mt-1 shrink-0" />
                  <h3 className="font-serif text-lg font-light text-secondary-foreground">{s.title}</h3>
                </div>
                <p className="font-body font-extralight text-sm leading-[1.9]" style={{ color: "hsl(0 0% 42%)" }}>
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-32 lg:py-44 section-dark">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p {...fade()} className="editorial-subheading text-gold mb-8 tracking-[0.35em]">
              Nasz Model
            </motion.p>
            <motion.h2 {...fade(0.15)} className="editorial-heading text-heading mb-10">
              Partner, nie <span className="italic text-gold">Agencja</span>
            </motion.h2>
            <motion.div {...fade(0.3)} className="w-12 h-px bg-gold mx-auto mb-12" />
            <motion.p {...fade(0.4)} className="font-body font-extralight text-base leading-[1.9] text-muted-foreground max-w-2xl mx-auto mb-8">
              Działamy w modelu partnerskim opartym na wzajemnym rozwoju. Nie pobieramy prowizji od Twojej pracy —
              budujemy wspólną infrastrukturę, która pozwala Ci rozwijać się w sposób stabilny i profesjonalny.
            </motion.p>
            <motion.p {...fade(0.5)} className="font-body font-extralight text-base leading-[1.9] text-muted-foreground max-w-2xl mx-auto">
              Współpracujemy z lekarzami medycyny estetycznej, trenerami kosmetycznymi i specjalistami,
              którzy szukają solidnego zaplecza organizacyjnego pod rozpoznawalną i zaufaną marką.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 lg:py-44 section-dark border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <motion.div {...fade()} className="text-center mb-16">
              <p className="editorial-subheading text-gold mb-6 tracking-[0.35em]">Kontakt</p>
              <h2 className="editorial-heading text-3xl md:text-4xl mb-8">
                Rozpocznij <span className="italic text-gold">Współpracę</span>
              </h2>
              <div className="w-12 h-px bg-gold mx-auto" />
            </motion.div>

            <motion.form {...fade(0.2)} onSubmit={handleSubmit} className="space-y-2">
              <input
                type="text"
                placeholder="Imię i Nazwisko"
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputStyle}
                required
              />
              <input
                type="text"
                placeholder="Specjalizacja"
                maxLength={100}
                value={form.specialization}
                onChange={(e) => setForm({ ...form, specialization: e.target.value })}
                className={inputStyle}
                required
              />
              <input
                type="text"
                placeholder="Rodzaj Szkoleń"
                maxLength={200}
                value={form.trainingType}
                onChange={(e) => setForm({ ...form, trainingType: e.target.value })}
                className={inputStyle}
              />
              <input
                type="text"
                placeholder="Miasto"
                maxLength={100}
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className={inputStyle}
              />
              <input
                type="tel"
                placeholder="Telefon"
                maxLength={30}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputStyle}
                required
              />
              <textarea
                placeholder="Krótki opis planowanej współpracy"
                maxLength={1000}
                rows={3}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className={`${inputStyle} resize-none`}
              />

              <div className="pt-10">
                <button
                  type="submit"
                  disabled={submitted}
                  className={`editorial-subheading px-14 py-5 border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground transition-colors duration-500 ${
                    submitted ? "opacity-40 cursor-not-allowed" : ""
                  }`}
                >
                  {submitted ? "Wysłano" : "Wyślij Zapytanie"}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CollaborationPage;
