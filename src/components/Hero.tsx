"use client";

import imgHeroBkg from "@/images/hero_bkg.png";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover"
          src={imgHeroBkg.src}
          alt="oficina de marcenaria com luz natural e ferramentas artesanais"
        />
        {/* Left-side gradient — dark where the text lives, fully transparent on the right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(14,10,6,0.82) 0%, rgba(14,10,6,0.60) 35%, rgba(14,10,6,0.15) 60%, transparent 78%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-12 relative z-10">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <span
            className="font-label text-xs uppercase tracking-[0.3em] mb-6 block"
            style={{ color: "#ffb59a" }}
          >
            Precisão Artesanal • Est. 1984
          </span>

          <h1
            className="font-serif leading-[1.05] mb-6"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              color: "#f4f0e9",
              letterSpacing: "-0.03em",
              fontFamily: "'Stardom', serif",
            }}
          >
            Marcenaria <span style={{ fontStyle: "italic", color: "#ffb59a" }}>Estância</span>
          </h1>

          {/* Thin rule */}
          <div className="w-12 h-px mb-6" style={{ background: "#b85c38" }} />

          <p
            className="font-body text-lg leading-relaxed mb-10"
            style={{ color: "rgba(244,240,233,0.75)", maxWidth: "26rem" }}
          >
            40 anos transformando madeira em legado. Cada peça, uma história feita à mão.
          </p>

          <button
            className="font-label text-xs uppercase tracking-[0.18em] px-6 py-3 rounded-full transition-all duration-200"
            style={{ background: "#b85c38", color: "#f4f0e9" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#994422")}
            onMouseLeave={e => (e.currentTarget.style.background = "#b85c38")}
          >
            Ver Coleção
          </button>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-label text-[9px] uppercase tracking-[0.3em]" style={{ color: "rgba(244,240,233,0.35)" }}>
          Scroll
        </span>
        <div className="w-px h-8 overflow-hidden" style={{ background: "rgba(244,240,233,0.15)" }}>
          <div
            className="w-full h-1/2"
            style={{
              background: "#b85c38",
              animation: "scrollHint 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollHint {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}
