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

export const HeadingLine = styled.div`
  height: 1px;
  width: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid lightgray;
  @media (min-width: 844px) {
    width: 1.5em;
  }
`;
export const HeadingLineWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 844px) {
    width: 25em;
  }
`;

export const InnerWrapperOfHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2em;
  @media (min-width: 844px) {
    min-width: 20em;
  }
`;

export const OuterWrapperOfHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  max-width: 20em;
  @media (min-width: 844px) {
    width: 70%;
  }
`;
export const WrapperOfHours = styled(OuterWrapperOfHeading)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  width: 16em;
  @media (min-width: 844px) {
    width: 17em;
  }
`;
