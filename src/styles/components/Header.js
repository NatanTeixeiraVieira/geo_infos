import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 4rem;
  padding: 0 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.secundary};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
