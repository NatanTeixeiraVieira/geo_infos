import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

import { ThemeContext } from '@/contexts/Theme/ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import {
  HeaderButtons,
  HeaderContainer,
  NavigationList,
  ThemeSwitcher,
} from '@/styles/components/Header';

import PageLink from './PageLink';

export default function Header({ font }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <HeaderContainer className={font} role="heading">
      <Link href="/" data-testid="logo">
        <Image
          src="/images/logo.png"
          width={64}
          height={64}
          alt="Logo do site"
        />
      </Link>

      <HeaderButtons>
        <nav>
          <NavigationList>
            <PageLink page="Estados" href="/" />
          </NavigationList>
        </nav>
        <ThemeSwitcher onClick={toggleTheme}>
          {theme.title === 'light' ? (
            <DarkModeIcon style={{ fontSize: '30px' }} />
          ) : (
            <LightModeIcon style={{ fontSize: '30px' }} />
          )}
        </ThemeSwitcher>
      </HeaderButtons>
    </HeaderContainer>
  );
}
