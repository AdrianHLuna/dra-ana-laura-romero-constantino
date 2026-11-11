import Link from "next/link";
import { doctor, diseases, services, symptoms } from "@/data";
import { generateHomeSchemas } from "@/lib/schemas";
import { formatCredentials } from "@/lib/credentials";
import StructuredData from "@/components/StructuredData";
import CardImageHeader from "@/components/CardImageHeader";
import HeroBlobPhoto from "@/components/HeroBlobPhoto";
import HeroFloatBadges from "@/components/HeroFloatBadges";
import DoctorPhoto from "@/components/DoctorPhoto";
import AnimatedStat from "@/components/AnimatedStat";
import InstitutionBadge from "@/components/InstitutionBadge";
import { Banknote, CreditCard, Landmark, MessageCircle } from "lucide-react";

const paymentIcons: Record<string, typeof Banknote> = {
  Efectivo: Banknote,
  Transferencia: Landmark,
  "Tarjeta de débito": CreditCard,
};

export default function Home() {
  const whatsappLink = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, Dra. ${doctor.name}. Me gustaría agendar una cita para mi hijo/a.`
  )}`;

  return (
    <>
      <StructuredData data={generateHomeSchemas()} />

      {/* Hero: split asimétrico con un blob orgánico (no anillos, no díptico,
          no panel recto) y 3 insignias flotantes que suben/bajan sin parar. */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-surface to-background px-4 py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
              {doctor.specialistTitle} en {doctor.city}
            </span>
            <h1 className="font-heading mt-5 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Acompañando el crecimiento de tu hijo, en cada etapa
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">{doctor.philosophy}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Agendar por WhatsApp
              </a>
              <Link
                href="/contacto"
                className="flex items-center gap-2 rounded-full border border-primary/30 px-7 py-4 font-semibold text-primary"
              >
                Ver ubicación y horario
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">{formatCredentials(doctor)}</p>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <HeroFloatBadges />
            <HeroBlobPhoto alt={`${doctor.title} ${doctor.name}`} />
          </div>
        </div>
      </section>

      {doctor.stats && doctor.stats.length > 0 && (
        <section aria-labelledby="stats-heading" className="border-y border-border bg-surface px-4 py-12">
          <h2 id="stats-heading" className="sr-only">
            Cifras del consultorio
          </h2>
          <div className="mx-auto grid max-w-4xl grid-cols-3 gap-6 text-center">
            {doctor.stats.map((stat, i) => (
              <AnimatedStat key={i} value={stat.value} label={stat.label} />
            ))}
          </div>
        </section>
      )}

      <section aria-labelledby="about-heading" className="px-4 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.6fr] md:items-start">
          <DoctorPhoto alt={`${doctor.title} ${doctor.name}`} />
          <div>
            <h2 id="about-heading" className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Sobre {doctor.title} {doctor.name}
            </h2>
            <p className="mt-4 text-muted-foreground">{doctor.bio}</p>
            <p className="mt-4 text-xs text-muted-foreground">{formatCredentials(doctor)}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="certifications-heading" className="bg-surface px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 id="certifications-heading" className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Certificaciones y Formación
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {doctor.certifications.map((cert, i) => (
              <InstitutionBadge key={`c-${i}`} name={cert.name} institution={cert.institution} year={cert.year} />
            ))}
            {doctor.education.map((ed, i) => (
              <InstitutionBadge
                key={`e-${i}`}
                name={ed.degree}
                institution={ed.institution}
                year={ed.year}
                logoSrc={
                  ed.institution.includes("Autónoma de Chiapas")
                    ? "/institution-logos/unach.png"
                    : ed.institution.includes("Nacional Autónoma de México")
                      ? "/institution-logos/unam.png"
                      : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="diseases-heading" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <h2 id="diseases-heading" className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Enfermedades que Atendemos
            </h2>
            <Link href="/enfermedades" className="shrink-0 text-sm font-semibold text-primary hover:underline">
              Ver todas
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diseases.slice(0, 6).map((disease, i) => (
              <article key={disease.id} className="group overflow-hidden rounded-[1.75rem] border border-border bg-background">
                <CardImageHeader src={disease.image} alt={disease.name} badge={i + 1} />
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground">{disease.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{disease.description.slice(0, 110)}…</p>
                  <Link
                    href={`/enfermedades/${disease.slug}`}
                    className="mt-4 flex items-center justify-between rounded-2xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground"
                  >
                    Ver guía médica
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="services-heading" className="bg-surface px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <h2 id="services-heading" className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Servicios
            </h2>
            <Link href="/servicios" className="shrink-0 text-sm font-semibold text-primary hover:underline">
              Ver todos
            </Link>
          </div>
          <div className="mt-8 flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {services.map((service, i) => (
              <article
                key={service.id}
                className="group w-72 shrink-0 overflow-hidden rounded-[1.75rem] border border-border bg-background"
              >
                <CardImageHeader src={service.image} alt={service.name} badge={i + 1} />
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground">{service.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description.slice(0, 90)}…</p>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="mt-4 flex items-center justify-between rounded-2xl bg-secondary px-6 py-3.5 text-sm font-medium text-secondary-foreground"
                  >
                    Ver ficha
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="symptoms-heading" className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-end justify-between gap-4">
            <h2 id="symptoms-heading" className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Síntomas
            </h2>
            <Link href="/sintomas" className="shrink-0 text-sm font-semibold text-primary hover:underline">
              Ver todos
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {symptoms.map((symptom) => (
              <Link
                key={symptom.id}
                href={`/sintomas/${symptom.slug}`}
                className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/15"
              >
                {symptom.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="price-heading" className="bg-surface px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="price-heading" className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Precio de Consulta
          </h2>
          <p className="font-heading mt-4 text-4xl font-bold text-primary">${doctor.consultationPrice} MXN</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {doctor.paymentMethods.map((method) => {
              const Icon = paymentIcons[method] ?? Banknote;
              return (
                <span
                  key={method}
                  className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground"
                >
                  <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  {method}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="cta-heading" className="relative overflow-hidden px-4 py-20 text-center">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        />
        <div aria-hidden="true" className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <h2 id="cta-heading" className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Agenda la próxima consulta de tu hijo
          </h2>
          <p className="mt-3 text-muted-foreground">
            {doctor.title} {doctor.name} te acompaña desde el control del niño sano hasta la atención de
            enfermedades comunes de la infancia.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Agendar Cita Ahora
          </a>
        </div>
      </section>
    </>
  );
}
