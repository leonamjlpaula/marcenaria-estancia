const testimonials = [
  {
    quote:
      "Móveis de qualidade, serviços impecáveis. Ótima durabilidade. A atenção aos detalhes é realmente o diferencial deles.",
    initials: "RA",
    name: "Ricardo Almeida",
    project: "Residencial São Pedro",
  },
  {
    quote:
      "Excelente trabalho, entrega no prazo. Superaram minhas expectativas com o acabamento da cozinha.",
    initials: "ML",
    name: "Maria Lúcia",
    project: "Apartamento Jardins",
  },
  {
    quote:
      "Encontramos na Estância a parceria ideal para nosso projeto corporativo. A durabilidade das peças é notável.",
    initials: "JP",
    name: "João Pedro",
    project: "Arquiteto",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-12">
        <h2 className="font-serif text-4xl text-center mb-24 italic">
          Palavras de quem vive nossos espaços
        </h2>
        <div className="flex overflow-x-auto gap-12 pb-12 snap-x no-scrollbar">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[400px] snap-center bg-surface-container-lowest p-16 relative"
              style={{ boxShadow: "0px 20px 40px rgba(43, 31, 23, 0.06)" }}
            >
              <span
                className="material-symbols-outlined absolute top-8 left-8 text-outline-variant text-6xl"
                style={{ fontVariationSettings: '"FILL" 1', opacity: 0.3 }}
              >
                format_quote
              </span>
              <p className="font-body text-xl text-on-surface relative z-10 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-12 flex items-center gap-4">
                <div className="w-10 h-10 bg-tertiary-fixed flex items-center justify-center text-xs font-bold text-on-tertiary-fixed">
                  {t.initials}
                </div>
                <div>
                  <p className="font-label text-sm uppercase font-semibold">{t.name}</p>
                  <p className="text-on-surface-variant text-xs">{t.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
