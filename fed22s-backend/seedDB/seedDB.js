require("dotenv").config();
const mongoose = require("mongoose");

const Booking = require("../src/models/Booking");
const Customer = require("../src/models/Customer");
const { mockBookings, mockBookingsWithString } = require("./bookings");
const { mockCustomers } = require("./mockdata/customer");

const populateDbWithMockData = async (MONGO_CONNECTION_STRING) => {
  let conn;
  try {
    mongoose.set("strictQuery", false);
    conn = await mongoose.connect(MONGO_CONNECTION_STRING);

    console.log(`MongoDB connected: ${conn.connection.host}`);

    await Booking.deleteMany();
    await Customer.create(mockCustomers);
    await Booking.create(mockBookings);

    console.log("Database successfully populated with mockdata");
  } catch (error) {
    console.error(error);
  } finally {
    if (conn) conn.disconnect();
    process.exit(0);
  }
};

populateDbWithMockData(process.env.MONGO_CONNECTION_STRING);
