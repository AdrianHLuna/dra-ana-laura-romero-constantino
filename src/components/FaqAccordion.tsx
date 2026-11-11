interface Faq {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: Faq[];
}

/** Acordeón real con <details>/<summary>, accesible sin JavaScript. */
export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <details key={i} className="group rounded-2xl border border-border bg-background p-5 open:border-primary/40">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
            {faq.question}
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
