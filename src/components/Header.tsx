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
 * Barra superior — SOLO móvil/tablet (`lg:hidden`); en escritorio la
 * reemplaza `SideNav.tsx`, un riel fijo a la DERECHA (variación pendiente
 * registrada en `.agents/rules/registro-disenos.md`: Franco ya puso su riel
 * a la izquierda). La franja de credenciales/COFEPRIS vive aparte en
 * `layout.tsx` para estar siempre visible también en escritorio.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur lg:hidden">
      <div className="bg-primary/5 px-4 py-1 text-center text-xs text-muted-foreground">
        {formatCredentials(doctor)}
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <Link href="/" aria-label={`${doctor.title} ${doctor.name}`}>
          <Logo height={34} />
        </Link>
        <div className="flex items-center gap-2">
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
      </div>
    </header>
  );
}
