// user model
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide a name"],
    trim: true,
    unique: [true, "Name must be unique"],
    minLength: [3, "Name must be 3 characters"],
    maxLength: [100, "Name is too large"],
  },
  address: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = userSchema;
