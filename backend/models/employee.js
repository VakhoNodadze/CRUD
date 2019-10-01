const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  address: String,
  create_date: {
    type: String,
    required: true
  },
  company_id: Number
});

module.exports = mongoose.model("Employee", employeeSchema);
