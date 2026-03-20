import { ReactNode } from "react";

export function FooterVisualShell(props: {
  children: ReactNode;
  overlayStrength?: number; // 0..1
  showBeams?: boolean;      // default false for calmer footer
}) {
  const overlayStrength = props.overlayStrength ?? 0.75;
  const showBeams = props.showBeams ?? false;

  return (
    <footer className="relative bg-[color:var(--pe-navy)] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[color:var(--pe-navy)]" aria-hidden="true" />

      <div
        className="absolute inset-0"
        style={{
          opacity: overlayStrength,
          background: "linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.28))",
        }}
        aria-hidden="true"
      />

      {showBeams && (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(13,167,231,0.18), transparent 55%), radial-gradient(circle at 80% 70%, rgba(245,117,31,0.12), transparent 55%)",
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10">{props.children}</div>
    </footer>
  );
}
