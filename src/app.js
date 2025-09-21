const express = require("express");
const app = express();
const { connectDb } = require("./config/database");
const { User } = require("./models/user.js");

app.use(express.json());

//get user by email
app.get("/users", async(req, res) => {
    const userEmail = req.body.email;

    try{
      console.log(userEmail);

      const user = await User.find({ email: userEmail }); //{ fieldNameInDB: valueToMatch }

      if (!user) {
        res.send("user not found");
      } else {
        res.send(user);
      }
    }
    catch(error){
        res.status(400).send("something went wrong");
    }
})

app.post("/signup", async (req, res) => {
  //creating instance of user

  const user = new User(req.body);

  try {
    await user.save();
    res.send("user created successfully");
  } catch (error) {
    res.status(400).send("error occured", error.message);
  }
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


