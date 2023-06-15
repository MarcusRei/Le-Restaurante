import styled from "styled-components";

export const MainElement = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes swap {
    0%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

export const SecondElement = styled.div`
  border-radius: 100%;
  content: "";
  height: 100px;
  opacity: 0.5;
  position: absolute;
  width: 100px;
  animation: swap 2s -0.75s infinite;
  background-color: #895959;
`;

export const ThirdElement = styled.div`
  border-radius: 100%;
  content: "";
  height: 100px;
  opacity: 0.5;
  position: absolute;
  width: 100px;
  animation: swap 2s infinite;
  background-color: #508150;
`;

export const MiddleText = styled.h2`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
  text-align: center;
  width: 60%;
  z-index: 100;
`;
