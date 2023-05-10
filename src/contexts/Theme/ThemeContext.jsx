import { createContext, useCallback, useMemo } from 'react';

import useTheme from '@/hooks/useTheme';

import dark from '@/styles/themes/dark';
import light from '@/styles/themes/light';

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === light ? dark : light);
  }, [theme, setTheme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
