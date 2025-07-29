const express = require('express')

const isAuthenticated = require('../Middleware')
const handleCreateWatchList = require('../Controllers/movieHandler/CreateWatchList')
const handleAddFavouriteMovies = require('../Controllers/movieHandler/addFavouriteMovies')
const handleAddToWatchList = require('../Controllers/movieHandler/addToWatchList')
const handleGetMovies = require('../Controllers/movieHandler/getMovies')
const handleGetMovieById = require('../Controllers/movieHandler/getMovieById')
const handlediscoverMovies = require('../Controllers/movieHandler/discoverMovies')
const handleSearchMovies = require('../Controllers/movieHandler/searchMovies')
const handleGetMovieByGenre = require('../Controllers/movieHandler/getMovieByGenre')
const getHandleMovieCategories = require('../Controllers/movieHandler/getMovieCategoryList')

// Create a new router instance
const router = express.Router()

router.post("/movies/watchlist/create", isAuthenticated, handleCreateWatchList)

router.post("/movies/favorites/:id", isAuthenticated, handleAddFavouriteMovies)

router.post("/movies/watchlist/movie", isAuthenticated, handleAddToWatchList)

// router.get('/movies',  handleGetMovies)
router.get("/movies/categories", getHandleMovieCategories)

// router.get("/movies/genre", handleGetMovieByGenre)

router.get("/movies/discover", handlediscoverMovies)

router.get("/movies/search", handleSearchMovies)

router.get("/movies/genre", handleGetMovieByGenre)

router.get("/movies/:id", handleGetMovieById)



module.exports = router
