const express = require("express");
const app = express();
const connection = require("../DB/conn");






app.get("/", (req, res) =>{
    
//     res.send("DB Connection");
//    console.log("DB Connection");


   

    res.send("Backend on Vercel");

} 
);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;