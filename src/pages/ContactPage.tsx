import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = (delay = 0) => ({
  initial: { opacity: 0 } as const,
  whileInView: { opacity: 1 } as const,
  viewport: { once: true } as const,
  transition: { duration: 1, delay, ease: "easeOut" as const },
});

/* ── Client Form ── */
interface ClientForm {
  name: string;
  phone: string;
  treatment: string;
  date: string;
}

const emptyClient: ClientForm = { name: "", phone: "", treatment: "", date: "" };

const ClientInquiry = () => {
  const [form, setForm] = useState<ClientForm>(emptyClient);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm(emptyClient); }, 3000);
  };

  const inputStyle =
    "w-full bg-transparent border-b py-4 font-body font-extralight text-sm border-secondary-foreground/15 text-secondary-foreground placeholder:text-secondary-foreground/35 focus:outline-none focus:border-accent/60 transition-colors duration-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <p className="editorial-subheading mb-12 tracking-[0.35em] text-accent">Umów Konsultację</p>
      <input type="text" placeholder="Imię i Nazwisko" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputStyle} required />
      <input type="tel" placeholder="Telefon" maxLength={30} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputStyle} required />
      <input type="text" placeholder="Zabieg, który Cię interesuje" maxLength={200} value={form.treatment} onChange={(e) => setForm({ ...form, treatment: e.target.value })} className={inputStyle} />
      <input type="text" placeholder="Preferowany termin" maxLength={100} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputStyle} />
      <div className="pt-8">
        <button type="submit" disabled={submitted} className={`editorial-subheading px-12 py-4 border border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-beige-surface transition-colors duration-500 ${submitted ? "opacity-40 cursor-not-allowed" : ""}`}>
          {submitted ? "Wysłano" : "Wyślij"}
        </button>
      </div>
    </form>
  );
};

/* ── Trainer Form ── */
interface TrainerForm {
  name: string;
  specialization: string;
  trainingType: string;
  city: string;
  phone: string;
  description: string;
}

const emptyTrainer: TrainerForm = { name: "", specialization: "", trainingType: "", city: "", phone: "", description: "" };

const TrainerInquiry = () => {
  const [form, setForm] = useState<TrainerForm>(emptyTrainer);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.specialization.trim()) return;
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm(emptyTrainer); }, 3000);
  };

  const inputStyle =
    "w-full bg-transparent border-b border-border py-4 font-body font-extralight text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/60 transition-colors duration-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <p className="editorial-subheading mb-12 tracking-[0.35em] text-gold">Rozpocznij Współpracę</p>
      <input type="text" placeholder="Imię i Nazwisko" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputStyle} required />
      <input type="text" placeholder="Specjalizacja" maxLength={100} value={form.specialization} onChange={(e) => setForm({ ...form, specialization: e.target.value })} className={inputStyle} required />
      <input type="text" placeholder="Rodzaj Szkoleń" maxLength={200} value={form.trainingType} onChange={(e) => setForm({ ...form, trainingType: e.target.value })} className={inputStyle} />
      <input type="text" placeholder="Miasto" maxLength={100} value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputStyle} />
      <input type="tel" placeholder="Telefon" maxLength={30} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputStyle} required />
      <textarea placeholder="Krótki opis" maxLength={1000} rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className={`${inputStyle} resize-none`} />
      <div className="pt-8">
        <button type="submit" disabled={submitted} className={`editorial-subheading px-12 py-4 border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground transition-colors duration-500 ${submitted ? "opacity-40 cursor-not-allowed" : ""}`}>
          {submitted ? "Wysłano" : "Wyślij"}
        </button>
      </div>
    </form>
  );
};

/* ── Page ── */
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-20">
        <div className="py-24 lg:py-32 section-dark">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.p {...fade()} className="editorial-subheading text-gold mb-6 tracking-[0.35em]">
              Kontakt
            </motion.p>
            <motion.h1 {...fade(0.15)} className="editorial-heading text-heading max-w-3xl mx-auto">
              Porozmawiajmy
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Dual Forms */}
      <section className="overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <motion.div {...fade()} className="section-beige px-8 lg:px-20 py-32 lg:py-44">
            <h2 className="editorial-heading text-3xl md:text-4xl text-secondary-foreground mb-14">
              Dla <span className="italic text-accent">Klientów</span>
            </h2>
            <ClientInquiry />
          </motion.div>

          <motion.div {...fade(0.15)} className="section-dark px-8 lg:px-20 py-32 lg:py-44">
            <h2 className="editorial-heading text-3xl md:text-4xl mb-14">
              Dla <span className="italic text-gold">Trenerów</span>
            </h2>
            <TrainerInquiry />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
