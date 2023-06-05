import styled from "styled-components";

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
