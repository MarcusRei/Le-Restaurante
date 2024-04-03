import { Booking } from "../models/Booking";

export interface IBookingAction {
  type: string;
  payload: any;
}

export enum ActionType {
  NAME = "name changed",
  EMAIL = "email changed",
  GUESTS = "guests changed",
  PHONE = "phone changed",
  DATE = "date changed",
  TIMESLOT = "time changed",
}

export const BookingReducer = (booking: Booking, action: IBookingAction) => {
  console.log(action);
  switch (action.type) {
    case ActionType.NAME:
      console.log("name");
      return { ...booking, name: action.payload.name };

    case ActionType.EMAIL:
      return { ...booking, email: action.payload.email };

    case ActionType.GUESTS:
      return { ...booking, guests: action.payload.guests };

    case ActionType.DATE:
      return { ...booking, date: action.payload.date };

    case ActionType.TIMESLOT:
      return { ...booking, timeSlot: action.payload.time };

    default:
      console.log("no type matched");
  }
};
