"use client";

import Image from "next/image";
import { useState } from "react";
import { Stethoscope } from "lucide-react";

interface DoctorPhotoProps {
  src?: string;
  alt: string;
}

/** Foto de la doctora para "Sobre la doctora" — stamp-card, con fallback clínico cálido si el archivo aún no existe. */
export default function DoctorPhoto({ src, alt }: DoctorPhotoProps) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        className="stamp-card flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15"
        role="img"
        aria-label={alt}
      >
        <Stethoscope className="h-12 w-12 text-primary/50" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="stamp-card relative aspect-[4/5] overflow-hidden bg-muted">
      <Image src={src as string} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" onError={() => setFailed(true)} />
    </div>
  );
}
