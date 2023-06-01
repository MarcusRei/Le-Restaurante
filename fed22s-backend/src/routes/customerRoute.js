const express = require("express");
const {
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/Customers");
const router = express.Router();

router.get("/", getAllCustomers);
router.put("/update/:id", updateCustomer);
router.delete("/delete/:id", deleteCustomer);

module.exports = router;
