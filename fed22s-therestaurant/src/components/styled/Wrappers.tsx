import styled from "styled-components";

export const HorisontalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin: 0.2em;
  border-radius: solid 1px black;
`;

export const VerticalWrapper = styled(HorisontalWrapper)`
  flex-direction: column;
  gap: 0.1em;
  margin: 0;
`;
