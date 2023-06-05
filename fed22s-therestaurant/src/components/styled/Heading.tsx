import styled from "styled-components";

export const Heading = styled.h3`
  font-family: "Italiana", serif;
  font-size: 40px;
  margin: 0px;
`;

export const FrontPageHeading = styled(Heading)`
  background-color: rgba(139, 0, 0, 0.5);
  border-radius: 10px;
  padding: 0.4em;
  width: 7.5em;
  @media (min-width: 844px) {
    position: relative;
    top: 0px;
  }
`;
