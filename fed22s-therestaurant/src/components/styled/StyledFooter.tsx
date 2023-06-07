import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  background-color: gray;

  height: 200px;
  width: 100vw;
  @media (min-width: 844px) {
    width: 55.5%;
    left: 677px;
    bottom: 200px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin: 0.5em;
  gap: 0.6em;
  font-size: 4em;
  color: black;
`;
export const LogoWrapper = styled.div`
  position: relative;
  width: 5em;
`;
