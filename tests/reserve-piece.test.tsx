import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { ReservePiece } from '@/components/site/reserve-piece';
import { products } from '@/lib/products';

const product = products[0];

afterEach(cleanup);

describe('ReservePiece', () => {
  it('asks for a size before opening a reservation', () => {
    render(<ReservePiece product={product} />);

    fireEvent.click(screen.getByRole('link', { name: 'Reserve this piece' }));

    expect(screen.getByRole('status')).toHaveTextContent('Choose a size');
  });

  it('marks the selected size and writes it into the reservation link', () => {
    render(<ReservePiece product={product} />);

    fireEvent.click(screen.getByRole('button', { name: 'M' }));

    expect(screen.getByRole('button', { name: 'M' })).toHaveAttribute('aria-pressed', 'true');

    const link = screen.getByRole('link', { name: 'Reserve — size M' });
    expect(link).toHaveAttribute('href', expect.stringContaining('mailto:studio@beyonestyle.com'));
    expect(link.getAttribute('href')).toContain('Size%20M');
  });
});
