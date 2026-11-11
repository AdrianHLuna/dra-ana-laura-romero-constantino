import Link from "next/link";
import type { Metadata } from "next";
import { diseases } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CardImageHeader from "@/components/CardImageHeader";

export const metadata: Metadata = {
  title: "Enfermedades que Atendemos",
  description: "Catálogo de enfermedades pediátricas atendidas en consulta, con información clara para los padres.",
  alternates: { canonical: "/enfermedades" },
};

export default function EnfermedadesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades" }]} />
      <header className="mb-8 pt-4">
        <h1 className="font-heading text-3xl font-bold text-foreground">Enfermedades que Atendemos</h1>
      </header>
      <div className="grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {diseases.map((disease, i) => (
          <article key={disease.id} className="group overflow-hidden rounded-[1.75rem] border border-border bg-background">
            <CardImageHeader src={disease.image} alt={disease.name} badge={i + 1} />
            <div className="p-5">
              <h2 className="font-heading font-semibold text-foreground">{disease.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{disease.description.slice(0, 120)}...</p>
              <Link
                href={`/enfermedades/${disease.slug}`}
                className="mt-4 flex items-center justify-between rounded-2xl bg-primary px-6 py-4 text-sm leading-snug font-medium text-primary-foreground"
              >
                Ver Guía Médica
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
