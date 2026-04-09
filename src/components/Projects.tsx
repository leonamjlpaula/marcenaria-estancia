const projects = [
  {
    colSpan: "col-span-12 md:col-span-8",
    rowSpan: "row-span-4",
    src: "/images/gallery-cozinha.jpg",
    alt: "cozinha de luxo com armários de nogueira e bancadas de mármore",
    title: "Cozinha Gourmet Nogueira",
    material: "Nogueira Maciça & Mármore",
  },
  {
    colSpan: "col-span-12 md:col-span-4",
    rowSpan: "row-span-6",
    src: "/images/gallery-biblioteca.jpg",
    alt: "escritório contemporâneo com estantes de mogno do piso ao teto",
    title: "Biblioteca Executiva",
    material: "Mogno Polido",
  },
  {
    colSpan: "col-span-12 md:col-span-4",
    rowSpan: "row-span-4",
    src: "/images/gallery-suite.jpg",
    alt: "quarto minimalista com painéis de carvalho claro sob medida",
    title: "Suíte Minimalista",
    material: "Carvalho Branco",
  },
  {
    colSpan: "col-span-12 md:col-span-4",
    rowSpan: "row-span-4",
    src: "/images/gallery-living.jpg",
    alt: "sala de estar escandinava com aparador artesanal em madeira",
    title: "Sala de Estar Nórdica",
    material: "Freixo Europeu",
  },
  {
    colSpan: "col-span-12 md:col-span-8",
    rowSpan: "row-span-3",
    src: "/images/story-artisan.jpg",
    alt: "detalhe de encaixe em marcenaria fina em mesa sob medida",
    title: "Mesa de Jantar Atemporal",
    material: "Nogueira Brasileira",
  },
  {
    colSpan: "col-span-12 md:col-span-4",
    rowSpan: "row-span-5",
    src: "/images/hero-bg.jpg",
    alt: "closet personalizado com iluminação integrada",
    title: "Closet Personalizado",
    material: "Forro de Cedro",
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
            <h2
              className="font-serif leading-[1.05]"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "#2a1e10",
                letterSpacing: "-0.03em",
              }}
            >
              Projetos <span style={{ fontStyle: "italic", color: "#b85c38" }}>Selecionados</span>
            </h2>
          </div>
          <div className="text-on-surface-variant font-body text-sm italic mb-2">
            Coleção 2023—2024
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
