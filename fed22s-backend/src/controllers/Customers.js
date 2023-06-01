const customer = require("../models/Customer");

exports.getAllCustomers = async (req, res, next) => {
  try {
    const customers = await customer.find();

    if (!customer) {
      throw new NotFoundError("There are no bookings");
    }

    res.json(customers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.updateCustomer = async (req, res, next) => {
  try {
    const customerId = req.params.id;
    const { name, email, phonenumber } = req.body;

    const updatedCustomer = await customer.findByIdAndUpdate(
      customerId,
      { name, email, phonenumber },
      { new: true }
    );

    if (!updatedCustomer) {
      throw new NotFoundError("Customer not found");
    }

    res.json(updatedCustomer);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteCustomer = async (req, res, next) => {
  try {
    const customerId = req.params.id;

    const deletedCustomer = await customer.findByIdAndDelete(
      customerId
    );

    if (!deletedCustomer) {
      throw new NotFoundError("Customer not found");
    }

    res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
