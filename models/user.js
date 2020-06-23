const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: { type: String },
  userhandle: { type: String, ref: "User" },
  bio: { type: String, maxlength: 300 },
  website: { type: String },
  hobbies: { type: String, maxlength: 300 },
  imageId: { type: String },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
