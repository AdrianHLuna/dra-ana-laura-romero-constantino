import type { Metadata } from "next";
import type { Route } from "next";
import { notFound } from "next/navigation";
import { diseases, services, symptoms } from "@/data";
import { generateDiseaseSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import FloatingButtons from "@/components/FloatingButtons";
import CardImageHeader from "@/components/CardImageHeader";
import DetailSidebar from "@/components/DetailSidebar";
import IconCardList from "@/components/IconCardList";
import FaqAccordion from "@/components/FaqAccordion";

export const dynamicParams = false;

export function generateStaticParams() {
  return diseases.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(props: PageProps<"/enfermedades/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) return {};

  return {
    title: disease.seo.title,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
    alternates: { canonical: `/enfermedades/${disease.slug}` },
    openGraph: {
      title: disease.seo.title,
      description: disease.seo.description,
      url: `/enfermedades/${disease.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function DiseasePage(props: PageProps<"/enfermedades/[slug]">) {
  const { slug } = await props.params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) notFound();

  const relatedServices = services.filter((s) => disease.relatedServices?.includes(s.id));
  const relatedSymptoms = symptoms.filter((s) => disease.relatedSymptoms?.includes(s.id));
  const related = [
    ...relatedServices.map((s) => ({ name: s.name, href: `/servicios/${s.slug}` as Route })),
    ...relatedSymptoms.map((s) => ({ name: s.name, href: `/sintomas/${s.slug}` as Route })),
  ];

  return (
    <>
      <StructuredData data={generateDiseaseSchemas(disease)} />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Enfermedades", href: "/enfermedades" },
          { label: disease.name },
        ]}
      />

      {/* Sidebar a la IZQUIERDA — variación deliberada respecto al patrón
          "aside después del artículo" usado en el resto del proyecto. */}
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 lg:grid-cols-[300px_1fr]">
        <DetailSidebar related={related} />

        <article>
          <header className="mb-6">
            <CardImageHeader src={disease.image} alt={disease.name} aspect="16/10" />
            <h1 className="font-heading mt-6 text-3xl font-bold text-foreground">{disease.name}</h1>
            <div className="mt-3">
              <MedicalReviewByline lastReviewed={disease.lastReviewed} />
            </div>
          </header>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              ¿Qué es {disease.name.toLowerCase()}?
            </h2>
            <p className="mt-3 text-muted-foreground">{disease.description}</p>
          </section>

          <section className="mt-10">
            <h2 className="font-heading text-xl font-semibold text-foreground">Síntomas</h2>
            <div className="mt-4">
              <IconCardList items={disease.symptoms} />
            </div>
          </section>

          <section className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Causas</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {disease.causes.map((c, i) => (
                  <li key={i} className="rounded-xl border-l-2 border-primary/40 bg-surface py-2 pl-3">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Factores de Riesgo</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {disease.riskFactors.map((r, i) => (
                  <li key={i} className="rounded-xl border-l-2 border-secondary/50 bg-surface py-2 pl-3">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {disease.mexicoStats && (
            <section className="stamp-card mt-10 border border-primary/15 bg-surface p-6">
              <h2 className="font-heading text-lg font-semibold text-foreground">Estadísticas en México</h2>
              <p className="mt-2 text-sm text-muted-foreground">{disease.mexicoStats}</p>
            </section>
          )}

          <section className="mt-10">
            <h2 className="font-heading text-xl font-semibold text-foreground">Complicaciones si no se trata</h2>
            <div className="mt-4">
              <IconCardList items={disease.complications} tone="alarm" />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-heading text-xl font-semibold text-foreground">Tratamientos</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {disease.treatments.map((t, i) => (
                <li key={i} className="rounded-xl border-l-2 border-primary/40 bg-surface py-2 pl-3">
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-heading text-xl font-semibold text-foreground">Preguntas Frecuentes</h2>
            <div className="mt-4">
              <FaqAccordion faqs={disease.faqs} />
            </div>
          </section>

          {disease.sources && disease.sources.length > 0 && (
            <section className="mt-10 text-sm text-muted-foreground">
              <h2 className="font-semibold text-foreground">Fuentes</h2>
              <ul className="mt-1 list-inside list-disc">
                {disease.sources.map((src, i) => (
                  <li key={i}>{src}</li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </div>

      <FloatingButtons context={disease.name.toLowerCase()} />
    </>
  );
}
