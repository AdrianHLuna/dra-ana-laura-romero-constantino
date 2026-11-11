"use client";

import Image from "next/image";
import { useState } from "react";
import { Stethoscope } from "lucide-react";

interface CardImageHeaderProps {
  src?: string;
  alt: string;
  aspect?: "video" | "16/10" | "4/3";
  /** Número de folio mostrado en el sello circular rotado (identidad propia de este sitio). */
  badge?: number;
}

const aspectClass: Record<NonNullable<CardImageHeaderProps["aspect"]>, string> = {
  video: "aspect-video",
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
};

/**
 * "Tarjeta de cartilla": imagen con esquinas grandes (`stamp-card`) y un
 * sello circular numerado que sobresale en la esquina superior derecha,
 * rotado, y se endereza en hover (`.stamp-badge`, ver globals.css) — como la
 * estampa de una cartilla de vacunación. Identidad de tarjeta propia de este
 * sitio, distinta de los patrones ya usados en el registro de diseños.
 */
export default function CardImageHeader({ src, alt, aspect = "video", badge }: CardImageHeaderProps) {
  const [failed, setFailed] = useState(!src);

  return (
    <div className="relative">
      {typeof badge === "number" && (
        <span
          className="stamp-badge absolute -right-2 -top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-accent text-sm font-bold text-accent-foreground shadow-md"
          aria-hidden="true"
        >
          {String(badge).padStart(2, "0")}
        </span>
      )}
      {failed ? (
        <div
          className={`${aspectClass[aspect]} stamp-card flex items-center justify-center bg-gradient-to-br from-primary/15 to-secondary/15`}
          role="img"
          aria-label={alt}
        >
          <Stethoscope className="h-10 w-10 text-primary/50" aria-hidden="true" />
        </div>
      ) : (
        <div className={`${aspectClass[aspect]} stamp-card relative overflow-hidden bg-muted`}>
          <Image
            src={src as string}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={() => setFailed(true)}
          />
        </div>
      )}
    </div>
  );
}
