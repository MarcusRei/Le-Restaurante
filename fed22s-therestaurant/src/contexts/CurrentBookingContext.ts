import { createContext } from "react";
import { BookingClass } from "../models/Booking";

export const CurrentBookingContext = createContext<BookingClass>({
  name: "",
  email: "",
  phonenumber: "",
  guests: 0,
  date: "",
  time: "",
});
