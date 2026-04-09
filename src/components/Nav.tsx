"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkColor = scrolled ? "rgba(42,30,16,0.6)" : "rgba(255,255,255,0.75)";
  const linkHover = scrolled ? "#2a1e10" : "#ffffff";
  const dividerColor = scrolled ? "rgba(42,30,16,0.15)" : "rgba(255,255,255,0.25)";

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center pointer-events-none">
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
        {(["#story", "#projects", "#industrial", "#contact"] as const).map(
          (href, i) => {
            const labels = ["História", "Projetos", "Industrial", "Contato"];
            return (
              <a
                key={href}
                href={href}
                className="font-label text-xs uppercase tracking-[0.18em] transition-colors duration-300"
                style={{ color: linkColor }}
                onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
                onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
              >
                {labels[i]}
              </a>
            );
          }
        )}

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
  );
}
