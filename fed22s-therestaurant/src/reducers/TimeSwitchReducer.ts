import { timeSlot } from "../enums/timeSlots";
import { BookingClass } from "../models/BookingClass";

export interface ITimeSwitchAction {
  type: ActionType;
  payload: boolean;
}

export enum ActionType {
  SWITCHED = "SWITCHED",
}

export const TimeSwitchReducer = (
  state: boolean,
  action: ITimeSwitchAction
) => {
  switch (action.type) {
    case ActionType.SWITCHED: {
      return (state = !state);
    }
  }
};
