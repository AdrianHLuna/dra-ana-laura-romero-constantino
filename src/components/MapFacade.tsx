interface MapFacadeProps {
  address: string;
  className?: string;
}

/**
 * Mapa real e interactivo desde la primera carga, sin `loading="lazy"`
 * (AGENTS.md §7 — reglas funcionales intactas). Tamaño/posición variados a
 * propósito (AGENTS.md §1, hallazgo 2026-11-07): en vez del bloque
 * `h-[60vh] w-full ... md:h-[70vh]` idéntico en 5 sitios reales, aquí el
 * mapa vive en una columna junto a un riel de información (ver
 * `/contacto/page.tsx`), con una altura fija más baja en vez de una fracción
 * del viewport, y esquinas redondeadas en vez de ir a sangre completa.
 */
export default function MapFacade({ address, className = "" }: MapFacadeProps) {
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <div className={`stamp-card h-[320px] w-full overflow-hidden bg-muted sm:h-[420px] lg:h-full lg:min-h-[480px] ${className}`}>
      <iframe
        src={mapsEmbedUrl}
        className="h-full w-full border-0"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación del consultorio"
      />
    </div>
  );
}
