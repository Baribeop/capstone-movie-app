
// frontend/src/components/MovieCard.jsx
import { Link } from "react-router-dom";

function MovieCard({ movie}) {
  console.log("MovieCard movie data:", movie); // Debug log
  return (
    <div className="card bg-dark text-white h-100">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Poster"
        }
        className="card-img-top"
        alt={movie.title || "Movie poster"}
        style={{ height: "400px", objectFit: "cover" }}
      />
      <div className="card-body">
       <Link to={`/movies/${movie.id}`} className="btn btn-link text-primary"><h5 className="card-title">{movie.title || "Unknown Title"}</h5></Link> 
        {/* <Link to={`/movies/${movie.id}`} className="btn btn-link text-primary">
          Details
        </Link> */}
      </div>
      
    </div>
  );
}

export default MovieCard;




// import { Link } from 'react-router-dom';

// function MovieCard({ movie }) {
//   return (
//     <div className="card bg-dark text-white h-100">
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//         className="card-img-top"
//         alt={movie.title}
//         style={{ height: '300px', objectFit: 'cover' }}
//       />
//       <div className="card-body">
//         <h5 className="card-title">{movie.title}</h5>
//         <Link to={`/movies/${movie.id}`} className="btn btn-link text-primary">Details</Link>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;


// // frontend/src/components/MovieCard.jsx
// import { Link } from "react-router-dom";

// function MovieCard({ movie }) {
//   return (
//     <div className="card bg-dark text-white h-100">
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//         className="card-img-top"
//         alt={movie.title || "Movie poster"}
//         style={{ height: "300px", objectFit: "cover" }}
//       />
//       <div className="card-body">
//         <h5 className="card-title">{movie.title}</h5>
//         <Link to={`/movies/${movie.id}`} className="btn btn-link text-primary">
//           Details
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;




