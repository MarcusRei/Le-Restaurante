export interface Booking {
  _id: string;
  date: string;
  time: string;
  guests: number;
  customer: {
    _id: string;
    name: string;
    email: string;
    phonenumber: string;
  };
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
