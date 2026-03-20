type MediaProps =
  | {
      kind: "image";
      src: string;
      alt: string;
      priority?: boolean;
      sizes?: string;
      className?: string;
    }
  | {
      kind: "video";
      src: string;
      poster?: string;
      className?: string;
      autoplay?: boolean;
    };

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export function Media(props: MediaProps) {
  if (props.kind === "image") {
    const { src, alt, priority, sizes, className } = props;
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        sizes={sizes}
      />
    );
  }

  // Reduced motion: avoid autoplaying looping background video
  if (prefersReducedMotion()) {
    if (!props.poster) return null;
    return (
      <img
        src={props.poster}
        alt=""
        className={props.className}
        loading="eager"
        fetchPriority="high"
      />
    );
  }

  return (
    <video
      className={props.className}
      autoPlay={props.autoplay ?? true}
      muted
      playsInline
      loop
      preload="metadata"
      poster={props.poster}
    >
      <source src={props.src} type="video/mp4" />
    </video>
  );
}
