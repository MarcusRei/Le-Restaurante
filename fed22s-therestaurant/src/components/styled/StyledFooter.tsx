import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #7a6f6b;
  align-items: center;
  height: 150px;
  width: 100vw;
  @media (min-width: 844px) {
    justify-content: space-between;
    align-items: center;
    bottom: 200px;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.3em;
  font-size: 40px;
  color: black;
  right: -150px;
  @media (min-width: 844px) {
    right: 10%;
    font-size: 75px;
    gap: 0.4em;
  }
  > a {
    color: black;
    display: flex;
    align-items: center;
    transition: color 0.3s, transform 0.3s;

    &:hover {
      color: #3b3034;
      transform: scale(1.1);
    }
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
  @media (min-width: 844px) {
    width: 10em;
  }
`;

export const FooterHeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(139, 0, 0, 0.2);
  border-radius: 10px;
  font-size: 22px;
  color: lightgray;
  @media (min-width: 844px) {
    padding-left: 0.3em;
    padding-left: 0.3em;
    padding-top: 0.1em;
    padding-bottom: 0.1em;
    width: 11em;
  }
`;
