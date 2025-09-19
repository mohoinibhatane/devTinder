const express = require("express");
const app = express();

// app.use("/", (req, res) => {
//   res.send("this is wild card");
// });

// app.use("/test", (req, res) => {
//   res.send("this is test route");
// });

// app.use("/home", (req, res) => {
//   res.send("this is home route");
// });

app.get("/user",(req,res) => {
    res.send("this is get api call");
})

app.post("/user", (req,res) => {
    res.send("this is post api call");
})

app.delete("/user", (req, res) => {
  res.send("this is delete api call");
});

app.listen(7777, () => {
    console.log(`server is running on 7777`)
});