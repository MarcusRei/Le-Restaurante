import { createContext } from "react";
import {
  BookingCustomerExt,
  emptyBookingCustomerExt,
} from "../models/BookingCustomerExt";

export const CurrentBookingContext = createContext<BookingCustomerExt>(
  emptyBookingCustomerExt
);
