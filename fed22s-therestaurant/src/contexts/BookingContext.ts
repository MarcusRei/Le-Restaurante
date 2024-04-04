import { Dispatch, createContext } from "react";
import { IBookingAction } from "../reducers/BookingReducer";
import { Booking } from "../models/Booking";

export const BookingContext = createContext<Booking>({} as Booking);

export const BookingDispatchContext = createContext<Dispatch<IBookingAction>>(
  () => {
    return;
  }
);
