import { createContext } from "react";
import { BookingClass } from "../models/Booking";
import { getBookings } from "../services/dataService";

export const BookingsContext = createContext<BookingClass[]>([]);
