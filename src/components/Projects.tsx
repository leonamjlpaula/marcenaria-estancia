import img1 from "@/images/projetos/1.webp";
import img2 from "@/images/projetos/2.webp";
import img3 from "@/images/projetos/3.webp";
import img4 from "@/images/projetos/4.webp";
import img5 from "@/images/projetos/5.webp";
import img6 from "@/images/projetos/6.webp";
import img7 from "@/images/projetos/7.webp";
import img8 from "@/images/projetos/8.webp";
import img9 from "@/images/projetos/9.webp";

// Desktop layout — 3-column grid, 4 rows, zero gaps:
//
//   [ img1  ·  img1 ] [ img2 ]   ← span-2 aspect-[2/1] + span-1 aspect-square
//   [ img3 ] [ img4 ] [ img5 ]   ← 3× span-1 aspect-square
//   [ img6 ] [ img7  ·  img7 ]   ← span-1 aspect-square + span-2 aspect-[2/1]
//   [ img8  ·  img8 ] [ img9 ]   ← span-2 aspect-[2/1] + span-1 aspect-square
//
// Because (2/3 × W) / 2 = W/3  and  (1/3 × W) / 1 = W/3,
// every cell in every row lands on the same height → no gaps, no stretching.

const projects = [
  // Row 1
  {
    src: img1.src,
    alt: "painel de TV em madeira maciça com rack integrado e mesa de centro",
    title: "Painel & Rack de TV",
    material: "Madeira Maciça & Aço",
    cls: "col-span-1 aspect-[4/3] md:col-span-2 md:aspect-[2/1]",
  },
  {
    src: img2.src,
    alt: "ilha de cozinha estilo industrial com tampo em madeira e bancada preta",
    title: "Cozinha Industrial",
    material: "Madeira Rústica & Granito",
    cls: "col-span-1 aspect-[4/3] md:col-span-1 md:aspect-square",
  },
  // Row 2
  {
    src: img3.src,
    alt: "closet planejado com iluminação LED integrada e acabamento em carvalho",
    title: "Closet Planejado",
    material: "Carvalho & LED Integrado",
    cls: "col-span-1 aspect-[4/3] md:col-span-1 md:aspect-square",
  },
  {
    src: img4.src,
    alt: "gabinete de banheiro em madeira clara com nichos iluminados",
    title: "Gabinete de Banheiro",
    material: "Teca Clara & MDF",
    cls: "col-span-1 aspect-[4/3] md:col-span-1 md:aspect-square",
  },
  {
    src: img5.src,
    alt: "quarto planejado com armários cinza e detalhes em madeira nogal",
    title: "Dormitório Planejado",
    material: "Nogal & Cinza Grafite",
    cls: "col-span-1 aspect-[4/3] md:col-span-1 md:aspect-square",
  },
  // Row 3
  {
    src: img6.src,
    alt: "home office com estantes embutidas e bancada em madeira maciça azul",
    title: "Home Office & Biblioteca",
    material: "Madeira Maciça Pintada",
    cls: "col-span-1 aspect-[4/3] md:col-span-1 md:aspect-square",
  },
  {
    src: img7.src,
    alt: "escritório corporativo com mesas em madeira e mobiliário planejado",
    title: "Escritório Corporativo",
    material: "Freijó & Aço Escovado",
    cls: "col-span-1 aspect-[4/3] md:col-span-2 md:aspect-[2/1]",
  },
  // Row 4
  {
    src: img9.src,
    alt: "cozinha moderna com armários verde escuro e ilha com tampo de madeira",
    title: "Cozinha Verde Inglês",
    material: "MDF Lacado & Carvalho",
    cls: "col-span-1 aspect-[4/3] md:col-span-2 md:aspect-[2/1]",
  },
  {
    src: img8.src,
    alt: "quarto com home office integrado, estantes e mesa em madeira e azul",
    title: "Quarto com Escritório",
    material: "Pinus & Laca Azul",    
    cls: "col-span-1 aspect-[4/3] md:col-span-1 md:aspect-square",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {projects.map((p, i) => (
            <div key={i} className={`${p.cls} group relative overflow-hidden rounded-sm`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={p.src}
                alt={p.alt}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white font-serif text-xl leading-tight">{p.title}</p>
                <span className="text-white/75 text-xs uppercase font-label tracking-widest">
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
