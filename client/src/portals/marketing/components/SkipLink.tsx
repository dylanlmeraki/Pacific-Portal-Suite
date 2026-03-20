// client/src/portals/marketing/components/SkipLink.tsx
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3
                 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md
                 focus:bg-[color:var(--pe-orange)] focus:text-white
                 focus:shadow-lg"
    >
      Skip to content
    </a>
  );
}
