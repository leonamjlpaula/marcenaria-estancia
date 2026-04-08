export default function Contact() {
  return (
    <section className="py-32 bg-surface" id="contact">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Left — contact info */}
          <div>
            <h2 className="font-serif text-6xl mb-12">
              Comece sua <br />
              <span className="italic text-primary">Próxima História</span>
            </h2>
            <p className="text-on-surface-variant font-body text-xl mb-16 leading-relaxed">
              Estamos prontos para ouvir suas ideias e transformá-las em realidade sólida e
              duradoura. Visite nosso showroom ou agende uma consultoria via WhatsApp.
            </p>

            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="bg-surface-container w-16 h-16 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined group-hover:text-on-primary">
                    location_on
                  </span>
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
                <div className="bg-surface-container w-16 h-16 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined group-hover:text-on-primary">
                    schedule
                  </span>
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
              <button className="bg-primary px-12 py-6 text-on-primary font-label text-sm uppercase tracking-widest flex items-center gap-4 group">
                <span>Falar no WhatsApp</span>
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Right — showroom card */}
          <div className="relative h-[600px] bg-surface-container-high">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
              src="/images/contact-map.jpg"
              alt="top-down map style aesthetic with wood samples and blueprints on a studio table"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="text-center p-12 bg-white/80 backdrop-blur-md max-w-sm"
                style={{ boxShadow: "0px 20px 40px rgba(43, 31, 23, 0.06)" }}
              >
                <span className="material-symbols-outlined text-4xl mb-4 text-primary block">
                  explore
                </span>
                <p className="font-serif text-2xl mb-4">Visite Nosso Showroom</p>
                <p className="text-on-surface-variant text-sm mb-6">
                  Experimente o toque e a qualidade de nossos materiais pessoalmente.
                </p>
                <a
                  href="#"
                  className="text-xs uppercase tracking-widest font-bold underline underline-offset-8"
                >
                  Abrir no Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
