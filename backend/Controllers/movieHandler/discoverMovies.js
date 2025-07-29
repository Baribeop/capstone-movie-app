const dotenv = require('dotenv')
const handleGetTmdbMovies = require('./getTMDBMovies')

dotenv.config()

const handlediscoverMovies = async(req, res) =>{
    const {year, rating, genre, sortBy, page = 1} = req.query


    const params =  new URLSearchParams()
    params.append('api_key', process.env.TMDB_API_KEY)
    params.append('language', 'en-Us')
    params.append('page', page)
    params.append('include_adult', 'false')
   
    if (genre) {params.append('with_genres', genre)}
    if (year) {params.append('primary_release_year', year)}
    if (rating) {params.append('vote_rating.gte', rating)}
    if (sortBy) {params.append('sort-by', sortBy || 'popularity.desc')} 
 

    const url = 'https://api.themoviedb.org/3/discover/movie?';

    return handleGetTmdbMovies(url, params, res)

}

module.exports = handlediscoverMovies








