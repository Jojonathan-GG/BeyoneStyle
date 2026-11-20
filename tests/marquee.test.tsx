import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Marquee } from '@/components/ui/marquee';

describe('Marquee', () => {
  it('renders every item twice for a seamless loop', () => {
    render(<Marquee items={['Shipping', 'Returns']} />);
    expect(screen.getAllByText('Shipping')).toHaveLength(2);
    expect(screen.getAllByText('Returns')).toHaveLength(2);
  });

  it('hides the duplicate group from assistive tech and tab order', () => {
    const { container } = render(<Marquee items={['Shipping']} />);
    const groups = container.querySelectorAll('.marquee-group');
    expect(groups).toHaveLength(2);
    expect(groups[1]).toHaveAttribute('aria-hidden', 'true');
    expect(groups[1]).toHaveAttribute('inert');
  });

  it('exposes the variant and per-instance duration', () => {
    const { container } = render(<Marquee items={['A']} variant="category" speed={60} />);
    const root = container.firstElementChild as HTMLElement;
    const track = container.querySelector<HTMLElement>('.marquee-track');
    expect(root).toHaveAttribute('data-variant', 'category');
    expect(track?.style.getPropertyValue('--marquee-duration')).toBe('60s');
  });

  it('defaults to the announcement variant at 38s', () => {
    const { container } = render(<Marquee items={['A']} />);
    const root = container.firstElementChild as HTMLElement;
    const track = container.querySelector<HTMLElement>('.marquee-track');
    expect(root).toHaveAttribute('data-variant', 'announcement');
    expect(track?.style.getPropertyValue('--marquee-duration')).toBe('38s');
  });

  it('uses the dark surface for the announcement strip', () => {
    const { container } = render(<Marquee items={['A']} />);
    expect(container.firstElementChild).toHaveClass('bg-surface-muted');
  });

  it('renders nothing when there are no items', () => {
    const { container } = render(<Marquee items={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('merges a custom className', () => {
    const { container } = render(<Marquee items={['A']} className="mt-8" />);
    expect(container.firstElementChild).toHaveClass('mt-8');
  });
});
