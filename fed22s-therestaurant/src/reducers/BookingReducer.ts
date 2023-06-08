import { IPayload } from "../components/TimeSlots";
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
      booking.time = action.payload.time;
      return booking;

    case actionType.INFOADDED:
      console.log("newBooking: ", action.payload.newBooking);
      booking.name = action.payload.newBooking.name;
      booking.email = action.payload.newBooking.email;
      booking.guests = action.payload.newBooking.guests;
      booking.phonenumber = action.payload.newBooking.phonenumber;
      postNewBooking(booking);
      return booking;
  }

  return booking;
};
