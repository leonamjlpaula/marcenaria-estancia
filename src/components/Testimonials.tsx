const testimonials = [
  {
    quote:
      "Móveis de qualidade, serviços impecáveis. Ótima durabilidade. A atenção aos detalhes é realmente o diferencial deles.",
    name: "Ricardo Almeida",
    project: "Residencial São Pedro",
  },
  {
    quote:
      "Excelente trabalho, entrega no prazo. Superaram minhas expectativas com o acabamento da cozinha.",
    name: "Maria Lúcia",
    project: "Apartamento Jardins",
  },
  {
    quote:
      "Encontramos na Estância a parceria ideal para nosso projeto corporativo. A durabilidade das peças é notável.",
    name: "João Pedro",
    project: "Arquiteto",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 overflow-hidden" style={{ backgroundColor: "#fdf9f2" }}>
      <div className="container mx-auto px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
          <div>
            <span
              className="font-label text-xs uppercase tracking-[0.3em] mb-4 block"
              style={{ color: "#994422" }}
            >
              Depoimentos
            </span>
            <h2
              className="font-serif italic"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#1c1c18",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Palavras de quem vive<br />nossos espaços
            </h2>
          </div>
          {/* Decorative rule */}
          <div
            className="hidden md:block self-center flex-1 mx-16"
            style={{ height: "1px", background: "rgba(43,31,23,0.10)" }}
          />
          <p
            className="font-body text-sm max-w-xs"
            style={{ color: "#55433c", lineHeight: 1.7 }}
          >
            Cada projeto é uma conversa. Estas são algumas das histórias que nos motivam a continuar.
          </p>
        </div>

        {/* Staggered columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col p-10"
              style={{ backgroundColor: "#ffffff", boxShadow: "0px 20px 40px rgba(43,31,23,0.06)" }}
            >
              {/* Decorative large quote — typographic, no icon font */}
              <div
                className="font-serif leading-none mb-6 select-none"
                style={{
                  fontSize: "120px",
                  color: "#994422",
                  opacity: 0.12,
                  lineHeight: 0.8,
                  marginLeft: "-8px",
                }}
                aria-hidden
              >
                &ldquo;
              </div>

              {/* Quote */}
              <blockquote
                className="font-serif italic flex-1"
                style={{
                  fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                  color: "#1c1c18",
                  lineHeight: 1.65,
                  letterSpacing: "-0.01em",
                  marginTop: "-40px",
                }}
              >
                {t.quote}
              </blockquote>

              {/* Accent line */}
              <div
                className="mt-8 mb-6"
                style={{ width: "32px", height: "2px", background: "#994422" }}
              />

              {/* Author */}
              <div>
                <p
                  className="font-label uppercase font-semibold"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    color: "#1c1c18",
                  }}
                >
                  {t.name}
                </p>
                <p
                  className="font-body mt-1"
                  style={{ fontSize: "12px", color: "#55433c" }}
                >
                  {t.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
