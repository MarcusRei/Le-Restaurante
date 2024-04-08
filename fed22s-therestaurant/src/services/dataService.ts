import { Booking } from "../models/Booking";

// General Requests Function
async function getData(url: string) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();

    return data;
  } else {
    return response;
  }
}

// Specific Get functions

export async function getBookings() {
  const response = await getData("http://localhost:5001/api/v1/bookings/all");

  if (response.ok) {
    const bookings = await response.json();
    return bookings;
  } else {
    return response;
  }
}

export async function getBookingsByDate(date: string) {
  const response = await getData(
    `http://localhost:5001/api/v1/bookings/date/${date}`
  );

  if (response.ok) {
    const bookings = await response.json();
    return bookings;
  } else {
    return response;
  }
}

export async function getIndivdualBooking(bookingId: string) {
  const response = await getData(
    `http://localhost:5001/api/v1/bookings/${bookingId}`
  );

  if (response.ok) {
    const booking = await response.json();
    return booking;
  } else {
    return response;
  }
}

export async function postNewBooking(booking: Booking) {
  console.log("booking i dataService", booking);

  console.log(JSON.stringify(booking));
  const response = await fetch("http://localhost:5001/api/v1/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(booking),
  });

  if (response.ok) {
    /* const data = await response.json(); */
    return true;
  } else {
    return response;
  }
}

export async function deleteBooking(bookingId: string) {
  const response = await fetch(
    `http://localhost:5001/api/v1/bookings/${bookingId}`,
    {
      method: "DELETE",
    }
  );

  if (response.ok) {
    const data = await response.json();
  } else {
    return response;
  }
}

export async function updateBooking(
  bookingId: string,
  updatedBooking: Booking
) {
  const response = await fetch(
    `http://localhost:5001/api/v1/bookings/${bookingId}`,
    {
      method: "PUT",
      body: JSON.stringify(updatedBooking),
    }
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    return response;
  }
}

//!Broken
/* export async function deleteCustomer(bookingId: string) {
  const response = await generalDelete(
    `http://localhost:5001/api/v1/customers/${bookingId}`
  );

  return response.data;
} */

/* export async function getCustomers() {
  try {
    const response = await get("http://localhost:5001/api/v1/customers");

    return response.data;
  } catch {
    throw new Error("Could not get customers from API");
  }
} */
