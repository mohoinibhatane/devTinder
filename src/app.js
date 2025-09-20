const express = require("express");
const app = express();
const { authAdmin, userAuth } = require("../middleware/auth.js");

app.use("/admin", authAdmin);

app.get("/admin/getAllData", (req, res) => {
  res.send("getting all data");
});

app.get("/user/login", (req, res, next) => {
  res.status(201).send("user  logged in successfully");
  next();
});
app.use("/user", userAuth);

app.get("/user/deleteUser", (req, res) => {
  res.send("user deleted successfully");
});

// error handling using try catch
app.get("/getUserData", (req, res) => {
  try {
    throw new Error("hgyyfghdusighuih");
    res.send("user data send");
  } catch (error) {
    res.status(500).send("error occured");
  }
});

//error handling for all routes****
app.use("/", (error, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong");
  }
});

app.listen(7777, () => {
    console.log(`server is running on 7777`)
});