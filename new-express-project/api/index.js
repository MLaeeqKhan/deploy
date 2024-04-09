const express = require("express");
const app = express();
const connection = require("../DB/conn");






console.log("DB Connection");


 connection().then(() => {
   
 }).catch((err)=>{
   console.log("Error connecting to the database:", err);
 });


app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;