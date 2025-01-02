const mongoose = require("mongoose")
const {HOST} = require("../config.js")
const { PORT } = require("../config.js")


const userSchema = new mongoose.Schema(
  {
    username: { type: String, require, unique: true },
    password: { type: String, require},
    email: { type: String, require, unique: true },
    name: { type: String },
    lastName:{type:String},
    imgUrl: {type:String}
  }, {
  timestamps:true,
})
userSchema.methods.setImgUrl = function (filename) {
  this.imgUrl=`${HOST}:${PORT}/public/${filename}`
}


module.exports = mongoose.model("User", userSchema);