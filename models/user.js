const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userhandle: { type: String, ref: "User" },
  bio: { type: String, maxlength: 300 },
  website: { type: String },
  hobbies: { type: String, maxlength: 300 },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
