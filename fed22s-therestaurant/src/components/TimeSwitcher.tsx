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
      <TimeSwitchSlider switcher={switcher}>
        {" "}
        {switcher ? <p>18:00</p> : <p>21:00</p>}
      </TimeSwitchSlider>
    </TimeSwitchWrapper>
  );
};
