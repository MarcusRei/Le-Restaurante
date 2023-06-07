import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  background-color: gray;
  align-items: center;
  height: 200px;
  width: 100vw;
  gap: 3em;
  @media (min-width: 844px) {
    width: 55.5%;
    left: 677px;
    bottom: 200px;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  right: -50px;
  display: flex;
  flex-direction: row;
  gap: 0.3em;
  font-size: 45px;
  color: black;
  right: -110px;
  @media (min-width: 844px) {
    width: 40%;
    right: -300px;
    font-size: 65px;
  }
`;
export const LogoWrapper = styled.div`
  font-size: 15px;
  width: 15em;
  margin-bottom: 0.7em;
  @media (min-width: 844px) {
    margin-left: 2em;
    margin-bottom: 1em;
  }
`;
export const AdressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12em;
  font-size: 18px;
  @media (min-width: 844px) {
    width: 15em;
    font-size: 20px;
  }
`;
export const AdressAndLogoWrapper = styled.div`
  position: relative;
  left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 7em;
  font-size: 15px;
  @media (min-width: 844px) {
    width: 10em;
  }
`;
