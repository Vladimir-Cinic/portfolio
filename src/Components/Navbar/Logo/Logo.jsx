import React from 'react';
import styled, { keyframes } from 'styled-components';

export const turn = keyframes`
  from { transform: rotate3d(0, 0, 0, 0)}
  to { transform: rotate3d(1, 1, 0, 360deg) }
}
`;

export const Container = styled.div`
  position: relative;
  width: 1.3rem;
  height: 1.3rem;
  perspective: 500px;
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
`;

export const Cube = styled.div`
  position: relative;
  width: 1.4rem;
  height: 1.4rem;
  transform-style: preserve-3d;
  animation: ${turn} 7s linear infinite;
`;

export const Face = styled.div`
  width: 1rem;
  height: 1rem;
  background: transparent;
  border: 1px solid #fff;
  position: absolute;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 500ms;
  box-shadow: 0 0 5px ${({ theme }) => theme.textLight};
`;
export const FaceTop = styled(Face)`
  transform: translateY(-0.5rem) rotateX(90deg);
`;

export const FaceBottom = styled(Face)`
  transform: translateY(0.5rem) rotateX(-90deg);
`;

export const FaceLeft = styled(Face)`
  transform: translateX(-0.5rem) rotateY(-90deg);
`;

export const FaceRight = styled(Face)`
  transform: translateX(0.5rem) rotateY(90deg);
`;

export const FaceFront = styled(Face)`
  transform: translateZ(0.5rem);
`;
export const FaceBack = styled(Face)`
  transform: translateZ(-0.5rem) rotateY(180deg);
`;

const Logo = () => {
  return (
    <Container>
      <span></span>
      <span></span>
      <Cube>
        <FaceTop />
        <FaceBottom />
        <FaceLeft />
        <FaceRight />
        <FaceFront />
        <FaceBack />
      </Cube>
    </Container>
  );
};

export default Logo;
