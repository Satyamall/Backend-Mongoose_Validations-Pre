
const express = require('express');
const cors = require('cors');
const connect = require("./config/db");
const userController = require("./controllers/user.controller");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users",userController);

const start = async () =>{
   
    await connect();
    app.listen(5000,()=>{
        console.log("Listening on port 5000");
    })
}

module.exports = start;