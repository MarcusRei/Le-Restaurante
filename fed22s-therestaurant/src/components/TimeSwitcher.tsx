import { useState } from "react";
import { BookingHeading } from "./styled/BookingHeading";
import { TimeSwitchSlider, TimeSwitchWrapper } from "./styled/TimeSwitchStyled";

export const TimeSwitcher = () => {
  let [switcher, setSwitcher] = useState(false);

  const handleSwitch = () => {
    setSwitcher(!switcher);
  };

  console.log(switcher);
  return (
    <TimeSwitchWrapper onClick={handleSwitch}>
      {switcher ? (
        <TimeSwitchSlider switcher={switcher}>18:00</TimeSwitchSlider>
      ) : (
        <TimeSwitchSlider switcher={switcher}>21:00</TimeSwitchSlider>
      )}
    </TimeSwitchWrapper>
  );
};
