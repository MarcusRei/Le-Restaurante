import styled from "styled-components";

interface ITimeSwitchProps {
  switcher: boolean;
  onClick: () => void;
}

export const TimeSwitchWrapper = styled.div`
  display: flex;
  position: relative;
  top: 10px;
  justify-content: center;
  align-items: center;
  background-color: #424242;
  border-radius: 10px;
  width: 70%;
  height: 40px;
`;

export const TimeSwitchSlider = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a8a8a8;
  border: none;
  border-radius: 5px;
  height: 80%;
  width: 50%;
  font-size: 14px;
  left: ${(props: ITimeSwitchProps) => (props.switcher ? "-75px" : "75px")};

  &:hover {
    cursor: pointer;
  }
`;

export const BackgroundTextSlider = styled.p`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  position: absolute;
  left: ${(props: ITimeSwitchProps) => (props.switcher ? "220px" : "50px")};
`;
