import { ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Send } from "lucide-react";

import { createPageUrl } from "../lib/utils";
import { SkipLink } from "../components/SkipLink";
import { MarketingHeader } from "../components/MarketingHeader";
import { MobileCTAStickyBar } from "../components/MobileCTAStickyBar";
import { FooterVisualShell } from "../components/FooterVisualShell";
import ChatBot from "../components/ChatBot";
import BackToTop from "../components/BackToTop";

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const servicesItems = [
    { name: "Stormwater Planning", path: createPageUrl("Services") },
    { name: "Inspections & Testing", path: createPageUrl("InspectionsTesting") },
    { name: "Special Inspections", path: createPageUrl("SpecialInspections") },
    { name: "Engineering Consulting", path: createPageUrl("StructuralEngineering") },
    { name: "Construction Services", path: createPageUrl("Construction") },
  ];

  const aboutItems = [
    { name: "About Us", path: createPageUrl("About") },
    { name: "Previous Work", path: createPageUrl("PreviousWork") },
    { name: "Project Gallery", path: createPageUrl("ProjectGallery") },
    { name: "Blog", path: createPageUrl("Blog") },
  ];

  const headerNav = [
    { label: "Home", type: "route" as const, to: createPageUrl("Home") },
    { label: "Services", type: "route" as const, to: createPageUrl("ServicesOverview") },
    { label: "Project Gallery", type: "route" as const, to: createPageUrl("ProjectGallery") },
    { label: "About", type: "route" as const, to: createPageUrl("About") },
    { label: "Contact", type: "route" as const, to: createPageUrl("Contact") },
  ];

  return (
    <div className="marketing-portal min-h-screen bg-white overflow-x-hidden">
      <SkipLink />

      <MarketingHeader
        logoSrc="/images/pe-logo.png"
        phoneLabel="(415) 689-4428"
        phoneHref="tel:+14156894428"
        primaryCta={{
          label: "Request Qualifications",
          to: createPageUrl("SWPPPChecker"),
        }}
        nav={headerNav}
      />

      <main
        id="main"
        className="pt-20 sm:pt-24 pb-24 sm:pb-0"
        data-testid="marketing-layout-main"
      >
        {children}
      </main>

      <MobileCTAStickyBar
        phoneHref="tel:+14156894428"
        primaryTo={createPageUrl("SWPPPChecker")}
        primaryLabel="Request Quote"
      />

      <div
        className="h-1.5"
        style={{
          background:
            "linear-gradient(to right, var(--pe-navy), var(--pe-blue) 32%, var(--pe-cyan) 50%, var(--pe-blue-light) 68%, var(--pe-navy))",
        }}
        aria-hidden="true"
      />

      <FooterVisualShell overlayStrength={0.82} showBeams={false}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="relative p-1.5 rounded-lg bg-[color:var(--pe-blue)]">
                    <img
                      src="/images/pe-logo.png"
                      alt="Pacific Engineering"
                      className="h-10 w-10 rounded object-contain"
                    />
                  </div>
                </div>

                <div>
                  <div className="font-bold text-lg text-white">Pacific Engineering</div>
                  <div className="text-xs text-cyan-300 tracking-wide font-medium">
                    Consulting Engineers & Contractors
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed border-l-4 border-cyan-500 pl-4 font-medium mb-5">
                Pacific Engineering & Construction Inc. provides full-scale civil and structural
                engineering, construction consulting, and plan implementation in a vertically
                integrated business model working on projects of all sizes from residential remodels
                to public utility and infrastructure projects. Through decades of deep in-field
                knowledge and network fostering and growth - Pacific Engineering & Construction
                truly has earned its polished and professional reputation.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/a-mark-waldman-814b119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all flex-shrink-0"
                  aria-label="LinkedIn"
                  data-testid="link-linkedin-footer"
                >
                  <Linkedin className="w-4 h-4 text-gray-400" />
                </a>
                <p className="text-xs text-gray-500 font-medium">
                  Contractor Lic. #: 1351235425
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-base uppercase tracking-wider text-cyan-300 mb-5 text-center border-b border-cyan-500/20 pb-3">
                Services
              </h4>
              <ul className="space-y-2.5 text-center">
                {servicesItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm text-gray-300 hover:text-cyan-300 transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-base uppercase tracking-wider text-cyan-300 mb-5 text-center border-b border-cyan-500/20 pb-3">
                Company
              </h4>
              <ul className="space-y-2.5 text-center">
                {aboutItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm text-gray-300 hover:text-cyan-300 transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to={createPageUrl("Contact")}
                    className="text-sm text-gray-300 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-base uppercase tracking-wider text-cyan-300 mb-5 text-center border-b border-cyan-500/20 pb-3">
                Contact
              </h4>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300 group">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-colors flex-shrink-0">
                    <Phone className="w-4 h-4 text-cyan-300" />
                  </div>
                  <a
                    href="tel:+14156894428"
                    className="hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    (415)-689-4428
                  </a>
                </li>

                <li className="flex items-center gap-3 text-gray-300 group">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4 text-cyan-300" />
                  </div>
                  <a
                    href="mailto:amwaldman@sbcglobal.net"
                    className="hover:text-cyan-300 transition-colors whitespace-nowrap text-sm font-medium"
                  >
                    amwaldman@sbcglobal.net
                  </a>
                </li>

                <li className="flex items-center gap-3 text-gray-300 group">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-colors flex-shrink-0">
                    <MapPin className="w-4 h-4 text-cyan-300" />
                  </div>
                  <span className="text-sm font-medium">
                    470 3rd St.
                    <br />
                    San Francisco, CA 94107
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-10 max-w-md mx-auto">
            <p className="text-center text-sm text-gray-400 font-medium mb-3">
              Stay updated with project insights & industry news
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-0 rounded-full overflow-hidden border border-white/10 focus-within:border-cyan-500/50 transition-colors bg-white/5"
              data-testid="form-newsletter"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-gray-500 px-5 py-3 outline-none font-medium"
                data-testid="input-newsletter-email"
              />
              <button
                type="submit"
                className="px-5 py-3 text-white transition-all flex items-center gap-2 text-sm font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, var(--pe-cyan), var(--pe-blue-light))",
                }}
                data-testid="button-newsletter-subscribe"
              >
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-medium">
              <p>&copy; {new Date().getFullYear()} Pacific Engineering. All rights reserved.</p>

              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-cyan-300 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-cyan-300 transition-colors">
                  Terms of Service
                </a>
                <a
                  href="https://www.linkedin.com/in/a-mark-waldman-814b119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all"
                  aria-label="LinkedIn"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="w-4 h-4 text-gray-400 hover:text-cyan-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </FooterVisualShell>

      <ChatBot />
      <BackToTop />
    </div>
  );
}