const express = require('express')
const {register, login, logout, verifyToken, update} = require('../controllers/authController.js')
const {uploadImg} = require("../libs/storage.js")
const router = express.Router()
const authRequired = require('../middlewares/validateToken.js')

router.post("/register", uploadImg.single('avatar'), register)
router.post("/login", login)
router.get('/verify', verifyToken)
router.post("/logout", logout)
router.post("/update",authRequired, update)
module.exports = router