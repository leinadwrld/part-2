const Footer = () => {
  return (
    <footer className="py-24 lg:py-32 section-dark border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-16 lg:gap-24 mb-20">
          <div>
            <h3 className="font-serif text-xl font-light text-gold mb-5 tracking-[0.15em]">ÉLEVE</h3>
            <p className="font-body font-extralight text-sm leading-[1.8] text-muted-foreground max-w-xs">
              Zabiegi estetyczne premium i profesjonalna edukacja medyczna — połączone jedną wizją doskonałości.
            </p>
          </div>

          <div>
            <p className="font-body font-extralight text-[10px] tracking-[0.3em] uppercase text-gold mb-8">Nawigacja</p>
            <div className="space-y-4">
              {[
                { label: "Zabiegi", href: "/zabiegi" },
                { label: "Akademia", href: "/akademia" },
                { label: "Współpraca", href: "/wspolpraca" },
                { label: "O Nas", href: "/#about" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block font-body font-extralight text-sm text-muted-foreground hover:text-gold transition-colors duration-500"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-body font-extralight text-[10px] tracking-[0.3em] uppercase text-gold mb-8">Kontakt</p>
            <div className="space-y-4 font-body font-extralight text-sm text-muted-foreground">
              <p>kontakt@eleve.pl</p>
              <p>+48 000 000 000</p>
              <p>Warszawa, Polska</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body font-extralight text-[11px] text-muted-foreground/60">
            © 2026 Éleve. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-body font-extralight text-[11px] text-muted-foreground/60 hover:text-gold transition-colors duration-500">
              Polityka Prywatności
            </a>
            <a href="#" className="font-body font-extralight text-[11px] text-muted-foreground/60 hover:text-gold transition-colors duration-500">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
