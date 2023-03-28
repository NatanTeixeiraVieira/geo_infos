import Header from '@/components/Header';
import GlobalStyles from '@/styles/GlobalStyles';
import light from '@/styles/themes/light';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

describe('Header', () => {
  it('should render logo', () => {
    render(
      <ThemeProvider theme={light}>
        <Header />
      </ThemeProvider>
    );
    const logoImage = screen.getByAltText('Logo do site');

    expect(logoImage).toBeInTheDocument();
  });

  it('should apply style in header container', () => {
    render(
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Header />
      </ThemeProvider>
    );
    const headerContainer = screen.getByRole('heading');

    expect(headerContainer).toHaveStyle(`
      height: 4rem;
      padding: 0 1.5rem;
      background-color: ${light.colors.secundary};
  `);
  });

  it('should apply styles in logo', () => {
    render(
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Header />
      </ThemeProvider>
    );
    const logo = screen.getByTestId('logo');

    expect(logo).toHaveStyle(`
      display: flex;
      align-items: center;
      height: 100%;
    `);
  });
});
