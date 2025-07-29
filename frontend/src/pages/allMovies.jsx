import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect( async() => {
   await  axios.get("/movies/discover")
      .then((res) => setMovies(res.data))
      .catch(() => setError("Unable to fetch movies"));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onMoreInfo={() => navigate(`/movies/${movie.id}`)} /> 
      ))}
    </div>
  );
}

export default AllMovies;




// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import MovieCard from "../components/MovieCard";

// function AllMovies() {
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("/movies")
//       .then((res) => setMovies(res.data))
//       .catch(() => setError("Unable to fetch movies"));
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center text-light mb-4">🎬 All Movies</h2>
//       {error && <div className="alert alert-danger text-center">{error}</div>}
//       <div className="row">
//         {movies.map((movie) => (
//           <MovieCard
//             key={movie._id}
//             movie={movie}
//             onMoreInfo={() => navigate(`/movies/${movie._id}`)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AllMovies;




