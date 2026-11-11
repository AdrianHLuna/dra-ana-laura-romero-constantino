import Link from "next/link";
import type { Route } from "next";
import { Clock, MapPin, MessageCircle, Phone, ShieldAlert } from "lucide-react";
import { doctor } from "@/data";
import Logo from "./Logo";

interface RelatedItem {
  name: string;
  href: Route;
}

interface DetailSidebarProps {
  related?: RelatedItem[];
}

/**
 * Sidebar fijo (sticky en desktop) para páginas de detalle: tarjeta de CTA
 * de la doctora + ubicación/horario + urgencias + Relacionados como
 * mini-tarjetas. Mismo principio ya probado en el proyecto, con el
 * vocabulario visual propio de este sitio (stamp-card, azul/rosa/amarillo).
 */
export default function DetailSidebar({ related = [] }: DetailSidebarProps) {
  const whatsappLink = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <aside className="space-y-5 lg:sticky lg:top-28">
      <div className="stamp-card border border-primary/20 bg-surface p-6 text-center">
        <Logo height={36} className="mx-auto" />
        <p className="mt-3 font-heading text-lg font-semibold text-foreground">
          {doctor.title} {doctor.name}
        </p>
        <p className="text-sm text-muted-foreground">{doctor.specialistTitle}</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Agendar por WhatsApp
        </a>
        <a
          href={`tel:${doctor.phone}`}
          className="mt-3 flex items-center justify-center gap-2 rounded-full border border-primary/30 px-5 py-3 text-sm font-semibold text-primary"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Llamar al consultorio
        </a>
      </div>

      <div className="stamp-card border border-border bg-background p-6">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm text-muted-foreground">{doctor.address}</p>
        </div>
        <div className="mt-4 flex items-start gap-3">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm text-muted-foreground">{doctor.schedule}</p>
        </div>
        <a
          href={doctor.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
        >
          Cómo llegar
        </a>
      </div>

      {doctor.emergencyPhone && (
        <div className="stamp-card border border-secondary/40 bg-secondary/10 p-6">
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-foreground">¿Es una urgencia?</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Esto no sustituye al 911 ni a una sala de urgencias si tu hijo está en riesgo inmediato.
              </p>
              <a href={`tel:${doctor.emergencyPhone}`} className="mt-2 block text-sm font-semibold text-secondary">
                Llamar ahora: {doctor.emergencyPhone}
              </a>
            </div>
          </div>
        </div>
      )}

      {related.length > 0 && (
        <div className="stamp-card border border-border bg-background p-6">
          <p className="font-heading text-sm font-semibold text-foreground">Relacionados</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-border px-3 py-3 text-center text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
