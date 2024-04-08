const express = require("express");
const {
  getAllBookings,
  addBooking,
  updateBooking,
  deleteBooking,
  getBookingByDate,
} = require("../controllers/Bookings");
const router = express.Router();

router.get("/all", getAllBookings);
router.get("/date/:date", getBookingByDate);
router.post("/", addBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);

module.exports = router;
