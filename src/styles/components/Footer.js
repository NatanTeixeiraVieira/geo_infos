import styled, { css } from 'styled-components';

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 9rem;
    background-color: ${theme.colors.secondary};
  `}
`;

export const Copyright = styled.p`
  color: #fff;
  font-size: 1rem;

  span {
    font-weight: 700;
  }
`;
