import { useEffect, useState } from 'react';

import dark from '@/styles/themes/dark';
import light from '@/styles/themes/light';

const useTheme = () => {
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

  return [theme, setTheme];
};

export default useTheme;
