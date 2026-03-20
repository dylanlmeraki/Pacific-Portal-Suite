// client/src/portals/marketing/components/ServiceCard.tsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { GradientBar } from "./GradientBar";

export type ServiceTheme = "construction" | "engineering" | "stormwater" | "inspections";

export function ServiceCard(props: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  theme: ServiceTheme;
}) {
  const themeMap: Record<ServiceTheme, { gradient: string; icon: string; border: string; accentBg: string }> = {
    construction: {
      gradient: "linear-gradient(90deg, var(--pe-blue), var(--pe-blue-light))",
      icon: "text-[color:var(--pe-blue)]",
      border: "border-[color:rgba(34,83,218,0.16)]",
      accentBg: "bg-[color:rgba(34,83,218,0.06)]",
    },
    engineering: {
      gradient: "linear-gradient(90deg, var(--pe-blue-light), var(--pe-teal))",
      icon: "text-[color:var(--pe-blue-light)]",
      border: "border-[color:rgba(56,124,243,0.16)]",
      accentBg: "bg-[color:rgba(56,124,243,0.06)]",
      },
      inspections: {
        gradient:
          "linear-gradient(90deg, var(--pe-teal), var(--pe-cyan-teal), var(--pe-cyan))",
        icon: "text-[color:var(--pe-teal)]",
        border: "border-[color:rgba(19,197,165,0.16)]",
        accentBg: "bg-[color:rgba(19,197,165,0.06)]",
      },
      stormwater: {
        gradient:
          "linear-gradient(90deg, var(--pe-cyan), var(--pe-blue-light), var(--pe-blue-bright))",
        icon: "text-[color:var(--pe-cyan)]",
        border: "border-[color:rgba(13,167,231,0.16)]",
        accentBg: "bg-[color:rgba(13,167,231,0.06)]",
    },
  };

  const t = themeMap[props.theme];

  return (
    <Link
      to={props.href}
      className={[
        "group block h-full bg-white rounded-lg border overflow-hidden",
        t.border,
        "transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--pe-shadow-md)]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--pe-cyan)] focus-visible:ring-offset-2",
      ].join(" ")}
    >
      <GradientBar height={6} gradientCss={t.gradient} />
      <div className="p-6 flex flex-col h-full">
        <div className={`w-11 h-11 rounded-lg ${t.accentBg} flex items-center justify-center mb-5`}>
          <span className={t.icon} aria-hidden="true">
            {props.icon}
          </span>
        </div>

        <h3 className="text-lg font-extrabold text-[color:var(--pe-text)] mb-2">{props.title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-5">{props.description}</p>

        <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-slate-700 group-hover:gap-3">
          Learn more <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}
