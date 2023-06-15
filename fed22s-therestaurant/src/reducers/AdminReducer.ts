import { useContext } from "react";
import { BookingClass } from "../models/BookingClass";
import { AdminContext } from "../contexts/AdminContext";

export interface IAction {
  type: ActionType;
  payload: string;
}

export interface ILists {
  allBookings: BookingClass[];
  filteredList: BookingClass[];
}

export enum ActionType {
  UPDATE_BOOKING = "UPDATE_BOOKING",
  FILTER_BOOKINGS = "FILTER_BOOKINGS",
  DELETE_BOOKING = "DELETE_BOOKING",
  ADDED_BOOKING = "ADDED_BOOKING",
  RESET_BOOKINGS = "RESET_BOOKINGS",
}

export const AdminReducer = (
  state: ILists,
  action: IAction
): ILists => {
  console.log({ state, action });
  switch (action.type) {
    case ActionType.FILTER_BOOKINGS: {
      const filteredBookings = state.allBookings.filter(
        (booking: BookingClass) => booking.date === action.payload
      );
      return { ...state, filteredList: filteredBookings };
    }

    case ActionType.DELETE_BOOKING: {
      const deletedBookingId = action.payload;
      const filteredBookings = state.allBookings.filter(
        (booking: BookingClass) => booking._id !== deletedBookingId
      );
      return { ...state, filteredList: filteredBookings };
    }

    case ActionType.ADDED_BOOKING: {
      return {
        ...state,
        allBookings: JSON.parse(action.payload),
        filteredList: JSON.parse(action.payload),
      };
    }

    default:
      return state;
  }
};
