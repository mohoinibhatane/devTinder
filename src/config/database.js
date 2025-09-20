const mongoose = require("mongoose");

const connectDb = async() => {
    await mongoose.connect(
      "mongodb+srv://mohinibhatane:rishabh2022@cluster0.fm2yo97.mongodb.net/devTinder"
    );
}

module.exports = {connectDb}

