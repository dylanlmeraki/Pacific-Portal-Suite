import { ReactNode } from "react";

type DifferentiatorItem = {
  icon: ReactNode;
  title: string;
  body: string;
};

interface DifferentiatorsGridProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: DifferentiatorItem[];
}

export function DifferentiatorsGrid({
  eyebrow,
  title,
  subtitle,
  items,
}: DifferentiatorsGridProps) {
  return (
    <section
      className="bg-white py-16 sm:py-20 lg:py-24"
      data-testid="section-differentiators"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          {eyebrow ? (
            <div className="inline-flex items-center gap-2 mb-4">
              <span
                className="w-8 h-px bg-[color:var(--pe-blue)]"
                aria-hidden="true"
              />
              <span className="text-[color:var(--pe-blue)] text-xs font-bold tracking-[0.2em] uppercase">
                {eyebrow}
              </span>
            </div>
          ) : null}

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[color:var(--pe-text)] tracking-tight mb-4"
            data-testid="text-differentiators-title"
          >
            {title}
          </h2>

          {subtitle ? (
            <p
              className="text-slate-600 text-base sm:text-lg leading-relaxed"
              data-testid="text-differentiators-subtitle"
            >
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[color:var(--pe-border)] bg-[color:var(--pe-surface)] p-6 sm:p-7 shadow-[var(--pe-shadow-sm)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--pe-shadow-md)]"
              data-testid={`card-differentiator-${item.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[color:rgba(34,83,218,0.08)] text-[color:var(--pe-blue)]">
                {item.icon}
              </div>

              <h3 className="text-lg font-extrabold text-[color:var(--pe-text)] mb-3">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DifferentiatorsGrid;