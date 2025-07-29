// const axios = require('axios');
const { Movie } = require('../../Models/moviesModel');
const User = require('../../Models/userModel');
const dotenv = require('dotenv');
const handleGetOrAddToLocalDB = require('../../Services/getoraddtolocaldb');
dotenv.config();

const handleAddFavouriteMovies = async(req, res) => {
   try {

    const userId = req.user.id;

    const {tmdbId} = req.params;
   
    const user = await User.findById(userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Fetch movie details from TMDB API
    const movie = await handleGetOrAddToLocalDB(tmdbId)
    
    if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });                                                                                            
    }   
    const updateResult = await User.updateOne(
                {_id: userId}, 
                {$addToSet: {favourites: movie._id}
            })

    if (updateResult.modifiedCount === 0 || updateResult.nModified === 0) {
        return res.status(400).json({message: 'Movie already added to favourites '})
       
    } else{
         return res.status(201).json({message: 'Movie added to favorites', movie})
    }
    
    
   }catch (error) {
       console.error('Error adding movie to favourites:', error.message);
       return res.status(500).json({ message: 'Internal server error' });
   }

}


module.exports = handleAddFavouriteMovies;