import {
  MainElement,
  MiddleText,
  SecondElement,
  ThirdElement,
} from "./styled/NoBookingAnimationStyles";
import { CenteringWrapper } from "./styled/Wrappers";

export const NoBookingAnimation = () => {
  return (
    <>
      <CenteringWrapper>
        <MainElement>
          <MiddleText>
            Det verkar inte finnas några bokningar på det valda datumet!
          </MiddleText>
          <SecondElement></SecondElement>
          <ThirdElement></ThirdElement>
        </MainElement>
      </CenteringWrapper>
    </>
  );
};
