require("dotenv").config();
const mongoose = require("mongoose");

const Booking = require("../src/models/Booking");
const Customer = require("../src/models/Customer");
const { bookings } = require("./bookings");
const { customer } = require("./mockdata/customer");

const populateDbWithMockData = async (MONGO_CONNECTION_STRING) => {
  let conn;
  try {
    mongoose.set("strictQuery", false);
    conn = await mongoose.connect(MONGO_CONNECTION_STRING);

    console.log(`MongoDB connected: ${conn.connection.host}`);

    // POPULATE DATA ACCOORDING TO YOUR MODELS
    await Booking.deleteMany();
    await Customer.create(customer);
    await Booking.create(bookings);

    console.log("Database successfully populated with test data");
  } catch (error) {
    console.error(error);
  } finally {
    if (conn) conn.disconnect();
    process.exit(0);
  }
};

populateDbWithMockData(process.env.MONGO_CONNECTION_STRING);
