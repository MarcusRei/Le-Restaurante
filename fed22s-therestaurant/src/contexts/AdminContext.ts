import { createContext, Dispatch } from "react";
import { BookingClass } from "../models/Booking";
import { IAction } from "../reducers/AdminReducer";

export interface AdminContextType {
  bookings: BookingClass[];
  dispatch: Dispatch<IAction>;
}

export const AdminContext = createContext<AdminContextType>({
  bookings: [],
  dispatch: () => {},
});
