import { cleanup, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { RevealObserver } from '@/components/ui/reveal';

type IOCallback = (
  entries: Array<{ isIntersecting: boolean; target: Element }>,
  observer: MockIntersectionObserver,
) => void;

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = [];
  callback: IOCallback;
  observed: Element[] = [];
  unobserve = vi.fn();
  disconnect = vi.fn();

  constructor(callback: IOCallback) {
    this.callback = callback;
    MockIntersectionObserver.instances.push(this);
  }

  observe = (element: Element) => {
    this.observed.push(element);
  };

  trigger(element: Element) {
    this.callback([{ isIntersecting: true, target: element }], this);
  }
}

beforeEach(() => {
  MockIntersectionObserver.instances = [];
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }));
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  document.body.innerHTML = '';
});

describe('RevealObserver', () => {
  it('reveals each element once it intersects and stops observing it', () => {
    document.body.innerHTML = '<div data-reveal id="a"></div><div data-reveal id="b"></div>';
    render(<RevealObserver />);

    const observer = MockIntersectionObserver.instances[0];
    expect(observer.observed).toHaveLength(2);

    const first = document.getElementById('a') as HTMLElement;
    observer.trigger(first);

    expect(first).toHaveClass('is-revealed');
    expect(observer.unobserve).toHaveBeenCalledWith(first);
  });

  it('reveals everything immediately when reduced motion is requested', () => {
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: true }));
    document.body.innerHTML = '<div data-reveal id="a"></div>';

    render(<RevealObserver />);

    expect(document.getElementById('a')).toHaveClass('is-revealed');
    expect(MockIntersectionObserver.instances).toHaveLength(0);
  });
});
