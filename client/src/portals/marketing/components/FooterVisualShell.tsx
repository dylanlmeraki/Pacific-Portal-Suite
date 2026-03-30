import { ReactNode } from "react";

interface FooterVisualShellProps {
  children: ReactNode;
  overlayStrength?: number;
  showBeams?: boolean;
}

export function FooterVisualShell({
  children,
  overlayStrength = 0.82,
  showBeams = false,
}: FooterVisualShellProps) {
  return (
    <footer className="relative bg-[color:var(--pe-navy)] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[color:var(--pe-navy)]" />

      <div
        className="absolute inset-0"
        style={{
          opacity: overlayStrength,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.26))",
        }}
        aria-hidden="true"
      />

      {showBeams && (
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 18% 30%, rgba(13,167,231,0.18), transparent 52%), radial-gradient(circle at 82% 70%, rgba(56,124,243,0.14), transparent 56%)",
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10">{children}</div>
    </footer>
  );
}

export default FooterVisualShell;