const router = require("express").Router();
let Post = require("../models/post");

router.route("/").get((req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const userName = req.body.userName;
  const postTitle = req.body.postTitle;
  const selectCategory = req.body.selectCategory;
  const postBody = req.body.postBody;

  const newPost = new Post({
    userName,
    postTitle,
    selectCategory,
    postBody,
  });

  newPost
    .save()
    .then(() => res.json("Post added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
