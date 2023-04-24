import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
  `}
`;

export const FilterAndSearch = styled.section`
  display: flex;
  width: 85%;
  margin: 0 auto;
  margin-bottom: 2rem;

  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;
