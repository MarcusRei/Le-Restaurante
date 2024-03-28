import { createContext } from "react";
import { BookingCustomerExt, emptyBookingCustomerExt } from "../models/Booking";

export const CurrentBookingContext = createContext<BookingCustomerExt>(
  emptyBookingCustomerExt
);
