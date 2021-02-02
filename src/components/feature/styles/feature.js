import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  flex-direction: @media (max-width: 1000px) {
    flex-direction: column;
  }

  margin: auto;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Pane = styled.div`
  margin: 0 100px;
  @media (max-width: 1000px) {
    margin: 0;
  }
`;

export const Item = styled.div`
  display: flex;
  padding: 50px 5%;
  overflow: hidden;
  justify-content: center;
`;

export const Container = styled.div`
  background-color: #f6f2e6;
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 500px;
  max-height: 500px;
  @media (max-width: 500px) {
    max-width: 90vw;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
`;
