import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const emptyForm: FormData = { name: "", email: "", phone: "", message: "" };

const fade = (delay = 0) => ({
  initial: { opacity: 0 } as const,
  whileInView: { opacity: 1 } as const,
  viewport: { once: true } as const,
  transition: { duration: 1, delay, ease: "easeOut" as const },
});

const ContactForm = ({
  variant,
  label,
}: {
  variant: "beige" | "dark";
  label: string;
}) => {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(emptyForm);
    }, 3000);
  };

  const isBeige = variant === "beige";

  const inputBase = "w-full bg-transparent border-b py-4 font-body font-extralight text-sm focus:outline-none transition-colors duration-500";
  const inputStyle = isBeige
    ? `${inputBase} border-secondary-foreground/15 text-secondary-foreground placeholder:text-secondary-foreground/35 focus:border-dusty-pink/60`
    : `${inputBase} border-border text-foreground placeholder:text-muted-foreground/50 focus:border-gold/60`;

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <p
        className="editorial-subheading mb-12 tracking-[0.35em]"
        style={{ color: isBeige ? "hsl(350 18% 58%)" : undefined }}
      >
        {!isBeige && <span className="text-gold">{label}</span>}
        {isBeige && <span>{label}</span>}
      </p>

      <input type="text" placeholder="Imię i Nazwisko" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputStyle} required />
      <input type="email" placeholder="Adres Email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputStyle} required />
      <input type="tel" placeholder="Telefon (opcjonalnie)" maxLength={30} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputStyle} />
      <textarea placeholder="Twoja Wiadomość" maxLength={1000} rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputStyle} resize-none`} required />

      <div className="pt-8">
        <button
          type="submit"
          disabled={submitted}
          className={`editorial-subheading px-12 py-4 transition-colors duration-500 ${
            isBeige
              ? "border border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-beige-surface"
              : "border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground"
          } ${submitted ? "opacity-40 cursor-not-allowed" : ""}`}
        >
          {submitted ? "Wysłano" : "Wyślij"}
        </button>
      </div>
    </form>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <motion.div
          {...fade()}
          className="section-beige px-8 lg:px-20 py-32 lg:py-44"
        >
          <h2 className="editorial-heading text-3xl md:text-4xl text-secondary-foreground mb-14">
            Dla <span className="italic" style={{ color: "hsl(350 18% 58%)" }}>Klientów</span>
          </h2>
          <ContactForm variant="beige" label="Umów Konsultację" />
        </motion.div>

        <motion.div
          {...fade(0.15)}
          className="section-dark px-8 lg:px-20 py-32 lg:py-44"
        >
          <h2 className="editorial-heading text-3xl md:text-4xl mb-14">
            Dla <span className="italic text-gold">Trenerów</span>
          </h2>
          <ContactForm variant="dark" label="Rozpocznij Współpracę" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
