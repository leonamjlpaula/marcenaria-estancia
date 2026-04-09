"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#story",      label: "História"  },
  { href: "#projects",   label: "Projetos"  },
  { href: "#industrial", label: "Industrial" },
  { href: "#contact",    label: "Contato"   },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkColor = scrolled ? "rgba(42,30,16,0.6)" : "rgba(255,255,255,0.75)";
  const linkHover = scrolled ? "#2a1e10" : "#ffffff";
  const dividerColor = scrolled ? "rgba(42,30,16,0.15)" : "rgba(255,255,255,0.25)";
  const iconColor = scrolled ? "#2a1e10" : "#f4f0e9";

  return (
    <>
      {/* Desktop nav */}
      <div className="fixed top-5 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none">
        <nav
          className="pointer-events-auto flex items-center gap-10 px-8 py-2 rounded-full transition-all duration-500"
          style={{
            background: scrolled ? "rgba(244,240,233,0.80)" : "rgba(244,240,233,0.18)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: scrolled
              ? "1px solid rgba(184,92,56,0.15)"
              : "1px solid rgba(244,240,233,0.25)",
            boxShadow: scrolled
              ? "0 4px 32px rgba(42,30,16,0.14)"
              : "0 4px 24px rgba(42,30,16,0.12)",
          }}
        >
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-label text-xs uppercase tracking-[0.18em] transition-colors duration-300"
              style={{ color: linkColor }}
              onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
              onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
            >
              {label}
            </a>
          ))}

          <span className="w-px h-4 block transition-colors duration-500" style={{ background: dividerColor }} />

          <button
            className="font-label text-xs uppercase tracking-[0.18em] px-5 py-3 rounded-full transition-all duration-200"
            style={{ background: "#b85c38", color: "#f4f0e9" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#994422")}
            onMouseLeave={e => (e.currentTarget.style.background = "#b85c38")}
          >
            Solicitar Orçamento
          </button>
        </nav>
      </div>

      {/* Mobile hamburger button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setOpen(v => !v)}
          className="w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-full transition-all duration-300"
          style={{
            background: scrolled ? "rgba(244,240,233,0.85)" : "rgba(244,240,233,0.18)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: scrolled ? "1px solid rgba(184,92,56,0.15)" : "1px solid rgba(244,240,233,0.25)",
          }}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className="block w-5 h-px transition-all duration-300 origin-center"
            style={{
              background: iconColor,
              transform: open ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: iconColor,
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300 origin-center"
            style={{
              background: iconColor,
              transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col justify-center items-center gap-8 transition-all duration-300"
        style={{
          background: "rgba(20,13,7,0.96)",
          backdropFilter: "blur(12px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            className="font-serif text-4xl transition-colors duration-200"
            style={{ color: "rgba(244,240,233,0.75)", fontStyle: "normal" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#f4f0e9")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(244,240,233,0.75)")}
          >
            {label}
          </a>
        ))}

        <div className="w-8 h-px mt-2" style={{ background: "rgba(184,92,56,0.5)" }} />

        <button
          className="font-label text-xs uppercase tracking-[0.18em] px-6 py-3 rounded-full mt-2"
          style={{ background: "#b85c38", color: "#f4f0e9" }}
          onClick={() => setOpen(false)}
        >
          Solicitar Orçamento
        </button>
      </div>
    </>
  );
}
