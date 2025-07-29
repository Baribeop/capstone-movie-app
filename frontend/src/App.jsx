// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import MovieDetails from './pages/MovieDetails';
// // import Favorites from './pages/Favorites';
// import Login from './components/Login';
// import Signup from './components/SignUp';
// import Favorites from './pages/Favourites';
// // 

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/movie/:id" element={<MovieDetails />} />
//           <Route path="/favorites" element={<Favorites />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;


// frontend/src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Navbar from "./components/Navbar";
import Favorites from "./pages/Favourites";
import Home from "./pages/Home";
import { useContext } from "react";
import MovieDetails from "./pages/MovieDetails";
import AllMovies from "./pages/allMovies";
import LandingPage from "./pages/LandingPage";

function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <p>Loading...</p>;
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<AllMovies />} />
          <Route path="/movies/categories" element={<LandingPage />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;


