import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;

  @media (min-width: 844px) {
    position: relative;
  }
`;

export const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
`;

export const CenteringWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const HorizontalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;

  @media (min-width: 844px) {
    position: relative;
    flex-direction: row;
  }
`;

export const GridWrapper = styled.div`
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
  @media (min-width: 844px) {
    padding: 2em;
    grid-template-columns: 1fr 1fr;
  }
`;
