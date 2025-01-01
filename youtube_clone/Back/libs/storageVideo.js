const multer = require('multer')

const storageVideos = multer.diskStorage({ 
  destination: function (req, file, cb) {
    cb(null, "./storage/videos")
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}`)
  }
})
const uploadVideo = multer({ storage:storageVideos})

module.exports = { uploadVideo } 