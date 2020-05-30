const router = require("express").Router();
let User = require("../../models/user");

router.get("/userprofile/:id", (req, res) => {
  console.log('worked');
  const user= req.params.id;

  console.log(user);
  
  //domain.com/userprofile?id=2
  User.findOne({
    userId: user
  })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/userprofile", (req, res) => {
  console.log(req.body);
  const userId = req.body.userId;
  const userhandle = req.body.userhandle;
  const bio = req.body.bio;
  const website = req.body.website;
  const hobbies = req.body.hobbies;
  const newUser = new User({
    userId,
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