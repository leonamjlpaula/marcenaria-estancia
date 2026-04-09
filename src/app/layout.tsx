import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const boska = localFont({
  src: [
    {
      path: "../../src/fonts/Boska/WEB/fonts/Boska-Variable.woff2",
      style: "normal",
      weight: "200 900",
    },
    {
      path: "../../src/fonts/Boska/WEB/fonts/Boska-VariableItalic.woff2",
      style: "italic",
      weight: "200 900",
    },
  ],
  variable: "--font-boska",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marcenaria Estância",
  description: "Marcenaria Estância — móveis e projetos sob medida com qualidade e tradição.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`h-full ${boska.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
