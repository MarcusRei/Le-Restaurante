import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  top: 5em;

  height: 100%;

  @media (min-width: 844px) {
    top: 1em;
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

export const LayoutWrapper = styled(HorizontalWrapper)`
  position: relative;
  overflow-x: hidden;
  align-items: flex-start;
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

export const HorizontalWrapperGap = styled(HorizontalWrapper)`
  gap: 1em;
`;

export const VerticalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CenterWrapper = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ContactWrapper = styled(CenterWrapper)`
  justify-content: flex-start;
  padding-top: 7em;
  padding-bottom: 2em;
  @media (min-width: 844px) {
    padding-top: 5em;
  }
`;

export const OutletWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  z-index: 100;
  top: 0;

  @media (min-width: 844px) {
    position: relative;
    width: 50%;
  }
`;

export const FormVerticalWrapper = styled(VerticalWrapper)`
  height: 100%;
`;

export const BookingVerticalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
