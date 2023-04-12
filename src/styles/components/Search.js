import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  margin-right: 0.15rem;
  width: 25%;

  @media (max-width: 1024px) {
    width: 39%;
  }

  @media (max-width: 760px) {
    width: 60%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  outline: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textPrimary};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 5px;
  height: 2.5rem;
  width: 100%;

  ::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
`;
