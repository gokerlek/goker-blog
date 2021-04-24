import React, { useLayoutEffect, useState } from 'react';
import { TopButton } from './top-button';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    window?.pageYOffset > 200 ? setIsVisible(true) : setIsVisible(false);
  };

  useLayoutEffect(() => {
    window?.addEventListener('scroll', toggleVisibility);
  }, []);

  return <>{isVisible && <TopButton />}</>;
};
