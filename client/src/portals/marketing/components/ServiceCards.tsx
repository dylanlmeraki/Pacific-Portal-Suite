import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, ClipboardCheck, Compass, Droplets, HardHat } from "lucide-react";
import { createPageUrl } from "../lib/utils";
import { GradientBar } from "./GradientBar";

export type ServiceTheme = "construction" | "engineering" | "inspections" | "stormwater";

export const SERVICES = [
  {
    icon: HardHat,
    title: "Construction Service",
    desc: "Field-driven construction support for site improvements, utility work, rehabilitation, and phased project delivery. We help teams move work forward with constructable planning, disciplined coordination, and execution aligned with real Bay Area field conditions.",
    items: ["Class A License", "Class B License", "Infrastructure & Public Works", "Residential, Commercial, and Municipal Infrastructure"],
    page: "Construction",
    theme: "construction" as const,
  },
  {
    icon: Compass,
    title: "Engineering Consulting",
    desc: "Civil and structural engineering support shaped by constructability, site realities, and jurisdictional requirements. Our approach helps bridge the gap between design intent, approvals, and what it actually takes to deliver the work.",
    items: ["Civil Engineering Consulting", "Structural Consulting", "Site Assessment & Design", "Development Management & Support"],
    page: "StructuralEngineering",
    theme: "engineering" as const,
  },
  {
    icon: ClipboardCheck,
    title: "Inspections & Testing",
    desc: "Inspection, observation, testing coordination, and quality documentation to support compliance, accountability, and closeout. We help teams maintain clear records and dependable field communication throughout active project delivery.",
    items: ["Structural Systems Inspections", "Stormwater Testing and Inspections", "Materials Sampling & Testing", "Environmental Compliance"],
    page: "InspectionsTesting",
    theme: "inspections" as const,
  },
  {
    icon: Droplets,
    title: "Stormwater Services",
    desc: "Stormwater planning and compliance support for projects that require practical drainage thinking, permit awareness, and coordinated documentation. We help teams address erosion control, runoff strategy, and submittal-related requirements with clarity.",
    items: ["In-house PE/QSD/QSP site assessment", "BMP design and maintenance", "Clear documentation with action items", "Full local, state, and Federal compliance assurance"],
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
  }
> = {
  // Construction: pe-blue -> pe-blue-light
  construction: {
    gradient: "linear-gradient(90deg, var(--pe-blue), var(--pe-blue-light))",
    check: "text-[color:var(--pe-blue)]",
    iconBg: "bg-[color:rgba(34,83,218,0.07)]",
    iconFg: "text-[color:var(--pe-blue)]",
    learnHover: "group-hover:text-[color:var(--pe-blue)]",
  },

  // Engineering: pe-blue-light -> pe-teal
  engineering: {
    gradient: "linear-gradient(90deg, var(--pe-blue-light), var(--pe-teal))",
    check: "text-[color:var(--pe-teal)]",
    iconBg: "bg-[color:rgba(19,197,165,0.08)]",
    iconFg: "text-[color:var(--pe-teal)]",
    learnHover: "group-hover:text-[color:var(--pe-teal)]",
  },

  // Inspections: pe-teal -> pe-cyan via pe-cyan-teal
  inspections: {
    gradient: "linear-gradient(90deg, var(--pe-teal) 0%, var(--pe-cyan-teal) 55%, var(--pe-cyan) 100%)",
    check: "text-[color:var(--pe-cyan-teal)]",
    iconBg: "bg-[color:rgba(12,183,214,0.08)]",
    iconFg: "text-[color:var(--pe-cyan)]",
    learnHover: "group-hover:text-[color:var(--pe-cyan)]",
  },

  // Stormwater: pe-cyan -> pe-blue-bright via pe-blue-light
  stormwater: {
    gradient: "linear-gradient(90deg, var(--pe-cyan) 0%, var(--pe-blue-light) 55%, var(--pe-blue-bright) 100%)",
    check: "text-[color:var(--pe-blue-bright)]",
    iconBg: "bg-[color:rgba(47,139,255,0.08)]",
    iconFg: "text-[color:var(--pe-blue-bright)]",
    learnHover: "group-hover:text-[color:var(--pe-blue-bright)]",
  },
};

function ServiceCardDetailed(props: { svc: typeof SERVICES[number] }) {
  const { svc } = props;
  const Icon = svc.icon;
  const t = THEME[svc.theme];

  return (
    <Link
      to={createPageUrl(svc.page)}
      className="group block h-full bg-white rounded-md border border-slate-200 overflow-hidden
                 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--pe-shadow-md)]
                 hover:border-slate-300
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--pe-cyan)] focus-visible:ring-offset-2"
      data-testid={`service-card-${svc.title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <GradientBar height={6} gradientCss={t.gradient} />

      <div className="p-5 sm:p-8 lg:p-10 flex flex-col items-center text-center h-full">
        <div className={`rounded-md w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 ${t.iconBg}`}>
          <Icon className={`w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${t.iconFg}`} aria-hidden="true" />
        </div>

        <h3 className="text-slate-900 text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 uppercase tracking-wider">
          {svc.title}
        </h3>

        <p className="text-slate-600 mb-4 sm:mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
          {svc.desc}
        </p>

        <ul className="space-y-2 sm:space-y-3 w-full">
          {svc.items.map((item) => (
            <li key={item} className="flex items-center justify-center gap-2 sm:gap-3 text-slate-600">
              <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${t.check}`} aria-hidden="true" />
              <span className="font-medium text-sm sm:text-base">{item}</span>
            </li>
          ))}
        </ul>

        <div className={`mt-auto pt-6 sm:pt-8 w-full flex items-center justify-center gap-2 text-sm sm:text-base font-bold text-slate-700 transition-colors ${t.learnHover}`}>
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}

export function ServiceCardsGrid({ className }: { className?: string } = {}) {
  return (
    <div className={className || "grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto"}>
      {SERVICES.map((svc) => (
        <ServiceCardDetailed key={svc.title} svc={svc} />
      ))}
    </div>
  );
}
