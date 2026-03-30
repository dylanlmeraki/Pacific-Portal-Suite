import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Media } from "./Media";

type TrustItem = {
  icon?: ReactNode;
  label: string;
};

type MarketingHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; toHash: `#${string}` };
  trust: TrustItem[];
  background: {
    kind: "image" | "video";
    src: string;
    poster?: string;
    alt?: string;
  };
};

export function MarketingHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  trust,
  background,
}: MarketingHeroProps) {
  function scrollTo(hash: `#${string}`) {
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      className="relative isolate min-h-[96svh] overflow-hidden bg-[color:var(--pe-navy)]"
      data-testid="section-hero"
    >
      <div className="absolute inset-0">
        {background.kind === "image" ? (
          <Media
            kind="image"
            src={background.src}
            alt={background.alt ?? ""}
            priority
            className="h-full w-full object-cover"
            sizes="100vw"
          />
        ) : (
          <Media
            kind="video"
            src={background.src}
            poster={background.poster}
            className="h-full w-full object-cover"
            autoplay
          />
        )}

        <div className="absolute inset-0 bg-[color:var(--pe-navy)]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--pe-navy)] via-[color:var(--pe-navy)]/82 to-[color:var(--pe-navy)]/24" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--pe-navy)] via-[color:var(--pe-navy)]/14 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(13,167,231,0.10),transparent_30%),radial-gradient(circle_at_80%_68%,rgba(56,124,243,0.08),transparent_32%)]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[96svh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pt-36">
        <div className="max-w-[46rem] rounded-3xl border border-white/10 bg-[rgba(10,16,32,0.34)] px-6 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.24)] backdrop-blur-[6px] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="mb-6 inline-flex items-center gap-3">
            <span
              className="h-px w-10 bg-[color:var(--pe-cyan)]"
              aria-hidden="true"
            />
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--pe-cyan)] sm:text-xs">
              {eyebrow}
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-[1.02rem] leading-relaxed text-white/78 sm:text-lg lg:text-[1.22rem]">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
            <Link
              to={primaryCta.to}
              className="inline-flex min-h-[56px] items-center justify-center gap-2.5 rounded-xl bg-[color:var(--pe-orange)] px-8 py-4 text-sm font-bold text-white shadow-[0_16px_36px_rgba(245,117,31,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--pe-orange-bright)] hover:shadow-[0_20px_42px_rgba(245,117,31,0.30)] sm:min-w-[230px] sm:text-base"
              data-testid="link-hero-primary"
            >
              {primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <button
              onClick={() => scrollTo(secondaryCta.toHash)}
              className="inline-flex min-h-[56px] items-center justify-center gap-2.5 rounded-xl border border-white/16 bg-white/7 px-8 py-4 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/12 hover:border-white/24 sm:min-w-[210px] sm:text-base"
              data-testid="button-hero-secondary"
            >
              {secondaryCta.label}
            </button>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-4">
            {trust.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 backdrop-blur-[2px]"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/7 text-[color:var(--pe-cyan)]">
                  {item.icon}
                </div>
                <span className="text-sm font-semibold leading-snug text-white/78">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}

export default MarketingHero;