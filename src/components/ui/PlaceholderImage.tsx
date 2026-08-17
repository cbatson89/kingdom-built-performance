import Image from "next/image";

/**
 * PlaceholderImage
 * ────────────────
 * Renders a photo slot using next/image (so image optimization + no-layout-shift
 * are already wired up correctly). Currently points at local placeholder SVGs.
 *
 * TODO (swap-out point): when real photography arrives, drop the raster files in
 * /public and pass their paths as `src`. No call-site changes needed — the alt
 * text below is already written as if the final image were in place.
 *
 * Two modes:
 *  - `fill`: image fills a positioned parent (parent must set width/height + position)
 *  - explicit `width`/`height`: intrinsic sizing, avoids layout shift
 */

type BaseProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

type FillProps = BaseProps & {
  fill: true;
  width?: never;
  height?: never;
};

type SizedProps = BaseProps & {
  fill?: false;
  width: number;
  height: number;
};

export function PlaceholderImage(props: FillProps | SizedProps) {
  const { src, alt, className, priority, sizes } = props;

  if (props.fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? "100vw"}
        className={className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={props.width}
      height={props.height}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
