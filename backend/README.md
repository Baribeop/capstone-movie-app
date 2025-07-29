# MOVIE RECOMMENDATION APP

## Overview
The app is a movie recommendataion app that uses NodJS, Express, and MongoDB. A user can view movies , sign up and login to access the dashboard - movies can be saved as favourites, liked and reviewed by other users. It also provide social interaction of users whereby a user follow and be followed and share movie with other users. In addition, the app can recommend movies to a user based on movie preference.

## Set up Express server and database connection
- Install NoeJS (v 18+)
- clone the repo ``` https://github.com/Baribeop/capstone-movie-app.git ```
- cd backend
- npm init --y
- npm express
- install other dependencies using :  ```npm  install  jsonwebtoken  dotenv  bcrypt  cors mongoose  express-session  connect-mongo  nodemon```
- connect the Express server and MongoDB using mongoose

## Update the package.json to use nodemon for server automatic restart

 ````bash 
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  ````


## Run the server

npm run dev

## User Management
A user signs up with required credentials and can login after authorized in order to gain access to more resources - personal dashboard

## Movie Management

The app feature different categories of movies using dedicated endpoints. These include 
- popular movies
- top-rated movies
- trending movies
- nom-playing movies 
- upcoming movies


## 👤 User API Endpoints

| Method | Endpoint            | Middleware        | Description                     |
|--------|---------------------|-------------------|---------------------------------|
| POST   | `/signup`           | None              | Register a new user             |
| POST   | `/login`            | None              | Log in a user                   |
| GET    | `/users/:id`        | `isAuthenticated` | Get user profile by ID          |
| GET    | `/users`            | `isAuthenticated` | Get current user profile        |
| PATCH  | `/users`            | `isAuthenticated` | Update current user profile     |
| DELETE | `/users`            | `isAuthenticated` | Delete current user profile     |
| GET    | `/check-session`    | None              | Check if session is active      |
| POST   | `/logout`           | `isAuthenticated` | Log out current user            |

## 🎬 Movie API Endpoints

| Method | Endpoint                         | Middleware       | Description                    |
|--------|----------------------------------|------------------|--------------------------------|
| POST   | `/movies/watchlist/create`       | `isAuthenticated`| Create a new watchlist         |
| POST   | `/movies/favorites/:id`          | `isAuthenticated`| Add movie to favorites         |
| POST   | `/movies/watchlist/movie`        | `isAuthenticated`| Add a movie to a watchlist     |
| GET    | `/movies/categories`             | None             | Get list of movie categories   |
| GET    | `/movies/discover`               | None             | Discover trending/popular movies |
| GET    | `/movies/search`                 | None             | Search for movies              |
| GET    | `/movies/genre`                  | None             | Get movies by genre            |
| GET    | `/movies/:id`                    | None             | Get movie details by ID        |



## Sample Request and Response

