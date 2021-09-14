import styled, { css } from 'styled-components';

export const BtnStyle = css`
  display: inline-block;
  font-size: 0.6rem;
  text-transform: uppercase;
  font-weight: 500;
  background-color: transparent;
  color: ${({ theme }) => theme.textDark};
  outline: none;
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 0.5rem 1rem;
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
`;

export const Text = styled.p`
  text-align: left;
  color: ${({ theme }) => theme.textLight};
  font-family: ${({ theme }) => theme.textFont};
  font-size: 0.8rem;
  letter-spacing: 1px;
  @media ${({ theme }) => theme.breakpoints.xsm} {
    font-size: 1rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.5rem;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 2rem;
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    font-size: 1.5rem;
  }
`;
