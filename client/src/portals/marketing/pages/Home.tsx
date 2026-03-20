import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  History,
  MapPin,
  PhoneCall,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import SEO from "../components/SEO";
import { createPageUrl } from "../lib/utils";
import { MarketingHero } from "../components/MarketingHero";
import { ProofStrip } from "../components/ProofStrip";
import { ServiceCardsGrid } from "../components/ServiceCards";
import { DifferentiatorsGrid } from "../components/DifferentiatorsGrid";
import bayBridgeImg from "@assets/bay-bridge-sunrise_1773821710974.jpg";

const trustItems = [
  {
    icon: <MapPin className="w-4 h-4" />,
    label: "San Francisco & Bay Area",
  },
  {
    icon: <Shield className="w-4 h-4" />,
    label: "Licensed PE / QSD / QSP",
  },
  {
    icon: <Award className="w-4 h-4" />,
    label: "Class A & B Contractor",
  },
  {
    icon: <History className="w-4 h-4" />,
    label: "40+ Years Experience",
  },
];

const proofItems = [
  {
    icon: <CheckCircle className="w-4 h-4" />,
    label: "Same-day response",
  },
  {
    icon: <CheckCircle className="w-4 h-4" />,
    label: "Engineering + field coordination",
  },
  {
    icon: <CheckCircle className="w-4 h-4" />,
    label: "Commercial + public infrastructure support",
  },
  {
    icon: <CheckCircle className="w-4 h-4" />,
    label: "Stormwater, inspections, and construction delivery",
  },
];

const differentiators = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Engineering + Field Reality",
    body: "Planning informed by how work actually gets built, coordinated, and delivered in real Bay Area conditions.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Bay Area Familiarity",
    body: "Local project awareness that supports stronger coordination across approvals, documentation, and execution.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Compliance-Minded Delivery",
    body: "Stormwater, inspections, testing support, and documentation handled with discipline and accountability.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Built for Active Sites",
    body: "Structured support for constrained, occupied, public-facing, and schedule-sensitive project environments.",
  },
];

