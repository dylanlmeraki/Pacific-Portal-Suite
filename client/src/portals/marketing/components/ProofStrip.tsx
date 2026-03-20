export function ProofStrip(props: {
  items: { icon?: React.ReactNode; label: string }[];
}) {
  return (
    <section className="bg-[color:var(--pe-surface)] border-b border-[color:var(--pe-border)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6">
        <ul className="flex flex-wrap gap-x-6 gap-y-3 items-center justify-center sm:justify-start">
          {props.items.map((i) => (
            <li
              key={i.label}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600"
            >
              <span aria-hidden="true" className="text-[color:var(--pe-cyan)]">
                {i.icon}
              </span>
              {i.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
