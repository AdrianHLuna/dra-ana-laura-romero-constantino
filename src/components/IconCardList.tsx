import { iconForText } from "@/lib/contentIcons";

interface IconCardListProps {
  items: string[];
  tone?: "default" | "alarm";
}

/** Convierte una lista con viñetas en un grid de tarjetas con ícono contextual (AGENTS.md §1.2). */
export default function IconCardList({ items, tone = "default" }: IconCardListProps) {
  const toneClasses = tone === "alarm" ? "border-secondary/40 bg-secondary/10" : "border-border bg-background";
  const iconColor = tone === "alarm" ? "text-secondary" : "text-primary";

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => {
        const Icon = iconForText(item);
        return (
          <div key={i} className={`flex items-start gap-3 rounded-2xl border p-4 ${toneClasses}`}>
            <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${iconColor}`} aria-hidden="true" />
            <p className="text-sm text-muted-foreground">{item}</p>
          </div>
        );
      })}
    </div>
  );
}
