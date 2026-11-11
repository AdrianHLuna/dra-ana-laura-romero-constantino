import Link from "next/link";
import type { Route } from "next";
import Image from "next/image";
import { doctor, diseases, services, symptoms } from "@/data";

const MAX_LINKS = 6;

export default function Footer() {
  const columns = [
    { title: "Enfermedades", href: "/enfermedades", items: diseases.map((d) => ({ label: d.name, href: `/enfermedades/${d.slug}` })) },
    { title: "Servicios", href: "/servicios", items: services.map((s) => ({ label: s.name, href: `/servicios/${s.slug}` })) },
    { title: "Síntomas", href: "/sintomas", items: symptoms.map((s) => ({ label: s.name, href: `/sintomas/${s.slug}` })) },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Image
          src="/brand/isotype-3kids.png"
          alt={`${doctor.title} ${doctor.name}`}
          width={298}
          height={100}
          className="h-20 w-auto md:h-24"
        />
        <p className="font-signature mt-5 text-3xl">Dra. Ana Laura Romero</p>
        <p className="mt-1 text-sm opacity-80">{doctor.specialty}</p>
        <address className="mt-4 not-italic text-sm opacity-80">
          {doctor.address}
          <br />
          {doctor.schedule}
          <br />
          Tel: {doctor.phone}
        </address>

        <nav aria-label="Mapa del sitio" className="mt-12 grid gap-8 border-t border-background/20 pt-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <Link href={col.href as Route} className="text-sm font-semibold uppercase tracking-wide opacity-90 hover:opacity-100">
                {col.title}
              </Link>
              <ul className="mt-3 space-y-2 text-sm opacity-70">
                {col.items.slice(0, MAX_LINKS).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href as Route} className="hover:opacity-100 hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
                {col.items.length > MAX_LINKS && (
                  <li>
                    <Link href={col.href as Route} className="underline hover:opacity-100">
                      Ver todos
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-background/20 pt-6 text-xs opacity-70">
          <Link href="/aviso-de-privacidad" className="hover:underline">
            Aviso de Privacidad
          </Link>
        </div>

        <p className="mt-6 max-w-2xl text-xs opacity-60">
          El contenido de este sitio es informativo y educativo; no sustituye una consulta médica profesional.
        </p>
      </div>
    </footer>
  );
}
