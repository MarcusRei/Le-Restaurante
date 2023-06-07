import styled from "styled-components";

export const Heading = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Italiana", serif;

  font-size: 40px;
  margin: 0px;
  color: white;
  @media (min-width: 844px) {
    color: black;
  }
`;

export const FrontPageHeading = styled(Heading)`
  display: flex;
  background-color: rgba(139, 0, 0, 0.3);
  border-radius: 10px;
  font-size: 32px;
  @media (min-width: 844px) {
    padding-left: 0.3em;
    padding-left: 0.3em;
    padding-top: 0.1em;
    padding-bottom: 0.1em;
    width: 11em;
  }
`;
