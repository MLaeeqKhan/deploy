const express = require("express");
const app = express();
const connection = require("../DB/conn");






app.get("/", (req, res) =>{
    
    connection().then(() => {
   
    }).catch((err)=>{
      res.send("Error connecting to the database:", err);
    });

    res.send("Backend on Vercel");

} 
);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;