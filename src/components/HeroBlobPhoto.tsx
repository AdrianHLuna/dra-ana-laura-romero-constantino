"use client";

import Image from "next/image";
import { useState } from "react";
import { Baby } from "lucide-react";

interface HeroBlobPhotoProps {
  src?: string;
  alt: string;
}

/**
 * Retrato del Hero dentro de una forma "blob" orgánica (`border-radius`
 * irregular vía `.blob-shape`, ver globals.css) — identidad propia de este
 * sitio, distinta del anillo de Martha, el díptico de Franco, el
 * `arch-frame` de María Argelia y el panel oscuro con anillo de Manuel.
 * Con fallback cálido cuando aún no hay foto real de la doctora.
 */
export default function HeroBlobPhoto({ src, alt }: HeroBlobPhotoProps) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        className="blob-shape flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-primary/25 via-secondary/20 to-accent/25"
        role="img"
        aria-label={alt}
      >
        <Baby className="h-20 w-20 text-primary/60" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="blob-shape relative aspect-[4/5] w-full overflow-hidden bg-muted">
      <Image src={src as string} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 90vw, 45vw" priority onError={() => setFailed(true)} />
    </div>
  );
}
