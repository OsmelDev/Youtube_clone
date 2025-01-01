const Post = require("../Models/Post");
const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config.env");
const fs = require('node:fs')

const postVideo = async (req, res) => {
  const { name, descripcion, category } = req.body;
  const { token } = req.cookies; 
  console.log(req.file)
  if (!req.file) { return res.status(400).json( "Missing video") }
  else {
    const { originalname } = req.file;
  if (token) {
    jwt.verify(token, SECRET_KEY, async (err, user) => {
      const userFound = await User.findById(user.id);
      if (userFound) {
        try {
          const postFound = await Post.findOne({ name });
          if (postFound)
            return res
              .status(400)
              .json("Ya existe un post con ese nombre");

          const newPost = new Post({
            name,
            descripcion,
            category,
            user: userFound.username,
          });
          const videoUrl = newPost.setVideoUrl(originalname);
          const postSaved = await newPost.save();

          res.status(200).send("Guardado exitosamente");
        } catch (error) {
          res.statu(401).json(error.message);
        }
      } else {
        res.status(401).json(["Unauthorized"]);
      }
    });
  }
  }
  
 
};

const getPublications = async (req, res) => {
  const postFound =await Post.find()
  if (!postFound) return res.status(400).json({ message: "No hay publicaciones para mostrar" })
  
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.status(200).send(postFound)
  
}

const getPublicationsCategory = async (req, res) => {
  const { category } = req.params;
  try {
  if (category === "all") {
    const postFound = await Post.find()
       res.status(200).json(postFound)
  } else{
    const postFound = await Post.find({ category })
    if(postFound.length === 0) return res.status(400).json({message:`no hay publicaciones de ${category}`})
    res.status(200).json(postFound)
  }  
  } catch (error) {
    res.status(400).json({message: error.message})
  }
  
}
const getReels = async (req, res) => {
  const postFound = await Post.find( {category:"reels"})
  res.status(200).send(postFound)
}
const getPublication = async (req, res) => {
  
  const { id } = req.params
  const postFound = await Post.findById({ _id:id })
  if (!postFound) return res.status(400).json('Ya no se encuentra en Base de Datos')
  
  res.status(200).json(postFound)
}

module.exports = { postVideo, getPublications, getPublicationsCategory, getReels, getPublication }; 
