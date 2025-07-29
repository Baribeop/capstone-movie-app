const dotenv = require('dotenv')
dotenv.config()
const handleGetMovieByGenre = async(req, res) =>{
    // const  genre = req.param.genre
    const TMDB_API_KEY = process.env.TMDB_API_KEY
    const TMDB_BASE_URL = process.env.TMDB_BASE_URL
    
    // if (!genre){
    //     return res.status(404).json({message: "Genre parameter is not provided"})
    // }

  
     const url = `${TMDB_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}`
   

     const response = await fetch(url)

     if (!response.ok){
        const errorMessage = await response.json()
        console.error('Failed to fetch movie by genre from TMDB', errorMessage)
        return res.status(response.status).json({message: errorMessage ||'Failed to fetch movies by genre'})
     }

     const data =  await response.json()

    //  const formated_data =  res.status(200).json(data)

    //  formated_data.forEach(genre => {
    //     return res.status(200).json(genre.name === 'Action')
    //  });

    // return res.status(200).json({message: 'success'}, json(data))

    return res.status(200).json(data.map(element => element.name)) 

    //  return res.status(200).json(data)
}


module.exports = handleGetMovieByGenre