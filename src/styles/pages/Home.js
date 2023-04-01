import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 23% 23% 23% 23%;
  gap: 2rem 2.6%;
  width: 85%;
  margin: 0 auto;
`;

export const State = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  box-shadow: 0.3rem 0.3rem 0.75rem rgba(0, 0, 0, 0.5);
  height: 30vh;

  a {
    text-decoration: none;
    background-color: ${(props) => props.theme.colors.button};
    width: 60%;
    padding: 0.7rem 2rem;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.textSecundary};
    text-align: center;
  }
`;

export const Name = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
`;

export const Uf = styled.p`
  font-size: 1.2rem;
`;

export const RequestError = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 1.6rem;
`;
