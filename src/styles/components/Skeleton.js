import styled, { css, keyframes } from 'styled-components';

import { lighten } from 'polished';

const animation = keyframes`
  from {
    background-position: 0% 0%;
  } 
  to {
    background-position: 135% 0%;
  }
`;

const skeleton = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(
      -90deg,
      ${theme.colors.skeletonAnimation} 0%,
      ${lighten(theme.colors.skeletonLighten, theme.colors.skeletonAnimation)}
        50%,
      ${theme.colors.skeletonAnimation} 100%
    );
    background-size: 400% 400%;
    animation: ${animation} 1.2s ease-in-out infinite;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    padding: 2rem;
  `}
`;

export const AllContent = styled.div`
  width: 85%;
  margin: 0 auto;
`;

export const FilterAndSearch = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Filter = styled(skeleton)`
  width: 15%;
  height: 2.2rem;
  border-radius: 5px;
  opacity: 0.8;
`;

export const Search = styled(skeleton)`
  width: 23%;
  height: 2.2rem;
  border-radius: 5px;
  opacity: 0.8;
`;

export const StatesInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
`;
export const StateInfo = styled(skeleton)`
  ${({ theme, isTitle = false }) => css`
    background-color: ${theme.colors.primary};
    width: 15%;
    border-radius: 10px;
    margin: ${isTitle ? '1.7rem 0' : '0'};
    height: ${isTitle ? '2rem' : '1rem'};
    opacity: 0.8;
  `}
`;

export const List = styled.div`
  ${({ spacings }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem ${spacings}%;
  `}
`;

export const Content = styled(skeleton)`
  ${({ height, width }) => css`
    width: ${width}%;
    height: ${height}vh;
    opacity: 0.8;
    border-radius: 10px;
    cursor: progress;
  `}
`;
