import Image from "next/image";
import { doctor } from "@/data";

interface LogoProps {
  /** Alto del isotipo en px. El ancho se ajusta solo (proporción real 1788×603). */
  height?: number;
  className?: string;
  /** Variante de texto junto al isotipo: firma (Caveat) o ninguna. */
  withName?: boolean;
  nameClassName?: string;
}

/**
 * Logo real de marca: el archivo entregado es una composición vertical
 * (isotipo de 3 cuadros de color + nombre en script + "Pediatra" debajo),
 * ilegible si se reduce completa a la altura de un header (AGENTS.md §6).
 * Solución aplicada: se recortó SOLO el isotipo (3 cuadros de color con las
 * siluetas infantiles) a un archivo aparte (`public/brand/isotype-3kids.png`)
 * y el nombre de la doctora se muestra como texto HTML real en `.font-signature`
 * (Caveat, sustituto libre de "Amsterdam", la script real de la guía de marca)
 * — así el nombre siempre es legible sin depender del tamaño de render del
 * isotipo.
 */
export default function Logo({ height = 40, className = "", withName = false, nameClassName = "" }: LogoProps) {
  const width = Math.round((height * 1788) / 603);
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/brand/isotype-3kids.png"
        alt={`${doctor.title} ${doctor.name}`}
        width={width}
        height={height}
        style={{ height, width: "auto" }}
        priority
      />
      {withName && (
        <span className={`font-signature leading-none text-foreground ${nameClassName}`}>
          Dra. Ana Laura Romero
        </span>
      )}
    </span>
  );
}
