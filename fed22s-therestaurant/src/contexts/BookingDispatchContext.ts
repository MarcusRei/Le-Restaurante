import { Dispatch, createContext } from "react";
import { IBookingAction } from "../reducers/BookingReducer";

export const BookingDispatchContext = createContext<Dispatch<IBookingAction>>(
  () => {
    return;
  }
);
