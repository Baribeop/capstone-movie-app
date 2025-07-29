

const handleGetTmdbMovie = async(url, params, res ) =>{

    try {
         const completeUrl = `${url}${params.toString()}`

         const response = await fetch(completeUrl)

    if (!response.ok){
        const errorMessage =  await response.json()
        console.log('Failed to fetch movie from TMDB', errorMessage)
        return res.status(response.status).json({message: 'Failed to get movie' || errorMessage.status_message})
    }


        const data =  await response.json()

        return res.status(200).json(data)
    
        
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: "Internal server error "}, error.message)
        
    }

}


module.exports = handleGetTmdbMovie





// // Helper function to construct and fetch from TMDB API
// const handleGetTmdbMovies = async (url, params, res) => {
//   try {
    // const completeUrl = `${url}${params.toString()}`;
    // const response = await fetch(completeUrl);

//     if (!response.ok) {
//       const errorMessage = await response.json();
//       console.error('TMDB API Error:', errorMessage);
//       return res.status(response.status).json({
//         message: errorMessage.status_message || 'Error fetching movies from TMDB',
//       });
//     }

//     const data = await response.json();
//     return res.status(200).json(data);
//   } catch (error) {
//     console.error('Error fetching movies:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// };


// module.exports = handleGetTmdbMovies