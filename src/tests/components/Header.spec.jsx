import { ThemeProvider } from 'styled-components';

import Header from '@/components/Header';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import GlobalStyles from '@/styles/GlobalStyles';
import light from '@/styles/themes/light';

const renderPage = () => {
  render(
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
};

describe('Header', () => {
  it('should send to the home page when logo was pressed', async () => {
    renderPage();
    const user = userEvent.setup();
    const logo = screen.getByTestId('logo');

    window.location.href = 'http://localhost/state/pr';
    await user.click(logo);
    expect(window.location.href).toBe('http://localhost/');
  });

  it('should render logo', () => {
    renderPage();
    const logoImage = screen.getByAltText('Logo do site');

    expect(logoImage).toBeInTheDocument();
  });

  it('should apply style in header container', () => {
    renderPage();
    const headerContainer = screen.getByRole('heading');

    expect(headerContainer).toHaveStyle(`
      height: 4rem;
      padding: 0 1.5rem;
      background-color: ${light.colors.secundary};
  `);
  });
});
