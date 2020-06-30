const router = require("express").Router();
let User = require("../../models/user");

router.get("/userprofile/:id", (req, res) => {
  const user = req.params.id;

  User.findOne({
    userId: user,
  })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/userprofile", (req, res) => {
  const userId = req.body.userId;
  const userhandle = req.body.userhandle;
  const bio = req.body.bio;
  const website = req.body.website;
  const hobbies = req.body.hobbies;
  const imageId = req.body.imageId;
  User.findOne({
    userId,
  })
    .then((user) => {
      if (!user) {
        const newUser = new User({
          userId,
          userhandle,
          bio,
          website,
          hobbies,
          imageId,
        });
        newUser
          .save()
          .then(() => res.send(user))
          .catch((err) => res.status(400).json("Error: " + err));
      } else {
        user.bio = bio;
        user.userhandle = userhandle;
        user.website = website;
        user.hobbies = hobbies;
        user.imageId = imageId;
        user.save((err) => {
          res.send(user);
        });
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
