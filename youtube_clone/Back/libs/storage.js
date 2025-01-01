const multer = require('multer')

const storageImgs = multer.diskStorage({
  
  destination: function (req, file, cb) {
    cb(null, './storage/imgs')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})



const uploadImg = multer({ storage:storageImgs })


module.exports= {uploadImg}
