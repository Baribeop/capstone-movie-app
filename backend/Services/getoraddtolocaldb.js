const dotenv = require('dotenv');
const { Movie } = require('../Models/moviesModel');
dotenv.config();

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = process.env.TMDB_BASE_URL

const handleGetOrAddToLocalDB = async (tmdbId) => {


    let movie = await Movie.findOne({ tmdbId: tmdbId });
   
    if (movie) {
            return movie;
        }

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