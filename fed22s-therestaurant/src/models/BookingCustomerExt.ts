export class BookingCustomerExt {
  constructor(
    public _id: string,
    public date: string,
    public time: string,
    public guests: number,
    public customer: {
      _id: string;
      name: string;
      email: string;
      phonenumber: string;
    }
  ) {}
}

export const emptyBookingCustomerExt = {
  _id: "",
  date: "",
  time: "",
  guests: 0,
  customer: {
    _id: "",
    name: "",
    email: "",
    phonenumber: "",
  },
};
