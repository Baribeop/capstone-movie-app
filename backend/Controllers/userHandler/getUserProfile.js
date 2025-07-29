// const User = require("../../Models/userModel")

// const handleGetUserProfile = async(req, res)=>{
   
//     try {
//         const userId = req.params.id || req.user.id
//         const userProfile = await User.findById(userId).select("-password -__v")
//         return res.status(200).json({
//             message: 'User profile successfully retrieved',
//             userProfile
//         })

//     } catch (error) {
//         console.error(error.message)
//         return res.status(500).json({message: 'Internal server error'})
//     }
// }


// module.exports = handleGetUserProfile



// backend/Controllers/userHandler/getUserProfile.js
const User = require("../../Models/userModel");

const handleGetUserProfile = async (req, res) => {
  try {
    const userId = req.params.id || req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      profilePicture: user.profilePicture || "",
      followers: user.followers.length,
      following: user.following.length,
      favourites: user.favourites.length,
      createdAt: user.createdAt,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = handleGetUserProfile;