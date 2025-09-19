const express = require("express");
const app = express();

app.use("/test",(req, res) => {
   res.send("this is test route");
})

app.use("/home",(req,res) => {
    res.send("this is home route");
});

app.listen(7777, () => {
    console.log(`server is running on 7777`)
});