const express = require('express')
const router = express.Router()
const {uploadVideo} =require('../libs/storageVideo')
const { postVideo,getPublications, getPublicationsCategory, getReels, getPublication } = require('../controllers/postController')
const authRequired = require('../middlewares/validateToken')
 
router.post('/send',authRequired, uploadVideo.single("video"), postVideo)
router.get('/publications', getPublications)
router.get('/publications/:category', getPublicationsCategory)
router.get('/publication/reels', getReels)
router.get('/publication/:id', getPublication)
module.exports = router  
//  