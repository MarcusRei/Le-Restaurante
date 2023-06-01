const express = require("express");
const {
  getAllBookings,
  addBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/Bookings");
const router = express.Router();

router.get("/", getAllBookings);
router.post("/add", addBooking);
router.put("/update/:id", updateBooking);
router.delete("/delete/:id", deleteBooking);

module.exports = router;
