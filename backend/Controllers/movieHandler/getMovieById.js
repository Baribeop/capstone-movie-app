const axios = require("axios")
const dotenv = require('dotenv')
dotenv.config()


const TMDB_BASE_URL = process.env.TMDB_BASE_URL

const TMDB_API_KEY = process.env.TMDB_API_KEY

const handleGetMovieById = async (req, res) =>{

    const tmdbId = req.params.id
    console.log(tmdbId)

    try {
          if (!tmdbId){
        return res.status(404).json({message: "Movie Id not found"})
    }
    // const url = https://api.themoviedb.org/3/find/{external_id}
    const url =  `${TMDB_BASE_URL}/movie/${tmdbId}?api_key=${TMDB_API_KEY}`

    // const url = `${TMDB_BASE_URL}/popular/${tmdbId}?api_key=${TMDB_API_KEY}&append_to_response=videos, genres`;
    // const response = await fetch(url);

    // const data = await response.json()
    const response = await axios.get(url)


    // if (!data){
    //     return res.status(404).json({message: `Movie with id ${tmdbId} not found`})
    // }
     if (!response || !response.data){
        return res.status(404).json({message: `Movie with id ${tmdbId} not found`})
    }

    // return res.status(200).json(data)
    // console.log(response.data)
    return res.status(200).json(response.data)

    } catch (error) {
        console.error(error.message)
        return res.status(500).json("Internal server error")
    }
  
}


module.exports = handleGetMovieById