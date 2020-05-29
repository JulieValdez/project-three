const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/projectThree_db",
  { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("Mongo db connection established successfully");
});

const postRouter = require("./routes/api/post.js");
const userRouter = require("./routes/api/user.js");

app.use("/", postRouter);
app.use("/", userRouter);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
