import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  margin-right: 0.15rem;
  width: 25%;
`;

export const SearchInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 5px;
  height: 2.3rem;
  width: 100%;
`;
