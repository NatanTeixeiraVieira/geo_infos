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
`;

export const StateInfo = styled.section`
  margin-left: 7.5%;
`;

export const StateCities = styled.section``;

export const CitiesTitle = styled(NameTitle)`
  font-size: 1.7rem;
  margin-top: 2rem;
`;

export const Cities = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  gap: 2rem 4.5%;
  width: 85%;
  margin: 0 auto;
`;

export const CityName = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  box-shadow: 0.3rem 0.3rem 0.75rem rgba(0, 0, 0, 0.5);
`;
