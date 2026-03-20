// client/src/portals/marketing/components/Media.tsx
type MediaProps =
  | { kind: "image"; src: string; alt: string; priority?: boolean; sizes?: string; className?: string }
  | { kind: "video"; src: string; poster?: string; className?: string; autoplay?: boolean };

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
