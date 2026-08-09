import { cn } from "@/lib/utils";

/** Warm-toned photography placeholder. */
export function ClayImage({
  seed,
  alt,
  w = 800,
  h = 800,
  className,
}: {
  seed: string;
  alt: string;
  w?: number;
  h?: number;
  className?: string;
}) {
  return (
    <img
      src={`https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`}
      alt={alt}
      width={w}
      height={h}
      loading="lazy"
      className={cn(
        "h-full w-full rounded-sm object-cover",
        "[filter:sepia(0.45)_saturate(1.15)_contrast(0.96)_brightness(0.98)]",
        className,
      )}
    />
  );
}
