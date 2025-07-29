
const { Movie, Watchlist } = require("../../Models/moviesModel");
const User = require("../../Models/userModel")
const dotenv = require('dotenv')
dotenv.config()


const handleCreateWatchList = async(req, res) =>{

    try {

        const userId = req.user.id;
        const {name} = req.body;

        // console.log(name)

        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {    
            return res.status(404).json({ message: 'User not found' });
        }   
        
        // check if watchlist name already exists
        let existingWatchList = await Watchlist.findOne({ userId, name});
        if (existingWatchList) {                                               
          
            res.status(400).json({ message: 'Watchlist with this name already exists' });
        }
        console.log(existingWatchList)
       
        // Create a new watchlist

        const watchlist = new Watchlist({
            userId,
            name,
            movies: [],
            shareWith: []
        });
        // Add movie to user's watchlist
        await watchlist.save();
        res.status(201).json({ message: 'Watchlist created successfully', watchlist });
      
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: 'Internal server error'})
    }

}

module.exports = handleCreateWatchList;