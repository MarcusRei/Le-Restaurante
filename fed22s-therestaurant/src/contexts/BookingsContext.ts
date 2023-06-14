import { createContext } from "react";
import { BookingClass } from "../models/BookingClass";
import { getBookings } from "../services/dataService";

export const BookingsContext = createContext<BookingClass[]>([]);
