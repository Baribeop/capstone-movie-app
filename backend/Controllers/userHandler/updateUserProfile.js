// const User = require("../Model/userModel")

const User = require("../../Models/userModel")

const handleUpdateProfile = async (req, res) =>{

    try {

        const userId = req.user.id

        const {username, profilePicture} = req.body

        const user = await User.findById(userId).select('-password -email -__v')

        if (!user){
            return res.status(404).json({message: 'User does not exist'})
        }

        user.username = username || user.username
        user.profilePicture = profilePicture || user.profilePicture

        await user.save()

        return res.status(201).json({
            message: 'Profile updated succesfully', 
            detail: {
            _id: user?._id,
            username: user?.username,
            email: user?.email,
            createdAt: user.createdAt,
            profilePicture: user.profilePicture || "",
            followers: user.followers.length,
            following : user.following.length,
            favourites: user.favourites.length
        },
        })
         
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({
            message: 'Error updating profile'
        })
 
    }
    
}


module.exports = handleUpdateProfile



