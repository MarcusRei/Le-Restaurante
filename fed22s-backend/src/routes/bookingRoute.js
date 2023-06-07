const express = require("express");
const {
  getAllBookings,
  addBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/Bookings");
const router = express.Router();

router.get("/", getAllBookings);
router.post("/", addBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);

module.exports = router;
