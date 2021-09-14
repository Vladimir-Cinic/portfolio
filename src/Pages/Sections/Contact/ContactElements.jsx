import styled, { css } from 'styled-components';
import { BtnStyle } from '../SectionElements';

const FormStyle = css`
  width: 100%;
  background-color: #000;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 0.2rem;
  padding: 0.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.secondaryFont};
  &:focus {
    box-shadow: 0 0 2px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 2px ${({ theme }) => theme.primary},
      0 0 3px ${({ theme }) => theme.primary},
      0 0 5px ${({ theme }) => theme.primary},
      0 0 5px ${({ theme }) => theme.primary};
  }
  @media ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1rem;
  }
`;

export const Contact = styled.section`
  min-height: 100vh;
  padding: 5rem 1rem 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  @media ${({ theme }) => theme.breakpoints.md} {
    justify-content: center;
    padding: 5rem 1.5rem 1.5rem;
  }
`;

export const BgImage2 = styled.img`
  position: absolute;
  z-index: -1;
  right: -6rem;
  top: -6rem;
`;

export const BgImage1 = styled.img`
  position: absolute;
  z-index: -1;
  left: -20rem;
  width: 35rem;
  bottom: -12rem;
  transform: rotate(180deg);
`;

export const HeadingContainer = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  @media ${({ theme }) => theme.breakpoints.xl} {
    margin-bottom: 4rem;
  }
`;

export const Title = styled.h4`
  letter-spacing: 2px;
  color: ${({ theme }) => theme.textLight};
  font-family: ${({ theme }) => theme.secondaryFont};
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  font-size: 2.5vh;
  text-shadow: -5px 0px 3px #000;
`;

export const Subtitle = styled.h6`
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textDark};
  width: 100%;
  font-size: 1.8vh;
  margin-top: 0.7rem;
  font-weight: 600;
  text-shadow: -2px -1px 3px rgba(0, 0, 0, 1);
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 0.2rem;
  position: relative;
  padding: 1rem;
  background-color: #000;
  box-shadow: 0 0 2px #fff, 0 0 2px #fff, 0 0 2px #fff,
    0 0 2px ${({ theme }) => theme.primary},
    0 0 3px ${({ theme }) => theme.primary},
    0 0 5px ${({ theme }) => theme.primary},
    0 0 5px ${({ theme }) => theme.primary};
  @media ${({ theme }) => theme.breakpoints.mobile} {
    height: 29.5rem;
  }
  @media ${({ theme }) => theme.breakpoints.xsm} {
    height: 32rem;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    max-width: 400px;
    height: 30rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    max-width: 400px;
    height: 30rem;
  }

  @media ${({ theme }) => theme.breakpoints.xxl} {
    max-width: 500px;
    height: 35rem;
  }
`;

export const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Input = styled.input`
  ${FormStyle}
`;

export const TextArea = styled.textarea`
  ${FormStyle}
  height:10rem;
`;

export const MessageDisplay = styled.div`
  width: 100%;
  text-align: center;
  height: 100%;
  padding: 0 1rem;
  color: ${({ theme }) => theme.primary};
  font-family: ${({ theme }) => theme.secondaryFont};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1rem;
  }
  @media ${({ theme }) => theme.breakpoints.xxl} {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  ${BtnStyle}
  margin-top:1rem;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 0.9rem;
  }
`;

export const SocialIcons = styled.ul`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const A = styled.a`
  color: ${({ theme }) => theme.primary};
  font-family: ${({ theme }) => theme.textFont};
  font-size: 0.9rem;
  letter-spacing: 1px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  transition: 0.3s;
  &:hover {
    text-shadow: ${({ theme }) => `0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff,
      0 0 3px  ${theme.primary},
      0 0 5px  ${theme.primary}`};
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1rem;
  }
`;
