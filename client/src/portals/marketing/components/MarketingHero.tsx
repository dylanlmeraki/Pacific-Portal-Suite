// client/src/portals/marketing/components/MarketingHero.tsx
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Media } from "./Media";

export function MarketingHero(props: {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; toHash: `#${string}` };
  trust: { icon?: React.ReactNode; label: string }[];
  background: { kind: "image" | "video"; src: string; poster?: string; alt?: string };
}) {
  function scrollTo(hash: `#${string}`) {
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="relative min-h-[90svh] flex items-center overflow-hidden bg-[color:var(--pe-navy)]">
      <div className="absolute inset-0">
        {props.background.kind === "image" ? (
          <Media
            kind="image"
            src={props.background.src}
            alt={props.background.alt ?? ""}
            priority
            className="w-full h-full object-cover"
            sizes="100vw"
          />
        ) : (
          <Media
            kind="video"
            src={props.background.src}
            poster={props.background.poster}
            className="w-full h-full object-cover opacity-90"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--pe-navy)] via-[color:var(--pe-navy)]/90 to-[color:var(--pe-navy)]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--pe-navy)] via-transparent to-transparent opacity-70" />
      </div>

      {/* Subtle technical grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-28 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-10 h-px bg-[color:var(--pe-cyan)]" aria-hidden="true" />
            <span className="text-[color:var(--pe-cyan)] text-xs font-bold tracking-[0.22em] uppercase">
              {props.eyebrow}
            </span>
          </div>

          <h1 className="text-white font-extrabold tracking-tight leading-[1.06] text-4xl sm:text-5xl lg:text-6xl mb-6">
            {props.title}
          </h1>

          <p className="text-white/65 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            {props.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              to={props.primaryCta.to}
              className="inline-flex items-center justify-center gap-2.5
                         bg-[color:var(--pe-orange)]
                         hover:bg-[color:var(--pe-orange-bright)]
                         text-white font-bold px-7 py-3.5 rounded-md
                         shadow-sm"
            >
              {props.primaryCta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => scrollTo(props.secondaryCta.toHash)}
              className="inline-flex items-center justify-center gap-2.5
                         bg-white/10 hover:bg-white/15 text-white font-bold px-7 py-3.5 rounded-md
                         border border-white/15"
            >
              {props.secondaryCta.label}
            </button>
          </div>

          <ul className="flex flex-col sm:flex-row gap-5 sm:gap-8">
            {props.trust.map((t) => (
              <li key={t.label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-[color:var(--pe-cyan)]" aria-hidden="true">
                    {t.icon}
                  </span>
                </div>
                <span className="text-sm text-white/60 font-semibold">{t.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
