import { actionType } from "../enums/actionType";
import { BookingClass } from "../models/Booking";

interface IAction {
  type: string;
  payload: any;
}

export const NewBookingReducer = (booking: BookingClass, action: IAction) => {
  switch (action.type) {
    case actionType.ADDED:
      return booking;
  }
};
