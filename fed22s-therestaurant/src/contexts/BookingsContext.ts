import { createContext } from "react";
import { Booking } from "../models/Booking";
import { getBookings } from "../services/dataService";

export const BookingsContext = createContext<Booking[]>([]);

const bookings = await getBookings();
console.log(bookings);
