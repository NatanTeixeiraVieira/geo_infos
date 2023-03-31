import { ThemeProvider } from 'styled-components';

import Home from '@/pages';
import { render, screen } from '@testing-library/react';

import GlobalStyles from '@/styles/GlobalStyles';
import light from '@/styles/themes/light';

const renderPage = () => {
  const data = [
    {
      nome: 'Paraná',
      sigla: 'PR',
    },
  ];
  render(
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Home data={data} />
    </ThemeProvider>
  );
};

describe('Home', () => {
  it('should render the content correctly', () => {
    renderPage();
    expect(screen.getByText('Paraná')).toBeInTheDocument();
    expect(screen.getByText('PR')).toBeInTheDocument();
    expect(screen.getByText('Detalhes')).toHaveAttribute('href', '/state/pr');
  });
});
