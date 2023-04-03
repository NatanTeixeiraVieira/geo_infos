import styled from 'styled-components';

export const Container = styled.div`
  p {
    line-height: 1.5rem;
  }
`;

export const NameTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  margin-left: 7.5%;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

export const StateInfo = styled.section`
  margin-left: 7.5%;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

export const CitiesTitle = styled(NameTitle)`
  font-size: 1.7rem;
  margin-top: 2rem;
`;

export const Cities = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  gap: 2rem 5%;
  width: 85%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
    grid-template-columns: 31.5% 31.5% 31.5%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  box-shadow: 0.3rem 0.3rem 0.75rem rgba(0, 0, 0, 0.5);
`;
