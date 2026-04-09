"use client";

const MAPS_URL = "https://maps.app.goo.gl/HPsNnbKKiVckQgH76";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=Rua+Jo%C3%A3o+Cirino+Sobrinho%2C+265%2C+S%C3%A3o+Pedro%2C+SP%2C+Brazil&output=embed&z=16&hl=pt-BR";

function IconLocation() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 7v5l3 3"/>
    </svg>
  );
}

function IconArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  );
}

function IconCompass() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="miter">
      <circle cx="12" cy="12" r="10"/>
      <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/>
    </svg>
  );
}

export default function Contact() {
  return (
    <section className="py-32 bg-surface" id="contact">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">

          {/* Left — contact info */}
          <div>
            <h2
              className="font-serif mb-12 leading-[1.05]"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "#2a1e10",
                letterSpacing: "-0.03em",
              }}
            >
              Comece sua <br />
              <span style={{ fontStyle: "italic", color: "#b85c38" }}>Próxima História</span>
            </h2>
            <p className="text-on-surface-variant font-body text-xl mb-16 leading-relaxed">
              Estamos prontos para ouvir suas ideias e transformá-las em realidade sólida e
              duradoura. Visite nosso showroom ou agende uma consultoria via WhatsApp.
            </p>

            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="bg-surface-container w-16 h-16 flex items-center justify-center text-on-surface-variant group-hover:bg-primary group-hover:text-on-primary transition-colors shrink-0">
                  <IconLocation />
                </div>
                <div>
                  <h4 className="font-label uppercase text-xs tracking-widest mb-2 text-primary font-bold">
                    Localização
                  </h4>
                  <p className="text-on-surface font-body text-lg">
                    Rua João Cirino Sobrinho, 265, <br />
                    São Pedro, SP
                  </p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="bg-surface-container w-16 h-16 flex items-center justify-center text-on-surface-variant group-hover:bg-primary group-hover:text-on-primary transition-colors shrink-0">
                  <IconClock />
                </div>
                <div>
                  <h4 className="font-label uppercase text-xs tracking-widest mb-2 text-primary font-bold">
                    Horário de Funcionamento
                  </h4>
                  <p className="text-on-surface font-body text-lg">
                    Seg-Sex: 08:00 - 18:00 <br />
                    Sáb: 08:00 - 12:00
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <button
                className="group font-label text-xs uppercase tracking-[0.18em] px-7 py-3 rounded-full flex items-center gap-3 transition-all duration-200"
                style={{ background: "#b85c38", color: "#f4f0e9" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#994422")}
                onMouseLeave={e => (e.currentTarget.style.background = "#b85c38")}
              >
                <span>Falar no WhatsApp</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  <IconArrow />
                </span>
              </button>
            </div>
          </div>

          {/* Right — Google Maps embed */}
          <div className="relative h-[600px] overflow-hidden" style={{ boxShadow: "0px 20px 40px rgba(43,31,23,0.08)" }}>
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Marcenaria Estância"
            />

            {/* Floating card overlay */}
            <div
              className="absolute bottom-6 left-6 right-6 p-8 bg-white/90 backdrop-blur-md flex items-center justify-between gap-4"
              style={{ boxShadow: "0px 8px 24px rgba(43,31,23,0.10)" }}
            >
              <div className="flex items-center gap-4">
                <div className="text-primary">
                  <IconCompass />
                </div>
                <div>
                  <p className="font-serif text-lg leading-tight">Visite Nosso Showroom</p>
                  <p className="text-on-surface-variant text-xs mt-1">
                    Rua João Cirino Sobrinho, 265 — São Pedro, SP
                  </p>
                </div>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-[10px] uppercase tracking-widest whitespace-nowrap text-primary border-b border-primary/30 pb-px hover:border-primary transition-colors"
              >
                Abrir no Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
