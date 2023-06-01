const customer = require("../models/Customer");

exports.getAllCustomers = async (req, res, next) => {
  try {
    const customers = await customer.find();

    if (!customers) {
      throw new Error("Sorry I was not able to find any customers!");
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

    const customerToDelete = await customer.findByIdAndDelete();

    if (!customerToDelete) {
      throw new Error("Could not delete as the customer was not found");
    }

    res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
