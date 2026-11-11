import Link from "next/link";
import type { Route } from "next";
import { Home, Activity, Stethoscope, HeartPulse, MapPin, Phone, MessageCircle } from "lucide-react";
import { doctor } from "@/data";
import Logo from "./Logo";

const navItems: { label: string; href: Route; icon: typeof Home }[] = [
  { label: "Inicio", href: "/", icon: Home },
  { label: "Enfermedades", href: "/enfermedades", icon: Activity },
  { label: "Servicios", href: "/servicios", icon: Stethoscope },
  { label: "Síntomas", href: "/sintomas", icon: HeartPulse },
  { label: "Contacto", href: "/contacto", icon: MapPin },
];

/**
 * Riel de navegación lateral — solo escritorio (`lg:` y superior), fijo a la
 * DERECHA (variación explícita pendiente en el registro de diseños: Franco
 * ya usó un riel a la izquierda con tratamiento mecánico/recto; este usa
 * cápsulas redondeadas sobre fondo crema, icono+texto siempre visible). En
 * mobile/tablet cae a `Header.tsx` + `MobileMenu.tsx`. `layout.tsx` reserva
 * el espacio con `lg:pr-40` en el contenido.
 */
export default function SideNav() {
  const whatsappHref = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, Dra. ${doctor.name}. Me gustaría agendar una cita para mi hijo/a.`
  )}`;

  return (
    <nav
      aria-label="Principal"
      className="fixed right-0 top-0 z-40 hidden h-screen w-40 flex-col items-center justify-between overflow-y-auto border-l border-border bg-surface py-6 lg:flex"
    >
      <Link href="/" aria-label={`${doctor.title} ${doctor.name} — Inicio`}>
        <Logo height={34} />
      </Link>

      <ul className="flex w-full flex-col items-stretch gap-1.5 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex w-full flex-col items-center gap-1.5 rounded-2xl px-2 py-3 text-foreground/70 transition-colors duration-150 hover:bg-primary/10 hover:text-primary"
              >
                <Icon size={18} aria-hidden="true" />
                <span className="text-center text-[11px] font-medium leading-tight">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex w-full flex-col items-stretch gap-2 px-3">
        <a
          href={`tel:${doctor.phone}`}
          className="flex items-center justify-center gap-1.5 rounded-full border border-primary/30 px-2 py-2.5 text-xs font-semibold text-primary transition-colors duration-150 hover:bg-primary/10"
        >
          <Phone size={16} aria-hidden="true" /> Llamar
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-2 py-2.5 text-xs font-semibold text-white"
        >
          <MessageCircle size={16} aria-hidden="true" /> WhatsApp
        </a>
      </div>
    </nav>
  );
}
