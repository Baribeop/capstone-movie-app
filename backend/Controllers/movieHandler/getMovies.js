
// const dotenv = require('dotenv');
// dotenv.config();
// const handleGetMovies = async (req, res) => {
    
//     // Fetch all movies from the database
//      const {query, genre, year, rating,  sortBy, page =1} = req.query;
//      let url;
//      const params = new URLSearchParams();
//      params.append('api_key', process.env.TMDB_API_KEY);
//      params.append('language', 'en-US');                
//      params.append('page', page);       
//      params.append('include_adult' , 'false'); 
//      if (query) {
//         url = `https://api.themoviedb.org/3/search/movie?`;
//         params.append('query', query);
//         params.append('include_adult', 'false');
//      }  else {
//         url = `https://api.themoviedb.org/3/discover/movie?`;
//      }
            
//         if (genre) {
//             params.append('with_genres', genre);
//         }   

//         if (year) {
//             params.append('primary_release_year', year);
//         }       
//         if (rating) {
//             params.append('vote_average.gte', rating);
//         }
//         if (sortBy) {
//             params.append('sort_by', sortBy);
//         } else {
//             params.append('sort_by', 'popularity.desc');
//         }

//         try {
//             const completeUrl = `${url}${params.toString()}`;
//             const response = await fetch(completeUrl);
        
//             if (!response.ok) {
//                 const errorMessage = await response.json()
//                 console.error('TMDB API Error:', errorMessage);
//                 return res.status(response.status).json({ message: errorMessage.status_message || 'Error fetching movies from TMDB' });
//             }

//             const data = await response.json();
//             return res.status(200).json(data);
//         }   
//         catch (error) {
//             console.error('Error fetching movies:', error);
//             return res.status(500).json({ message: 'Internal server error' });
//         }   
    
// }


// module.exports = handleGetMovies;