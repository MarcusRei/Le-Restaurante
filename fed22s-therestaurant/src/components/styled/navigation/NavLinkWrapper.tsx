import styled from "styled-components";

export const NavLinkWrapper = styled.div`
  background-color: #b3b3b3;
  z-index: 1000;
  position: absolute;
  top: 55px;
  right: 5px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 1em;

  @media (min-width: 844px) {
    top: 0;
    flex-direction: row;
    background-color: transparent;
    position: relative;
    display: block;
  }
`;
