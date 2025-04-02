import { useState, useEffect } from 'react';
import { themeConfig } from '../data/portfolioConfig';

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  const theme = darkMode ? themeConfig.dark : themeConfig.light;

  return { darkMode, toggleDarkMode, theme };
}; 