const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  scoreCount: Number,
});

const User = mongoose.model("User", PostSchema);

module.exports = User;
