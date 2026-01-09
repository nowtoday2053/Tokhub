import { useEffect, useRef, useState } from 'react';

export const useInViewAnimation = <T extends HTMLElement>(
  options?: IntersectionObserverInit
) => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.2,
        ...options
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [inView, options]);

  return { ref, inView };
};

