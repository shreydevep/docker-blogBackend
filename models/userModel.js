const mongooose = require("mongoose");

const userSchema = new mongooose.Schema({
  username: {
    type: String,
    required: [true, "User must have a username"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "User must have a password"],
  },
});

const User = mongooose.model("User", userSchema);

module.exports = User;
