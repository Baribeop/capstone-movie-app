// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import MovieCard from '../components/MovieCard';

// function Home() {
//   const [movies, setMovies] = useState([]);
//   const { state } = useLocation();

//   useEffect(() => {
//     if (state?.searchResults) {
//       setMovies(state.searchResults);
//     } else {
//       axios.get('/api/movies')
//         .then(res => setMovies(res.data.results))
//         .catch(err => console.error(err));
//     }
//   }, [state]);

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">{state?.searchResults ? 'Search Results' : 'Popular Movies'}</h2>
//       <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
//         {movies.map(movie => (
//           <div key={movie.id} className="col">
//             <MovieCard movie={movie} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;





// frontend/src/components/Home.jsx
// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import MovieCard from '../components/MovieCard';

// function Home() {
//   const location = useLocation();
//   const [searchResults, setSearchResults] = useState([]);
//   const [error, setError] = useState("");
//   const [isSearch, setIsSearch] = useState(false);
//   const [pageNum, setPageNum] = useState(0)

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         // Check if search results are passed via navigation
//         if (location.state?.searchResults) {
//           console.log("Using search results from navigation:", location.state.searchResults); // Debug log
//           setSearchResults(location.state.searchResults);
//           setIsSearch(true);
//           setError("");
//         } else {
//           // Fetch popular movies
//           console.log("Fetching popular movies"); // Debug log
//           const res = await axios.get("/api/movies/discover", {
//             // withCredentials: true, // For consistency
//           });
//           console.log("Popular movies response:", res.data); // Debug log
//           setSearchResults(res.data.results || []);
//           setIsSearch(false);
//           setError("");
//           setPageNum(res.page)
//         }
//       } catch (err) {
//         const errorMsg = err.response?.data?.message || "Error fetching movies";
//         console.error("Fetch error:", err); // Debug log
//         setError(errorMsg);
//       }
//     };
//     fetchMovies();
//   }, [location.state]);

//   if (error) return <div className="text-center text-danger">{error}</div>;

  
//   const loadMoreItems = ()=>{
//      useEffect( async () => {
//        await axios.get(`/api/movies/discover?page=${pageNum + 1}`)
//           .then((res) => setMovies(res.data.results))
//           .catch(() => setError("Unable to fetch movies"));
//       }, []);

//   }
//   return (
//     <div className="container mt-4">
//       {/* <h2>MovieApp</h2> */}
//       {searchResults.length === 0 ? (
//         <p>loading ....</p>
//       ) : (
//         <div>
//           <h3>{isSearch ? "Search Results" : "Popular Movies"}</h3>
//           <div className="row">
//             {searchResults.map((movie) => (
//               <div key={movie.id} className="col-md-4 mb-3">
//                 <MovieCard movie={movie} />
//               </div>
//             ))}
//           </div>
//           <div style={{ display: "flex", justifyContent: "center" }}>
//           <button onClick={loadMoreItems}>Load More</button>
//           </div>
          
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;



import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MovieCard from '../components/MovieCard';

function Home() {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [pageNum, setPageNum] = useState(1); // Start from page 1

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (location.state?.searchResults) {
          console.log("Using search results from navigation:", location.state.searchResults);
          setSearchResults(location.state.searchResults);
          setIsSearch(true);
          setError("");
        } else {
          console.log("Fetching popular movies");
          const res = await axios.get(`${VITE_BASE_URL}/api/movies/discover?page=1`);
          console.log("Popular movies response:", res.data);
          setSearchResults(res.data.results || []);
          setIsSearch(false);
          setError("");
          setPageNum(1);
        }
      } catch (err) {
        const errorMsg = err.response?.data?.message || "Error fetching movies";
        console.error("Fetch error:", err);
        setError(errorMsg);
      }
    };
    fetchMovies();
  }, [location.state]);

  const loadMoreItems = async () => {
    try {
      const nextPage = pageNum + 1;
      const res = await axios.get(`${VITE_BASE_URL}/api/movies/discover?page=${nextPage}`);
      console.log("Load more response:", res.data);
      setSearchResults(prevResults => [...prevResults, ...res.data.results]);
      setPageNum(nextPage);
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Unable to fetch more movies";
      console.error("Load more error:", err);
      setError(errorMsg);
    }
  };

  if (error) return <div className="text-center text-danger">{error}</div>;

  return (
    <div className="container mt-4">
      {searchResults.length === 0 ? (
        <p>loading ....</p>
      ) : (
        <div>
          <h3>{isSearch ? "Search Results" : "Popular Movies"}</h3>
          <div className="row">
            {searchResults.map((movie) => (
              <div key={movie.id} className="col-md-4 mb-3">
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
          {!isSearch && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button onClick={loadMoreItems}>Load More</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
