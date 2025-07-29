
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../LandingPage.css';

const LandingPage = () => {
  const [movies, setMovies] = useState({
    popular: [],
    nowPlaying: [],
    upcoming: [],
    topRated: []
  });

  useEffect(() => {
    axios.get('/api/movies/categories')
      // .then(res => res.json())
      .then(res => setMovies(res.data))
      .catch(err => console.error('Failed to fetch movies:', err));
  }, []);

  return (
    <div className="landing-container">
      <h1>Explore the different categories of movie</h1>
      <CategorySection title="🔥 Popular" movies={movies.popular} />
      <CategorySection title="📽️ Now Playing" movies={movies.nowPlaying} />
      <CategorySection title="🚀 Upcoming" movies={movies.upcoming} />
      <CategorySection title="🌟 Top Rated" movies={movies.topRated} />
    </div>
  );
};

const CategorySection = ({ title, movies }) => (
  <div className="category-section">
    <h2>{title}</h2>
    <div className="movie-slider">
      {movies.slice(0, 10).map(movie => (
        <div key={movie.id} className="movie-card">
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
          <Link to={`/movies/${movie.id}`}>
            <p>{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  </div>
);


export default LandingPage;
