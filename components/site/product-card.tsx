import Image from 'next/image';
import Link from 'next/link';
import { formatPrice, type Product } from '@/lib/products';
import { cn } from '@/lib/utils';

type ProductCardProps = {
  product: Product;
  sizes?: string;
  className?: string;
};

export function ProductCard({
  product,
  sizes = '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw',
  className,
}: ProductCardProps) {
  return (
    <article className={cn('group', className)}>
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-surface-muted">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes={sizes}
            className="object-cover transition-slow group-hover:scale-[1.04]"
          />
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[0.625rem] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-sm">
            {product.category}
          </span>
          <span className="absolute inset-x-4 bottom-4 flex translate-y-2 items-center justify-between gap-3 rounded-sm border border-white/10 bg-surface/90 px-4 py-3 text-small opacity-0 backdrop-blur-sm transition-base group-hover:translate-y-0 group-hover:opacity-100">
            <span>View piece</span>
            <span className="nums text-ink-muted">{formatPrice(product.price)}</span>
          </span>
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4">
          <h3 className="text-h3">{product.name}</h3>
          <span className="nums text-small text-ink-muted">{formatPrice(product.price)}</span>
        </div>
        <p className="text-small text-ink-subtle mt-1">
          {product.color} · Made to order
        </p>
      </Link>
    </article>
  );
}
