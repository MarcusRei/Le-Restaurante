import styled from "styled-components";

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
