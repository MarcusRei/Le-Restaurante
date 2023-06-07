import styled from "styled-components";

export const Navbar = styled.nav`
  padding-top: 1.5em;
  //height: 80px;
  background-color: transparent;
  //  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  @media (min-width: 844px) {
    display: none;
  }
`;
