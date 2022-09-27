const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Please provide your first Name!"],
    unique: false,
  },
  last_name: {
    type: String,
    required: [true, "Please provide your Last Name!"],
    unique: false,
  },

  contact: {
    type: Number,
    required: [true, "Please provide a Contact!"],
    unique: [true, "Contact Exist"],
  },

  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
});
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
