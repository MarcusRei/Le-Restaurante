import styled from "styled-components";

export const ImageBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("/assets/restaurant-4011989_1280.jpg");
  z-index: -1000;
  background-repeat: no-repeat;
  padding-top: 100px;
  @media (min-width: 844px) {
    width: 45%;
  }
`;
