const User = require("../../Models/userModel");

const handleDeleteUserProfile = async (req, res) =>{
    const userId = req.user.id;
    try {
    
        const user = await User.findById(userId)
        if (!user){
            return res.status(404).json({message: 'User not found'})
            }
        await User.findByIdAndDelete(userId)
       
        req.session.destroy((error)=>{
        if(error){
                return res.status(500).json({message: 'Error logging out'})
            }

        res.clearCookie('connect.sid')
        return res.status(200).json({message: "Account deleted successfully"})
        })
        
    } catch (error) {
        console.error("Error deleting user profile:", error.message);
        return res.status(500).json({message: "Internal server error"})
    }
}

module.exports = handleDeleteUserProfile;