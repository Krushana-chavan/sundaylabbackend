require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const connect = require("./config/moongoose.config")
const router = require("./router/router")

const app =  express();
app.use(cors({origin:"*"}))
app.use(express.json());

app.use(express.urlencoded({extended:true}))
app.use("/", router)


app.listen(8080,()=>{  
  connect()
  .then(()=>{
    console.log("Connected to Database")
  }).catch((e)=>{
    console.log(e)
  })
  console.log("Server is running on port 8080")
})