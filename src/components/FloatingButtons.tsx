"use client";

import { Phone, MessageCircle } from "lucide-react";
import { doctor } from "@/data";
import { trackEvent } from "@/lib/analytics";

interface FloatingButtonsProps {
  /** Contexto de la página para el mensaje de WhatsApp. Ej: "fiebre" */
  context?: string;
}

/**
 * Chrome persistente — variado a propósito (AGENTS.md §1, hallazgo
 * 2026-11-07): en vez de dos círculos apilados en la esquina inferior
 * DERECHA (patrón idéntico en 5 sitios reales), aquí es una sola píldora con
 * texto en la esquina inferior IZQUIERDA, con un botón de llamada circular
 * más pequeño superpuesto en su borde superior — otra posición, otra forma,
 * otro tamaño dominante.
 */
const FloatingButtons = ({ context }: FloatingButtonsProps) => {
  const cleanWhatsapp = doctor.whatsapp.replace(/\D/g, "");

  const message = context
    ? `Hola, Dra. ${doctor.name}. Vi su página sobre ${context} y me gustaría agendar una consulta.`
    : `Hola, Dra. ${doctor.name}. Vi su página web y me gustaría agendar una consulta.`;

  const whatsappLink = `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-20 left-4 z-40 hidden md:block lg:bottom-6">
      <div className="relative">
        <a
          href={`tel:${doctor.phone}`}
          aria-label="Llamar al consultorio"
          onClick={() => trackEvent("clic_llamar", { source: "floating" })}
          className="absolute -top-4 -right-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-110"
        >
          <Phone size={16} aria-hidden="true" />
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Agendar por WhatsApp"
          onClick={() => trackEvent("clic_whatsapp", { source: "floating" })}
          className="flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-4 pr-5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle size={20} aria-hidden="true" />
          Agendar
        </a>
      </div>
    </div>
  );
};

export default FloatingButtons;
