import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jaise hi URL ka path badlega, page ekdum top par scroll ho jayega
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Yeh component kuch render nahi karega, bas apna kaam karega
};

export default ScrollToTop;