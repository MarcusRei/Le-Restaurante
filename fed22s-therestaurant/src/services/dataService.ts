import axios from "axios";
import { BookingClass } from "../models/Booking";
import { IUpdatedInfo } from "../models/IUpdatedInfo";

// General Requests Function
const get = async (url: string) => {
  return await axios.get(url);
};

const post = async (url: string, booking: BookingClass) => {
  return await axios.post(url, booking);
};

const put = async (url: string, updatedInfo: {}) => {
  return await axios.put(url, updatedInfo);
};

const generalDelete = async (url: string) => {
  return await axios.delete(url);
};

// Specific Get functions

export const getBookings = async () => {
  try {
    const response = await get("http://localhost:5001/api/v1/bookings");

    return response.data;
  } catch {
    throw new Error("Could not get bookings from API");
  }
};

export const getCustomers = async () => {
  try {
    const response = await get("http://localhost:5001/api/v1/customers");

    return response.data;
  } catch {
    throw new Error("Could not get customers from API");
  }
};

export const postNewBooking = async (booking: BookingClass) => {
  try {
    const response = await post(
      "http://localhost:5001/api/v1/bookings",
      booking
    );

    console.log("Form sent!");
    return response.data;
  } catch {
    throw new Error("Could not post booking to API");
  }
};

export const deleteBooking = async (bookingId: string) => {
  try {
    const response = await generalDelete(
      `http://localhost:5001/api/v1/bookings/${bookingId}`
    );

    return response.data;
  } catch {
    throw new Error("Could not delete the requested booking to API");
  }
};

export const deleteCustomer = async (bookingId: string) => {
  try {
    const response = await generalDelete(
      `http://localhost:5001/api/v1/customers/${bookingId}`
    );

    return response.data;
  } catch {
    throw new Error("Could not delete the requested customer to API");
  }
};

export const updateBooking = async (
  updatedInfo: IUpdatedInfo,
  bookingId: string
) => {
  try {
    const response = await put(
      `http://localhost:5001/api/v1/bookings/${bookingId}`,
      updatedInfo
    );

    return response.data;
  } catch {
    throw new Error("Could not post booking to API");
  }
};
