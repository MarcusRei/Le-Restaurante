import styled from "styled-components";

export const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: flex-end;
  padding-right: 20px;
  @media (min-width: 844px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
