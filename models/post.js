const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  userName: { type: Schema.Types.ObjectId, ref: "User" },
  postTitle: { type: String },
  selectCategory: { type: String },
  postBody: { type: String, maxlength: 300 },

  comments: [
    { text: String, userName: { type: Schema.Types.ObjectId, ref: "User" } },
  ],
  likeCount: { type: Number },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
