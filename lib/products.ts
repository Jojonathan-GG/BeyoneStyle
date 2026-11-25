import type { StaticImageData } from 'next/image';
import halterDress from '@/img/istockphoto-2162084252-612x612.jpg';
import cloudDress from '@/img/istockphoto-1407656268-612x612.jpg';
import columnDress from '@/img/images.jpg';
import ivorySuit from '@/img/images (1).jpg';

export type Product = {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  category: 'Dresses' | 'Tailoring';
  color: string;
  image: StaticImageData;
  alt: string;
  description: string;
  details: string[];
  sizes: string[];
};

export const products: Product[] = [
  {
    slug: 'sculpted-halter-dress',
    name: 'Sculpted Halter Dress',
    price: 420,
    category: 'Dresses',
    color: 'Ivory',
    image: halterDress,
    alt: 'Model wearing the Sculpted Halter Dress in ivory with fine chain detailing',
    description:
      'A column of fluid viscose with a hand-finished halter neck and fine chain detail. Cut close through the body, then left to move.',
    details: [
      'Hand-finished in Portugal',
      '72% viscose, 28% linen',
      'Dry clean only',
      'Model is 178cm and wears a size S',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    slug: 'cloud-cotton-mini',
    name: 'Cloud Cotton Mini',
    price: 280,
    category: 'Dresses',
    color: 'Chalk',
    image: cloudDress,
    alt: 'Model wearing the Cloud Cotton Mini in white against a rose backdrop',
    description:
      'A voluminous cotton mini with gathered sleeves and a softly elasticated waist. Made for long lunches and late light.',
    details: [
      'Organic cotton poplin',
      'Made in small runs',
      'Machine wash cold, line dry',
      'Model is 175cm and wears a size S',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    slug: 'column-maxi-dress',
    name: 'Column Maxi Dress',
    price: 360,
    category: 'Dresses',
    color: 'Natural',
    image: columnDress,
    alt: 'Model wearing the Column Maxi Dress in natural white linen',
    description:
      'A floor-skimming column in washed linen, gathered at the waist and split at the hem. It creases; that is the point.',
    details: [
      '100% European linen',
      'Woven in northern Portugal',
      'Hand wash cold, line dry',
      'Model is 180cm and wears a size S',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    slug: 'ivory-tailored-suit',
    name: 'Ivory Tailored Suit',
    price: 520,
    compareAt: 580,
    category: 'Tailoring',
    color: 'Ivory',
    image: ivorySuit,
    alt: 'Model wearing the Ivory Tailored Suit with a relaxed single-breasted jacket',
    description:
      'A soft-shouldered jacket and straight trouser cut from ivory wool crepe. Sharp enough for the room, easy enough for the day.',
    details: [
      'Italian wool crepe',
      'Half-canvassed jacket',
      'Sold as a two-piece set',
      'Dry clean only',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}
