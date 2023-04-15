import styled, { css } from 'styled-components';

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    height: fit-content;
    margin-right: 0.15rem;
    width: 25%;
    border: 1px solid ${theme.colors.border};
    border-radius: 5px;
    background-color: ${theme.colors.primary};

    @media (max-width: 1024px) {
      width: 39%;
    }

    @media (max-width: 760px) {
      width: 60%;
    }

    @media (max-width: 500px) {
      width: 100%;
    }
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    padding: 0.5rem;
    font-size: 1rem;
    outline: none;
    color: ${theme.colors.textPrimary};
    border: none;
    height: 2.5rem;
    width: 100%;
    background-color: transparent;

    ::placeholder {
      color: ${theme.colors.placeholder};
    }
  `}
`;

export const XIcon = styled.div`
  display: flex;
  align-items: center;
  border-radius: 100px;
  padding: 1px;

  :hover {
    background-color: rgba(127, 127, 127, 0.3);
  }
`;
