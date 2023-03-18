
const express = require("express")
const app = express.Router()
const {
    signup,
    login
  } = require("../controller/user.controller");
  
  app.post("/signup", signup);
  app.post("/login", login);

  module.exports = app 
