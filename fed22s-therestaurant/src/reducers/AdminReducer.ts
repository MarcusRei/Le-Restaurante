import { useState } from "react";
import { Booking } from "../models/Booking";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  UPDATE_BOOKING = "UPDATE_BOOKING",
  FILTER_BOOKINGS = "FILTER_BOOKINGS",
  DELETE_BOOKING = "DELETE_BOOKING",
  ADDED_BOOKING = "ADDED_BOOKING",
}
export const AdminReducer = (state: Booking[], action: IAction) => {
  switch (action.type) {
    case ActionType.FILTER_BOOKINGS: {
      console.log("Test");

      const filteredBookings = state.filter(
        (booking: Booking) => booking.date === action.payload
      );
      return filteredBookings;
    }

    case ActionType.UPDATE_BOOKING: {
      const updatedBooking: Booking = JSON.parse(action.payload);
      const updatedBookings = state.map(
        (booking: Booking) => booking._id === updatedBooking._id
        //? updatedBooking : booking
      );
      return updatedBookings;
    }

    case ActionType.DELETE_BOOKING: {
      const deletedBookingId = action.payload;
      const filteredBookings = state.filter(
        (booking: Booking) => booking._id !== deletedBookingId
      );
      return [...filteredBookings];
    }

    case ActionType.ADDED_BOOKING: {
      console.log("ACTION PAYLOAD ÄR ==>", action.payload);
      state = JSON.parse(action.payload);
      console.log(action.payload);

      return state;
    }

    default:
      return state;
  }
};
