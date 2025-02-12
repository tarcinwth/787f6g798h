import { useInView as useFramerInView } from "framer-motion";
import { useRef } from "react";

export function useInView() {
  const ref = useRef(null);
  const isInView = useFramerInView(ref, {
    once: true,
    margin: "-100px",
  });

  return { ref, isInView };
}
