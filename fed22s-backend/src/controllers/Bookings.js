const User = require("../models/Booking");

exports.getAllBookings = (req, res, next) => {
  return res.send("Get all bookings!");
};

exports.updateBooking = (req, res, next) => {
  return res.send("Update booking!");
};

exports.deleteBooking = (req, res, next) => {
  return res.send("Delete booking!");
};
