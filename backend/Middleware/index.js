// const jwt = require("jsonwebtoken")

// const isAuthenticated = async (req, res, next) =>{

//     try {
//         const session  = req.session.user
//         if(!session){return res.status(401).json({message: 'Unauthorized access , please login'})}
//         const token = session.token
//         if(!token){return res.status(401).json({message: "Unauthorized access, please login"})}

//         const decoded = jwt.verify(token, process.env.JWT_SECRET)

//         if(!decoded){return res.status(401).json({message: "Unauthorized access, please login"})}

//         req.user = decoded
        

//         next()
        
//     } catch (error) {
//         console.error(error.message)
//         return res.status(403).json({message: 'invalid token'})
        
//     }    

// }


// module.exports = isAuthenticated


// backend/Middleware/isAuthenticated.js
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

const isAuthenticated = async (req, res, next) => {
  try {
    // Check session first
    if (req.session.user && req.session.user.id) {
      req.user = { id: req.session.user.id };
      return next();
    }

    // Fallback to JWT in Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized access, please login" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.id) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = { id: decoded.id };
    next();
  } catch (error) {
    console.error(error.message);
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = isAuthenticated;