import { TimeSlot } from "../enums/timeSlots";

export interface Booking {
  _id?: string;
  date: string;
  timeSlot: TimeSlot | null;
  guests: number;
  name: string;
  email: string;
  phonenumber: string;
}
