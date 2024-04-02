import { createContext } from "react";
import { Booking } from "../models/Booking";

export const NewBookingContext = createContext<Booking>({
  name: "",
  email: "",
  phonenumber: "",
  guests: 0,
  date: "",
  timeSlot: null,
});
