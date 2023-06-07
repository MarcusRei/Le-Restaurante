import styled from "styled-components";
import {
  IHamburgerMenuProps,
  crossBottom,
  crossMiddle,
  crossTop,
} from "../animations";

export const Navbar = styled.nav`
  position: relative;
  padding-top: 1.5em;
  padding-right: 1.6em;
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: 844px) {
  }
`;

export const HamburgerWrapper = styled.div``;

export const HamburgerSymbol = styled.div<IHamburgerMenuProps>`
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
    background-color: white;
    box-shadow: 11px 13px 24px -2px rgba(0, 0, 0, 0.47);
    -webkit-box-shadow: 11px 13px 24px -2px rgba(0, 0, 0, 0.47);
    -moz-box-shadow: 11px 13px 24px -2px rgba(0, 0, 0, 0.47);
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

export const HamburgerLine = styled.div`
  width: 30px;
  height: 4px;
  margin-bottom: 6px;
`;

export const MobileLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
