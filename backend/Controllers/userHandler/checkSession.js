

// // const checkSession = (req, res) => {
// //     const session  = req.session.user
// //   if (!req.session.user) {
// //     return res.status(401).json({ message: 'No session' });
// //   }
// //   res.json({ userId: req.session.user.id, username: req.session.username });
// // };

// // module.exports = checkSession;



// const checkSession = async (req, res) => {
//   if (req.session && req.session.userId) {
//     return res.status(200).json({
//       id: req.session.userId,
//       username: req.session.username
//     });
//   } else {
//     return res.status(401).json({ message: "Not logged in" });
//   }
// };

// module.exports = checkSession;



// backend/Controllers/userHandler/checkSession.js
const User = require("../../Models/userModel");

const checkSession = async (req, res) => {
  try {
    if (!req.session.user || !req.session.user.id) {
      return res.status(401).json({ message: "Not logged in" });
    }

    const user = await User.findById(req.session.user.id).select("username email");
    if (!user) {
      req.session.destroy();
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      userId: req.session.user.id,
      username: user.username,
      email: user.email,
      token: req.session.user.token,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = checkSession;