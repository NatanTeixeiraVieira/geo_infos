import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import dark from '@/styles/themes/dark';
import light from '@/styles/themes/light';

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme');

    if (localStorageTheme === 'dark') {
      setTheme(dark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme.title);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === light ? dark : light);
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
