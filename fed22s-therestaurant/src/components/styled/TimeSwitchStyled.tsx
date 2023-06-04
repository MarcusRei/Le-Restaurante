import styled from "styled-components";

interface ITimeSwitchProps {
  switcher: boolean;
}

export const TimeSwitchWrapper = styled.div`
  display: flex;
  position: relative;
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
  left: ${(props: ITimeSwitchProps) => (props.switcher ? "-75px" : "75px")};

  &:hover {
    cursor: pointer;
  }
`;
