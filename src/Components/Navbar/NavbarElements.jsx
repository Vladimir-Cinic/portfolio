import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

export const spin = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(359deg);
  }
`;
export const Nav = styled.nav`
  position: fixed;
  min-width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavCenter = styled.div`
  height: 3.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 1rem;
  max-width: ${({ theme }) => theme.maxWidth};
  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 0 0 0 1rem;
  }
`;

export const LogoContainer = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    background-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 2px ${({ theme }) => theme.primary},
      0 0 3px ${({ theme }) => theme.primary},
      0 0 5px ${({ theme }) => theme.primary},
      0 0 5px ${({ theme }) => theme.primary};
    bottom: 0;
    left: 12%;
    height: 2px;
    width: 1.6rem;
  }
`;

export const Bar = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.primary};
  position: relative;
  transform: ${(props) => (props.active ? 'rotate(-45deg)' : null)};
  transition: 0.3s;
  box-shadow: ${(props) =>
    props.active
      ? `0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 2px ${props.theme.primary},
      0 0 3px ${props.theme.primary},
      0 0 5px ${props.theme.primary},
      0 0 10px ${props.theme.primary}`
      : null};
  &::after {
    transition: 0.3s;
    position: absolute;
    content: '';
    background-color: inherit;
    height: inherit;
    width: ${(props) => (props.active ? '50%' : '80%')};
    left: 0;
    transform: ${(props) =>
      props.active
        ? 'translate(.5rem, .5rem) rotate(90deg)'
        : 'translateY(9px)'};
    box-shadow: ${(props) =>
      props.active
        ? `0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 2px ${props.theme.primary},
      0 0 3px ${props.theme.primary},
      0 0 5px ${props.theme.primary},
      0 0 10px ${props.theme.primary}`
        : null};
  }
  &::before {
    transition: 0.3s;
    position: absolute;
    content: '';
    background-color: inherit;
    height: inherit;
    width: 50%;
    transform: ${(props) =>
      props.active
        ? 'translate(.5rem, -.55rem) rotate(90deg)'
        : 'translateY(-9px)'};
    left: 0;
    box-shadow: ${(props) =>
      props.active
        ? `0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 2px ${props.theme.primary},
      0 0 3px ${props.theme.primary},
      0 0 5px ${props.theme.primary},
      0 0 10px ${props.theme.primary}`
        : null};
  }
`;

export const HamburgerMenu = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }
`;

export const LinksContainer = styled.div`
  position: fixed;
  top: 3.5rem;
  left: 0;
  background-color: #000;
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.active ? '1' : '0')};
  width: 100%;
  height: 100%;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  @media ${({ theme }) => theme.breakpoints.md} {
    visibility: visible;
    opacity: 1;
    position: static;
    height: inherit;
    width: auto;
    background: transparent;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  height: 100%;
  z-index: 100;
  padding-top: 6rem;
  @media ${({ theme }) => theme.breakpoints.md} {
    width: auto;
    height: inherit;
    flex-direction: row;
    padding: 0;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media ${({ theme }) => theme.breakpoints.md} {
    height: 100%;
    justify-content: center;
  }
`;

export const SLink = styled(Link)`
  color: ${({ theme }) => theme.textDark};
  display: inline-block;
  letter-spacing: 2px;
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  position: relative;
  margin-bottom: 2.5rem;
  padding: 1rem;
  text-align: center;
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.textLight};
    text-shadow: 0 0 1px #fff, 0 0 3px #fff, 0 0 3px #fff;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    margin: 0 0 0 0.5rem;
    padding: 0.6rem 1rem;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 1.2rem;
  }
`;
