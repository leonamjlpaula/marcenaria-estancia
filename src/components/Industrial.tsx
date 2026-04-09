"use client";

import imgCarrinha from "@/images/moveis_industriais/carrinha_bebidas.webp";
import imgEstante1 from "@/images/moveis_industriais/estante_1.webp";
import imgEstante2 from "@/images/moveis_industriais/estante_2.webp";
import imgEstante3 from "@/images/moveis_industriais/estante_3.webp";
import imgConjunto from "@/images/moveis_industriais/conjunto_mesa.webp";

const products = [
  {
    title: "Carrinho Bar Industrial",
    material: "Ferro Fundido & Madeira de Lei",
    desc: "Estrutura em ferro fundido pintado a pó. Tampo e prateleira inferior em madeira com acabamento natural.",
    img: imgCarrinha,
    alt: "carrinho bar industrial em ferro e madeira",
    span: "lg:col-span-6",
    height: "h-[520px]",
  },
  {
    title: "Estante Loft I",
    material: "Aço Bruto & Pinus Nodoso",
    desc: "Montantes em aço bruto e prateleiras em pinus nodoso. Parafusos industriais aparentes como detalhe de design.",
    img: imgEstante1,
    alt: "estante industrial em aço e pinus",
    span: "lg:col-span-6",
    height: "h-[520px]",
  },
  {
    title: "Estante Loft II",
    material: "Tubo de Ferro & Peroba",
    desc: "Estrutura tubular em ferro e prateleiras em peroba maciça. Ideal para home offices e cantinhos de leitura.",
    img: imgEstante2,
    alt: "estante compacta industrial em ferro e peroba",
    span: "lg:col-span-4",
    height: "h-[400px]",
  },
  {
    title: "Estante Loft III",
    material: "Perfil Metálico & Eucalipto",
    desc: "Perfis metálicos soldados e prateleiras em eucalipto tratado. Acabamento encerado que preserva nós e veios naturais.",
    img: imgEstante3,
    alt: "estante alta industrial em metal e eucalipto",
    span: "lg:col-span-4",
    height: "h-[400px]",
  },
  {
    title: "Conjunto Mesa Urban",
    material: "Aço Carbono & Madeira de Demolição",
    desc: "Base em aço carbono jateado e tampos em madeira de demolição. Peças únicas — cada exemplar carrega marcas do tempo.",
    img: imgConjunto,
    alt: "conjunto de mesa e bancos industrial em aço e madeira de demolição",
    span: "lg:col-span-4",
    height: "h-[400px]",
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

      {/* Grid */}
      <div className="container mx-auto px-12 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          {products.map((p, i) => (
            <div
              key={i}
              className={`${p.span} group relative overflow-hidden cursor-pointer`}
            >
              {/* Image */}
              <div className={`relative ${p.height} overflow-hidden`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img.src}
                  alt={p.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Permanent dark gradient at bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(18,14,10,0.85) 0%, rgba(18,14,10,0.3) 45%, transparent 75%)",
                  }}
                />

                {/* Content — pinned to bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  {/* Material tag */}
                  <span
                    className="inline-block font-label text-[9px] uppercase tracking-[0.2em] px-3 py-1 mb-3"
                    style={{
                      background: "rgba(219,193,184,0.12)",
                      color: "#d8c2b6",
                      border: "1px solid rgba(219,193,184,0.2)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {p.material}
                  </span>

                  <h3
                    className="font-serif mb-2"
                    style={{
                      fontSize: i < 2 ? "clamp(1.5rem, 2.5vw, 2rem)" : "clamp(1.2rem, 2vw, 1.6rem)",
                      color: "#f4f0e9",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                    }}
                  >
                    {p.title}
                  </h3>

                  {/* Description — visible on hover */}
                  <p
                    className="font-body text-sm leading-relaxed max-w-sm overflow-hidden max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-out"
                    style={{ color: "rgba(244,240,233,0.65)" }}
                  >
                    {p.desc}
                  </p>
                </div>

                {/* Top-right corner accent on hover */}
                <div
                  className="absolute top-0 right-0 w-px transition-all duration-500 ease-out group-hover:h-16"
                  style={{
                    height: 0,
                    background: "#b85c38",
                  }}
                />
                <div
                  className="absolute top-0 right-0 h-px transition-all duration-500 ease-out group-hover:w-16"
                  style={{
                    width: 0,
                    background: "#b85c38",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div
        className="mx-12 mt-10 mb-24 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        style={{ borderTop: "1px solid rgba(219,193,184,0.10)" }}
      >
        <p className="font-label text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(244,240,233,0.35)" }}>
          Todas as peças são produzidas sob medida
        </p>
        <button
          className="font-label text-xs uppercase tracking-[0.18em] px-6 py-3 rounded-full transition-all duration-200"
          style={{ background: "#b85c38", color: "#f4f0e9" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#994422")}
          onMouseLeave={e => (e.currentTarget.style.background = "#b85c38")}
        >
          Solicitar Catálogo Completo
        </button>
      </div>

      {/* Bottom border accent */}
      <div className="h-px w-full" style={{ background: "rgba(219,193,184,0.12)" }} />
    </section>
  );
}
