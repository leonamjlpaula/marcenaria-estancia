export default function Story() {
  return (
    <section className="py-32 bg-surface-container-low overflow-hidden" id="story">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          {/* Image column */}
          <div className="lg:col-span-7">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full aspect-[4/5] object-cover shadow-xl"
              src="/images/story-artisan.jpg"
              alt="artesão trabalhando uma peça de nogueira em oficina iluminada pelo sol"
            />
          </div>

          {/* Text column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-primary font-label text-xs uppercase tracking-[0.3em] mb-6">
              Nossa Herança
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-on-surface mb-10 leading-tight">
              A Arte de Transformar <br />
              <span className="italic text-primary">Madeira em Legado</span>
            </h2>
            <div className="space-y-8 text-on-surface-variant font-body text-lg leading-relaxed max-w-md">
              <p>
                Desde a nossa fundação, a Marcenaria Estância tem se dedicado à busca da perfeição.
                Cada peça que sai de nossa oficina carrega consigo décadas de conhecimento técnico
                e um respeito profundo pela matéria-prima.
              </p>
              <p>
                Não criamos apenas móveis; moldamos ambientes que contam histórias. Nossa abordagem
                editorial foca na curadoria de texturas e no design minimalista que atravessa gerações.
              </p>
              <div className="pt-6">
                <a
                  href="#"
                  className="text-on-surface font-label text-sm uppercase tracking-widest border-b border-on-surface/20 pb-2 hover:border-primary transition-all inline-block"
                >
                  Conheça nosso processo
                </a>
              </div>
            </div>

            {/* 40 anos banner — full width of text column */}
            <div className="mt-12 bg-primary flex items-center justify-between px-10 py-8">
              <span className="text-on-primary font-serif text-7xl italic leading-none">40</span>
              <div className="text-right">
                <p className="text-on-primary font-label text-[10px] uppercase tracking-[0.25em]">
                  Anos de
                </p>
                <p className="text-on-primary font-label text-[10px] uppercase tracking-[0.25em]">
                  Maestria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
