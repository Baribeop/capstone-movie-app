
// const handleLogOut = async (req, res) => {

//     try {

//         req.session.destroy((error)=>{
//             if(error){
//                 return res.status(500).json({message: 'Error logging out'})
//             }

//         res.clearCookie('connect.sid')
//         return res.status(200).json({message: "Logout successful"})
//         })
        
//     } catch (error) {
//         console.error(error.message)
//         return res.status(500).json({message: "Internal server error"})
//     }  
// }

// module.exports = handleLogOut;




// backend/Controllers/userHandler/logout.js
const handleLogOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    res.clearCookie("connect.sid");
    return res.status(200).json({ message: "Logged out successfully" });
  });
};

module.exports = handleLogOut;