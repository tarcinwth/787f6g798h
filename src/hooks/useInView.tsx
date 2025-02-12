import { useInView as useIntersectionObserver } from "react-intersection-observer";

export function useInView(options = {}) {
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
    ...options,
  });

  return { ref, isInView: inView };
}
