import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { GradientBar } from "./GradientBar";

export type ServiceTheme = "construction" | "engineering" | "inspections" | "stormwater";

const GRADIENT: Record<ServiceTheme, string> = {
  construction: "linear-gradient(90deg, var(--pe-blue), var(--pe-blue-light))",
  engineering: "linear-gradient(90deg, var(--pe-blue-light), var(--pe-teal))",
  inspections: "linear-gradient(90deg, var(--pe-teal) 0%, var(--pe-cyan-teal) 55%, var(--pe-cyan) 100%)",
  stormwater: "linear-gradient(90deg, var(--pe-cyan) 0%, var(--pe-blue-light) 55%, var(--pe-blue-bright) 100%)",
};

const CHECK: Record<ServiceTheme, string> = {
  construction: "text-[color:var(--pe-blue)]",
  engineering: "text-[color:var(--pe-teal)]",
  inspections: "text-[color:var(--pe-cyan-teal)]",
  stormwater: "text-[color:var(--pe-blue-bright)]",
};

export function ServiceCardDetailed(props: {
  title: string;
  desc: string;
  items: string[];
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
  theme: ServiceTheme;
}) {
  const Icon = props.Icon;

  return (
    <Link
      to={props.href}
      className="group block h-full bg-white rounded-md border border-slate-200 overflow-hidden
                 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--pe-shadow-md)]
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--pe-cyan)] focus-visible:ring-offset-2"
    >
      <GradientBar height={6} gradientCss={GRADIENT[props.theme]} />

      <div className="p-6 sm:p-8 flex flex-col items-center text-center h-full">
        <div className="w-14 h-14 rounded-md bg-slate-100 flex items-center justify-center mb-5">
          <Icon className="w-7 h-7 text-slate-700" aria-hidden="true" />
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-[color:var(--pe-text)] mb-2 uppercase tracking-wider">
          {props.title}
        </h3>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
          {props.desc}
        </p>

        <ul className="space-y-2 w-full">
          {props.items.map((item) => (
            <li key={item} className="flex items-center justify-center gap-2 text-slate-600 text-sm sm:text-base">
              <CheckCircle className={`w-4 h-4 ${CHECK[props.theme]}`} aria-hidden="true" />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-700 group-hover:gap-3 transition-all">
          Learn more <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}
