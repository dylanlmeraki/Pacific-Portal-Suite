import { Link } from "react-router-dom";
import { Phone, PhoneCall } from "lucide-react";

export function MobileCTAStickyBar(props: {
  phoneHref: string;
  primaryTo: string;
  primaryLabel: string;
}) {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden
                 bg-[color:var(--pe-navy)]/95 backdrop-blur-md border-t border-white/10
                 px-4 py-3 flex gap-3"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      data-testid="mobile-cta-sticky-bar"
    >
      <a
        href={props.phoneHref}
        className="flex-1 py-3 rounded-md bg-white/10 text-white font-bold text-sm
                   flex items-center justify-center gap-2"
        aria-label="Call Pacific Engineering"
      >
        <Phone className="w-4 h-4 text-[color:var(--pe-cyan)]" aria-hidden="true" />
        Call
      </a>

      <Link
        to={props.primaryTo}
        className="flex-1 py-3 rounded-md bg-[color:var(--pe-orange)] text-white font-bold text-sm
                   flex items-center justify-center gap-2"
      >
        <PhoneCall className="w-4 h-4" aria-hidden="true" />
        {props.primaryLabel}
      </Link>
    </div>
  );
}
