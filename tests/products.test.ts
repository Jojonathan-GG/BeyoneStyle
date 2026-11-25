import { describe, expect, it } from 'vitest';
import { formatPrice, getProduct, products } from '@/lib/products';

describe('product catalogue', () => {
  it('has unique slugs', () => {
    const slugs = products.map((product) => product.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('provides complete product content', () => {
    for (const product of products) {
      expect(product.name.length).toBeGreaterThan(0);
      expect(product.description.length).toBeGreaterThan(40);
      expect(product.details.length).toBeGreaterThan(0);
      expect(product.sizes.length).toBeGreaterThan(0);
      expect(product.image).toBeTruthy();
    }
  });

  it('formats prices without decimals', () => {
    expect(formatPrice(420)).toBe('$420');
    expect(formatPrice(520)).toBe('$520');
  });

  it('looks products up by slug', () => {
    expect(getProduct(products[0].slug)?.name).toBe(products[0].name);
    expect(getProduct('missing-piece')).toBeUndefined();
  });
});
