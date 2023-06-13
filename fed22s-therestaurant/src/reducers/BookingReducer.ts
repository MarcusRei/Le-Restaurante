import { actionType } from "../enums/actionType";
import { BookingClass } from "../models/Booking";

export interface IBookingAction {
  type: string;
  payload: any;
}

export const BookingReducer = (
  booking: BookingClass,
  action: IBookingAction
) => {
  switch (action.type) {
    case actionType.TIMEADDED:
      return { ...booking, time: action.payload.time };

    case actionType.INFOADDED:
      return {
        ...booking,
        name: action.payload.name,
        email: action.payload.email,
        guests: action.payload.guests,
        phonenumber: action.payload.phonenumber,
      };

    case actionType.DATEADDED:
      console.log("payload: ", booking);
      return { ...booking, date: action.payload };
  }

  return booking;
};
