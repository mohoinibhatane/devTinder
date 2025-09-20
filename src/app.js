const express = require("express");
const app = express();
const { connectDb } = require("./config/database");
const { User } = require("./models/user.js");

app.post("/signup", async (req, res) => {
  //creating instance of user

  const user = new User({
    firstName: "satish",
    lastName: "kendre",
    email: "satish@23",
    password: "12345",
  });

  await user.save();
  res.send("user created successfully");
});

connectDb()
  .then(() => {
    console.log("database connection estabilished");

    app.listen(7777, () => {
      console.log(`server is running on 7777`);
    });
  })

  .catch((error) => {
    console.error("database can not be estabilished");
  });


