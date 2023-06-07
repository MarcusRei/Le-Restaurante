import { keyframes } from "styled-components";

export interface IHamburgerMenuProps {
  isRotated: boolean;
}

export const crossTop = keyframes`
    from {
      transform: rotate(0deg) translateY(0%);
    }
    to {
      transform: rotate(45deg) translateY(0%);
    }
  `;

export const crossMiddle = keyframes`
    from {
      transform: scale(1, 1);
    }
    to {
      transform: scale(0, 1);
    }
  `;

export const crossBottom = keyframes`
    from {
      transform: rotate(0deg) translateY(0%);
    }
    to {
      transform: rotate(-45deg) translateY(0%);
    }
  `;
