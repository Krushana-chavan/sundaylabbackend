const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
  username: String,
  email: {
    type: String,
    require:true,
    unique: true,
  },
  password: String,
});

const UserModel = model("userdata", UserSchema);
module.exports = UserModel;