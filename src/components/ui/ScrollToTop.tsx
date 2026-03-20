import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Fire again after AnimatePresence exit animation completes (300ms)
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 350);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
