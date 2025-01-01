const mongoose = require("mongoose")
const { PASS } = require('../config.env')

const uri = `mongodb+srv://Osmel:${PASS}@cluster0.0ub87.mongodb.net/mytube`;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } }; 

const connectDB = async () =>{
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.log(error)
  }
 }

module.exports= connectDB