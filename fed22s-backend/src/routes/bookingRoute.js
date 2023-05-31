const express = require("express");
const { getAllBookings } = require("../../controllers/Bookings");
const router = express.Router();

router.get("/", getAllBookings);

module.exports = router;
