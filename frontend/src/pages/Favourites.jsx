// import { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';
// import MovieCard from '../components/MovieCard';

// function Favorites() {
//   const [favorites, setFavorites] = useState([]);
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     if (user) {
//       axios.get('/api/favorites', { withCredentials: true })
//         .then(res => {
//           Promise.all(res.data.map(id => axios.get(`/api/movies/${id}`, { withCredentials: true })))
//             .then(results => setFavorites(results.map(res => res.data)))
//             .catch(err => console.error(err));
//         })
//         .catch(err => console.error(err));
//     }
//   }, [user]);

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">My Favorites</h2>
//       {favorites.length === 0 ? (
//         <p>No favorites yet.</p>
//       ) : (
//         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
//           {favorites.map(movie => (
//             <div key={movie.id} className="col">
//               <MovieCard movie={movie} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Favorites;



// frontend/src/components/Favorites.jsx
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Favorites() {
  const { user, token } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchFavorites = async () => {
      try {
        const res = await axios.get("/api/users", {
          withCredentials: true,
          headers: token ? { Authorization: `Bearer ${token}` } : {},

        });
        // Fetch movie details for each favorite ID
        const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY
        const moviePromises = res.data.favourites.map((movieId) =>
          // axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`)
          axios.get(`https://api/favorites/${movieId}`)
        );
        const movieResponses = await Promise.all(moviePromises);
        setFavorites(movieResponses.map((res) => res.data));
      } catch (err) {
        console.error("Error fetching favorites:", err.response?.data?.message || err.message);
      }
    };
    fetchFavorites();
  }, [user, token, navigate]);

  if (!user) return null;

  return (
    <div className="container mt-4">
      <h2>{user.username}'s Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul className="list-group">
          {favorites.map((movie) => (
            <li key={movie.id} className="list-group-item">
              {movie.title} ({new Date(movie.release_date).getFullYear()})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;