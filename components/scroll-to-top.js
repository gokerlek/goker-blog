import React, { useEffect, useState } from 'react';
import { TopButton } from './top-button';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    window.pageYOffset > 200 ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  });

  return <>{isVisible && <TopButton />}</>;
};
