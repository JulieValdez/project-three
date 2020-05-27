const router = require("express").Router();
let User = require("../../models/user");

router.get("/", (req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("error: " + err));
});

router.post("/addUser", (req, res) => {
  const userName = req.body.userName;
  const newUser = new User({ userName });
  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
