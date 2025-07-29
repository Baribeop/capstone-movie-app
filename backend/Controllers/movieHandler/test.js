// const axios = require('axios');
const { Movie } = require('../../Models/moviesModel');
const User = require('../../Models/userModel');
const dotenv = require('dotenv');
const handleGetOrAddToLocalDB = require('../../Services/getoraddtolocaldb');
dotenv.config();

const handleAddFavouriteMovies = async(req, res) => {
   try {

    const userId = req.user.id;
    const tmdbId = req.body.id;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Check if movie is already in user's favourites
    let movie = await Movie.findOne({ tmdbId: tmdbId });
    if (!movie) {

    // Fetch movie details from TMDB API
     handleGetOrAddToLocalDB(tmdbId)
    
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








const dotenv = require('dotenv');
const { Movie } = require('../Models/moviesModel');
dotenv.config();
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3/movie';

const handleGetOrAddToLocalDB = async (tmdbId) => {
 
    // Fetch movie details from TMDB API
    const url = `${TMDB_BASE_URL}/${tmdbId}?api_key=${TMDB_API_KEY}&append_to_response=videos, genres`;
    const response = await fetch(url);

    if (!response.ok) {
        console.error(`Error fetching movie data with id ${tmdbId} : ${response.status}`);
        return null;
    }
    const data = await response.json();
            
    if (!data.id || !data.title){
        console.error(`Incomplete movie data received for id ${tmdbId}`);
        return null;
    }

            // const { 
            //     id: tmdbId,
            //     title, 
            //     overview, 
            //     release_date, 
            //     poster_path, 
            //     vote_average,
            //     popularity, 
            //     genres,
            //     videos, 
            // } = data;

    const videokey = data.videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube')?.key   || null;
        // Create new movie document
    movie = new Movie({
                tmdbId: data.id,
                title: data.title,
                releaseDate: data.release_date,
                posterPath: data.poster_path,
                overview: data.overview,
                videokey: videokey,
                voteAverage: data.vote_average,
                popularity: data.popularity || 0,
                backdropPath: data.backdrop_path || null,
                genre: data.genres.map(genre => genre.name) || []
            });

            // Save the new movie to the database
    await movie.save();

    return movie;
}   


module.exports = handleGetOrAddToLocalDB;