export interface Booking {
  date: string;
  timeSlot: string;
  guests: number;
  customer: {
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
