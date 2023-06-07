import styled from "styled-components";

export const StyledAnchor = styled.a`
  text-decoration: none;
  font-size: 1.5em;
  color: white;

  :hover {
    color: #8c0303;
  }

  @media (min-width: 844px) {
    font-size: 1.5em;
    font-weight: 600;
    padding-right: 1em;
    color: black;
  }
`;
