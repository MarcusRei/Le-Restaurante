import { actionType } from "../enums/actionType";
import { BookingClass } from "../models/Booking";
import { postNewBooking } from "../services/dataService";

export interface IAction {
  type: string;
  payload: any;
}

export const BookingReducer = (booking: BookingClass, action: IAction) => {
  switch (action.type) {
    case actionType.TIMEADDED:
      //booking.time = action.payload.time;
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
      console.log("payload: ", action.payload);
      return { ...booking, date: action.payload };
  }

  return booking;
};
