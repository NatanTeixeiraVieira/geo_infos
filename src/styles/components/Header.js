import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 4.5rem;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.colors.secundary};

  img {
    width: 4rem;
    height: 4rem;
  }
`;
