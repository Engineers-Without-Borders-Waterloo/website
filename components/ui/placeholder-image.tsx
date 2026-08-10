import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PlaceholderImageProps {
  src?: string;
  alt: string;
  className?: string;
  /** Sizes hint for responsive loading. Defaults to a common card/grid width. */
  sizes?: string;
}

/**
 * Renders a real image when `src` is provided, otherwise falls back to a
 * gray placeholder box with the alt text shown for context. This lets pages
 * ship with placeholders and "light up" automatically once real photos are
 * added to /public/images and wired into the corresponding data/*.ts file.
 */
export function PlaceholderImage({
  src,
  alt,
  className,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: PlaceholderImageProps) {
  if (src) {
    return (
      <div className={cn('relative overflow-hidden', className)}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={cn('bg-[#E5E7EB] flex items-center justify-center', className)}
      role="img"
      aria-label={alt}
    >
      <span className="text-sm text-muted-foreground px-4 text-center">{alt}</span>
    </div>
  );
}
