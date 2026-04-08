export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover grayscale-[20%] brightness-[85%]"
          src="/images/hero-bg.jpg"
          alt="dramatic interior shot of a bespoke wood paneled room with handcrafted furniture and warm atmospheric lighting"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-on-tertiary-fixed/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-12 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-white font-serif text-[clamp(3rem,8vw,6rem)] leading-[1.1] tracking-tight mb-8">
            Marcenaria Estância
          </h1>
          <p className="text-white/90 font-body text-xl md:text-2xl leading-relaxed max-w-xl font-light">
            40 anos produzindo as melhores soluções em móveis planejados.
          </p>
          <div className="mt-12 flex gap-6">
            <button className="bg-primary px-8 py-4 text-on-primary font-label text-sm uppercase tracking-widest transition-all hover:bg-primary-container">
              Discover Collection
            </button>
          </div>
        </div>
      </div>

      {/* Provenance tag */}
      <div className="absolute bottom-12 right-12 hidden md:block">
        <div className="bg-surface-container-highest px-4 py-2 text-on-tertiary-fixed font-label text-[10px] tracking-[0.2em] uppercase">
          Handcrafted Precision • Est. 1984
        </div>
      </div>
    </section>
  );
}
