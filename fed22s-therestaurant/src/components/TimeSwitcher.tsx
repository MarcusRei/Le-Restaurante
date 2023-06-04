import { BookingHeading } from "./styled/BookingHeading";
import { TimeSwitchSlider, TimeSwitchWrapper } from "./styled/TimeSwitchStyled";

export const TimeSwitcher = () => {
  let switcher = false;
  console.log(switcher);
  return (
    <TimeSwitchWrapper>
      <TimeSwitchSlider
        switcher={switcher}
        onClick={() => {
          switcher = !switcher;
          console.log(switcher);
        }}
      >
        18:00
      </TimeSwitchSlider>
    </TimeSwitchWrapper>
  );
};
