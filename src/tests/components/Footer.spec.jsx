import Footer from '@/components/Footer';
import GlobalStyles from '@/styles/GlobalStyles';
import light from '@/styles/themes/light';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

describe('Footer', () => {
  it('should render copyright message', () => {
    render(
      <ThemeProvider theme={light}>
        <Footer />
      </ThemeProvider>
    );
    // const copyrightMessage = screen.getByRole('span');
    const copyrightP = screen.getByTestId('copyright_p');
    const spanCopyright = screen.getByText('GeoInfos');

    expect(copyrightP).toHaveTextContent('GeoInfos © 2023');
    expect(spanCopyright).toBeInTheDocument();
  });

  it('should apply style in FooterContainer', () => {
    render(
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Footer />
      </ThemeProvider>
    );

    const footer = screen.getByTestId('footer_container');

    expect(footer).toHaveStyle(`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 9rem;
      background-color: ${light.colors.secundary};
    `);
  });

  it('should apply style in Copyright', () => {
    render(
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Footer />
      </ThemeProvider>
    );

    const copyrightP = screen.getByTestId('copyright_p');

    expect(copyrightP).toHaveStyle(`
      color: ${light.colors.textSecundary};
      font-size: 1rem;
    `);
  });

  it('should apply style in span with text GeoInfos', () => {
    render(
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Footer />
      </ThemeProvider>
    );

    const spanCopyright = screen.getByText('GeoInfos');

    expect(spanCopyright).toHaveStyle(`
      font-weight: 700;
    `);
  });
});
