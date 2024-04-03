const Booking = require("./Booking");
const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  timeSlot: {
    type: String,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
