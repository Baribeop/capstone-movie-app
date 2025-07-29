const dotenv = require('dotenv')

dotenv.config()

TMDB_BASE_URL = 'https://api.themoviedb.org/3/movie'
const TMDB_API_KEY = process.env.TMDB_API_KEY

const getHandleMovieCategories = async(req, res) =>{

try {
    const endpoints = {

    popular: `${TMDB_BASE_URL}/popular?api_key=${TMDB_API_KEY}`,
    nowPlaying: `${TMDB_BASE_URL}/now_playing?api_key=${TMDB_API_KEY}`,
    topRated: `${TMDB_BASE_URL}/top_rated?api_key=${TMDB_API_KEY}`,
    upcoming : `${TMDB_BASE_URL}/upcoming?api_key=${TMDB_API_KEY}`,
}

    const [popularRes, nowPlayingRes, topRatedRes, upcomingRes] = await Promise.all(
        [
            fetch(endpoints.popular),
            fetch(endpoints.nowPlaying),
            fetch(endpoints.topRated),
            fetch(endpoints.upcoming)
        ]
    )
    if(!popularRes.ok || !nowPlayingRes.ok || !topRatedRes.ok || !upcomingRes.ok){
        return res.status(400).json({message: "Failed to fetch movie"})
     }

    const popular = await popularRes.json()
    const nowPlaying = await nowPlayingRes.json()
    const topRated = await topRatedRes.json()
    const upcoming = await upcomingRes.json()


    res.json({
        popular: popular.results,
        nowPlaying : nowPlaying.results,
        topRated: topRated.results, 
        upcoming: upcoming.results
    })
    
} catch (error) {
    const errorMessage = error.message
    console.error( errorMessage || 'Failed to fetch movie')
    return res.status(500).json({message: 'Failed to fetch movie categories'|| errorMessage})
}

}


module.exports = getHandleMovieCategories