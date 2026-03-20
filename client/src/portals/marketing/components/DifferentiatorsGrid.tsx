export function DifferentiatorsGrid(props: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: { icon?: React.ReactNode; title: string; body: string }[];
}) {
  return (
    <section className="py-16 sm:py-24 bg-[color:var(--pe-surface)]" data-testid="section-differentiators">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-10">
          {props.eyebrow && (
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[color:var(--pe-blue)]" aria-hidden="true" />
              <span className="text-[color:var(--pe-blue)] text-xs font-bold tracking-[0.2em] uppercase">
                {props.eyebrow}
              </span>
            </div>
          )}

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[color:var(--pe-text)] tracking-tight mb-3">
            {props.title}
          </h2>

          {props.subtitle && (
            <p className="text-slate-600 leading-relaxed">{props.subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {props.items.map((i) => (
            <div
              key={i.title}
              className="bg-white rounded-lg border border-[color:var(--pe-border)] p-7
                         hover:shadow-[var(--pe-shadow-sm)] transition-shadow"
            >
              <div className="flex items-start gap-4">
                {i.icon && (
                  <div
                    className="w-11 h-11 rounded-lg bg-[color:var(--pe-surface-2)]
                               flex items-center justify-center border border-[color:var(--pe-border)]"
                    aria-hidden="true"
                  >
                    <span className="text-[color:var(--pe-blue)]">{i.icon}</span>
                  </div>
                )}

                <div>
                  <h3 className="font-extrabold text-[color:var(--pe-text)] mb-2">{i.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{i.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
