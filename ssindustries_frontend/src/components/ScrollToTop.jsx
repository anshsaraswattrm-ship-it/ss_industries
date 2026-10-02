import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jaise hi pathname change hoga, window top par scroll ho jayegi
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ye kuch bhi UI render nahi karega
}

export default ScrollToTop;