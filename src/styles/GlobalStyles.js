import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  main {
    background-color: ${(props) => props.theme.colors.background};
  }
`;
