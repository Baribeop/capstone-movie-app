import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FavoriteButton({ movieId }) {
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToFavorites = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      await axios.post(`${VITE_BASE_URL}/movies/favorites`, { movieId }, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      alert("Added to favorites!");
    } catch (err) {
      alert(err.response?.data?.message || "Error adding to favorites");
    }
  };

  return (
    <button className="btn btn-primary mt-3" onClick={handleAddToFavorites}>
      Add to Favorites
    </button>
  );
}

export default FavoriteButton;