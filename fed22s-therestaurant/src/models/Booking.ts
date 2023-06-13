import { Customer } from "./Customer";

export class Booking {
  constructor(
    public date: string,
    public time: string,
    public guests: number,
    public name: string,
    public email: string,
    public phonenumber: string,
    public _id?: string
  ) {}
}
