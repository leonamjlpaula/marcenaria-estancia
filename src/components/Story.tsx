import imgPaiFIlho from "@/images/pai_filho.webp";

export default function Story() {
  return (
    <section className="py-16 bg-surface-container-low overflow-hidden" id="story">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Image column */}
          <div className="lg:col-span-7 flex min-h-0 min-w-0 overflow-hidden lg:h-full lg:flex-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full object-cover shadow-xl max-lg:h-auto lg:min-h-0 lg:min-w-0 lg:flex-1 lg:basis-0"
              src={imgPaiFIlho.src}
              alt="pai e filho na marcenaria, tradição passada de geração em geração"
            />
          </div>

          {/* Text column */}
          <div className="lg:col-span-5 flex flex-col justify-center min-w-0">
            <span className="text-primary font-label text-xs uppercase tracking-[0.3em] mb-6">
              Nossa Herança
            </span>
            <h2
              className="font-serif mb-10 leading-[1.05]"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "#2a1e10",
                letterSpacing: "-0.03em",
              }}
            >
              A Arte de Transformar <br />
              <span style={{ fontStyle: "italic", color: "#b85c38" }}>Madeira em Legado</span>
            </h2>
            <div className="space-y-8 text-on-surface-variant font-body text-lg leading-relaxed max-w-md">
              <p>
                Desde a nossa fundação, a Marcenaria Estância tem se dedicado à busca da perfeição.
                Cada peça que sai de nossa oficina carrega consigo décadas de conhecimento técnico
                e um respeito profundo pela matéria-prima.
              </p>
              <p>
                Um negócio de pai para filho — o saber fazer passa de mão em mão, preservando
                os segredos do ofício e a alma que nenhuma máquina consegue replicar.
              </p>
            </div>

            {/* Legado banner — full width of text column */}
            <div className="mt-12 bg-primary flex items-end justify-between px-10 pt-8 pb-7 relative overflow-hidden">
              {/* Decorative grain overlay */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
                  backgroundSize: "180px",
                }}
              />
              <div className="relative">
                <span className="text-on-primary font-serif text-7xl italic leading-none">40</span>
                <p className="text-on-primary/60 font-label text-[9px] uppercase tracking-[0.3em] mt-1">
                  Anos de maestria
                </p>
              </div>
              <div className="relative text-right">
                <p className="text-on-primary font-serif text-lg italic leading-snug">
                  De pai<br />para filho
                </p>
                <div className="mt-2 w-8 h-px bg-on-primary/30 ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
