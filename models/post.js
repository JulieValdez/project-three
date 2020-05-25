const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  postedBy: { type: Schema.Types.ObjectId, ref: "User" },
  postTitle: { type: String, required: true },
  selectCategory: [Fitness, Groceries, Recipes, MentalHealth, Resources, Misc],
  postBody: { type: String, maxlength: 300 },
  comments: [
    { text: String, postedBy: { type: Schema.Types.ObjectId, ref: "User" } },
  ],
  likeCount: { type: Number },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
