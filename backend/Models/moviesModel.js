const mongoose = require('mongoose');
const { Schema } = mongoose;

// Movie Schema
// This schema defines the structure of the Movie document in MongoDB
const movieSchema = new mongoose.Schema({
    tmdbId: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    posterPath: { type: String, required: true },
    overview: { type: String, required: true , trim: true },
    videokey: { type: String, required: false , trim: true},
    voteAverage: { type: Number, required: false },
    popularity: { type: Number, required: false },
    backdropPath: { type: String, required: false, trim: true },
    genre: { type: [String], required: true }, 
   
}, { timestamps: true});

const Movie = mongoose.model('Movie', movieSchema);

// Watchlist Schema
const watchlistSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true, trim: true },
    movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
    shareWith: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });



// Ensure unique combination of userId and movies to prevent duplicates
watchlistSchema.index({ userId: 1, movies: 1 }, { unique: true });
// watchlistSchema.index({ userId: 1, movies: 1 }, { unique: true, sparse: true });


const Watchlist = mongoose.model('Watchlist', watchlistSchema); 


module.exports = { Movie, Watchlist };
