import { useEffect, useRef, useState } from "react";

/**
 * Hook que activa animaciones suaves cuando el elemento entra en el viewport.
 * Perfecto para secciones como "About", "Skills" o "Projects".
 */
export const useScrollAnimation = (options = { threshold: 0.2 }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // deja de observar una vez visible
      }
    }, options);

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [options]);

  return [elementRef, isVisible];
};
