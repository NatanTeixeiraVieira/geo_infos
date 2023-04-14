import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
  `}

  p {
    line-height: 1.5rem;
  }
`;

export const FilterAndSearch = styled.section`
  display: flex;
  width: 85%;
  margin: 0 auto;
  margin-bottom: 3rem;

  @media (max-width: 1020px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;

export const NameTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  margin-left: 7.5%;

  @media (max-width: 1020px) {
    margin-left: 0;
  }
`;

export const StateInfo = styled.section`
  margin-left: 7.5%;

  @media (max-width: 1020px) {
    margin-left: 0;
  }
`;

export const CitiesTitle = styled(NameTitle)`
  font-size: 1.7rem;
  margin-top: 2rem;
`;

export const Cities = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  gap: 2rem 5%;
  width: 85%;
  margin: 0 auto;

  @media (max-width: 1020px) {
    width: 100%;
    gap: 1.4rem 2.75%;
  }
  @media (max-width: 650px) {
    grid-template-columns: 48.5% 48.5%;
    column-gap: 3%;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const CityName = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem 1rem;
    background-color: ${theme.colors.primary};
    border-radius: 10px;
    box-shadow: 0.3rem 0.3rem 0.75rem rgba(0, 0, 0, 0.5);
  `}
`;
