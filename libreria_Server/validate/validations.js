const jwt = require('jsonwebtoken');
require("dotenv").config();

const generateAccessToken = async (clienteData) => {
  const token = await jwt.sign(clienteData, process.env.PRIVATE_KEY, {
    expiresIn: "1h",
  });
  return token;
};

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (token) {
    jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
      if (err) {
        return res.json({ message: "Invalid token" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.send({ message: "Forget token" });
  }
};

module.exports = {generateAccessToken, verifyToken}