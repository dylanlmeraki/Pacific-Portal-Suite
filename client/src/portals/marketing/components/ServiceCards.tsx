import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  Compass,
  Droplets,
  HardHat,
} from "lucide-react";
import { createPageUrl } from "../lib/utils";
import { GradientBar } from "./GradientBar";

export type ServiceTheme =
  | "construction"
  | "engineering"
  | "inspections"
  | "stormwater";

export const SERVICES = [
  {
    icon: HardHat,
    title: "Construction Service",
    desc: "Field-driven support for site improvements, utility work, rehabilitation, and phased project delivery across real Bay Area field conditions.",
    items: [
      "Class A License",
      "Class B License",
      "Infrastructure & Public Works",
      "Residential, commercial, and municipal infrastructure",
    ],
    page: "Construction",
    theme: "construction" as const,
  },
  {
    icon: Compass,
    title: "Engineering Consulting",
    desc: "Civil and structural engineering support shaped by constructability, site realities, and jurisdictional requirements from design through delivery.",
    items: [
      "Civil engineering consulting",
      "Structural consulting",
      "Site assessment & design",
      "Development management support",
    ],
    page: "StructuralEngineering",
    theme: "engineering" as const,
  },
  {
    icon: ClipboardCheck,
    title: "Inspections & Testing",
    desc: "Inspection, observation, testing coordination, and quality documentation that support compliance, accountability, and dependable project closeout.",
    items: [
      "Structural systems inspections",
      "Stormwater testing and inspections",
      "Materials sampling & testing",
      "Environmental compliance",
    ],
    page: "InspectionsTesting",
    theme: "inspections" as const,
  },
  {
    icon: Droplets,
    title: "Stormwater Planning",
    desc: "Stormwater planning and compliance support for drainage, permit awareness, runoff strategy, and coordinated submittal documentation.",
    items: [
      "In-house PE/QSD/QSP site assessment",
      "BMP design and maintenance",
      "Clear documentation with action items",
      "Local, state, and Federal compliance support",
    ],
    page: "Services",
    theme: "stormwater" as const,
  },
];

const THEME: Record<
  ServiceTheme,
  {
    gradient: string;
    check: string;
    iconBg: string;
    iconFg: string;
    learnHover: string;
    accentTint: string;
  }
> = {
  construction: {
    gradient: "linear-gradient(90deg, var(--pe-blue), var(--pe-blue-light))",
    check: "text-[color:var(--pe-blue)]",
    iconBg: "bg-[color:rgba(34,83,218,0.08)]",
    iconFg: "text-[color:var(--pe-blue)]",
    learnHover: "group-hover:text-[color:var(--pe-blue)]",
    accentTint: "bg-[radial-gradient(circle_at_top_left,rgba(34,83,218,0.05),transparent_55%)]",
  },
  engineering: {
    gradient:
      "linear-gradient(90deg, var(--pe-blue-light), var(--pe-teal))",
    check: "text-[color:var(--pe-teal)]",
    iconBg: "bg-[color:rgba(19,197,165,0.09)]",
    iconFg: "text-[color:var(--pe-teal)]",
    learnHover: "group-hover:text-[color:var(--pe-teal)]",
    accentTint: "bg-[radial-gradient(circle_at_top_left,rgba(19,197,165,0.05),transparent_55%)]",
  },
  inspections: {
    gradient:
      "linear-gradient(90deg, var(--pe-teal) 0%, var(--pe-cyan-teal) 55%, var(--pe-cyan) 100%)",
    check: "text-[color:var(--pe-cyan-teal)]",
    iconBg: "bg-[color:rgba(12,183,214,0.09)]",
    iconFg: "text-[color:var(--pe-cyan)]",
    learnHover: "group-hover:text-[color:var(--pe-cyan)]",
    accentTint: "bg-[radial-gradient(circle_at_top_left,rgba(12,183,214,0.05),transparent_55%)]",
  },
  stormwater: {
    gradient:
      "linear-gradient(90deg, var(--pe-cyan) 0%, var(--pe-blue-light) 55%, var(--pe-blue-bright) 100%)",
    check: "text-[color:var(--pe-blue-bright)]",
    iconBg: "bg-[color:rgba(47,139,255,0.09)]",
    iconFg: "text-[color:var(--pe-blue-bright)]",
    learnHover: "group-hover:text-[color:var(--pe-blue-bright)]",
    accentTint: "bg-[radial-gradient(circle_at_top_left,rgba(47,139,255,0.05),transparent_55%)]",
  },
};

function ServiceCardDetailed(props: { svc: (typeof SERVICES)[number] }) {
  const { svc } = props;
  const Icon = svc.icon;
  const t = THEME[svc.theme];

  return (
    <Link
      to={createPageUrl(svc.page)}
      className="group relative block h-full overflow-hidden rounded-3xl border border-[color:var(--pe-border)] bg-white shadow-[var(--pe-shadow-sm)] transition-all duration-200 hover:-translate-y-1.5 hover:border-[color:var(--pe-border-strong)] hover:shadow-[var(--pe-shadow-md)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--pe-cyan)] focus-visible:ring-offset-2"
      data-testid={`service-card-${svc.title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <GradientBar height={6} gradientCss={t.gradient} />
      <div className={`absolute inset-0 pointer-events-none ${t.accentTint}`} />

      <div className="relative flex h-full flex-col px-7 py-8 sm:px-8 sm:py-9">
        <div
          className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 ${t.iconBg}`}
        >
          <Icon className={`h-8 w-8 ${t.iconFg}`} aria-hidden="true" />
        </div>

        <h3 className="mb-3 text-left text-[1.35rem] font-extrabold leading-tight tracking-tight text-[color:var(--pe-text)]">
          {svc.title}
        </h3>

        <p className="mb-6 text-left text-[15px] leading-7 text-slate-600">
          {svc.desc}
        </p>

        <ul className="mb-7 space-y-3">
          {svc.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-slate-600"
            >
              <CheckCircle
                className={`mt-[3px] h-4 w-4 flex-shrink-0 ${t.check}`}
                aria-hidden="true"
              />
              <span className="text-sm font-medium leading-6">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div
          className={`mt-auto inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors ${t.learnHover}`}
        >
          <span>Learn more</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}

export function ServiceCardsGrid({
  className,
}: {
  className?: string;
} = {}) {
  return (
    <div
      className={
        className ||
        "mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-8"
      }
    >
      {SERVICES.map((svc) => (
        <ServiceCardDetailed key={svc.title} svc={svc} />
      ))}
    </div>
  );
}

export default ServiceCardsGrid;