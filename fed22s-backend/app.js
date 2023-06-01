require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bookingRoute = require("./src/routes/bookingRoute");
const customerRoute = require("./src/routes/customerRoute");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Processing ${req.method} request to ${req.path}`);
  next();
});

app.use("/api/v1/bookings", bookingRoute);
app.use("/api/v1/customers", customerRoute);

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

const port = process.env.PORT || 5000;
async function run() {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(
      process.env.MONGO_CONNECTION_STRING
    );

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

run();
