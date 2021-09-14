import styled from 'styled-components';

export const Projects = styled.section`
  min-height: 100vh;
  padding: 5rem 1rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  @media ${({ theme }) => theme.breakpoints.md} {
    justify-content: center;
    padding: 5rem 1.5rem 1.5rem;
  }
`;

export const ProjectsGrid = styled.div`
  width: auto;
  max-width: ${({ theme }) => theme.maxWidth};
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  place-items: center;
  position: relative;
  background: none;
  gap: 2rem;
  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
  @media ${({ theme }) => theme.breakpoints.xxl} {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;

export const Img1 = styled.img`
  position: absolute;
  z-index: -1;
  max-width: 100%;
  max-height: 1000%;
  right: -6.5rem;
  bottom: 10rem;
  @media ${({ theme }) => theme.breakpoints.sm} {
    right: -7rem;
    bottom: -4rem;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    right: -6rem;
    bottom: -6rem;
  }
`;

export const Img2 = styled.img`
  position: absolute;
  z-index: -1;
  max-width: 100%;
  max-height: 100%;
  left: -8rem;
  top: 9rem;
  @media ${({ theme }) => theme.breakpoints.sm} {
    left: -11rem;
  }
`;
