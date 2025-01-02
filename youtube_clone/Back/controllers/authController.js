const User = require("../Models/User");
const createAccessToken = require("../libs/jwt");
const bcrypt = require("bcrypt");
const { SALT_ROUNDS, SECRET_KEY } = require("../config.js");
const jwt = require("jsonwebtoken");
const Post = require("../Models/Post");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userFound = await User.findOne({ username });
    if (userFound) {
      return res.status(400).json("User already exist");
    } else {
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
      const newUser = new User({
        username,
        password: hashedPassword,
        email,
      });
      if (req.file) {
        const { filename } = req.file;
        const avatar = newUser.setImgUrl(filename);
        const userSaved = await newUser.save();

        const token = await createAccessToken({ id: userSaved._id });

        res.cookie("token", token);

        res.status(200).json(userSaved);
      } else {
        const userSaved = await newUser.save();

        const token = await createAccessToken({ id: userSaved._id });

        res.cookie("token", token);

        res.status(200).json(userSaved);
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(401).json(["The user does not exist"]);

    const postFound = await Post.find({ user: userFound.username });
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) return res.status(400).json(["password incorrect"]);

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);

    res.json({
      _id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      lastName: userFound.lastName,
      name:userFound.name,
      createAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
      imgUrl: userFound.imgUrl,
      posts: postFound,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const logout = async (req, res) => {
  return res.status(200).cookie("token", "").json("Ok");
};

const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, SECRET_KEY, async (err, user) => {
    if (err) console.log(err);
    try {
      const userFound = await User.findById(user.id);
      if (!userFound) return res.status(401).json({ message: "Unauthorized" });

      const postsFound = await Post.find({ user: userFound.username });
      res.json({
        _id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        name: userFound.name,
        lastName: userFound.lastName,
        createAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
        imgUrl: userFound.imgUrl,
        posts: postsFound,
      });
    } catch (error) {
      console.log(error);
    }
  });
};

const update = async (req, res) => {
  const { name, lastName,  email } = req.body;
  try {
    const userFound = await User.findById(req.user.id);
    if (!userFound) return res.status(400).json("El usuario no existe");

    const emailFound = await User.findOne({ email });
    if (emailFound )
      return res.status(400).json("ya existe un usuario con esos datos");

    await User.updateOne(
      { _id: userFound._id },
      {
        $set: { name: name, lastName: lastName, email: email },
      }
    );

    res.status(200).json("usuario actualizado con exito");
  } catch (error) { 
    res.status(401).json(error.message);
  }
};

module.exports = { register, login, logout, verifyToken, update };
