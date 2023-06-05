import styled from "styled-components";

export const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 1em;
  @media (min-width: 844px) {
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    left: 600px;
    display: block;
  }
`;
