"use client";

import Image from "next/image";
import { useState } from "react";
import { Baby, Heart, Sparkles, Stethoscope } from "lucide-react";

interface DoctorPhotoProps {
  src?: string;
  alt: string;
}

/** Foto de la doctora para "Sobre la doctora" — stamp-card con insignias flotantes, y fallback clínico cálido si el archivo aún no existe. */
export default function DoctorPhoto({ src, alt }: DoctorPhotoProps) {
  const [failed, setFailed] = useState(!src);

  return (
    <div className="relative">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
        <span
          className="animate-float-bob absolute -left-3 top-[10%] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
          style={{ animationDelay: "0.4s", ["--bob-rotate" as string]: "-6deg" }}
        >
          <Stethoscope className="h-5 w-5" />
        </span>
        <span
          className="animate-float-bob absolute -right-3 top-[22%] flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg"
          style={{ animationDelay: "1.8s", ["--bob-rotate" as string]: "5deg" }}
        >
          <Baby className="h-5 w-5" />
        </span>
        <span
          className="animate-float-bob absolute -bottom-3 left-[12%] flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg"
          style={{ animationDelay: "2.9s", ["--bob-rotate" as string]: "-4deg" }}
        >
          <Heart className="h-4 w-4" />
        </span>
        <span
          className="animate-float-bob absolute bottom-[14%] -right-2 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
          style={{ animationDelay: "3.7s", ["--bob-rotate" as string]: "4deg" }}
        >
          <Sparkles className="h-4 w-4" />
        </span>
      </div>

      {failed ? (
        <div
          className="stamp-card flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15"
          role="img"
          aria-label={alt}
        >
          <Stethoscope className="h-12 w-12 text-primary/50" aria-hidden="true" />
        </div>
      ) : (
        <div className="stamp-card relative aspect-[4/5] overflow-hidden bg-muted">
          <Image
            src={src as string}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
            onError={() => setFailed(true)}
          />
        </div>
      )}
    </div>
  );
}
