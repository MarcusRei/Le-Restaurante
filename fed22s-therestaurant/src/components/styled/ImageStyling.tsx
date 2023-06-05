import styled from "styled-components";

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  z-index: 10;

  @media (max-width: 844px) {
    width: 100%;
  }
`;
