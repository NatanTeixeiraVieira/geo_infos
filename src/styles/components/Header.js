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

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const NavigationList = styled.nav`
  display: flex;
  gap: 2.5rem;
`;

export const ThemeSwitcher = styled.div`
  color: #fff;
  cursor: pointer;
`;
