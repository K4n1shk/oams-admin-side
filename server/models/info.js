const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: Number, required: true },
  category: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  fatherOcc: { type: String, required: true },
  motherOcc: { type: String, required: true },
  totalIncome: { type: Number, required: true },
  parentContact: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  isVerified: { type: Boolean, default: false },
  isDeclined: { type: Boolean, default: false },
})

const Info = mongoose.model("info", userSchema);

module.exports = Info;