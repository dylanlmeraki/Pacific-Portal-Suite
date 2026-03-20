export function GradientBar(props: {
  className?: string;
  height?: number;
  gradientCss: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={props.className}
      style={{
        height: props.height ?? 6,
        background: props.gradientCss,
      }}
    />
  );
}
