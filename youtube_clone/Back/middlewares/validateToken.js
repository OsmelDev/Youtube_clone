const JWT = require('jsonwebtoken')
const { SECRET_KEY } = require('../config.env')

const authRequired = (req, res, next) => {
  const { token } = req.cookies
  if (!token) {
    return res.status(401).json({message: "no token, aurhorizacion denied"})
  } else {
    JWT.verify(token,SECRET_KEY, (error, user) => {
      if (error) {
        return res.status(403).json({message: "invalid token"})
      } else {
        req.user = user
        next()
      }
    })
  }
}

module.exports = authRequired