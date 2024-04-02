import { TimeSlot } from "../enums/timeSlots";

export interface Booking {
  date: string;
  timeSlot: TimeSlot | null;
  guests: number;
  name: string;
  email: string;
  phonenumber: string;
}
