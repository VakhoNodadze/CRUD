const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstName: String,
  lastName: String,
  position: String,
  company: String,
  dx_city: String,
  dx_country: String
});

module.exports = mongoose.model("Employee", employeeSchema);
