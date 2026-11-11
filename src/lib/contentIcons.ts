import {
  Activity,
  Baby,
  Droplets,
  Ear,
  Moon,
  ShieldAlert,
  Stethoscope,
  Syringe,
  Thermometer,
  Wind,
  type LucideIcon,
} from "lucide-react";

/**
 * Heurística de palabras clave → ícono contextual de lucide-react, propia de
 * este sitio (vocabulario pediátrico), para convertir listas con viñetas en
 * grids de tarjetas con ícono (AGENTS.md §1.2 — nunca el mismo ícono
 * repetido en toda la lista).
 */
export function iconForText(text: string): LucideIcon {
  const t = text.toLowerCase();
  if (t.includes("fiebre") || t.includes("temperatura") || t.includes("calentura")) return Thermometer;
  if (t.includes("respir") || t.includes("tos") || t.includes("aire") || t.includes("pulmon")) return Wind;
  if (t.includes("oído") || t.includes("oido") || t.includes("audic") || t.includes("oreja")) return Ear;
  if (t.includes("vacuna")) return Syringe;
  if (t.includes("lactante") || t.includes("bebé") || t.includes("bebe") || t.includes("recién nacido") || t.includes("neonat")) return Baby;
  if (t.includes("sueño") || t.includes("noche") || t.includes("dormir")) return Moon;
  if (t.includes("urgenc") || t.includes("alarma") || t.includes("grave")) return ShieldAlert;
  if (t.includes("orina") || t.includes("líquido") || t.includes("hidrat") || t.includes("deshidrat")) return Droplets;
  if (t.includes("crecimiento") || t.includes("desarrollo") || t.includes("peso") || t.includes("talla")) return Activity;
  return Stethoscope;
}
