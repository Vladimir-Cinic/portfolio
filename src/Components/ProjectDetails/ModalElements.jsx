import styled, { keyframes } from 'styled-components';
import { IoMdReturnLeft } from 'react-icons/io';
export const rotate = keyframes`
100%{
    transform:rotate(-360deg)
}
`;

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  padding: 1rem;
  transition: 0.5s;
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.active ? '1' : '0')};
`;

export const Modal = styled.article`
  width: 100%;
  height: auto;
  position: relative;
  z-index: 5000;
  border-radius: 0.2rem;
  padding: 0.5rem 1rem 1rem;
  min-height: 37rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 1);
  box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
    0 0 2px ${({ theme }) => theme.primary},
    0 0 3px ${({ theme }) => theme.primary},
    0 0 5px ${({ theme }) => theme.primary},
    0 0 10px ${({ theme }) => theme.primary};

  @media ${({ theme }) => theme.breakpoints.sm} {
    max-width: 25rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    min-height: 45rem;
    max-width: 35rem;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    max-width: 45rem;
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    max-width: 35rem;
    min-height: 48rem;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ImgContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.img`
  width: 130%;
`;

export const Title = styled.h4`
  color: #fff;
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  letter-spacing: 1px;
  font-weight: 800;
  color: ${({ theme }) => theme.primary};
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.5rem;
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    margin-top: -1rem;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 2.2vh;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  font-weight: 300;
  margin-bottom: 2rem;
  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 0 1rem;
  }
`;
export const ButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

export const LinkBox = styled(ButtonContainer)``;

export const CloseBtn = styled.div`
  height: 100%;
  border: 1px solid ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.textLight};
  cursor: pointer;
  transition: 0.2s;
  padding: 0.5rem;

  &:hover {
    box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 2px ${({ theme }) => theme.primary},
      0 0 3px ${({ theme }) => theme.primary},
      0 0 5px ${({ theme }) => theme.primary},
      0 0 10px ${({ theme }) => theme.primary};
  }
`;

export const ExitIcon = styled(IoMdReturnLeft)`
  font-size: 1rem;
`;

export const LinkButton = styled.a`
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: 900;
  background-color: transparent;
  color: ${({ theme }) => theme.textDark};
  outline: none;
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 0.5rem;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  span {
    display: block;
    position: absolute;
    background-color: #48dbfb;
    box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 2px ${({ theme }) => theme.primary},
      0 0 3px ${({ theme }) => theme.primary},
      0 0 5px ${({ theme }) => theme.primary},
      0 0 15px ${({ theme }) => theme.primary};
    &:nth-child(1) {
      left: -1px;
      bottom: 0px;
      width: 2px;
      height: 100%;
      transform: scaleY(0);
      transform-origin: top;
      transition: transform 0.2s;
    }
    &:nth-child(2) {
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s;
    }
    &:nth-child(3) {
      right: -2px;
      bottom: 0;
      width: 2px;
      height: 100%;
      transform: scaleY(0);
      transform-origin: bottom;
      transition: transform 0.3s;
    }
    &:nth-child(4) {
      left: 0;
      top: -2px;
      width: 100%;
      height: 2px;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s;
    }
  }
  &:hover {
    color: ${({ theme }) => theme.textLight};
    text-shadow: 0 0 1px #fff, 0 0 3px #fff, 0 0 3px #fff;
    span:nth-child(1) {
      transform: scaleY(1);
      transform-origin: bottom;
      transition: transform 0.3s;
    }
    span:nth-child(2) {
      transform: scaleX(1);
      transform-origin: left;
      transition: transform 0.3s;
    }
    span:nth-child(3) {
      transform: scaleX(1);
      transform-origin: top;
      transition: transform 0.3s;
    }
    span:nth-child(4) {
      transform: scaleX(1);
      transform-origin: right;
      transition: transform 0.3s;
    }
  }
  &:nth-of-type(2) {
    margin-left: 1rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;
