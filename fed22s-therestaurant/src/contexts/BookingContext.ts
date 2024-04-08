import { Dispatch, createContext } from "react";
import { IBookingAction } from "../reducers/BookingReducer";
import { Booking } from "../models/Booking";

export const BookingContext = createContext<Booking>({
  name: "",
  email: "",
  phonenumber: "",
  guests: 2,
  date: "",
  timeSlot: null,
});

export const BookingDispatchContext = createContext<Dispatch<IBookingAction>>(
  () => {
    return;
  }
);
