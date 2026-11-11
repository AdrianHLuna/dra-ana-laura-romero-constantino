import Image from "next/image";

interface InstitutionBadgeProps {
  name: string;
  institution: string;
  year?: string;
  /** Logo oficial real, cuando se pudo confirmar la fuente (AGENTS.md §6). */
  logoSrc?: string;
}

function initials(text: string): string {
  return text
    .split(/\s+/)
    .filter((w) => w.length > 2 || /^[A-ZÁÉÍÓÚÑ]/.test(w))
    .slice(0, 3)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * Sello de institución: logo oficial real cuando se pudo confirmar la fuente
 * (UNAM/UNACH, descargados de Wikimedia Commons, dominio público) — sello
 * genérico con siglas cuando no (AGENTS.md §6, nunca un logo adivinado).
 */
export default function InstitutionBadge({ name, institution, year, logoSrc }: InstitutionBadgeProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-muted p-2">
        {logoSrc ? (
          <Image src={logoSrc} alt={institution} width={40} height={40} className="h-full w-full object-contain" />
        ) : (
          <span className="text-xs font-bold text-primary">{initials(institution)}</span>
        )}
      </div>
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {institution}
          {year ? ` · ${year}` : ""}
        </p>
      </div>
    </div>
  );
}
