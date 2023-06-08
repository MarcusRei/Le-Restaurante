import styled from "styled-components";

export const ImageBackground = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url("/assets/restaurant-4011989_1280.jpg");
  background-repeat: no-repeat;
  padding-top: 100px;

  @media (min-width: 844px) {
    width: 45%;
  }
`;
