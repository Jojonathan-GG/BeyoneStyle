import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ScrambleHover } from '@/components/ui/scramble-hover';

beforeEach(() => {
  vi.useFakeTimers();
  vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }));
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('ScrambleHover', () => {
  it('keeps the full text available to assistive technology', () => {
    const { container } = render(<ScrambleHover text="Considered clothing" />);
    expect(container.querySelector('.sr-only')).toHaveTextContent('Considered clothing');
  });

  it('scrambles only the character under the pointer', () => {
    const { container } = render(
      <ScrambleHover text="AB" characters="Z" scrambleSpeed={10} maxIterations={3} />,
    );
    const characters = container.querySelectorAll('[data-scramble-char]');

    fireEvent.pointerOver(characters[0]);

    expect(characters[0]).toHaveTextContent('Z');
    expect(characters[0]).toHaveAttribute('data-scrambling', 'true');
    expect(characters[1]).toHaveTextContent('B');
    expect(characters[1]).not.toHaveAttribute('data-scrambling');
  });

  it('settles back to the original character after the maximum iterations', () => {
    const { container } = render(
      <ScrambleHover text="AB" characters="Z" scrambleSpeed={10} maxIterations={3} />,
    );
    const characters = container.querySelectorAll('[data-scramble-char]');

    fireEvent.pointerOver(characters[0]);
    act(() => {
      vi.advanceTimersByTime(30);
    });

    expect(characters[0]).toHaveTextContent('A');
    expect(characters[0]).not.toHaveAttribute('data-scrambling');
  });

  it('moves the scramble to a newly hovered character', () => {
    const { container } = render(
      <ScrambleHover text="AB" characters="Z" scrambleSpeed={10} maxIterations={5} />,
    );
    const characters = container.querySelectorAll('[data-scramble-char]');

    fireEvent.pointerOver(characters[0]);
    fireEvent.pointerOver(characters[1]);

    expect(characters[0]).toHaveTextContent('A');
    expect(characters[1]).toHaveTextContent('Z');
    expect(characters[1]).toHaveAttribute('data-scrambling', 'true');
  });

  it('does not animate when reduced motion is requested', () => {
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: true }));
    const { container } = render(<ScrambleHover text="AB" characters="Z" />);
    const characters = container.querySelectorAll('[data-scramble-char]');

    fireEvent.pointerOver(characters[0]);

    expect(characters[0]).toHaveTextContent('A');
    expect(characters[0]).not.toHaveAttribute('data-scrambling');
  });

  it('renders one line per newline so headlines can break deliberately', () => {
    const { container } = render(<ScrambleHover text={'First line\nSecond line'} />);
    const lines = container.querySelectorAll('[data-scramble-line]');

    expect(lines).toHaveLength(2);
    expect(lines[0]).toHaveTextContent('First line');
    expect(lines[1]).toHaveTextContent('Second line');
  });

  it('can draw scramble characters from the original text only', () => {
    const { container } = render(
      <ScrambleHover
        text="AB"
        useOriginalCharsOnly
        characters="ZZZZ"
        scrambleSpeed={10}
        maxIterations={4}
      />,
    );
    const characters = container.querySelectorAll('[data-scramble-char]');

    fireEvent.pointerOver(characters[0]);

    expect(characters[0].textContent).toMatch(/^[AB]$/);
  });

  it('accepts a scrambled className for the active character', () => {
    const { container } = render(
      <ScrambleHover text="A" characters="Z" scrambledClassName="text-ink-muted" />,
    );
    const character = container.querySelector('[data-scramble-char]');

    fireEvent.pointerOver(character as Element);

    expect(character).toHaveClass('text-ink-muted');
  });
});
