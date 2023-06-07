import { Customer } from "./Customer";

export class BookingClass {
  constructor(
    public date: Date,
    public time: string,
    public guests: number,
    public name: string,
    public email: string,
    public phonenumber: string
  ) {}
}
