import { useEffect } from 'react';

/**
 * Custom hook to detect elements with .reveal-on-scroll and trigger
 * smooth entry animations when they enter the viewport.
 * Uses MutationObserver so dynamically mounted elements (like tab changes)
 * are immediately detected and revealed.
 */
export function useScrollReveal() {
  useEffect(() => {
    // If the browser does not support IntersectionObserver or prefers-reduced-motion, reveal all
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 0px 0px'
      }
    );

    const observeNewElements = () => {
      document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)').forEach((el) => {
        // If element is already in the viewport, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    };

    // Initial pass
    observeNewElements();

    // Listen for DOM changes so newly mounted elements (like tab switcher) are observed
    const mutationObserver = new MutationObserver(() => {
      observeNewElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
