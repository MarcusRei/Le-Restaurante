module.exports.calculateGuests = function (bookings) {
  let guests = 0;
  for (let i = 0; i < bookings.length; i++) {
    const booking = bookings[i];
    guests += booking.guests;
  }

  if (guests < 36) {
    return true;
  } else {
    return false;
  }
};
