const router = require("express").Router();
let Post = require("../../models/post");

router.get("/post", (req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/post/:category", (req, res) => {
  Post.find({ selectCategory: req.params.category })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/addpost", (req, res) => {
  const postTitle = req.body.postTitle;
  const selectCategory = req.body.selectCategory;
  const postBody = req.body.postBody;
  const imageId = req.body.imageId;

  const newPost = new Post({
    postTitle,
    selectCategory,
    postBody,
    imageId,
  });

  newPost
    .save()
    .then(() => res.json("Post added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/post/:id", (req, res) => {
  console.log(req);

  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/update/:id", (req, res) => {
  Post.findByIdAndUpdate(req.params.id).then((post) => {
    post.postTitle = req.body.postTitle;
    post.selectCategory = req.body.selectCategory;
    post.postBody = req.body.postBody;
    post.comments = req.body.comments;

    post
      .save()
      .then(() => res.json("Exercise Updated"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

module.exports = router;
