import { createContext, Dispatch } from "react";
import { BookingClass } from "../models/BookingClass";
import { IAction, ILists } from "../reducers/AdminReducer";

export interface AdminContextType {
  bookings: ILists;
  dispatch: Dispatch<IAction>;
}

export const AdminContext = createContext<AdminContextType>({
  bookings: { allBookings: [], filteredList: [] },
  dispatch: () => {},
});
