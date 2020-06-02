const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  position: String,
  company: String,
  dx_city: String,
  dx_country: String,
  company_id: Number
});

module.exports = mongoose.model("Employee", employeeSchema);
