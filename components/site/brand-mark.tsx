import Image from 'next/image';
import monogram from '@/img/bs-monogram.png';
import { cn } from '@/lib/utils';

const sizes = {
  sm: { mark: 'size-9', wordmark: 'text-lg' },
  md: { mark: 'size-12', wordmark: 'text-xl' },
} as const;

export function BrandMark({
  className,
  size = 'sm',
  showWordmark = true,
}: {
  className?: string;
  size?: keyof typeof sizes;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <Image
        src={monogram}
        alt=""
        aria-hidden="true"
        width={512}
        height={512}
        className={cn('w-auto object-contain', sizes[size].mark)}
      />
      {showWordmark ? (
        <span className={cn('font-display tracking-[-0.03em]', sizes[size].wordmark)}>
          BeyoneStyle
        </span>
      ) : null}
    </span>
  );
}
