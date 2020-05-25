const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: String,
  // scoreCount: Number,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
