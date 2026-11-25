'use client';

import { useEffect } from 'react';

export function RevealObserver() {
  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      document
        .querySelectorAll<HTMLElement>('[data-reveal]')
        .forEach((element) => element.classList.add('is-revealed'));
      return;
    }

    const tracked = new Set<HTMLElement>();

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

    const register = (element: HTMLElement) => {
      if (tracked.has(element)) return;
      tracked.add(element);

      // Paint what is already on screen without waiting for the observer's first
      // frame or for a transition to tick. This also covers tabs that render
      // while unfocused, where transitions can stay frozen at opacity 0.
      if (inViewport(element)) {
        revealImmediately(element);
        return;
      }

      observer.observe(element);
    };

    const scan = () => {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(register);
    };

    scan();

    // App Router keeps this observer mounted across route changes, so new page
    // content has to be picked up as it enters the DOM.
    const mutations =
      typeof MutationObserver === 'undefined' ? null : new MutationObserver(scan);
    mutations?.observe(document.body, { childList: true, subtree: true });

    // Safety net for windows where the observer does not tick.
    const revealVisible = () => {
      tracked.forEach((element) => {
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
      mutations?.disconnect();
      window.removeEventListener('scroll', revealVisible);
      window.removeEventListener('resize', revealVisible);
    };
  }, []);

  return null;
}
