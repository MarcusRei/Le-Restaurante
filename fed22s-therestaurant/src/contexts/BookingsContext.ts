import { createContext } from "react";
import { Booking } from "../models/Booking";

export const BookingsContext = createContext<Booking[]>([]);
