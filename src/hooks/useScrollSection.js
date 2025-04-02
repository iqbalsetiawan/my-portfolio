import { useState, useEffect } from 'react';
import { navigationItems } from '../data/portfolioConfig';

export const useScrollSection = (isLoading) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (!isLoading) {
      const handleScroll = () => {
        const sections = navigationItems.map(item => item.toLowerCase());
        const scrollPosition = window.scrollY + 100;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const sectionTop = element.offsetTop;
            const sectionBottom = sectionTop + element.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isLoading]);

  return activeSection;
}; 