// const User = require("../../Models/userModel")
// const validEmail = require("../../verifyEmail")
// const jwt = require("jsonwebtoken")
// const session = require("express-session")
// const bcrypt = require("bcrypt")


// const handleLoginUser = async(req, res)=>{
//     const {email, password} = req.body

//     if (!email || !password){
//         return res.status(400).json({message: 'Please enter all credentials'})
//     }
//     try {

//         if (!validEmail(email)){
//             return res.status(400).json({message: "Invalid email address"})
//         }
        
//         const user = await User.findOne({email})

//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//         return res.status(400).json({ message: "Invalid password" });
//         }

//         if(!user){
//             return res.status(404).json({message: "User does not exist, please register"})

//         }

        
//         const token =  jwt.sign(
//             {id: user?._id},
//             process.env.JWT_SECRET,
//             {expiresIn: '1h'}
//         )

//         req.session.user = {
//             id: user._id,
//             token

//         }


//     //     // Prepare user data for frontend (exclude password and __v)
//     // const { password: _, __v, ...data } = user.toObject();

//     // return res.status(200).json(data);

//         return res.status(200).json({
//             message: "Login successful",
//             data: {
//             _id: user?._id,
//             username: user?.username,
//             email: user?.email,
//             createdAt: user.createdAt,
//             profilePicture: user.profilePicture || "",
//             followers: user.followers.length,
//             following : user.following.length,
//             favourites: user.favourites.length
//         },
      
//         })

//     } catch (error) {
//         console.error(error.message)
//         return res.status(500).json({message: "internal server error"})
//     }
// }



// module.exports = handleLoginUser




// backend/Controllers/userHandler/login.js
const User = require("../../Models/userModel");
const validEmail = require("../../verifyEmail");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLoginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please enter all credentials" });
  }

  try {
    if (!validEmail(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User does not exist, please register" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Store in session
    req.session.user = {
      id: user._id,
      username: user.username,
      token,
    };

    return res.status(200).json({
      message: "Login successful",
      data: {
        _id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        profilePicture: user.profilePicture || "",
        followers: user.followers.length,
        following: user.following.length,
        favourites: user.favourites.length,
        token, // Optionally return JWT
      },
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = handleLoginUser;