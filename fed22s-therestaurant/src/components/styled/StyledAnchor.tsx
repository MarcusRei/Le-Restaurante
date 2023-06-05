import styled from "styled-components";

export const StyledAnchor = styled.a`
  text-decoration: none;
  font-size: 1.5em;
  color: white;

  :hover {
    color: red;
  }

  @media (min-width: 844px) {
    font-size: 4em;
    gap: 1em;
    color: red;
  }
`;
