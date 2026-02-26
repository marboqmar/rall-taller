import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const LOCAL_STORAGE_THEME_KEY = 'site-theme';

  // Function within this useState - Apply saved theme or system theme. This function only runs on
  // the first render.
  const [activeTheme, setActiveTheme] = useState(() => {
    // Check if there is a saved theme
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

    if (savedTheme) return savedTheme;

    // If has dark as their system theme, apply dark theme, if not apply light theme
    const isSystemThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return isSystemThemeDark ? 'dark' : 'light';
  });

  // Sync the DOM attribute whever the theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, activeTheme);
  }, [activeTheme]);

  const toggleTheme = () => {
    setActiveTheme(previousTheme => (previousTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = {
    activeTheme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used within ThemeContextProvider');

  return context;
};
