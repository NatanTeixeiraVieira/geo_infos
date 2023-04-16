import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 2rem;
  width: 85%;
  margin: 0 auto;

  @media (max-width: 1020px) {
    gap: 1.5rem;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(13.5rem, 1fr));
    gap: 1.5rem;
    width: 100%;
  }
`;

export const BrasilState = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    background-color: ${theme.colors.primary};
    border-radius: 10px;
    box-shadow: 0.3rem 0.3rem 0.75rem rgba(0, 0, 0, 0.5);

    a {
      text-decoration: none;
      background-color: ${theme.colors.button};
      min-width: 60%;
      max-width: 95%;
      padding: 0.7rem 2rem;
      border-radius: 5px;
      color: #fff;
      text-align: center;
    }
  `}
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
