import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CardImageHeader from "@/components/CardImageHeader";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Servicios pediátricos ofrecidos en consulta, desde control del niño sano hasta vacunación.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]} />
      <header className="mb-8 pt-4">
        <h1 className="font-heading text-3xl font-bold text-foreground">Servicios</h1>
      </header>
      <div className="grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <article key={service.id} className="group overflow-hidden rounded-[1.75rem] border border-border bg-background">
            <CardImageHeader src={service.image} alt={service.name} badge={i + 1} />
            <div className="p-5">
              <h2 className="font-heading font-semibold text-foreground">{service.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{service.description.slice(0, 120)}</p>
              <Link
                href={`/servicios/${service.slug}`}
                className="mt-4 flex items-center justify-between rounded-2xl bg-secondary px-6 py-4 text-sm leading-snug font-medium text-secondary-foreground"
              >
                Ver Ficha del Servicio
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
