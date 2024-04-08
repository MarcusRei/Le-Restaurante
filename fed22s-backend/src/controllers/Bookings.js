const booking = require("../models/Booking");
const customer = require("../models/Customer");
const nodemailer = require("nodemailer");

exports.getAllBookings = async (req, res, next) => {
  try {
    const bookings = await booking.find();

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
    const bookings = await booking.find({ date: date });

    return res.json(bookings);
  } catch {
    return res.status(500).json({ message: error.message });
  }
};

exports.addBooking = async (req, res, next) => {
  try {
    const { name, email, phonenumber, date, time, guests } = req.body;

    const existingCustomer = await customer.findOne({ email: email });

    if (!existingCustomer) {
      console.log(existingCustomer);
      const newCustomer = new customer({ name, email, phonenumber });

      const savedCustomer = await newCustomer.save();

      const newBooking = new booking({
        date,
        time,
        guests,
        customer: savedCustomer._id,
      });

      const savedBooking = await newBooking.save();

      res.json(savedBooking);
    } else {
      const newBooking = new booking({
        date,
        time,
        guests,
        customer: existingCustomer._id,
      });

      const savedBooking = await newBooking.save();

      //     res.json(savedBooking);

      const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: "hayley.witting17@ethereal.email",
          pass: "TxW7VdhJZc6YNhVypS",
        },
      });

      let mailOptions = {
        from: "hayley.witting17@ethereal.email",
        to: email,
        subject: "Bokningsbekräftelse",
        text: `Hej ${name}, \n\nTack för din bokning hos oss på Le Restaurante. \n\nHär är bokningsdetaljerna: \nNamn: ${name} \nEmail: ${email} \nTelefonnummer: ${phonenumber} \nGäster: ${savedBooking.guests} \nDatum: ${savedBooking.date} \nTid: ${savedBooking.time} \nBokningsnummer: ${savedBooking.id} \n\n I händelse av att du behöver avboka din tid vänligen kontakta oss på telefonnummer 08-89677 och uppge bokningsnummer. Bordet överlåts 15 minuter efter påbörjad sittning om ingen annan överenskommelse gjorts med restaurangen. \n\n Du hittar oss här: \n Address: Adressvägen 7, 191 91 Stockholm \n\n Öppettider: \n Måndag: 11:00-14:00, 16:30-22:00 \n Tisdag: 11:00-14:00, 16:30-22:00 \n Onsdag: 11:00-14:00, 16:30-22:00 \n Torsdag: 11:00-14:00, 16:30-22:00 \n Fredag: 11:00-14:00, 16:30-22:00 \n Lördag: 16:30-23:00 \n Söndag: Stängt`,
      };

      let info = await transporter.sendMail(mailOptions);
      console.log("email sent:", info.response);

      res.json(savedBooking);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.updateBooking = async (req, res, next) => {
  try {
    const bookingId = req.params.id;
    const { name, email, phonenumber, date, time, guests } = req.body;

    const reservation = await booking.findById(bookingId);

    if (!reservation) {
      throw new Error("Sorry, no reservation was found with that id");
    }

    const customerToUpdate = await customer.findById(reservation.customer._id);

    if (!customerToUpdate) {
      throw new Error("Sorry i couldn't find a customer with that id");
    }

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
