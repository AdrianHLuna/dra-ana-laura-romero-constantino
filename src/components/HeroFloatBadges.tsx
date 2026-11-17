import { Baby, Heart, Sparkles, Stethoscope } from "lucide-react";

/**
 * Insignias flotantes que suben y bajan muy lento y de forma continua
 * (`animate-float-bob`, ver globals.css) alrededor del retrato del Hero —
 * motivo ambiental propio de este sitio, mecánicamente distinto de la
 * respiración/pulso de escala de otros sitios del proyecto y del giro
 * continuo de `dr-manuel-gonzalez-reyes`. Decorativo, `aria-hidden`.
 */
export default function HeroFloatBadges() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
      <span
        className="animate-float-bob absolute left-[2%] top-[10%] flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg"
        style={{ animationDelay: "0s", ["--bob-rotate" as string]: "-6deg" }}
      >
        <Stethoscope className="h-6 w-6" />
      </span>
      <span
        className="animate-float-bob absolute right-[4%] top-[18%] flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg"
        style={{ animationDelay: "1.6s", ["--bob-rotate" as string]: "5deg" }}
      >
        <Heart className="h-5 w-5" />
      </span>
      <span
        className="animate-float-bob absolute bottom-[12%] left-[6%] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
        style={{ animationDelay: "2.4s", ["--bob-rotate" as string]: "-5deg" }}
      >
        <Baby className="h-6 w-6" />
      </span>
      <span
        className="animate-float-bob absolute bottom-[16%] right-[8%] flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg"
        style={{ animationDelay: "3.4s", ["--bob-rotate" as string]: "4deg" }}
      >
        <Sparkles className="h-4 w-4" />
      </span>
    </div>
  );
}
