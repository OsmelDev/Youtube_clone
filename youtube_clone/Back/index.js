const express = require('express')
const {PORT} = require('./config.env')
const connectDB = require("./database/connectDB.js")
const cookieParser = require('cookie-parser')
const app = express()
const authRoutes = require('./routes/auth.routes.js')
const postRoutes = require('./routes/post.routes.js')
const cors = require('cors')

app.use(express.json())
app.use(cookieParser()) 
app.use(cors({ 
  origin: "http://localhost:5174",
  origin: "http://localhost:5173",
  credentials: true
}))

app.use("/", authRoutes) 
app.use('/post', postRoutes)
app.use('/public', express.static(`${__dirname}/storage/imgs`))
app.use('/public/video', express.static(`${__dirname}/storage/videos`))



app.listen(PORT, () => {
  console.log(`server runing in http://localhost:${PORT}`)
  connectDB()
}) 