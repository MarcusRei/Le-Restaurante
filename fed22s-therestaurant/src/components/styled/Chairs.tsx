import styled from "styled-components";

export const TopChair = styled.div`
  background-color: #424242;
  height: 60%;
  width: 15%;
  border-radius: 51% 49% 49% 51% / 100% 100% 0% 0%;
`;

export const BottomChair = styled(TopChair)`
  transform: rotate(180deg);
`;

export const ChairsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  width: 100%;
  height: 30%;
`;
