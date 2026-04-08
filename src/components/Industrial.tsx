const products = [
  {
    title: "Mesa de Jantar Urban",
    material: "Carvalho Maciço & Aço Carbono",
    alt: "industrial dining table with black steel legs and thick reclaimed oak top",
  },
  {
    title: "Estante Modular Loft",
    material: "Nogueira Americana & Ferro",
    alt: "minimalist bookshelf with steel frame and walnut shelves",
  },
  {
    title: "Mesa de Centro Factory",
    material: "Madeira de Demolição & Metal",
    alt: "industrial coffee table with metal mesh shelf",
  },
  {
    title: "Escrivaninha Studio",
    material: "Freijó & Base Industrial",
    alt: "modern desk with hairpin legs",
  },
];

export default function Industrial() {
  return (
    <section className="py-32 bg-surface-container-low" id="industrial">
      <div className="container mx-auto px-12">
        <div className="mb-20">
          <span className="text-primary font-label text-xs uppercase tracking-[0.3em] mb-4 block">
            Nova Coleção
          </span>
          <h2 className="font-serif text-5xl text-on-surface">Linha Industrial</h2>
          <p className="mt-6 text-on-surface-variant font-body text-lg max-w-2xl leading-relaxed">
            A união perfeita entre a força do aço e a alma da madeira. Peças desenhadas para
            ambientes contemporâneos que exigem durabilidade e estilo urbano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6 bg-surface-container flex items-center justify-center">
                {/* Placeholder — product images to be provided */}
                <span className="text-on-surface-variant font-label text-[10px] uppercase tracking-widest">
                  {p.alt}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-on-surface mb-2">{p.title}</h3>
              <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                {p.material}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
