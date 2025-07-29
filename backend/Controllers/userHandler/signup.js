// const User = require("../../Models/userModel")
// const bcrypt = require("bcrypt")
// // const validEmail = require("../../verifyEmail")

// // User registration 
// const handleRegisterUser = async (req, res)=>{
//     const {username, email, password} = req.body
//     if (!username || !email || !password){
//         return res.status(400).json({message: "Please enter all credential"})
//     }

//     try {

   
//     // if(!validEmail(email)){return res.status(400).json({message: 'invalid email address'})}
//     const user = await User.findOne({email})
//     if(user){return res.status(409).json({message: "User already exist, please log in"})}

//     const hashedPassword = await bcrypt.hash(password, 12)

//     const savedUser = new User({
//         username,
//         password: hashedPassword,
//         email
//     })

//    await savedUser.save()

//    return res.status(201).json({
//     message: "User registered successfully",
//     newUser: {
//         id: savedUser._id,
//         username: savedUser.username,
//         email: savedUser.email
//     }

//     })
        
//     } catch (error) {
//         console.error(error.message)
//         return res.status(500).json({message: "Internal server error"})
//     }
// }


// module.exports = handleRegisterUser





// backend/Controllers/userHandler/signup.js
const User = require("../../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleRegisterUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Please enter all credentials" });
  }

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already exists, please log in" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const savedUser = new User({
      username,
      password: hashedPassword,
      email,
    });

    await savedUser.save();

    // Generate JWT
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Auto-login by setting session
    req.session.user = {
      id: savedUser._id,
      username: savedUser.username,
      token,
    };

    return res.status(201).json({
      message: "User registered successfully",
      data: {
        _id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        token,
      },
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = handleRegisterUser;