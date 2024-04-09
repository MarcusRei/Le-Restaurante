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

export const BookingReducer = (state: Booking, action: IBookingAction) => {
  console.log(action);
  switch (action.type) {
    case ActionType.NAME:
      console.log(action.payload);
      return { ...state, name: action.payload.name };

    case ActionType.EMAIL:
      return { ...state, email: action.payload.email };

    case ActionType.PHONE:
      return { ...state, phonenumber: action.payload.phonenumber };

    case ActionType.GUESTS:
      return { ...state, guests: action.payload.guests };

    case ActionType.DATE:
      return { ...state, date: action.payload.date };

    case ActionType.TIMESLOT:
      return { ...state, timeSlot: action.payload.timeSlot };

    default:
      console.log("no matching type!");
  }
};
