import Link from "next/link";
import type { Metadata } from "next";
import { symptoms } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CardImageHeader from "@/components/CardImageHeader";

export const metadata: Metadata = {
  title: "Síntomas",
  description: "Guía de síntomas frecuentes en niños y cuándo acudir a consulta pediátrica.",
  alternates: { canonical: "/sintomas" },
};

export default function SintomasPage() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas" }]} />
      <header className="mb-8 pt-4">
        <h1 className="font-heading text-3xl font-bold text-foreground">Síntomas</h1>
      </header>
      <div className="grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {symptoms.map((symptom, i) => (
          <article key={symptom.id} className="group overflow-hidden rounded-[1.75rem] border border-border bg-background">
            <CardImageHeader src={symptom.image} alt={symptom.name} badge={i + 1} />
            <div className="p-5">
              <h2 className="font-heading font-semibold text-foreground">{symptom.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{symptom.description.slice(0, 120)}...</p>
              <Link
                href={`/sintomas/${symptom.slug}`}
                className="mt-4 flex items-center justify-between rounded-2xl bg-accent px-6 py-4 text-sm leading-snug font-medium text-accent-foreground"
              >
                Ver Orientación Médica
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
