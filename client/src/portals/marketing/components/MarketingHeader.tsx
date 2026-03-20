import { useEffect, useId, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

type NavItem =
  | { label: string; type: "route"; to: string }
  | { label: string; type: "hash"; hash: `#${string}` };

export function MarketingHeader(props: {
  logoSrc: string;
  phoneLabel: string;
  phoneHref: string;
  primaryCta: { label: string; to: string };
  nav: NavItem[];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const mobilePanelId = useId();

  const isHome = location.pathname === "/";
  const activePath = useMemo(() => location.pathname, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function goHash(hash: `#${string}`) {
    setMobileOpen(false);
    if (!isHome) {
      navigate({ pathname: "/", hash });
      return;
    }
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[color:var(--pe-navy)]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-[color:var(--pe-navy)] py-4",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Go to Home">
          <img
            src={props.logoSrc}
            alt="Pacific Engineering & Construction Inc."
            className="w-10 h-10 rounded-md object-contain bg-white/5"
          />
          <div className="hidden sm:block">
            <div className="text-white font-bold leading-tight">
              Pacific Engineering & Construction Inc.
            </div>
            <div className="text-white/55 text-xs tracking-wide">
              Bay Area Infrastructure Delivery
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
          {props.nav.map((item) =>
            item.type === "route" ? (
              <Link
                key={item.label}
                to={item.to}
                aria-current={activePath === item.to ? "page" : undefined}
                className={[
                  "px-3 py-2 text-sm font-semibold rounded-md",
                  activePath === item.to
                    ? "text-white bg-white/10"
                    : "text-white/75 hover:text-white hover:bg-white/5",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => goHash(item.hash)}
                className="px-3 py-2 text-sm font-semibold text-white/75 hover:text-white rounded-md hover:bg-white/5"
              >
                {item.label}
              </button>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={props.phoneHref}
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {props.phoneLabel}
          </a>
          <Link
            to={props.primaryCta.to}
            className="rounded-md px-5 py-2.5 text-sm font-bold text-white
                       bg-[color:var(--pe-orange)]
                       hover:bg-[color:var(--pe-orange-bright)]
                       shadow-sm"
          >
            {props.primaryCta.label}
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-controls={mobilePanelId}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          id={mobilePanelId}
          className="lg:hidden fixed inset-0 top-0 bg-[color:var(--pe-navy)] z-40"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
            <Link to="/" className="text-white font-bold" onClick={() => setMobileOpen(false)}>
              Pacific Engineering
            </Link>
            <button
              className="p-2 text-white"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-col px-5 pt-4" aria-label="Mobile navigation">
            {props.nav.map((item) =>
              item.type === "route" ? (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 border-b border-white/10 text-white/85 hover:text-white text-lg font-semibold"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => goHash(item.hash)}
                  className="py-4 border-b border-white/10 text-left text-white/85 hover:text-white text-lg font-semibold"
                >
                  {item.label}
                </button>
              )
            )}

            <div className="pt-6 flex flex-col gap-3">
              <a href={props.phoneHref} className="text-white/70 text-sm flex items-center gap-2">
                <Phone className="w-4 h-4" aria-hidden="true" />
                {props.phoneLabel}
              </a>
              <Link
                to={props.primaryCta.to}
                onClick={() => setMobileOpen(false)}
                className="py-3 rounded-md bg-[color:var(--pe-orange)] text-white font-bold text-center"
              >
                {props.primaryCta.label}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
