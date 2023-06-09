const Booking = require("./Booking");
const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  date: {
    type: Date,
    // required: true,
  },
  time: {
    type: String,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
