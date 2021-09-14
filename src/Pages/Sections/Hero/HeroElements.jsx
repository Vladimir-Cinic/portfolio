import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-scroll';
import { BtnStyle } from '../SectionElements';

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const Hero = styled.section`
  height: 100vh;
  min-width: 100%;
  padding: 5rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 5rem 1.5rem 1.5rem;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background: transparent;

  &:after {
    position: absolute;
    content: '';
    height: 3rem;
    width: 5px;
    right: 0;
    bottom: 0.5rem;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 5px;
    box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 2px ${({ theme }) => theme.primary},
      0 0 3px ${({ theme }) => theme.primary},
      0 0 5px ${({ theme }) => theme.primary},
      0 0 5px ${({ theme }) => theme.primary};
  }
  @media ${({ theme }) => theme.breakpoints.md} {
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

export const ImageWrapper = styled.div`
  width: 150%;
  overflow: hidden;
  position: absolute;
  z-index: -2;
  right: -38%;
  top: 40%;
  max-width: 80rem;
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 120%;
    right: -25%;
    top: 30%;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    top: 40%;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    width: 90%;
    top: 15%;
    right: -15%;
  }
  @media ${({ theme }) => theme.breakpoints.fullhd} {
    top: 20%;
  }
`;

export const SocialIcons = styled.ul`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 2rem;
`;
export const A = styled.a`
  background-color: ${({ theme }) => theme.primary};
  border-radius: 0.2rem;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  color: #000;
  transition: 0.3s;
  margin-bottom: 1rem;
  &:hover {
    transform: scale(1.15);
    box-shadow: ${({ theme }) => `0 0 3px #fff, 0 0 5px #fff, 0 0 5px #fff,
      0 0 3px  ${theme.primary},
      0 0 5px  ${theme.primary},
      0 0 2px  ${theme.primary},
      0 0 10px  ${theme.primary},
      0 0 20px  ${theme.primary}}`};
  }
  @media ${({ theme }) => theme.breakpoints.fullhd} {
    font-size: 2.5rem;
  }
`;

export const H2 = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.textDark};
  font-weight: bold;
  padding: 0 0.5rem;
  width: 100%;
  text-shadow: -3px 0px 2px #000;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.primary};
    left: -1px;
    height: 70%;
    transform: translateY(20%);
    width: 3px;
    box-shadow: ${({ theme }) => `0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 3px  ${theme.primary},
      0 0 5px  ${theme.primary},
      0 0 2px  ${theme.primary},
      0 0 10px  ${theme.primary},
      0 0 20px  ${theme.primary}}`};
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 2.5rem;
  }
  @media ${({ theme }) => theme.breakpoints.fullhd} {
    font-size: 3rem;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.textLight};
  font-family: 'Orbitron', sans-serif;
  font-size: 4rem;
  text-align: left;
  position: relative;
  font-weight: 900;
  width: 100%;
  text-shadow: -5px 0px 3px #000;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 5rem;
  }
  @media ${({ theme }) => theme.breakpoints.fullhd} {
    font-size: 6rem;
  }
  &:before {
    position: absolute;
    content: '';
    width: 115%;
    height: 100%;
    z-index: -1;
    left: -5%;
    top: 1rem;
    border-radius: 50%;
    transition: 0.3s;
    box-shadow: -5px -15px 8px -7px ${({ theme }) => theme.textLight},
      -10px -30px 20px -5px ${({ theme }) => theme.primary};
    @media ${({ theme }) => theme.breakpoints.sm} {
      left: -10%;
      width: 120%;
      height: 150%;
    }

    @media ${({ theme }) => theme.breakpoints.xl} {
      left: -8%;
      height: 250%;
    }
    @media ${({ theme }) => theme.breakpoints.xxl} {
      top: 15%;
      left: -15%;
      width: 130%;
      height: 20rem;
    }
  }
`;
export const Subtitle = styled.h3`
  color: ${({ theme }) => theme.textDark};
  text-align: left;
  font-size: 1.4rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 300;
  width: 100%;
  margin: 0.5rem 0 2rem;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 2rem;
  }
`;
export const Accent = styled.span`
  color: ${({ theme }) => theme.primary};
  font-family: 'Orbitron', sans-serif;
  font-weight: 900;
`;

export const Span = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  text-shadow: ${({ theme }) => `0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 3px  ${theme.primary},
      0 0 5px  ${theme.primary},
      0 0 2px  ${theme.primary},
      0 0 10px  ${theme.primary},
      0 0 20px  ${theme.primary}}`};
`;

export const ScrollBtn = styled(Link)`
  ${BtnStyle}
  font-size:1rem;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.3rem;
  }
`;

export const Btn = styled.a`
  ${BtnStyle}
  margin-bottom: 1rem;
  font-size: 1rem;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const AboutArrow = styled(Link)`
  position: absolute;
  bottom: 0;
  display: flex;
  left: 0;
  color: ${({ theme }) => theme.primary};
  border-radius: 0.2rem;
  font-size: 4vh;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.15);
  }
`;
