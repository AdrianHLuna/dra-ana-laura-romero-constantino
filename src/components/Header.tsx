import Link from "next/link";
import type { Route } from "next";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const navItems: { label: string; href: Route }[] = [
  { label: "Inicio", href: "/" },
  { label: "Enfermedades", href: "/enfermedades" },
  { label: "Servicios", href: "/servicios" },
  { label: "Síntomas", href: "/sintomas" },
  { label: "Contacto", href: "/contacto" },
];

/**
 * Header universal (CTA izquierda / logo centro / nav derecha), visible en
 * todos los breakpoints. Reemplaza el intento inicial de riel lateral fijo
 * (`SideNav.tsx`, eliminado): nunca se llegó a importar en `layout.tsx`, así
 * que escritorio se había quedado sin navegación y sin franja de
 * credenciales/COFEPRIS. La franja vive aquí arriba del todo para estar
 * siempre visible en cualquier tamaño de pantalla.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="bg-primary/5 px-4 py-1 text-center text-xs text-muted-foreground">
        {formatCredentials(doctor)}
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-3">
        <div className="col-start-1 flex items-center gap-2 md:hidden">
          <a
            href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white"
          >
            WhatsApp
          </a>
          <MobileMenu items={navItems} />
        </div>

        <Link href="/" aria-label={`${doctor.title} ${doctor.name}`} className="col-start-2 justify-self-center">
          <Logo height={34} />
        </Link>

        <nav aria-label="Principal" className="col-start-3 hidden items-center justify-end gap-5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 transition-colors duration-150 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
