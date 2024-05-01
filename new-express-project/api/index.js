const express = require("express");
const app = express();
// const connection = require("../DB/conn");

// connection().then(() => {
   
//    }).catch((err)=>{
//      console.error("Error connecting to the database:", err);
//    });




app.get("/", (req, res) => res.send("Backend on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;