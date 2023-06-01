const booking = require("../models/Booking");
const customer = require("../models/Customer");

exports.getAllBookings = async (req, res, next) => {
  try {
    const bookings = await booking.find();

    if (!bookings) {
      throw new NotFoundError("There are no bookings");
    }

    res.json(bookings);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.addBooking = async (req, res, next) => {
  try {
    const { name, email, phonenumber, date, time, numberOfPeople } =
      req.body;
    const newCustomer = new customer({ name, email, phonenumber });

    const savedCustomer = await newCustomer.save();

    const newBooking = new booking({
      date,
      time,
      guests: numberOfPeople,
      customer: savedCustomer._id,
    });

    const savedBooking = await newBooking.save();

    res.json(savedBooking);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const Booking = require("../models/Booking");
const Customer = require("../models/Customer");

exports.updateBooking = async (req, res, next) => {
  try {
    const bookingId = req.params.id;
    const { name, email, phonenumber, date, time, numberOfPeople } =
      req.body;

    const booking = await Booking.findById(bookingId);
    if (!booking) {
      throw new NotFoundError("Booking not found");
    }

    const customer = await Customer.findById(booking.customer);
    if (!customer) {
      throw new NotFoundError("Customer not found");
    }

    customer.name = name;
    customer.email = email;
    customer.phonenumber = phonenumber;
    const updatedCustomer = await customer.save();

    booking.date = date;
    booking.time = time;
    booking.guests = numberOfPeople;
    const updatedBooking = await booking.save();

    res.json(updatedBooking);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteBooking = async (req, res, next) => {
  try {
    const bookingId = req.params.id;

    const deletedBooking = await booking.findByIdAndDelete(bookingId);

    if (!deletedBooking) {
      throw new NotFoundError("Booking not found");
    }

    res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
