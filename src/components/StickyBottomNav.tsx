"use client";

import { Phone, MessageCircle, MapPin } from "lucide-react";
import { doctor } from "@/data";
import { trackEvent } from "@/lib/analytics";

/**
 * Chrome persistente — variado a propósito (AGENTS.md §1, hallazgo
 * 2026-11-07): en vez de una barra de 2 segmentos a todo lo ancho pegada al
 * borde inferior (patrón idéntico/hash-idéntico en 4 de 5 sitios reales),
 * aquí es un "dock" flotante redondeado y centrado, con margen respecto a
 * los bordes, 3 botones icono-only (Llamar / WhatsApp destacado al centro /
 * Ubicación) — otra forma, otra posición, otro número de acciones.
 */
export default function StickyBottomNav() {
  const cleanWhatsapp = doctor.whatsapp.replace(/\D/g, "");
  const message = encodeURIComponent(
    `Hola, Dra. ${doctor.name}. Vi su página web y me gustaría agendar una consulta.`
  );

  return (
    <div
      className="fixed inset-x-0 bottom-3 z-50 flex justify-center md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-1 rounded-full border border-border bg-background/95 p-1.5 shadow-xl backdrop-blur">
        <a
          href={`tel:${doctor.phone}`}
          aria-label="Llamar al consultorio"
          onClick={() => trackEvent("clic_llamar", { source: "sticky_nav" })}
          className="flex h-11 w-11 items-center justify-center rounded-full text-primary"
        >
          <Phone size={19} aria-hidden="true" />
        </a>
        <a
          href={`https://wa.me/${cleanWhatsapp}?text=${message}`}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEvent("clic_agendar_cita", { source: "sticky_nav" })}
          aria-label="Agendar por WhatsApp"
          className="flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white"
        >
          <MessageCircle size={18} aria-hidden="true" />
          Agendar
        </a>
        <a
          href={doctor.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Cómo llegar"
          className="flex h-11 w-11 items-center justify-center rounded-full text-primary"
        >
          <MapPin size={19} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
