const mongoose = require("mongoose")

"mongodb://localhost:27017/mytube"
const connectDBLocal = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mytube");
    console.log("Db coneccion exitosa");
  } catch (error) {
    console.log(error)
  }
}