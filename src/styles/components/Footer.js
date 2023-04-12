import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 9rem;
  background-color: ${(props) => props.theme.colors.secundary};
`;

export const Copyright = styled.p`
  color: #fff;
  font-size: 1rem;

  span {
    font-weight: 700;
  }
`;
