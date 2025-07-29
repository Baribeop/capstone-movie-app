// Import dependencies
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routes = require('./Routes')
const cors = require('cors')
const app = express()

app.use(cors({
//   origin: 'http://localhost:3000', // Allow requests from the frontend

    origin :'https://vercel.com/baribeops-projects/capstone-movie-app',

  credentials: true, // Allow cookies (e.g., connect.sid for sessions)
}));


app.use(cors({
  origin: 'http://localhost:5173', // Vite default port
  credentials: true
}));


const session = require('express-session')
const MongoStore = require("connect-mongo")
// configure dotenv 
dotenv.config()

// use body parser 
app.use(express.json())




// use variables and secrets from .env file
const PORT = process.env.PORT || 5000

const MONGODB_URL = process.env.MONGODB_URL


    // session and cokie
app.use(session({
    secret : process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: MONGODB_URL,
        autoRemove: 'native',
        collectionName: 'session',
        ttl: 60 * 60
    }),
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 
    }
}))

// connect app to mongodb using mongoose
mongoose.connect(MONGODB_URL)

// Run app to listen on port and send success message
.then( ()=>{
    console.log('Mongodb connected succesfully')
    app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})

})

.catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
})
    
// Root route for testing
app.get('/', (req, res)=>{
    res.send('Welcome to the movie app')
})


// All routes 
app.use("/api", routes)
    

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ message: 'Internal server error' });
});


