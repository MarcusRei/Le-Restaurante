import { Dispatch, createContext } from "react";
import { IBookingAction } from "../reducers/BookingReducer";
import { ITimeSwitchAction } from "../reducers/TimeSwitchReducer";

export const TimeSwitchDispatchContext = createContext<
  Dispatch<ITimeSwitchAction>
>(() => {
  return;
});
