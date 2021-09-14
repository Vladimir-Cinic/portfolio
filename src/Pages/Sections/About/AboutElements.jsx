import styled, { ThemeConsumer, ThemeContext } from 'styled-components';

export const About = styled.section`
  height: 100vh;
  width: 100%;
  padding: 4.5rem 1rem 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 5rem 1.5rem 1.5rem;
  }
`;

export const AboutContent = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  @media ${({ theme }) => theme.breakpoints.lg} {
    &::after {
      position: absolute;
      content: '';
      background-color: ${({ theme }) => theme.primary};
      height: 70%;
      width: 1px;
      left: 0;
      top: 0;

      box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
        0 0 2px ${({ theme }) => theme.primary},
        0 0 3px ${({ theme }) => theme.primary},
        0 0 5px ${({ theme }) => theme.primary},
        0 0 10px ${({ theme }) => theme.primary};
    }
    &::before {
      position: absolute;
      content: '';
      background-color: ${({ theme }) => theme.primary};
      height: inherit;
      height: 70%;
      width: 1px;
      right: 0;
      bottom: 0;
      box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
        0 0 2px ${({ theme }) => theme.primary},
        0 0 3px ${({ theme }) => theme.primary},
        0 0 5px ${({ theme }) => theme.primary},
        0 0 10px ${({ theme }) => theme.primary};
    }
    padding: 0rem 2rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    height: auto;
    max-width: 40rem;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    max-width: 50rem;
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    max-width: 55rem;
  }
  @media ${({ theme }) => theme.breakpoints.xxl} {
    max-width: 65rem;
  }
`;

export const ImageContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  max-height: 10rem;
  @media ${({ theme }) => theme.breakpoints.sm} {
    max-height: 12rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    max-height: 13rem;
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    max-height: 15rem;
  }

  @media ${({ theme }) => theme.breakpoints.xxl} {
    max-height: 18rem;
  }
`;
export const MyPhoto = styled.img`
  border-radius: 0.2rem;
  height: 100%;
  width: auto;
  object-fit: cover;
`;

export const Img1 = styled.img`
  position: absolute;
  z-index: -1;
  width: 90%;
  top: -3rem;
  right: -3rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    right: -4rem;
    top: -5rem;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 80%;
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    width: 70%;
    right: 2rem;
  }
`;

export const Img2 = styled.img`
  position: absolute;
  z-index: -1;
  bottom: 1rem;
  left: -7rem;
  width: 100%;
  @media ${({ theme }) => theme.breakpoints.md} {
    left: -13rem;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 70%;
    left: -6rem;
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    width: 40%;
  }
`;

export const ContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const Heading = styled.h3`
  width: auto;
  color: ${({ theme }) => theme.textDark};
  font-size: 2.7vh;
  font-weight: bold;
  font-family: ${({ theme }) => theme.secondaryFont};
  position: relative;
  padding-left: 0.4rem;
  margin: 0.7rem 0 0.4rem;
  text-transform: uppercase;
  &:before {
    content: '';
    position: absolute;
    width: 2px;
    height: 70%;
    box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 2px ${({ theme }) => theme.primary},
      0 0 3px ${({ theme }) => theme.primary},
      0 0 5px ${({ theme }) => theme.primary},
      0 0 10px ${({ theme }) => theme.primary};
    top: 15%;
    left: 0;
    background-color: ${({ theme }) => theme.primary};
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    margin: 1.2rem 0 0.8rem;
  }
`;

export const Text = styled.p`
  text-align: left;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textLight};
  font-family: ${({ theme }) => theme.textFont};
  font-size: 2vh;
  @media ${({ theme }) => theme.breakpoints.xl} {
    font-size: 2.1vh;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  width: 100%;
`;

export const IconsContainer = styled.div`
  width: 100%;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 2rem;
    width: 80%;
    margin: 2rem auto 0;
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    width: 60%;
  }
`;

export const SkillIcon = styled.div`
  height: inherit;
  width: 1.5rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 2.5rem;
  }
`;

export const IconImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
