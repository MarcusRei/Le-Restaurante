import { useContext, useState } from "react";
import { BookingHeading } from "./styled/BookingHeading";
import {
  TimeSwitchSlider,
  TimeSwitchWrapper,
} from "./styled/TimeSwitchStyled";
import { TimeSwitchContext } from "../contexts/TimeSwitchContext";
import { TimeSwitchDispatchContext } from "../contexts/TimeSwitchDispatchContext";
import { ActionType } from "../reducers/TimeSwitchReducer";

export const TimeSwitcher = () => {
  const time = useContext(TimeSwitchContext);
  const dispatch = useContext(TimeSwitchDispatchContext);
  const [switcher, setSwitcher] = useState(false);

  const switchTime = () => {
    dispatch({ type: ActionType.SWITCHED, payload: time });
    setSwitcher(!switcher);
  };

  return (
    <TimeSwitchWrapper>
      <TimeSwitchSlider switcher={switcher} onClick={switchTime}>
        18:00
      </TimeSwitchSlider>
    </TimeSwitchWrapper>
  );
};
