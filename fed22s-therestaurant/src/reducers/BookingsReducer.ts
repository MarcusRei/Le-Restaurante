import { BookingClass } from "../models/Booking";

export interface IBookingsAction {
  type: string;
  payload: any;
}

export const BookingsReducer = (
  bookings: BookingClass[],
  action: IBookingsAction
) => {
  switch (action.type) {
    case "COLLECTED":
      return;
  }
  return bookings;
};
