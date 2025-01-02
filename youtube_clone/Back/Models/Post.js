const mongoose = require('mongoose')
const {HOST, PORT} = require('../config.js')


const postSchema = new mongoose.Schema(
  {
    name: { type: String, require },
    descripcion: { type: String, require }, 
    videoUrl: { type: String, require },
    category:{type: String, require},
    user: {type: mongoose.Schema.Types.String,ref: "User"}
  }, {
    timestamps:true
},
  
)
postSchema.methods.setVideoUrl = function (filename) {
  this.videoUrl=`${HOST}:${PORT}/public/video/${filename}`
}
// 
module.exports = mongoose.model("Post", postSchema)