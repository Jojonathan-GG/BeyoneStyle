'use client';

import { useEffect } from 'react';

export function RevealObserver() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      elements.forEach((element) => element.classList.add('is-revealed'));
      return;
    }

    const reveal = (element: HTMLElement) => {
      element.classList.add('is-revealed');
    };

    const revealImmediately = (element: HTMLElement) => {
      element.dataset.revealed = 'immediate';
      element.classList.add('is-revealed');
    };

    const inViewport = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    // Paint what is already on screen without waiting for the observer's first
    // frame or for a transition to tick. This also covers tabs that render
    // while unfocused, where transitions can stay frozen at opacity 0.
    elements.forEach((element) => {
      if (inViewport(element)) revealImmediately(element);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    elements.forEach((element) => {
      if (!element.classList.contains('is-revealed')) observer.observe(element);
    });

    // Safety net for windows where the observer does not tick.
    const revealVisible = () => {
      elements.forEach((element) => {
        if (!element.classList.contains('is-revealed') && inViewport(element)) {
          reveal(element);
          observer.unobserve(element);
        }
      });
    };

    window.addEventListener('scroll', revealVisible, { passive: true });
    window.addEventListener('resize', revealVisible);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', revealVisible);
      window.removeEventListener('resize', revealVisible);
    };
  }, []);

  return null;
}
