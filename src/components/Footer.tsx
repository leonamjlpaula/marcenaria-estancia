export default function Footer() {
  return (
    <footer className="bg-stone-100 w-full border-t border-stone-200/20 grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-24">
      <div className="space-y-6">
        <div className="text-lg font-serif italic text-stone-800">Marcenaria Estância</div>
        <p className="text-stone-500 font-sans text-sm tracking-wide leading-relaxed">
          © 2024 Marcenaria Estância. Handcrafted with Precision. 40 years of artisanal
          woodworking excellence.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="text-primary font-sans text-xs uppercase tracking-widest font-bold">
          Details
        </h4>
        <a
          href="#"
          className="text-stone-500 font-sans text-sm tracking-wide hover:text-primary transition-colors duration-300"
        >
          Location: São Pedro, SP
        </a>
        <a
          href="#"
          className="text-stone-500 font-sans text-sm tracking-wide hover:text-primary transition-colors duration-300"
        >
          Mon-Fri: 08:00 - 18:00
        </a>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="text-primary font-sans text-xs uppercase tracking-widest font-bold">
          Connect
        </h4>
        <a
          href="#"
          className="text-stone-500 font-sans text-sm tracking-wide hover:text-primary transition-colors duration-300"
        >
          Instagram
        </a>
        <a
          href="#"
          className="text-stone-500 font-sans text-sm tracking-wide hover:text-primary transition-colors duration-300"
        >
          Journal
        </a>
      </div>
    </footer>
  );
}
