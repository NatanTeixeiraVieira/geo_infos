import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('/images/404.jpg');
  background-size: cover;
  background-position: top;
  color: #fff;

  a {
    color: #000;
    text-decoration: none;
    background-color: #fff;
    width: 60%;
    padding: 0.8rem;
    border-radius: 5px;
    text-align: center;
    opacity: 0.9;

    :hover {
      background-color: #fff;
      opacity: 1;
    }
  }
`;
export const ErrorInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  height: 40vh;
  border-radius: 5px;
  padding: 0 4rem;

  @media (max-width: 400px) {
    padding: 0 1rem;
  }
`;
export const ErrorTitle = styled.h1`
  font-size: 5rem;
  font-weight: 700;
`;
export const ErrorDescription = styled.p`
  font-size: 1.5rem;
`;
