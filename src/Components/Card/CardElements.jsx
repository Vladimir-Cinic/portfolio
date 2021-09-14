import styled, { css } from 'styled-components';
import { BtnStyle } from '../../Pages/Sections/SectionElements';

export const Card = styled.article`
  width: 17.5rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 0.3rem;
  border: 1px solid ${({ theme }) => theme.primary};
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 0 0 2px #fff, 0 0 2px #fff, 0 0 2px #fff,
    0 0 2px ${({ theme }) => theme.primary},
    0 0 3px ${({ theme }) => theme.primary},
    0 0 5px ${({ theme }) => theme.primary},
    0 0 5px ${({ theme }) => theme.primary};
  @media ${({ theme }) => theme.breakpoints.xxl} {
    width: 20rem;
    height: 20rem;
  }
`;

export const CardHeader = styled.header`
  height: 100%;
  overflow: hidden;
  height: 100%;
  padding: 0.3rem 0.3rem 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const CardFooter = styled.footer`
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const IconsContainer = styled.div`
  height: 1.2rem;
  margin: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.breakpoints.md} {
    margin: 1.5rem 0;
  }
`;

export const IconImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const Icon = styled.div`
  height: inherit;
  width: 1.2rem;
  margin: 0.5rem;
`;

export const CardTitle = styled.h5`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textLight};
  font-family: ${({ theme }) => theme.secondaryFont};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Btn = styled.button`
  ${BtnStyle}
  font-size:.7rem;
  @media ${({ theme }) => theme.breakpoints.xl} {
    font-size: 1rem;
  }
`;
