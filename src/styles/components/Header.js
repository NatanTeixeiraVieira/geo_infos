import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4.5rem;
    padding: 0 2rem;
    background-color: ${theme.colors.secundary};

    img {
      width: 4rem;
      height: 4rem;
    }
  `}
`;

export const ThemeSwitcher = styled.div`
  color: #fff;
  cursor: pointer;
`;
