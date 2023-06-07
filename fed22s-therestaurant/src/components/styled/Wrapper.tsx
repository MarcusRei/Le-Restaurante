import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  @media (min-width: 844px) {
    position: relative;
    left: 700px;
  }
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
