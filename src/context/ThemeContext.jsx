import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage, default to dark
    const saved = localStorage.getItem('theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true; // Default is Dark Mode as requested
  });

  useEffect(() => {
    const root = document.documentElement;
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');

    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      if (themeColorMeta) themeColorMeta.setAttribute('content', '#121212');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      if (themeColorMeta) themeColorMeta.setAttribute('content', '#FAFAFA');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
