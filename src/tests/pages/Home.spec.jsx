import Home from '@/pages';
import GlobalStyles from '@/styles/GlobalStyles';
import light from '@/styles/themes/light';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

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
    expect(screen.getByText('Detalhes')).toBeInTheDocument();
  });
});
