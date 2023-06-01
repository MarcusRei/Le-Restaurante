const booking = require("../models/Booking");
const customer = require("../models/Customer");

exports.getAllBookings = async (req, res, next) => {
  try {
    const bookings = await booking.find().populate("customer");

    if (!bookings) {
      throw new NotFoundError("There are no bookings");
    }

    return res.json(bookings);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.addBooking = async (req, res, next) => {
  try {
    const { name, email, phonenumber, date, time, numberOfPeople } = req.body;

    const existingCustomer = await customer.findOne({ name: name });

    if (!existingCustomer) {
      console.log(existingCustomer);
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
    } else {
      const newBooking = new booking({
        date,
        time,
        guests: numberOfPeople,
        customer: existingCustomer._id,
      });

      const savedBooking = await newBooking.save();

      res.json(savedBooking);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.updateBooking = async (req, res, next) => {
  try {
    // 1. Hämtar id från params och data från body
    const bookingId = req.params.id;
    const { name, email, phonenumber, date, time, guests } = req.body;

    // 2. hittar vår bokning
    const reservation = await booking.findById(bookingId);

    if (!reservation) {
      throw new Error("Sorry, no reservation was found with that id");
    }

    // 3. Hittar en kund med samma namn som det vi skickar
    const customerToUpdate = await customer.findById(reservation.customer._id);

    if (!customerToUpdate) {
      throw new Error("Sorry i couldn't find a customer with that id");
    }
    console.log(customerToUpdate);

    // Måste avgöra om dessa fält är tomma i så fall gör inget med dem
    if (name) {
      customerToUpdate.name = name;
    }
    if (email) {
      customerToUpdate.email = email;
    }
    if (phonenumber) {
      customerToUpdate.phonenumber = phonenumber;
    }
    // const updatedCustomer = await customer.save(customerToUpdate)
    const updatedCustomer = await customerToUpdate.save();

    if (date) {
      reservation.date = date;
    }
    if (time) {
      reservation.time = time;
    }
    if (guests) {
      reservation.guests = guests;
    }
    const updatedBooking = await reservation.save();

    res.send("Your reservation has been updated!");
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
      throw new Error("Sorry, I could not find a reservation with that id!");
    }

    res.json({ message: "Reservation deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
