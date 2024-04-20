const Booking = require("../models/Booking");
const customer = require("../models/Customer");
const nodemailer = require("nodemailer");
const { calculateGuests } = require("../utils");

exports.getAllBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find();

    if (!bookings) {
      throw new NotFoundError("There are no bookings");
    }

    return res.json(bookings);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.getBookingByDate = async (req, res, next) => {
  console.log("getBookingByDate");
  try {
    const date = req.params.date;
    const bookings = await Booking.find({ date: date });

    return res.json(bookings);
  } catch {
    return res.status(500).json({ message: error.message });
  }
};

exports.addBooking = async (req, res, next) => {
  try {
    const { name, email, phonenumber, date, timeSlot, guests } = req.body;
    console.log("addBooking");

    console.log("body", req.body);

    const data = {
      name: name,
      email: email,
      phonenumber: phonenumber,
      date: date,
      timeSlot: timeSlot,
      guests: guests,
    };

    console.log("data:", data);

    const newBooking = await Booking.create(data);

    return res.status(200).json(newBooking);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.updateBooking = async (req, res, next) => {
  try {
    console.log("updateBooking");
    const bookingId = req.params.id;
    const { name, email, phonenumber, date, timeSlot, guests } = req.body;

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      throw new Error("Sorry, no booking was found with that id");
    }
    console.log("in DB", booking);

    let updatedBooking = {
      date: booking.date,
      timeSlot: booking.timeSlot,
      guests: booking.guests,
      name: booking.name,
      email: booking.email,
      phonenumber: booking.phonenumber,
    };

    console.log("updatedBooking", updatedBooking);

    if (name !== booking.name) {
      updatedBooking.name = name;
    }
    if (email !== booking.email) {
      updatedBooking.email = email;
    }
    if (phonenumber !== booking.phonenumber) {
      updatedBooking.phonenumber = phonenumber;
    }

    if (date !== booking.date) {
      console.log("new date", date);
      const otherBookings = await Booking.find({
        date: date,
        timeSlot: timeSlot,
      });

      console.log("OTHER BOOKINGS", otherBookings);

      if (otherBookings.length !== 0) {
        //! Check that there is enough seats on the new date
        const guests = calculateGuests(otherBookings);

        if (!guests) {
          throw new Error(
            "Sorry, there are too many guests booked on that date"
          );
        }
      }

      updatedBooking.date = date;
    }

    if (timeSlot !== booking.timeSlot && date === booking.date) {
      const otherBookings = await Booking.find({
        date: date,
        timeSlot: timeSlot,
      });

      if (otherBookings.length !== 0) {
        //! Check that there is enough seats on the new timeSlot
        const guests = calculateGuests(otherBookings);

        if (!guests) {
          throw new Error(
            "There are too many guests booked on that for this timeSlot"
          );
        }
      }
      updatedBooking.timeSlot = timeSlot;
    }

    if (guests !== booking.guests) {
      //! Check that there is enough seats with new guest amount
      const otherBookings = await Booking.find({
        date: updatedBooking.date,
        timeSlot: updatedBooking.timeSlot,
      });

      if (otherBookings.length !== 0) {
        const guests = calculateGuests(otherBookings);

        if (!guests) {
          throw new Error(
            "Sorry, there are too many guests booked on that for this timeSlot"
          );
        }
      }
      updatedBooking.guests = guests;
    }

    console.log("finished product", updatedBooking);

    const updateBooking = await Booking.findByIdAndUpdate(
      bookingId,
      updatedBooking
    );

    if (!updateBooking) {
      throw new Error("Update was not possible!");
    }

    return res.json(updatedBooking);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteBooking = async (req, res, next) => {
  try {
    console.log("deleteBooking");
    const bookingId = req.params.id;

    console.log(bookingId);

    const deletedBooking = await Booking.findByIdAndDelete(bookingId);

    if (!deletedBooking) {
      throw new Error("Sorry, I could not find a booking with that id!");
    }

    res.json({ message: "booking deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
