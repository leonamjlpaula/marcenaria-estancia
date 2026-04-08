const projects = [
  {
    colSpan: "col-span-12 md:col-span-8",
    rowSpan: "row-span-4",
    src: "/images/gallery-cozinha.jpg",
    alt: "luxury kitchen with deep walnut cabinetry and marble countertops",
    title: "Cozinha Gourmet Walnut",
    material: "Solid Walnut & Marble",
  },
  {
    colSpan: "col-span-12 md:col-span-4",
    rowSpan: "row-span-6",
    src: "/images/gallery-biblioteca.jpg",
    alt: "contemporary office space with floor-to-ceiling mahogany bookshelves",
    title: "Biblioteca Executive",
    material: "Polished Mahogany",
  },
  {
    colSpan: "col-span-12 md:col-span-4",
    rowSpan: "row-span-4",
    src: "/images/gallery-suite.jpg",
    alt: "minimalist bedroom with custom light oak wall panels",
    title: "Suíte Minimalista",
    material: "White Oak",
  },
  {
    colSpan: "col-span-12 md:col-span-4",
    rowSpan: "row-span-4",
    src: "/images/gallery-living.jpg",
    alt: "scandinavian style living room with handcrafted wooden sideboard",
    title: "Living Room Nordics",
    material: "European Ash",
  },
  {
    colSpan: "col-span-12 md:col-span-8",
    rowSpan: "row-span-3",
    src: "/images/story-artisan.jpg",
    alt: "detail of fine woodworking joinery on a custom table",
    title: "Mesa de Jantar Atemporal",
    material: "Brazilian Walnut",
  },
  {
    colSpan: "col-span-12 md:col-span-4",
    rowSpan: "row-span-5",
    src: "/images/hero-bg.jpg",
    alt: "bespoke closet system with integrated lighting",
    title: "Closet Personalizado",
    material: "Cedar Lining",
  },
];

export default function Projects() {
  return (
    <section className="py-32 bg-surface overflow-hidden" id="projects">
      <div className="container mx-auto px-12 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-xl">
            <span className="text-primary font-label text-xs uppercase tracking-[0.3em] mb-4 block">
              Portfolio
            </span>
            <h2 className="font-serif text-5xl text-on-surface">Projetos Selecionados</h2>
          </div>
          <div className="text-on-surface-variant font-body text-sm italic mb-2">
            Viewing collection 2023—2024
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 w-full">
        <div className="masonry-grid">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`${p.colSpan} ${p.rowSpan} group relative overflow-hidden`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={p.src}
                alt={p.alt}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white font-serif text-2xl">{p.title}</p>
                <span className="text-white/80 text-xs uppercase font-label tracking-widest">
                  {p.material}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
