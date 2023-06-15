import { createContext } from "react";
import { BookingClass } from "../models/BookingClass";

export const NewBookingContext = createContext<BookingClass>({
  name: "",
  email: "",
  phonenumber: "",
  guests: 0,
  date: "",
  time: "",
});
