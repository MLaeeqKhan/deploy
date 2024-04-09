const express = require("express");
const app = express();
const connection = require("../DB/conn");






console.log("DB Connection");



app.use("/",connection);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;