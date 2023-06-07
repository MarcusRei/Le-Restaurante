import styled, { keyframes } from "styled-components";

interface IHamburgerMenuProps {
  isRotated: boolean;
}

const crossTop = keyframes`
  from {
    transform: rotate(0deg) translateY(0%);
  }
  to {
    transform: rotate(45deg) translateY(0%);
  }
`;

const crossMiddle = keyframes`
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 1);
  }
`;

const crossBottom = keyframes`
  from {
    transform: rotate(0deg) translateY(0%);
  }
  to {
    transform: rotate(-45deg) translateY(0%);
  }
`;

export const HamburgerMenu = styled.div<IHamburgerMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2em;
  height: 2em;
  cursor: pointer;

  & > div {
    width: 100%;
    height: 2em;
    background-color: red;
    transition: transform 0.3s;

    &:nth-child(1) {
      animation: ${(props) => (props.isRotated ? crossTop : "")} 0.3s forwards;
      transform-origin: top left;
    }

    &:nth-child(2) {
      animation: ${(props) => (props.isRotated ? crossMiddle : "")} 0.3s
        forwards;
      transform-origin: center;
    }

    &:nth-child(3) {
      animation: ${(props) => (props.isRotated ? crossBottom : "")} 0.3s
        forwards;
      transform-origin: bottom left;
    }
  }

  @media (min-width: 844px) {
    display: none;
  }
`;
