import type { Metadata } from "next";
import { Clock, MapPin, MessageCircle, Phone, ShieldAlert } from "lucide-react";
import { doctor } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import MapFacade from "@/components/MapFacade";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Agenda tu cita con ${doctor.title} ${doctor.name} en ${doctor.city}. Dirección, horario y mapa.`,
  alternates: { canonical: "/contacto" },
};

/**
 * Contacto: mapa + riel de información EN COLUMNA (no mapa a todo lo ancho
 * con secciones debajo, patrón ya usado por la mayoría de sitios reales del
 * proyecto) — variación deliberada de "chrome persistente" (AGENTS.md §1,
 * hallazgo 2026-11-07). El riel nunca se superpone al mapa (va al lado, no
 * encima), así que no rompe la regla de §7 sobre tarjetas flotantes.
 */
export default function ContactoPage() {
  const whatsappLink = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, Dra. ${doctor.name}. Me gustaría agendar una cita para mi hijo/a.`
  )}`;

  return (
    <main>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} isDark={false} />

      <header className="px-4 pt-2 pb-6">
        <h1 className="font-heading mx-auto max-w-6xl text-3xl font-bold text-foreground">Contacto</h1>
      </header>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-20 lg:grid-cols-[1fr_340px]">
        <MapFacade address={doctor.address} />

        <div className="space-y-5">
          <div className="stamp-card border border-primary/20 bg-surface p-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
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
        </div>
      </div>
    </main>
  );
}
