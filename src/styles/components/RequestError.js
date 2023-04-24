import styled, { css } from 'styled-components';

const ContainerH1 = styled.h1`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    font-size: 1.6rem;
    color: ${theme.colors.textPrimary};
  `}
`;
export default ContainerH1;
