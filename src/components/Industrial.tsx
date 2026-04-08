const products = [
  {
    index: "01",
    title: "Mesa de Jantar Urban",
    material: "Carvalho Maciço & Aço Carbono",
    desc: "Tampo em carvalho maciço com 6 cm de espessura. Base tubular em aço carbono com acabamento fosco.",
    swatchColors: ["#3b2410", "#5c3a1e", "#1a0e06"],
  },
  {
    index: "02",
    title: "Estante Modular Loft",
    material: "Nogueira Americana & Ferro",
    desc: "Estrutura modular em ferro forjado. Prateleiras em nogueira americana com junta aparente.",
    swatchColors: ["#2c1a0e", "#4a2c18", "#0f0805"],
  },
  {
    index: "03",
    title: "Mesa de Centro Factory",
    material: "Madeira de Demolição & Metal",
    desc: "Tampo em madeira de demolição com marcas naturais preservadas. Base soldada à mão.",
    swatchColors: ["#4a3520", "#6b4f30", "#2a1e10"],
  },
  {
    index: "04",
    title: "Escrivaninha Studio",
    material: "Freijó & Base Industrial",
    desc: "Superfície em freijó com veio pronunciado. Pés hairpin em aço preto fosco.",
    swatchColors: ["#5c3d1a", "#7a5228", "#3a2510"],
  },
];

export default function Industrial() {
  return (
    <section
      className="relative overflow-hidden"
      id="industrial"
      style={{ backgroundColor: "#1e1a16" }}
    >
      {/* Top border accent */}
      <div className="h-px w-full" style={{ background: "rgba(219,193,184,0.12)" }} />

      {/* Header */}
      <div className="container mx-auto px-12 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span
              className="font-label text-xs uppercase tracking-[0.3em] mb-6 block"
              style={{ color: "#b85c38" }}
            >
              Nova Coleção — 2024
            </span>
            <h2
              className="font-serif leading-[1.05]"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                color: "#f4f0e9",
                letterSpacing: "-0.03em",
              }}
            >
              Linha <span style={{ fontStyle: "italic", color: "#ffb59a" }}>Industrial</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-3">
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "rgba(244,240,233,0.55)" }}
            >
              A força do aço encontra a alma da madeira. Peças para ambientes que exigem
              durabilidade sem abrir mão do caráter.
            </p>
          </div>
        </div>
      </div>

      {/* Thin rule */}
      <div className="mx-12" style={{ height: "1px", background: "rgba(219,193,184,0.10)" }} />

      {/* Product rows */}
      <div className="container mx-auto px-12">
        {products.map((p, i) => (
          <div key={i}>
            <div className="group grid grid-cols-1 lg:grid-cols-12 gap-0 items-center py-14 cursor-pointer relative">

              {/* Index number — background accent */}
              <span
                className="absolute right-0 top-1/2 -translate-y-1/2 font-serif select-none pointer-events-none hidden lg:block"
                style={{
                  fontSize: "180px",
                  lineHeight: 1,
                  color: "rgba(244,240,233,0.03)",
                  letterSpacing: "-0.05em",
                }}
                aria-hidden
              >
                {p.index}
              </span>

              {/* Small index */}
              <div className="lg:col-span-1 mb-4 lg:mb-0">
                <span
                  className="font-label text-xs tracking-[0.2em]"
                  style={{ color: "rgba(244,240,233,0.30)" }}
                >
                  {p.index}
                </span>
              </div>

              {/* Product name + material */}
              <div className="lg:col-span-5 mb-6 lg:mb-0">
                <h3
                  className="font-serif mb-2 transition-colors duration-500"
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    color: "#f4f0e9",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.title}
                </h3>
                {/* Provenance tag */}
                <span
                  className="inline-block font-label text-[10px] uppercase tracking-[0.18em] px-3 py-1"
                  style={{
                    background: "rgba(219,193,184,0.08)",
                    color: "#d8c2b6",
                    border: "1px solid rgba(219,193,184,0.15)",
                  }}
                >
                  {p.material}
                </span>
              </div>

              {/* Description */}
              <div className="lg:col-span-4 mb-8 lg:mb-0 lg:pr-12">
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "rgba(244,240,233,0.45)" }}
                >
                  {p.desc}
                </p>
              </div>

              {/* Swatch / image placeholder */}
              <div className="lg:col-span-2 flex justify-end">
                <div
                  className="w-20 h-20 lg:w-24 lg:h-24 transition-transform duration-700 group-hover:scale-110 relative overflow-hidden"
                  aria-hidden
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse at 30% 30%, ${p.swatchColors[0]}, ${p.swatchColors[1]} 50%, ${p.swatchColors[2]})`,
                    }}
                  />
                  {/* Subtle grain texture overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(92deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 3px)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Row separator (except last) */}
            {i < products.length - 1 && (
              <div style={{ height: "1px", background: "rgba(219,193,184,0.08)" }} />
            )}
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div
        className="mx-12 mt-8 mb-24 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        style={{ borderTop: "1px solid rgba(219,193,184,0.10)" }}
      >
        <p className="font-label text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(244,240,233,0.35)" }}>
          Todas as peças são produzidas sob medida
        </p>
        <button
          className="group flex items-center gap-4 font-label text-xs uppercase tracking-widest transition-colors duration-300"
          style={{ color: "#ffb59a" }}
        >
          <span>Solicitar Catálogo Completo</span>
          <span
            className="w-8 h-px block transition-all duration-500 group-hover:w-14"
            style={{ background: "#b85c38" }}
          />
        </button>
      </div>

      {/* Bottom border accent */}
      <div className="h-px w-full" style={{ background: "rgba(219,193,184,0.12)" }} />
    </section>
  );
}
