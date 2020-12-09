import styled from "styled-components";

export const InnerFrame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;
export const Outer = styled.div`
  width: 300px;
  height: 200px;
  perspective: 1000px;
  &:hover ${InnerFrame} {
    transform: rotateY(180deg);
  }
`;

export const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
`;

export const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