function FinalCTASection() {
  return (
    <section
      className="relative overflow-hidden bg-[color:var(--pe-navy)] py-16 sm:py-20 lg:py-24"
      data-testid="section-cta"
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-transparent to-blue-950/25" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-5">
          <span
            className="w-8 h-px bg-[color:var(--pe-cyan)]"
            aria-hidden="true"
          />
          <span className="text-[color:var(--pe-cyan)] text-xs font-bold tracking-[0.2em] uppercase">
            Start the conversation
          </span>
        </div>

        <h2
          className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
          data-testid="text-cta-title"
        >
          Partner with Pacific Engineering
        </h2>

        <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10">
          Engineering, inspections, construction support, and stormwater planning
          — one team, one call, one coordinated path forward.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            to={createPageUrl("Consultation")}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md px-7 py-3.5 font-bold text-white bg-[color:var(--pe-orange)] hover:bg-[color:var(--pe-orange-bright)] shadow-sm transition-all"
            data-testid="link-cta-primary"
          >
            <PhoneCall className="w-5 h-5" />
            Talk to Our Team
          </Link>

          <Link
            to={createPageUrl("Contact")}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md px-7 py-3.5 font-bold text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
            data-testid="link-cta-secondary"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/65 font-medium">
          <span className="inline-flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[color:var(--pe-cyan)]" />
            Licensed PE / QSD / QSP
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[color:var(--pe-cyan)]" />
            Class A & B Contractor
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[color:var(--pe-cyan)]" />
            2,500+ Projects
          </span>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white" data-testid="page-home">
      <SEO
        title="Pacific Engineering & Construction Inc. - Consulting Engineers and Contractors"
        description="SF Bay structural engineering, special inspections, materials testing & SWPPP stormwater compliance—supporting permit-ready construction with fast, reliable service."
        keywords="SF Bay structural engineering, structural engineer San Francisco, special inspections Bay Area, special inspections SF, construction materials testing Bay Area, materials testing San Francisco, SWPPP Bay Area, SWPPP San Francisco, stormwater compliance Bay Area, QSD QSP Bay Area, consulting engineers Bay Area, Pacific Engineering & Construction"
        url="/"
      />

      <MarketingHero
        eyebrow="San Francisco | Bay Area Infrastructure Delivery"
        title="Pacific Engineering & Construction Inc."
        subtitle="Full-scale civil and structural engineering, inspections, stormwater planning, and construction support for commercial, municipal, utility, and infrastructure projects across the Bay Area."
        primaryCta={{
          label: "Review Project Scope",
          to: createPageUrl("Consultation"),
        }}
        secondaryCta={{
          label: "What We Offer",
          toHash: "#services",
        }}
        trust={trustItems}
        background={{
          kind: "image",
          src: bayBridgeImg,
          alt: "San Francisco Bay bridge at sunrise",
        }}
      />

      <ProofStrip items={proofItems} />

      <section
        id="services"
        className="bg-[color:var(--pe-surface-2)] py-16 sm:py-20 lg:py-24"
        data-testid="section-services"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span
                className="w-8 h-px bg-[color:var(--pe-blue)]"
                aria-hidden="true"
              />
              <span className="text-[color:var(--pe-blue)] text-xs font-bold tracking-[0.2em] uppercase">
                Consulting Engineers & Contractors
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[color:var(--pe-text)] tracking-tight mb-4"
              data-testid="text-services-title"
            >
              Integrated project delivery
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Full-scale civil and structural engineering and construction plans
              developed and implemented by our teams of in-house engineers,
              QSD/QSPs, and construction experts — helping keep your project
              on time, on budget, and in full compliance.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-6 text-slate-500 text-sm font-medium">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[color:var(--pe-cyan)]" />
                SF Bay Area
              </span>
              <span className="inline-flex items-center gap-2">
                <Shield className="w-4 h-4 text-[color:var(--pe-cyan)]" />
                Licensed PE / QSD / QSP
              </span>
              <span className="inline-flex items-center gap-2">
                <Award className="w-4 h-4 text-[color:var(--pe-cyan)]" />
                Class A & B Contractor
              </span>
              <span className="inline-flex items-center gap-2">
                <History className="w-4 h-4 text-[color:var(--pe-cyan)]" />
                40+ Years
              </span>
            </div>
          </div>

          <ServiceCardsGrid />

          <div className="mt-10 sm:mt-14 text-center">
            <Link
              to={createPageUrl("ServicesOverview")}
              className="inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 font-bold text-white bg-[color:var(--pe-blue)] hover:bg-[color:var(--pe-blue-light)] transition-all"
              data-testid="link-view-all-services"
            >
              View Capabilities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <DifferentiatorsGrid
        eyebrow="Why Pacific"
        title="Why Pacific Engineering?"
        subtitle="With more than 40 years of experience in full-scale civil engineering and construction contracting, we bring engineering awareness, field discipline, and practical coordination to every project."
        items={differentiators}
      />

      <section
        className="bg-white py-16 sm:py-20 lg:py-24"
        data-testid="section-proof-block"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                value: "40+",
                label: "Years Experience",
                sub: "Combined Bay Area engineering and construction knowledge",
              },
              {
                value: "2,500+",
                label: "Projects",
                sub: "Successfully delivered across residential, commercial, and infrastructure work",
              },
              {
                value: "100%",
                label: "Compliance Focus",
                sub: "Documentation, inspection, and stormwater support with discipline",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-[color:var(--pe-border)] bg-[color:var(--pe-surface)] p-7 sm:p-8 text-center shadow-[var(--pe-shadow-sm)]"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[color:var(--pe-blue)] mb-2">
                  {item.value}
                </div>
                <div className="text-[color:var(--pe-text)] font-bold mb-1">
                  {item.label}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </div>
  );
}