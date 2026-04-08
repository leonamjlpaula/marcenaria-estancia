export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/50 backdrop-blur-xl transition-colors duration-500 ease-in-out flex justify-center items-center px-12 py-6">
      <div className="flex items-center gap-12">
        <a
          href="#story"
          className="text-stone-600 font-sans uppercase tracking-widest text-xs hover:text-stone-900 transition-opacity duration-300"
        >
          História
        </a>
        <a
          href="#projects"
          className="text-stone-600 font-sans uppercase tracking-widest text-xs hover:text-stone-900 transition-opacity duration-300"
        >
          Projetos
        </a>
        <a
          href="#industrial"
          className="text-stone-600 font-sans uppercase tracking-widest text-xs hover:text-stone-900 transition-opacity duration-300"
        >
          Industrial
        </a>
        <a
          href="#contact"
          className="text-stone-600 font-sans uppercase tracking-widest text-xs hover:text-stone-900 transition-opacity duration-300"
        >
          Contato
        </a>
        <button className="bg-primary-container text-on-primary-container px-6 py-2 text-xs uppercase tracking-widest font-semibold ml-4">
          Solicitar Orçamento
        </button>
      </div>
    </nav>
  );
}
