import styled from "styled-components";

export const Navbar = styled.nav`
  padding-top: 1.5em;
  padding-right: 1.5em;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 844px) {
    display: none;
  }
`;
