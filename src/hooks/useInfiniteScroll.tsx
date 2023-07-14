import { useEffect, useRef } from 'react';

export const useInfiniteScroll = <T extends HTMLElement>(cb: () => void) => {
  const target = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, _observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            _observer.unobserve(entry.target);
            cb();
          }
        });
      },
      { threshold: 0.5 },
    );

    target.current && observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  }, [cb]);

  return { target } as const;
};
