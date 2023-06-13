import { createContext, Dispatch } from "react";
import { Booking } from "../models/Booking";
import { IAction } from "../reducers/AdminReducer";

export interface AdminContextType {
  bookings: Booking[];
  dispatch: Dispatch<IAction>;
}

export const AdminContext = createContext<AdminContextType>({
  bookings: [],
  dispatch: () => {},
});
