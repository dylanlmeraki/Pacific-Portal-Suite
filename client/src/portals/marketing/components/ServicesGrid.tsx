// client/src/portals/marketing/components/ServicesGrid.tsx
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid(props: { services: Array<React.ComponentProps<typeof ServiceCard>> }) {
  return (
    <section id="services" className="py-16 sm:py-24 bg-[color:var(--pe-surface-2)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[color:var(--pe-blue)]" aria-hidden="true" />
            <span className="text-[color:var(--pe-blue)] text-xs font-bold tracking-[0.2em] uppercase">
              What we do
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[color:var(--pe-text)] tracking-tight mb-3">
            Integrated project delivery
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Engineering and construction planning implemented by our teams of licensed/certified Engineers and construction experts. Helping you ensure on-time, on budget, and full compliance, helping keep everything on track.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {props.services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
