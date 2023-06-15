import { createContext } from "react";
import { BookingClass } from "../models/Booking";
import {
  BookingCustomerExt,
  emptyBookingCustomerExt,
} from "../models/BookingCustomerExt";

export const CurrentBookingContext = createContext<BookingCustomerExt>(
  emptyBookingCustomerExt
);
