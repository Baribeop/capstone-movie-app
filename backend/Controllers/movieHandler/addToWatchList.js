const { Movie, Watchlist } = require("../../Models/moviesModel");
const handleGetOrAddToLocalDB = require("../../Services/getoraddtolocaldb");

const handleAddToWatchList = async (req, res) => {
    const userId = req.user.id;
    
    // Extract watchListId and movieId from request body
    const { watchListId, tmdbId } = req.body;
    try {     
        const movie = await handleGetOrAddToLocalDB(tmdbId);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });                        
        }
       
        // Check if user exists
        const watchList = await Watchlist.findOne({_id: watchListId, userId});  

        if (!watchList) {
                return res.status(404).json({ message: 'Watchlist not found' });
            }  
        
        if (watchList.movies.includes(movie._id)) {
            return res.status(400).json({ message: 'Movie already in watchlist' });
        }
        watchList.movies.push(movie._id);
        await watchList.save();
        return res.status(200).json({ message: 'Movie added to watchlist' , watchList});

} catch (error) {
        console.error('Error adding to watchlist:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = handleAddToWatchList;





// const { Movie, Watchlist } = require("../../Models/moviesModel");

// const handleAddToWatchList = async (req, res) => {
//     try {     
//         const userId = req.user.id;
//         console.log('User ID:', userId);
//         // Extract watchListId and movieId from request body
//         const { watchListId, tmdbId } = req.body;
//         // const watchListId = req.body(Number(id))
//         // const movieId = req.body.movieId
//         if (!watchListId) {
//             console.log('Missing watchListId in request');
//         return res.status(400).json({ message: 'Missing watchListId' });
//         }
       
//         // console.log('Adding movie to watchlist:', watchListId, tmdbId);
        

//         // Check if user exists
//         let watchList = await Watchlist.findOne({_id: watchListId, userId});  

//         if (!watchList) {
//                 return res.status(404).json({ message: 'Watchlist not found' });
//             }  
            
//         // // Check if movie is already in watchlist
//         // if (watchList.movies && watchList.movies.includes(movie._id)) {
//         //     return res.status(400).json({ message: 'Movie already in watchlist' });
//         // }

//         // Check if movie is already in user's watchlist
//         let existingWatchList = await Watchlist.movies.includes(movie._id);
//         if (existingWatchList) {    
//             return res.status(400).json({ message: 'Movie already in watchlist' });
//         }   
//         // Check if movie is already in user's favourites
//         let movie = await Movie.findOne({ tmdbId });
//         if (!movie) {
//             // Fetch movie details from TMDB API
//           movie =  await handleGetOrAddToLocalDB(tmdbId)
//         //         // Fetch movie details from TMDB API
//         //     const TMDB_API_KEY = process.env.TMDB_API_KEY;
//         //     const url = `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${TMDB_API_KEY}&append_to_response=videos`;
        
//         //     const movieResponse = await fetch(url)
//         //     const movieData = await movieResponse.json()
            
//         //     const { 
//         //         id: tmdbId,
//         //         title, 
//         //         overview, 
//         //         release_date, 
//         //         poster_path , 
//         //         vote_average,
//         //         popularity, 
//         //         genres,
//         //         videos, 
//         //                 } = movieData;

//         //     const videokey = videos?.results?.[0]?.key || null;

//         //     movie = new Movie({
//         //             tmdbId,
//         //             title,
//         //             releaseDate: release_date,
//         //             posterPath: poster_path,
//         //             overview,
//         //             videokey,
//         //             voteAverage: vote_average,
//         //             popularity,
//         //             genre: genres.map(genre => genre.name)
//         //         });
//         // await movie.save();
//         // add movie to user's watchlist
//         watchList.movies.push(movie._id);
//         await watchList.save();
//         return res.status(200).json({ message: 'Movie added to watchlist' , watchList});
// }

// } catch (error) {
//         console.error('Error adding to watchlist:', error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// }

// module.exports = handleAddToWatchList;