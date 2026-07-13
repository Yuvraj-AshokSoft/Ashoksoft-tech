import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useScrollAnimation = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.registerPlugin(gsap.utils.unitConvert);

    gsap.to(elementRef.current, {
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: false,
      },
      opacity: 1,
      y: 0,
      duration: 0.6,
    });
  }, []);

  return elementRef;
};
