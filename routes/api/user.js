const router = require("express").Router();
let User = require("../../models/user");

router.get("/", (req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("error: " + err));
});

router.post("/userprofile", (req, res) => {
  console.log(req.body);
  const userhandle = req.body.userhandle;
  const bio = req.body.bio;
  const website = req.body.website;
  const hobbies = req.body.hobbies;
  const newUser = new User({
    userhandle,
    bio,
    website,
    hobbies
  });
  newUser
    .save()
    .then(() => res.json("User Profile added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;