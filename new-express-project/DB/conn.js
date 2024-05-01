const mongoose = require('mongoose');


const connection = async (req, res) => {
  try {
    await mongoose.connect(`mongodb+srv://khanlaique04:JungKook@cluster0.bac9rab.mongodb.net/?retryWrites=true&w=majority`);
    res.send(`DB connection successful`);
  } catch (err) {
    console.error("backend:",err);
  }
};


module.exports = connection;
