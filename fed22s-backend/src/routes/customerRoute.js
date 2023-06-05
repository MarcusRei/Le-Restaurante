const express = require("express");
const {
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/Customers");
const router = express.Router();

router.get("/", getAllCustomers);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;
