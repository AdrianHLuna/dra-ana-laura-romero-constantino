import type { Metadata } from "next";
import type { Route } from "next";
import { notFound } from "next/navigation";
import { diseases, services } from "@/data";
import { generateServiceSchemas } from "@/lib/schemas";
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
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `/servicios/${service.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function ServicePage(props: PageProps<"/servicios/[slug]">) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedConditions = diseases.filter((d) => service.relatedConditions?.includes(d.id));
  const related = relatedConditions.map((d) => ({ name: d.name, href: `/enfermedades/${d.slug}` as Route }));

  return (
    <>
      <StructuredData data={generateServiceSchemas(service)} />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: service.name },
        ]}
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 lg:grid-cols-[300px_1fr]">
        <DetailSidebar related={related} />

        <article>
          <header className="mb-6">
            <CardImageHeader src={service.image} alt={service.name} aspect="16/10" />
            <h1 className="font-heading mt-6 text-3xl font-bold text-foreground">{service.name}</h1>
            <div className="mt-3">
              <MedicalReviewByline lastReviewed={service.lastReviewed} />
            </div>
          </header>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              ¿En qué consiste {service.name.toLowerCase()}?
            </h2>
            <p className="mt-3 text-muted-foreground">{service.longDescription}</p>
          </section>

          {service.technicalSpecs && (
            <section className="mt-10">
              <h2 className="font-heading text-xl font-semibold text-foreground">Datos Técnicos</h2>
              <dl className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {Object.entries(service.technicalSpecs).map(([key, value]) => (
                  <div key={key} className="rounded-2xl bg-surface p-4">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{key}</dt>
                    <dd className="mt-1 font-medium text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <section className="mt-10">
            <h2 className="font-heading text-xl font-semibold text-foreground">Beneficios</h2>
            <div className="mt-4">
              <IconCardList items={service.benefits} />
            </div>
          </section>

          {service.postOpRecommendations.length > 0 && (
            <section className="mt-10">
              <h2 className="font-heading text-xl font-semibold text-foreground">Cuidados Posteriores</h2>
              <div className="mt-4">
                <IconCardList items={service.postOpRecommendations} />
              </div>
            </section>
          )}

          {service.faqs && service.faqs.length > 0 && (
            <section className="mt-10">
              <h2 className="font-heading text-xl font-semibold text-foreground">Preguntas Frecuentes</h2>
              <div className="mt-4">
                <FaqAccordion faqs={service.faqs} />
              </div>
            </section>
          )}

          {service.priceRange && (
            <section className="stamp-card mt-10 border border-secondary/30 bg-surface p-6">
              <h2 className="font-heading text-lg font-semibold text-foreground">Precio</h2>
              <p className="mt-2 text-muted-foreground">{service.priceRange}</p>
            </section>
          )}
        </article>
      </div>

      <FloatingButtons context={service.name.toLowerCase()} />
    </>
  );
}
