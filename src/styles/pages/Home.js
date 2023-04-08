import styled from 'styled-components';

export const Container = styled.div``;

export const FilterAndSearch = styled.section`
  display: flex;
  width: 85%;
  margin: 0 auto;
  margin-bottom: 2rem;

  @media (max-width: 1200px) {
    width: 95%;
  }
  @media (max-width: 1080px) {
    width: 90%;
  }
  @media (max-width: 845px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 94%;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;

export const States = styled.section`
  display: grid;
  grid-template-columns: 23% 23% 23% 23%;
  gap: 2rem 2.6%;
  width: 85%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 95%;
    gap: 1.8rem 2.6%;
  }
  @media (max-width: 1080px) {
    width: 90%;
    grid-template-columns: 31.6% 31.6% 31.6%;
    gap: 1.5rem 2.6%;
  }
  @media (max-width: 845px) {
    width: 100%;
    gap: 1.3rem 2.6%;
  }
  @media (max-width: 768px) {
    grid-template-columns: 45% 45%;
    gap: 1.5rem 3.33%;
    margin: 0 3.33%;
  }
  @media (max-width: 650px) {
    grid-template-columns: 48.5% 48.5%;
    gap: 1rem 3%;
    margin: 0;
  }
  @media (max-width: 500px) {
    grid-template-columns: 100%;
  }
`;

export const State = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  box-shadow: 0.3rem 0.3rem 0.75rem rgba(0, 0, 0, 0.5);

  a {
    text-decoration: none;
    background-color: ${(props) => props.theme.colors.button};
    min-width: 60%;
    max-width: 95%;
    padding: 0.7rem 2rem;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.textSecundary};
    text-align: center;
  }
`;

export const Name = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
`;

export const Uf = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0 2rem 0;
`;

export const RequestError = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 1.6rem;
`;
