import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  margin: 0 auto;

  @media (max-width: 500px) {
    margin: 2rem 0 0 0;
  }
`;

export const LabelFilter = styled.label`
  margin-right: 0.5rem;
`;

export const SelectContainer = styled.div`
  width: 15%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.border};

  @media (max-width: 1024px) {
    width: 35%;
  }

  @media (max-width: 295px) {
    width: 50%;
  }
`;

export const SelectFilter = styled.select`
  border: none;
  outline: none;
  width: 100%;
`;
