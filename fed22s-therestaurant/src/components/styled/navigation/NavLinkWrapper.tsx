import styled from "styled-components";

export const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 1em;
  @media (min-width: 844px) {
    flex-direction: row;

    position: relative;

    display: block;
  }
`;
