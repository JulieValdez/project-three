const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  postTitle: { type: String },
  selectCategory: [
    "Fitness",
    "Groceries",
    "Recipes",
    "Mental Health",
    "Resources",
    "Misc",
  ],
  postBody: { type: String, maxlength: 300 },
  imageId: { type: String },

  comments: [
    { text: String, userName: { type: Schema.Types.ObjectId, ref: "User" } },
  ],
  likeCount: { type: Number },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
