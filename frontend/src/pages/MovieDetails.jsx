
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => { 
    axios.get(`/api/movies/${id}`)
      .then((res) => {
        if (!res.data) throw new Error("No movie data returned");
        // console.log(res.data)
        setMovie(res.data);
      })
      .catch((err) => {
        const errorMsg = err.response?.data?.message || "Error fetching movie details";
        setError(errorMsg);
      });
  }, [id]);

  const addToFavorites = async () => {
    if (!user) {
      navigate("/login");
      return;
    }
    try {
      await axios.post(
        `/api/movies/favorites/${id}`,
        // { movieId: Number(id) },
        {
          withCredentials: true,
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      );
      alert("Added to favorites!");
    } catch (err) {
      alert(err.response?.data?.message || "Error adding to favorites");
    }
  };

  if (error) return <div className="alert alert-danger text-center mt-4">{error}</div>;
  if (!movie) return <div className="text-center mt-4 text-light">Loading movie details...</div>;

  return (
    <div className="container mt-5">
      <div className="card bg-dark text-white shadow-lg">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://placehold.co/500x750?text=No+Poster"
              }
              className="img-fluid h-100"
              alt={movie.title || "Movie poster"}
              style={{
                objectFit: "cover",
                borderRadius: "0.5rem 0 0 0.5rem",
              }}
            />
          </div>
          <div className="col-md-7 p-4">
            <h2 className="mb-3">{movie.title || "Unknown Title"}</h2>
            {/* <p className="lead">{movie.overview || "No description available."}</p> */}
            <hr className="border-light" />
              <p><strong>Overview:</strong> {movie.overview || "No description available."}</p>
              <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
              <p><strong>Release Date:</strong> {movie.release_date || "Unknown"}</p>
              <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
              <p><strong>Rating:</strong> {movie.vote_average || "N/A"}/10</p>
              <p><strong>Production Companies:</strong> {movie.production_companies.map(p => p.name).join(', ')}</p>
              <p><strong>Homepage:</strong> <a href={movie.homepage} target="_blank" rel="noopener noreferrer">{movie.homepage}</a></p>
            {user && (
              <button onClick={addToFavorites} className="btn btn-primary mt-3">
                Add to Favorites
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;



// import { useState, useEffect, useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// function MovieDetails() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     axios.get('/movies/id')
//       .then(res => setMovie(res.data))
//       .catch(err => console.error(err));
//   }, [id]);

//   const addToFavorites = async () => {
//     try {
//       await axios.post('/api/favorites', { movieId: Number(id) }, { withCredentials: true });
//       alert('Added to favorites!');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   if (!movie) return <div className="text-center">Loading...</div>;

//   return (
//     <div className="container mt-4">
//       <div className="card bg-dark text-white">
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img
//               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//               className="img-fluid rounded-start"
//               alt={movie.title}
//             />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h2 className="card-title">{movie.title}</h2>
//               <p className="card-text">{movie.overview}</p>
//               <p className="card-text">Rating: {movie.vote_average}/10</p>
//               <p className="card-text">Release Date: {movie.release_date}</p>
//               {user && (
//                 <button
//                   onClick={addToFavorites}
//                   className="btn btn-primary mt-3"
//                 >
//                   Add to Favorites
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MovieDetails;






// // frontend/src/components/MovieDetails.jsx
// import { useState, useEffect, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";

// function MovieDetails() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [error, setError] = useState("");
//   const { user, token } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         const res = await axios.get(`/api/movies/${id}`, {
//           // Public endpoint, no withCredentials needed unless required
//         });
//         setMovie(res.data.data);
//         setError("");
//       } catch (err) {
//         setError(err.response?.data?.message || "Error fetching movie details");
//         console.error(err);
//       }
//     };
//     fetchMovie();
//   }, [id]);

//   const addToFavorites = async () => {
//     if (!user) {
//       navigate("/login");
//       return;
//     }
//     try {
//       await axios.post(
//         "/api/movies/favorite",
//         { movieId: Number(id) },
//         {
//           withCredentials: true,
//           headers: token ? { Authorization: `Bearer ${token}` } : {},
//         }
//       );
//       alert("Added to favorites!");
//     } catch (err) {
//       alert(err.response?.data?.message || "Error adding to favorites");
//       console.error(err);
//     }
//   };

//   if (error) return <div className="text-center text-danger">{error}</div>;
//   if (!movie) return <div className="text-center">Loading...</div>;

//   return (
//     <div className="container mt-4">
//       <div className="card bg-dark text-white">
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img
//               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//               className="img-fluid rounded-start"
//               alt={movie.title}
//             />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h2 className="card-title">{movie.title}</h2>
//               <p className="card-text">{movie.overview}</p>
//               <p className="card-text">Rating: {movie.vote_average}/10</p>
//               <p className="card-text">Release Date: {movie.release_date}</p>
//               {user && (
//                 <button onClick={addToFavorites} className="btn btn-primary mt-3">
//                   Add to Favorites
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MovieDetails;





// // frontend/src/App.jsx
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { AuthProvider, AuthContext } from "./context/AuthContext";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Navbar from "./components/Navbar";
// import Favorites from "./pages/Favorites";
// import Home from "./pages/Home";
// import MovieDetails from "./pages/MovieDetails";
// import { useContext } from "react";

// function ProtectedRoute({ children }) {
//   const { user, loading } = useContext(AuthContext);
//   if (loading) return <p>Loading...</p>;
//   return user ? children : <Navigate to="/login" />;
// }

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/movies/:id" element={<MovieDetails />} />
//           <Route
//             path="/favorites"
//             element={
//               <ProtectedRoute>
//                 <Favorites />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;




// // frontend/src/components/MovieDetails.jsx
// import { useState, useEffect, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";

// function MovieDetails() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [error, setError] = useState("");
//   const { user, token } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         console.log(`Fetching movie with ID: ${id}`); // Debug log
//         const res = await axios.get(`/api/movies/${id}`, {
//           withCredentials: true, // Include for consistency, though public endpoint
//         });
//         console.log("API response:", res.data); // Debug log
//         setMovie(res.data.data); // Expecting { message, data } from backend
//         setError("");
//       } catch (err) {
//         const errorMsg = err.response?.data?.message || "Error fetching movie details";
//         console.error("Fetch error:", err); // Debug log
//         setError(errorMsg);
//       }
//     };
//     fetchMovie();
//   }, [id]);

//   const addToFavorites = async () => {
//     if (!user) {
//       navigate("/login");
//       return;
//     }
//     try {
//       await axios.post(
//         "/api/movies/favorite",
//         { movieId: Number(id) },
//         {
//           withCredentials: true,
//           headers: token ? { Authorization: `Bearer ${token}` } : {},
//         }
//       );
//       alert("Added to favorites!");
//     } catch (err) {
//       alert(err.response?.data?.message || "Error adding to favorites");
//       console.error("Favorites error:", err);
//     }
//   };

//   if (error) return <div className="text-center text-danger">{error}</div>;
//   if (!movie) return <div className="text-center">Loading...</div>;

//   return (
//     <div className="container mt-4">
//       <div className="card bg-dark text-white">
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img
//               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//               className="img-fluid rounded-start"
//               alt={movie.title || "Movie poster"}
//             />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h2 className="card-title">{movie.title}</h2>
//               <p className="card-text">{movie.overview}</p>
//               <p className="card-text">Rating: {movie.vote_average}/10</p>
//               <p className="card-text">Release Date: {movie.release_date}</p>
//               {user && (
//                 <button onClick={addToFavorites} className="btn btn-primary mt-3">
//                   Add to Favorites
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MovieDetails;




// import { useState, useEffect, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";

// function MovieDetails() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [error, setError] = useState("");
//   const { user, token } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         console.log(`Fetching movie with ID: ${id}`); // Debug log
//         const res = await axios.get(`/api/movies/${id}`, {
//           withCredentials: true, // For consistency, though public endpoint
//         });
//         console.log("API response:", res.data); // Debug log
//         if (!res.data.data) {
//           throw new Error("No movie data returned");
//         }
//         setMovie(res.data.data); // Expecting { message, data }
//         setError("");
//       } catch (err) {
//         const errorMsg = err.response?.data?.message || `Error fetching movie details for ID ${id}`;
//         console.error("Fetch error:", err); // Debug log
//         setError(errorMsg);
//       }
//     };
//     fetchMovie();
//   }, [id]);

//   const addToFavorites = async () => {
//     if (!user) {
//       navigate("/login");
//       return;
//     }
//     try {
//       await axios.post(
//         "/api/movies/favorite",
//         { movieId: Number(id) },
//         {
//           withCredentials: true,
//           headers: token ? { Authorization: `Bearer ${token}` } : {},
//         }
//       );
//       alert("Added to favorites!");
//     } catch (err) {
//       alert(err.response?.data?.message || "Error adding to favorites");
//       console.error("Favorites error:", err);
//     }
//   };

//   if (error) return <div className="text-center text-danger mt-4">{error}</div>;
//   if (!movie) return <div className="text-center mt-4">Loading movie details...</div>;

//   return (
//     <div className="container mt-4">
//       <div className="card bg-dark text-white">
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img
//               src={
//                 movie.poster_path
//                   ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//                   : "https://via.placeholder.com/500x750?text=No+Poster"
//               }
//               className="img-fluid rounded-start"
//               alt={movie.title || "Movie poster"}
//             />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h2 className="card-title">{movie.title || "Unknown Title"}</h2>
//               <p className="card-text">{movie.overview || "No description available."}</p>
//               <p className="card-text">Rating: {movie.vote_average || "N/A"}/10</p>
//               <p className="card-text">Release Date: {movie.release_date || "Unknown"}</p>
//               {user && (
//                 <button onClick={addToFavorites} className="btn btn-primary mt-3">
//                   Add to Favorites
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MovieDetails;



// // recent functional one
// import { useState, useEffect, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";

// function MovieDetails() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [error, setError] = useState("");
//   const { user, token } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         console.log(`Fetching movie with ID: ${id}`); // Debug log
//         const res = await axios.get(`/movies/${id}`, {
//           withCredentials: true, // For consistency, though public endpoint
//         });
//         console.log("API response:", res.data); // Debug log
//         if (!res.data.data) {
//           throw new Error("No movie data returned");
//         }
//         setMovie(res.data.data); // Expecting { message, data }
//         setError("");
//       } catch (err) {
//         const errorMsg = err.response?.data?.message || `Error fetching movie details for ID ${id}`;
//         console.error("Fetch error:", err); // Debug log
//         setError(errorMsg);
//       }
//     };
//     fetchMovie();
//   }, [id]);

//   const addToFavorites = async () => {
//     if (!user) {
//       navigate("/login");
//       return;
//     }
//     try {
//       await axios.post(
//         "movies/favorite",
//         { movieId: Number(id) },
//         {
//           withCredentials: true,
//           headers: token ? { Authorization: `Bearer ${token}` } : {},
//         }
//       );
//       alert("Added to favorites!");
//     } catch (err) {
//       alert(err.response?.data?.message || "Error adding to favorites");
//       console.error("Favorites error:", err);
//     }
//   };

//   if (error) return <div className="text-center text-danger mt-4">{error}</div>;
//   if (!movie) return <div className="text-center mt-4">Loading movie details...</div>;

//   return (
//     <div className="container mt-4">
//       <div className="card bg-dark text-white">
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img
//               src={
//                 movie.poster_path
//                   ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//                   : "https://via.placeholder.com/500x750?text=No+Poster"
//               }
//               className="img-fluid rounded-start"
//               alt={movie.title || "Movie poster"}
//             />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h2 className="card-title">{movie.title || "Unknown Title"}</h2>
//               <p className="card-text">{movie.overview || "No description available."}</p>
//               <p className="card-text">Rating: {movie.vote_average || "N/A"}/10</p>
//               <p className="card-text">Release Date: {movie.release_date || "Unknown"}</p>
//               {user && (
//                 <button onClick={addToFavorites} className="btn btn-primary mt-3">
//                   Add to Favorites
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MovieDetails;