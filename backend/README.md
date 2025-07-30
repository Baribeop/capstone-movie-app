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


## Live link 
- Frontend : ```https://movie-app-alpha-swart.vercel.app/```

- Backend  :  ```https://capstone-movie-app.onrender.com```

- Postman documentation : `



## Sample Request and Response

- POST `/signup `

Request 

````bash
{
    "username": "brown dan",
    "email": "browndan@gmail.com",
    "password": "browndan"
}

````
Response 
````bash 
{
    "message": "User registered successfully",
    "data": {
        "_id": "688a7ec0861fa45752f510ac",
        "username": "brown dan",
        "email": "browndan@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OGE3ZWMwODYxZmE0NTc1MmY1MTBhYyIsImlhdCI6MTc1MzkwNjg4MCwiZXhwIjoxNzUzOTEwNDgwfQ.pcXe09gf9F8ofadgmtcCEjfS1ZOBABO5nqVHB4je3iQ"
    }
}
````
![alt text](image.png)

- POST `/login `

Request 
````bash
{

    "email": "jameswhite@gmail.com",
    "password": "jameswhite"
}
````

Response 

````bash
{
    "message": "Login successful",
    "data": {
        "_id": "6882a1e06c53ea60894b67fc",
        "username": "james white",
        "email": "jameswhite@gmail.com",
        "profilePicture": "",
        "followers": 0,
        "following": 0,
        "favourites": 0,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ODJhMWUwNmM1M2VhNjA4OTRiNjdmYyIsImlhdCI6MTc1MzkwNzE0MCwiZXhwIjoxNzUzOTEwNzQwfQ.-_dxclej0P3Xu0z59uws78jk-fWnw3D6qLVAIJECTvQ"
    }
}
````
![alt text](image-1.png)



- GET `movies/categories `
```bash
{
    "popular": [
        {
            "adult": false,
            "backdrop_path": "/8J6UlIFcU7eZfq9iCLbgc8Auklg.jpg",
            "genre_ids": [
                14,
                10751,
                28
            ],
            "id": 1087192,
            "original_language": "en",
            "original_title": "How to Train Your Dragon",
            "overview": "On the rugged isle of Berk, where Vikings and dragons have been bitter enemies for generations, Hiccup stands apart, defying centuries of tradition when he befriends Toothless, a feared Night Fury dragon. Their unlikely bond reveals the true nature of dragons, challenging the very foundations of Viking society.",
            "popularity": 682.6797,
            "poster_path": "/53dsJ3oEnBhTBVMigWJ9tkA5bzJ.jpg",
            "release_date": "2025-06-06",
            "title": "How to Train Your Dragon",
            "video": false,
            "vote_average": 8.076,
            "vote_count": 1345
        },
        {
            "adult": false,
            "backdrop_path": "/1RgPyOhN4DRs225BGTlHJqCudII.jpg",
            "genre_ids": [
                16,
                28,
                14,
                53
            ],
            "id": 1311031,
            "original_language": "ja",
            "original_title": "劇場版「鬼滅の刃」無限城編 第一章 猗窩座再来",
            "overview": "As the Demon Slayer Corps members and Hashira engaged in a group strength training program, the Hashira Training, in preparation for the forthcoming battle against the demons, Muzan Kibutsuji appears at the Ubuyashiki Mansion. With the head of the Demon Corps in danger, Tanjiro and the Hashira rush to the headquarters but are plunged into a deep descent to a mysterious space by the hands of Muzan Kibutsuji.  The destination of where Tanjiro and Demon Slayer Corps have fallen is the demons' stronghold – the Infinity Castle. And so, the battleground is set as the final battle between the Demon Slayer Corps and the demons ignites.",
            "popularity": 618.9138,
            "poster_path": "/aFRDH3P7TX61FVGpaLhKr6QiOC1.jpg",
            "release_date": "2025-07-18",
            "title": "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
            "video": false,
            "vote_average": 6.872,
            "vote_count": 39
        },
        {
            "adult": false,
            "backdrop_path": "/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
            "genre_ids": [
                10751,
                878,
                35,
                12
            ],
            "id": 552524,
            "original_language": "en",
            "original_title": "Lilo & Stitch",
            "overview": "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
            "popularity": 491.2977,
            "poster_path": "/tUae3mefrDVTgm5mRzqWnZK6fOP.jpg",
            "release_date": "2025-05-17",
            "title": "Lilo & Stitch",
            "video": false,
            "vote_average": 7.344,
            "vote_count": 1170
        },
        {
            "adult": false,
            "backdrop_path": "/cEQMqB3ahd4mfeUN6VGC0ouVnZZ.jpg",
            "genre_ids": [
                28,
                878,
                53
            ],
            "id": 1071585,
            "original_language": "en",
            "original_title": "M3GAN 2.0",
            "overview": "After the underlying tech for M3GAN is stolen and misused by a powerful defense contractor to create a military-grade weapon known as Amelia, M3GAN's creator Gemma realizes that the only option is to resurrect M3GAN and give her a few upgrades, making her faster, stronger, and more lethal.",
            "popularity": 429.1812,
            "poster_path": "/oekamLQrwlJjRNmfaBE4llIvkir.jpg",
            "release_date": "2025-06-25",
            "title": "M3GAN 2.0",
            "video": false,
            "vote_average": 7.6,
            "vote_count": 549
        },
        {
            "adult": false,
            "backdrop_path": "/x5dVPttNDZaVRTvbk7pYrtGZoZN.jpg",
            "genre_ids": [
                35
            ],
            "id": 1263256,
            "original_language": "en",
            "original_title": "Happy Gilmore 2",
            "overview": "Happy Gilmore isn't done with golf — not by a long shot. Since his retirement after his first Tour Championship win, Gilmore returns to finance his daughter's ballet classes.",
            "popularity": 422.7913,
            "poster_path": "/ynT06XivgBDkg7AtbDbX1dJeBGY.jpg",
            "release_date": "2025-07-25",
            "title": "Happy Gilmore 2",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 311
        },
        {
            "adult": false,
            "backdrop_path": "/s94NjfKkcSczZ1FembwmQZwsuwY.jpg",
            "genre_ids": [
                878,
                12
            ],
            "id": 617126,
            "original_language": "en",
            "original_title": "The Fantastic 4: First Steps",
            "overview": "Against the vibrant backdrop of a 1960s-inspired, retro-futuristic world, Marvel's First Family is forced to balance their roles as heroes with the strength of their family bond, while defending Earth from a ravenous space god called Galactus and his enigmatic Herald, Silver Surfer.",
            "popularity": 405.4341,
            "poster_path": "/x26MtUlwtWD26d0G0FXcppxCJio.jpg",
            "release_date": "2025-07-23",
            "title": "The Fantastic 4: First Steps",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 598
        },
        {
            "adult": false,
            "backdrop_path": "/h6gChZHFpmbwqwV3uQsoakp77p1.jpg",
            "genre_ids": [
                28,
                35
            ],
            "id": 1124619,
            "original_language": "en",
            "original_title": "Bride Hard",
            "overview": "Sam is a secret agent whose toughest mission to date is pleasing her bride-to-be best friend at a lavish destination wedding. When a team of mercenaries crashes the party and takes the guests hostage, Sam is thrown into a fight unlike any before — one where she can’t risk blowing her cover or ruining the big day. As she takes on the bad guys in a high-stakes battle disguised as a fairy-tale affair, she realizes the real threat might be closer than she thinks.",
            "popularity": 341.397,
            "poster_path": "/3mExdWLSxAiUCb4NMcYmxSkO7n4.jpg",
            "release_date": "2025-06-19",
            "title": "Bride Hard",
            "video": false,
            "vote_average": 6.119,
            "vote_count": 42
        },
        {
            "adult": false,
            "backdrop_path": "/8or4S9BPhkeYK0vlKsPFee4JVWI.jpg",
            "genre_ids": [
                28,
                18
            ],
            "id": 1315986,
            "original_language": "en",
            "original_title": "Man with No Past",
            "overview": "Waking up in an unfamiliar city, a man with no memory must confront the mysteries of his own identity. However, his desperate search to uncover the past pits him against a powerful enemy, leading to a showdown that ultimately reveals the truth.",
            "popularity": 270.188,
            "poster_path": "/eWHvROuznSzcxBAAkzX1X0Rmzoe.jpg",
            "release_date": "2025-01-13",
            "title": "Man with No Past",
            "video": false,
            "vote_average": 6.513,
            "vote_count": 40
        },
        {
            "adult": false,
            "backdrop_path": "/eU7IfdWq8KQy0oNd4kKXS0QUR08.jpg",
            "genre_ids": [
                878,
                12,
                28
            ],
            "id": 1061474,
            "original_language": "en",
            "original_title": "Superman",
            "overview": "Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent.",
            "popularity": 277.5571,
            "poster_path": "/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg",
            "release_date": "2025-07-09",
            "title": "Superman",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 1284
        },
        {
            "adult": false,
            "backdrop_path": "/962KXsr09uK8wrmUg9TjzmE7c4e.jpg",
            "genre_ids": [
                28,
                53,
                18
            ],
            "id": 1119878,
            "original_language": "en",
            "original_title": "Ice Road: Vengeance",
            "overview": "Big rig ice road driver Mike McCann travels to Nepal to scatter his late brother’s ashes on Mt. Everest. While on a packed tour bus traversing the deadly 12,000 ft. terrain of the infamous Road to the Sky, McCann and his mountain guide encounter a group of mercenaries and must fight to save themselves, the busload of innocent travelers, and the local villagers’ homeland.",
            "popularity": 271.3483,
            "poster_path": "/cQN9rZj06rXMVkk76UF1DfBAico.jpg",
            "release_date": "2025-06-27",
            "title": "Ice Road: Vengeance",
            "video": false,
            "vote_average": 6.83,
            "vote_count": 150
        },
        {
            "adult": false,
            "backdrop_path": "/7Q2CmqIVJuDAESPPp76rWIiA0AD.jpg",
            "genre_ids": [
                28,
                12,
                18
            ],
            "id": 1011477,
            "original_language": "en",
            "original_title": "Karate Kid: Legends",
            "overview": "After a family tragedy, kung fu prodigy Li Fong is uprooted from his home in Beijing and forced to move to New York City with his mother. When a new friend needs his help, Li enters a karate competition – but his skills alone aren't enough. Li's kung fu teacher Mr. Han enlists original Karate Kid Daniel LaRusso for help, and Li learns a new way to fight, merging their two styles into one for the ultimate martial arts showdown.",
            "popularity": 267.481,
            "poster_path": "/AEgggzRr1vZCLY86MAp93li43z.jpg",
            "release_date": "2025-05-08",
            "title": "Karate Kid: Legends",
            "video": false,
            "vote_average": 7.176,
            "vote_count": 571
        },
        {
            "adult": false,
            "backdrop_path": "/fQOV47FHTJdaSuSUNlzP3zXUZWE.jpg",
            "genre_ids": [
                878,
                12,
                28
            ],
            "id": 1234821,
            "original_language": "en",
            "original_title": "Jurassic World Rebirth",
            "overview": "Five years after the events of Jurassic World Dominion, covert operations expert Zora Bennett is contracted to lead a skilled team on a top-secret mission to secure genetic material from the world's three most massive dinosaurs. When Zora's operation intersects with a civilian family whose boating expedition was capsized, they all find themselves stranded on an island where they come face-to-face with a sinister, shocking discovery that's been hidden from the world for decades.",
            "popularity": 224.2037,
            "poster_path": "/1RICxzeoNCAO5NpcRMIgg1XT6fm.jpg",
            "release_date": "2025-07-01",
            "title": "Jurassic World Rebirth",
            "video": false,
            "vote_average": 6.33,
            "vote_count": 846
        },
        {
            "adult": false,
            "backdrop_path": "/oPgXVSdGR9dGwbmvIToOCMmsdc2.jpg",
            "genre_ids": [
                28,
                53,
                80
            ],
            "id": 541671,
            "original_language": "en",
            "original_title": "Ballerina",
            "overview": "Taking place during the events of John Wick: Chapter 3 – Parabellum, Eve Macarro begins her training in the assassin traditions of the Ruska Roma.",
            "popularity": 216.7246,
            "poster_path": "/2VUmvqsHb6cEtdfscEA6fqqVzLg.jpg",
            "release_date": "2025-06-04",
            "title": "Ballerina",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 1197
        },
        {
            "adult": false,
            "backdrop_path": "/xVcffNU61CclEGgtiWP7KLIE2dm.jpg",
            "genre_ids": [
                27,
                28,
                14,
                12
            ],
            "id": 1058537,
            "original_language": "en",
            "original_title": "Angels Fallen: Warriors of Peace",
            "overview": "When an Iraq War veteran receives a calling from a higher power, he embarks on a mission to stop a fallen angel from raising an army of the dead to take over the world.",
            "popularity": 207.1107,
            "poster_path": "/dKdKUSGQ9E0G73WPr9xIHrofpkT.jpg",
            "release_date": "2024-07-09",
            "title": "Angels Fallen: Warriors of Peace",
            "video": false,
            "vote_average": 5.75,
            "vote_count": 38
        },
        {
            "adult": false,
            "backdrop_path": "/l3ycQYwWmbz7p8otwbomFDXIEhn.jpg",
            "genre_ids": [
                16,
                14,
                35,
                10402,
                10751,
                28
            ],
            "id": 803796,
            "original_language": "en",
            "original_title": "KPop Demon Hunters",
            "overview": "When K-pop superstars Rumi, Mira and Zoey aren't selling out stadiums, they're using their secret powers to protect their fans from supernatural threats.",
            "popularity": 203.6331,
            "poster_path": "/22AouvwlhlXbe3nrFcjzL24bvWH.jpg",
            "release_date": "2025-06-20",
            "title": "KPop Demon Hunters",
            "video": false,
            "vote_average": 8.5,
            "vote_count": 849
        },
        {
            "adult": false,
            "backdrop_path": "/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
            "genre_ids": [
                28,
                878,
                12
            ],
            "id": 986056,
            "original_language": "en",
            "original_title": "Thunderbolts*",
            "overview": "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
            "popularity": 202.867,
            "poster_path": "/hqcexYHbiTBfDIdDWxrxPtVndBX.jpg",
            "release_date": "2025-04-30",
            "title": "Thunderbolts*",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 2060
        },
        {
            "adult": false,
            "backdrop_path": "/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg",
            "genre_ids": [
                27,
                9648
            ],
            "id": 574475,
            "original_language": "en",
            "original_title": "Final Destination Bloodlines",
            "overview": "Plagued by a violent recurring nightmare, college student Stefanie heads home to track down the one person who might be able to break the cycle and save her family from the grisly demise that inevitably awaits them all.",
            "popularity": 190.3476,
            "poster_path": "/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg",
            "release_date": "2025-05-14",
            "title": "Final Destination Bloodlines",
            "video": false,
            "vote_average": 7.169,
            "vote_count": 1776
        },
        {
            "adult": false,
            "backdrop_path": "/9l6bcHNFLR2fcCBSPzEeqxiQhwU.jpg",
            "genre_ids": [
                28,
                35,
                80,
                9648
            ],
            "id": 1374534,
            "original_language": "nl",
            "original_title": "Bad Boa's",
            "overview": "When an overeager community officer and a reckless ex-detective are forced to team up, plenty of chaos ensues on the streets of Rotterdam.",
            "popularity": 182.5215,
            "poster_path": "/7bcndiaTgu1Kj5a6qyCmsWYdtI.jpg",
            "release_date": "2025-07-10",
            "title": "Almost Cops",
            "video": false,
            "vote_average": 5.843,
            "vote_count": 108
        },
        {
            "adult": false,
            "backdrop_path": "/eNSUknQqzTXWE5EeT8ZnVccEPR0.jpg",
            "genre_ids": [
                27,
                53
            ],
            "id": 1285965,
            "original_language": "en",
            "original_title": "Dangerous Animals",
            "overview": "A savvy and free-spirited surfer is abducted by a shark-obsessed serial killer. Held captive on his boat, she must figure out how to escape before he carries out a ritualistic feeding to the sharks below.",
            "popularity": 181.5288,
            "poster_path": "/oQJ1PKLIE2gF5cr3xwjLCvv4jcU.jpg",
            "release_date": "2025-06-05",
            "title": "Dangerous Animals",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 106
        },
        {
            "adult": false,
            "backdrop_path": "/6WqqEjiycNvDLjbEClM1zCwIbDD.jpg",
            "genre_ids": [
                27,
                53,
                878
            ],
            "id": 1100988,
            "original_language": "en",
            "original_title": "28 Years Later",
            "overview": "Twenty-eight years since the rage virus escaped a biological weapons laboratory, now, still in a ruthlessly enforced quarantine, some have found ways to exist amidst the infected. One such group lives on a small island connected to the mainland by a single, heavily-defended causeway. When one member departs on a mission into the dark heart of the mainland, he discovers secrets, wonders, and horrors that have mutated not only the infected but other survivors as well.",
            "popularity": 162.5811,
            "poster_path": "/mIg1qCkVxnAlM2TK3RUF0tdEXlE.jpg",
            "release_date": "2025-06-18",
            "title": "28 Years Later",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 685
        }
    ],
    "nowPlaying": [
        {
            "adult": false,
            "backdrop_path": "/8J6UlIFcU7eZfq9iCLbgc8Auklg.jpg",
            "genre_ids": [
                14,
                10751,
                28
            ],
            "id": 1087192,
            "original_language": "en",
            "original_title": "How to Train Your Dragon",
            "overview": "On the rugged isle of Berk, where Vikings and dragons have been bitter enemies for generations, Hiccup stands apart, defying centuries of tradition when he befriends Toothless, a feared Night Fury dragon. Their unlikely bond reveals the true nature of dragons, challenging the very foundations of Viking society.",
            "popularity": 682.6797,
            "poster_path": "/53dsJ3oEnBhTBVMigWJ9tkA5bzJ.jpg",
            "release_date": "2025-06-06",
            "title": "How to Train Your Dragon",
            "video": false,
            "vote_average": 8.1,
            "vote_count": 1348
        },
        {
            "adult": false,
            "backdrop_path": "/1RgPyOhN4DRs225BGTlHJqCudII.jpg",
            "genre_ids": [
                16,
                28,
                14,
                53
            ],
            "id": 1311031,
            "original_language": "ja",
            "original_title": "劇場版「鬼滅の刃」無限城編 第一章 猗窩座再来",
            "overview": "As the Demon Slayer Corps members and Hashira engaged in a group strength training program, the Hashira Training, in preparation for the forthcoming battle against the demons, Muzan Kibutsuji appears at the Ubuyashiki Mansion. With the head of the Demon Corps in danger, Tanjiro and the Hashira rush to the headquarters but are plunged into a deep descent to a mysterious space by the hands of Muzan Kibutsuji.  The destination of where Tanjiro and Demon Slayer Corps have fallen is the demons' stronghold – the Infinity Castle. And so, the battleground is set as the final battle between the Demon Slayer Corps and the demons ignites.",
            "popularity": 618.9138,
            "poster_path": "/aFRDH3P7TX61FVGpaLhKr6QiOC1.jpg",
            "release_date": "2025-07-18",
            "title": "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
            "video": false,
            "vote_average": 6.897,
            "vote_count": 39
        },
        {
            "adult": false,
            "backdrop_path": "/cEQMqB3ahd4mfeUN6VGC0ouVnZZ.jpg",
            "genre_ids": [
                28,
                878,
                53
            ],
            "id": 1071585,
            "original_language": "en",
            "original_title": "M3GAN 2.0",
            "overview": "After the underlying tech for M3GAN is stolen and misused by a powerful defense contractor to create a military-grade weapon known as Amelia, M3GAN's creator Gemma realizes that the only option is to resurrect M3GAN and give her a few upgrades, making her faster, stronger, and more lethal.",
            "popularity": 429.1812,
            "poster_path": "/oekamLQrwlJjRNmfaBE4llIvkir.jpg",
            "release_date": "2025-06-25",
            "title": "M3GAN 2.0",
            "video": false,
            "vote_average": 7.6,
            "vote_count": 549
        },
        {
            "adult": false,
            "backdrop_path": "/x5dVPttNDZaVRTvbk7pYrtGZoZN.jpg",
            "genre_ids": [
                35
            ],
            "id": 1263256,
            "original_language": "en",
            "original_title": "Happy Gilmore 2",
            "overview": "Happy Gilmore isn't done with golf — not by a long shot. Since his retirement after his first Tour Championship win, Gilmore returns to finance his daughter's ballet classes.",
            "popularity": 422.7913,
            "poster_path": "/ynT06XivgBDkg7AtbDbX1dJeBGY.jpg",
            "release_date": "2025-07-25",
            "title": "Happy Gilmore 2",
            "video": false,
            "vote_average": 6.755,
            "vote_count": 314
        },
        {
            "adult": false,
            "backdrop_path": "/s94NjfKkcSczZ1FembwmQZwsuwY.jpg",
            "genre_ids": [
                878,
                12
            ],
            "id": 617126,
            "original_language": "en",
            "original_title": "The Fantastic 4: First Steps",
            "overview": "Against the vibrant backdrop of a 1960s-inspired, retro-futuristic world, Marvel's First Family is forced to balance their roles as heroes with the strength of their family bond, while defending Earth from a ravenous space god called Galactus and his enigmatic Herald, Silver Surfer.",
            "popularity": 405.4341,
            "poster_path": "/x26MtUlwtWD26d0G0FXcppxCJio.jpg",
            "release_date": "2025-07-23",
            "title": "The Fantastic 4: First Steps",
            "video": false,
            "vote_average": 7.347,
            "vote_count": 603
        },
        {
            "adult": false,
            "backdrop_path": "/h6gChZHFpmbwqwV3uQsoakp77p1.jpg",
            "genre_ids": [
                28,
                35
            ],
            "id": 1124619,
            "original_language": "en",
            "original_title": "Bride Hard",
            "overview": "Sam is a secret agent whose toughest mission to date is pleasing her bride-to-be best friend at a lavish destination wedding. When a team of mercenaries crashes the party and takes the guests hostage, Sam is thrown into a fight unlike any before — one where she can’t risk blowing her cover or ruining the big day. As she takes on the bad guys in a high-stakes battle disguised as a fairy-tale affair, she realizes the real threat might be closer than she thinks.",
            "popularity": 341.397,
            "poster_path": "/3mExdWLSxAiUCb4NMcYmxSkO7n4.jpg",
            "release_date": "2025-06-19",
            "title": "Bride Hard",
            "video": false,
            "vote_average": 6.119,
            "vote_count": 42
        },
        {
            "adult": false,
            "backdrop_path": "/eU7IfdWq8KQy0oNd4kKXS0QUR08.jpg",
            "genre_ids": [
                878,
                12,
                28
            ],
            "id": 1061474,
            "original_language": "en",
            "original_title": "Superman",
            "overview": "Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent.",
            "popularity": 277.5571,
            "poster_path": "/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg",
            "release_date": "2025-07-09",
            "title": "Superman",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 1288
        },
        {
            "adult": false,
            "backdrop_path": "/962KXsr09uK8wrmUg9TjzmE7c4e.jpg",
            "genre_ids": [
                28,
                53,
                18
            ],
            "id": 1119878,
            "original_language": "en",
            "original_title": "Ice Road: Vengeance",
            "overview": "Big rig ice road driver Mike McCann travels to Nepal to scatter his late brother’s ashes on Mt. Everest. While on a packed tour bus traversing the deadly 12,000 ft. terrain of the infamous Road to the Sky, McCann and his mountain guide encounter a group of mercenaries and must fight to save themselves, the busload of innocent travelers, and the local villagers’ homeland.",
            "popularity": 271.3483,
            "poster_path": "/cQN9rZj06rXMVkk76UF1DfBAico.jpg",
            "release_date": "2025-06-27",
            "title": "Ice Road: Vengeance",
            "video": false,
            "vote_average": 6.83,
            "vote_count": 150
        },
        {
            "adult": false,
            "backdrop_path": "/7Q2CmqIVJuDAESPPp76rWIiA0AD.jpg",
            "genre_ids": [
                28,
                12,
                18
            ],
            "id": 1011477,
            "original_language": "en",
            "original_title": "Karate Kid: Legends",
            "overview": "After a family tragedy, kung fu prodigy Li Fong is uprooted from his home in Beijing and forced to move to New York City with his mother. When a new friend needs his help, Li enters a karate competition – but his skills alone aren't enough. Li's kung fu teacher Mr. Han enlists original Karate Kid Daniel LaRusso for help, and Li learns a new way to fight, merging their two styles into one for the ultimate martial arts showdown.",
            "popularity": 267.481,
            "poster_path": "/AEgggzRr1vZCLY86MAp93li43z.jpg",
            "release_date": "2025-05-08",
            "title": "Karate Kid: Legends",
            "video": false,
            "vote_average": 7.176,
            "vote_count": 571
        },
        {
            "adult": false,
            "backdrop_path": "/fQOV47FHTJdaSuSUNlzP3zXUZWE.jpg",
            "genre_ids": [
                878,
                12,
                28
            ],
            "id": 1234821,
            "original_language": "en",
            "original_title": "Jurassic World Rebirth",
            "overview": "Five years after the events of Jurassic World Dominion, covert operations expert Zora Bennett is contracted to lead a skilled team on a top-secret mission to secure genetic material from the world's three most massive dinosaurs. When Zora's operation intersects with a civilian family whose boating expedition was capsized, they all find themselves stranded on an island where they come face-to-face with a sinister, shocking discovery that's been hidden from the world for decades.",
            "popularity": 224.2037,
            "poster_path": "/1RICxzeoNCAO5NpcRMIgg1XT6fm.jpg",
            "release_date": "2025-07-01",
            "title": "Jurassic World Rebirth",
            "video": false,
            "vote_average": 6.332,
            "vote_count": 848
        },
        {
            "adult": false,
            "backdrop_path": "/oPgXVSdGR9dGwbmvIToOCMmsdc2.jpg",
            "genre_ids": [
                28,
                53,
                80
            ],
            "id": 541671,
            "original_language": "en",
            "original_title": "Ballerina",
            "overview": "Taking place during the events of John Wick: Chapter 3 – Parabellum, Eve Macarro begins her training in the assassin traditions of the Ruska Roma.",
            "popularity": 216.7246,
            "poster_path": "/2VUmvqsHb6cEtdfscEA6fqqVzLg.jpg",
            "release_date": "2025-06-04",
            "title": "Ballerina",
            "video": false,
            "vote_average": 7.473,
            "vote_count": 1200
        },
        {
            "adult": false,
            "backdrop_path": "/9l6bcHNFLR2fcCBSPzEeqxiQhwU.jpg",
            "genre_ids": [
                28,
                35,
                80,
                9648
            ],
            "id": 1374534,
            "original_language": "nl",
            "original_title": "Bad Boa's",
            "overview": "When an overeager community officer and a reckless ex-detective are forced to team up, plenty of chaos ensues on the streets of Rotterdam.",
            "popularity": 182.5215,
            "poster_path": "/7bcndiaTgu1Kj5a6qyCmsWYdtI.jpg",
            "release_date": "2025-07-10",
            "title": "Almost Cops",
            "video": false,
            "vote_average": 5.843,
            "vote_count": 108
        },
        {
            "adult": false,
            "backdrop_path": "/eNSUknQqzTXWE5EeT8ZnVccEPR0.jpg",
            "genre_ids": [
                27,
                53
            ],
            "id": 1285965,
            "original_language": "en",
            "original_title": "Dangerous Animals",
            "overview": "A savvy and free-spirited surfer is abducted by a shark-obsessed serial killer. Held captive on his boat, she must figure out how to escape before he carries out a ritualistic feeding to the sharks below.",
            "popularity": 181.5288,
            "poster_path": "/oQJ1PKLIE2gF5cr3xwjLCvv4jcU.jpg",
            "release_date": "2025-06-05",
            "title": "Dangerous Animals",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 107
        },
        {
            "adult": false,
            "backdrop_path": "/6WqqEjiycNvDLjbEClM1zCwIbDD.jpg",
            "genre_ids": [
                27,
                53,
                878
            ],
            "id": 1100988,
            "original_language": "en",
            "original_title": "28 Years Later",
            "overview": "Twenty-eight years since the rage virus escaped a biological weapons laboratory, now, still in a ruthlessly enforced quarantine, some have found ways to exist amidst the infected. One such group lives on a small island connected to the mainland by a single, heavily-defended causeway. When one member departs on a mission into the dark heart of the mainland, he discovers secrets, wonders, and horrors that have mutated not only the infected but other survivors as well.",
            "popularity": 162.5811,
            "poster_path": "/mIg1qCkVxnAlM2TK3RUF0tdEXlE.jpg",
            "release_date": "2025-06-18",
            "title": "28 Years Later",
            "video": false,
            "vote_average": 7.048,
            "vote_count": 691
        },
        {
            "adult": false,
            "backdrop_path": "/fd9K7ZDfzRAcbLh8JlG4HIKbtuR.jpg",
            "genre_ids": [
                28,
                14
            ],
            "id": 846422,
            "original_language": "en",
            "original_title": "The Old Guard 2",
            "overview": "Andy and her team of immortal warriors fight with renewed purpose as they face a powerful new foe threatening their mission to protect humanity.",
            "popularity": 142.0455,
            "poster_path": "/wqfu3bPLJaEWJVk3QOm0rKhxf1A.jpg",
            "release_date": "2025-07-01",
            "title": "The Old Guard 2",
            "video": false,
            "vote_average": 6,
            "vote_count": 574
        },
        {
            "adult": false,
            "backdrop_path": "/vJbEUMeI2AxBUZKjP6ZVeVNNTLh.jpg",
            "genre_ids": [
                28,
                53,
                35
            ],
            "id": 749170,
            "original_language": "en",
            "original_title": "Heads of State",
            "overview": "The UK Prime Minister and US President have a public rivalry that risks their countries' alliance. But when they become targets of a powerful enemy, they're forced to rely on each other as they go on a wild, multinational run. Allied with Noel, a brilliant MI6 agent, they must find a way to thwart a conspiracy that threatens the free world.",
            "popularity": 141.0897,
            "poster_path": "/lVgE5oLzf7ABmzyASEVcjYyHI41.jpg",
            "release_date": "2025-07-02",
            "title": "Heads of State",
            "video": false,
            "vote_average": 6.955,
            "vote_count": 594
        },
        {
            "adult": false,
            "backdrop_path": "/lSbblLngbeZIn6G4WXDcyQ6SLhw.jpg",
            "genre_ids": [
                28,
                18
            ],
            "id": 911430,
            "original_language": "en",
            "original_title": "F1",
            "overview": "Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.",
            "popularity": 134.3222,
            "poster_path": "/6H6p82aWQFEKEuVUiZll6JxV8Ft.jpg",
            "release_date": "2025-06-25",
            "title": "F1",
            "video": false,
            "vote_average": 7.616,
            "vote_count": 935
        },
        {
            "adult": false,
            "backdrop_path": "/8aNNz9WYmxhnBxzWTt0nRI4F7rx.jpg",
            "genre_ids": [
                10749,
                18
            ],
            "id": 1241634,
            "original_language": "hi",
            "original_title": "सैयारा",
            "overview": "Two artistic souls find harmony through music despite their contrasting worlds. As feelings deepen, age and circumstances challenge their undeniable bond.",
            "popularity": 129.8466,
            "poster_path": "/jymezcmEcFvlb037V4SSx8a4SMq.jpg",
            "release_date": "2025-07-18",
            "title": "Saiyaara",
            "video": false,
            "vote_average": 6.282,
            "vote_count": 71
        },
        {
            "adult": false,
            "backdrop_path": "/lqwwGkwJHtz9QgKtz4zeY19YgDg.jpg",
            "genre_ids": [
                10749,
                18
            ],
            "id": 1136867,
            "original_language": "en",
            "original_title": "Materialists",
            "overview": "A young, ambitious New York City matchmaker finds herself torn between the perfect match and her imperfect ex.",
            "popularity": 117.6589,
            "poster_path": "/eDo0pNruy0Qgj6BdTyHIR4cxHY8.jpg",
            "release_date": "2025-06-12",
            "title": "Materialists",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 221
        },
        {
            "adult": false,
            "backdrop_path": "/es0N3A6vkLz2EmJavnM2M4urOEO.jpg",
            "genre_ids": [
                53,
                27
            ],
            "id": 1026222,
            "original_language": "en",
            "original_title": "Saint Clare",
            "overview": "In a small town a solitary woman is haunted by voices that lead her to assassinate ill intended people and get away with it, until her last kill sucks her down a rabbit hole riddled with corruption, trafficking and visions from the beyond.",
            "popularity": 113.2871,
            "poster_path": "/aE0q4awk7zto3Eql4cAeJuVAns9.jpg",
            "release_date": "2025-07-18",
            "title": "Saint Clare",
            "video": false,
            "vote_average": 5.2,
            "vote_count": 13
        }
    ],
    "topRated": [
        {
            "adult": false,
            "backdrop_path": "/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg",
            "genre_ids": [
                18,
                80
            ],
            "id": 278,
            "original_language": "en",
            "original_title": "The Shawshank Redemption",
            "overview": "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
            "popularity": 50.1445,
            "poster_path": "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
            "release_date": "1994-09-23",
            "title": "The Shawshank Redemption",
            "video": false,
            "vote_average": 8.712,
            "vote_count": 28607
        },
        {
            "adult": false,
            "backdrop_path": "/htuuuEwAvDVECMpb0ltLLyZyDDt.jpg",
            "genre_ids": [
                18,
                80
            ],
            "id": 238,
            "original_language": "en",
            "original_title": "The Godfather",
            "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
            "popularity": 32.2447,
            "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
            "release_date": "1972-03-14",
            "title": "The Godfather",
            "video": false,
            "vote_average": 8.686,
            "vote_count": 21655
        },
        {
            "adult": false,
            "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
            "genre_ids": [
                18,
                80
            ],
            "id": 240,
            "original_language": "en",
            "original_title": "The Godfather Part II",
            "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
            "popularity": 20.7783,
            "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
            "release_date": "1974-12-20",
            "title": "The Godfather Part II",
            "video": false,
            "vote_average": 8.6,
            "vote_count": 13076
        },
        {
            "adult": false,
            "backdrop_path": "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
            "genre_ids": [
                18,
                36,
                10752
            ],
            "id": 424,
            "original_language": "en",
            "original_title": "Schindler's List",
            "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
            "popularity": 19.6561,
            "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
            "release_date": "1993-12-15",
            "title": "Schindler's List",
            "video": false,
            "vote_average": 8.566,
            "vote_count": 16579
        },
        {
            "adult": false,
            "backdrop_path": "/bxgTSUenZDHNFerQ1whRKplrMKF.jpg",
            "genre_ids": [
                18
            ],
            "id": 389,
            "original_language": "en",
            "original_title": "12 Angry Men",
            "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
            "popularity": 29.3511,
            "poster_path": "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
            "release_date": "1957-04-10",
            "title": "12 Angry Men",
            "video": false,
            "vote_average": 8.55,
            "vote_count": 9275
        },
        {
            "adult": false,
            "backdrop_path": "/6oaL4DP75yABrd5EbC4H2zq5ghc.jpg",
            "genre_ids": [
                16,
                10751,
                14
            ],
            "id": 129,
            "original_language": "ja",
            "original_title": "千と千尋の神隠し",
            "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
            "popularity": 23.53,
            "poster_path": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
            "release_date": "2001-07-20",
            "title": "Spirited Away",
            "video": false,
            "vote_average": 8.537,
            "vote_count": 17317
        },
        {
            "adult": false,
            "backdrop_path": "/enNubozHn9pXi0ycTVYUWfpHZm.jpg",
            "genre_ids": [
                18,
                28,
                80,
                53
            ],
            "id": 155,
            "original_language": "en",
            "original_title": "The Dark Knight",
            "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
            "popularity": 32.3224,
            "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
            "release_date": "2008-07-16",
            "title": "The Dark Knight",
            "video": false,
            "vote_average": 8.522,
            "vote_count": 34136
        },
        {
            "adult": false,
            "backdrop_path": "/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg",
            "genre_ids": [
                35,
                18,
                10749
            ],
            "id": 19404,
            "original_language": "hi",
            "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
            "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
            "popularity": 10.0743,
            "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
            "release_date": "1995-10-20",
            "title": "Dilwale Dulhania Le Jayenge",
            "video": false,
            "vote_average": 8.5,
            "vote_count": 4498
        },
        {
            "adult": false,
            "backdrop_path": "/amZavErrjrdgDwhsIdpWxHNenIx.jpg",
            "genre_ids": [
                14,
                18,
                80
            ],
            "id": 497,
            "original_language": "en",
            "original_title": "The Green Mile",
            "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
            "popularity": 22.3776,
            "poster_path": "/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
            "release_date": "1999-12-10",
            "title": "The Green Mile",
            "video": false,
            "vote_average": 8.504,
            "vote_count": 18234
        },
        {
            "adult": false,
            "backdrop_path": "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
            "genre_ids": [
                35,
                53,
                18
            ],
            "id": 496243,
            "original_language": "ko",
            "original_title": "기생충",
            "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
            "popularity": 27.682,
            "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
            "release_date": "2019-05-30",
            "title": "Parasite",
            "video": false,
            "vote_average": 8.499,
            "vote_count": 19296
        },
        {
            "adult": false,
            "backdrop_path": "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
            "genre_ids": [
                53,
                80,
                35
            ],
            "id": 680,
            "original_language": "en",
            "original_title": "Pulp Fiction",
            "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
            "popularity": 29.4389,
            "poster_path": "/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
            "release_date": "1994-09-10",
            "title": "Pulp Fiction",
            "video": false,
            "vote_average": 8.5,
            "vote_count": 28903
        },
        {
            "adult": false,
            "backdrop_path": "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
            "genre_ids": [
                12,
                14,
                28
            ],
            "id": 122,
            "original_language": "en",
            "original_title": "The Lord of the Rings: The Return of the King",
            "overview": "As armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome--one member of the Fellowship of the Ring is revealed as the noble heir to the throne of the Kings of Men. Yet, the sole hope for triumph over evil lies with a brave hobbit, Frodo, who, accompanied by his loyal friend Sam and the hideous, wretched Gollum, ventures deep into the very dark heart of Mordor on his seemingly impossible quest to destroy the Ring of Power.​",
            "popularity": 28.5417,
            "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
            "release_date": "2003-12-17",
            "title": "The Lord of the Rings: The Return of the King",
            "video": false,
            "vote_average": 8.488,
            "vote_count": 25290
        },
        {
            "adult": false,
            "backdrop_path": "/8x9iKH8kWA0zdkgNdpAew7OstYe.jpg",
            "genre_ids": [
                16,
                10749,
                18
            ],
            "id": 372058,
            "original_language": "ja",
            "original_title": "君の名は。",
            "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
            "popularity": 17.5661,
            "poster_path": "/q719jXXEzOoYaps6babgKnONONX.jpg",
            "release_date": "2016-08-26",
            "title": "Your Name.",
            "video": false,
            "vote_average": 8.482,
            "vote_count": 11888
        },
        {
            "adult": false,
            "backdrop_path": "/l3ycQYwWmbz7p8otwbomFDXIEhn.jpg",
            "genre_ids": [
                16,
                14,
                35,
                10402,
                10751,
                28
            ],
            "id": 803796,
            "original_language": "en",
            "original_title": "KPop Demon Hunters",
            "overview": "When K-pop superstars Rumi, Mira and Zoey aren't selling out stadiums, they're using their secret powers to protect their fans from supernatural threats.",
            "popularity": 203.6331,
            "poster_path": "/22AouvwlhlXbe3nrFcjzL24bvWH.jpg",
            "release_date": "2025-06-20",
            "title": "KPop Demon Hunters",
            "video": false,
            "vote_average": 8.5,
            "vote_count": 851
        },
        {
            "adult": false,
            "backdrop_path": "/67HggiWaP9ZLv5sPYmyRV37yAJM.jpg",
            "genre_ids": [
                35,
                18,
                10749
            ],
            "id": 13,
            "original_language": "en",
            "original_title": "Forrest Gump",
            "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
            "popularity": 24.7118,
            "poster_path": "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
            "release_date": "1994-06-23",
            "title": "Forrest Gump",
            "video": false,
            "vote_average": 8.468,
            "vote_count": 28432
        },
        {
            "adult": false,
            "backdrop_path": "/x4biAVdPVCghBlsVIzB6NmbghIz.jpg",
            "genre_ids": [
                37
            ],
            "id": 429,
            "original_language": "it",
            "original_title": "Il buono, il brutto, il cattivo",
            "overview": "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
            "popularity": 24.976,
            "poster_path": "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
            "release_date": "1966-12-22",
            "title": "The Good, the Bad and the Ugly",
            "video": false,
            "vote_average": 8.466,
            "vote_count": 9094
        },
        {
            "adult": false,
            "backdrop_path": "/vgnoBSVzWAV9sNQUORaDGvDp7wx.jpg",
            "genre_ids": [
                12,
                18,
                878
            ],
            "id": 157336,
            "original_language": "en",
            "original_title": "Interstellar",
            "overview": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
            "popularity": 48.2406,
            "poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
            "release_date": "2014-11-05",
            "title": "Interstellar",
            "video": false,
            "vote_average": 8.458,
            "vote_count": 37528
        },
        {
            "adult": false,
            "backdrop_path": "/7TF4p86ZafnxFuNqWdhpHXFO244.jpg",
            "genre_ids": [
                18,
                80
            ],
            "id": 769,
            "original_language": "en",
            "original_title": "GoodFellas",
            "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
            "popularity": 15.6978,
            "poster_path": "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
            "release_date": "1990-09-12",
            "title": "GoodFellas",
            "video": false,
            "vote_average": 8.455,
            "vote_count": 13500
        },
        {
            "adult": false,
            "backdrop_path": "/qvZ91FwMq6O47VViAr8vZNQz3WI.jpg",
            "genre_ids": [
                28,
                18
            ],
            "id": 346,
            "original_language": "ja",
            "original_title": "七人の侍",
            "overview": "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.",
            "popularity": 13.1308,
            "poster_path": "/lOMGc8bnSwQhS4XyE1S99uH8NXf.jpg",
            "release_date": "1954-04-26",
            "title": "Seven Samurai",
            "video": false,
            "vote_average": 8.5,
            "vote_count": 3947
        },
        {
            "adult": false,
            "backdrop_path": "/dlC0ed9Ugh3FzydnkBtV5lRXUu4.jpg",
            "genre_ids": [
                16,
                18,
                10752
            ],
            "id": 12477,
            "original_language": "ja",
            "original_title": "火垂るの墓",
            "overview": "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
            "popularity": 0.0128,
            "poster_path": "/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
            "release_date": "1988-04-16",
            "title": "Grave of the Fireflies",
            "video": false,
            "vote_average": 8.451,
            "vote_count": 5979
        }
    ],
    "upcoming": [
        {
            "adult": false,
            "backdrop_path": "/1RgPyOhN4DRs225BGTlHJqCudII.jpg",
            "genre_ids": [
                16,
                28,
                14,
                53
            ],
            "id": 1311031,
            "original_language": "ja",
            "original_title": "劇場版「鬼滅の刃」無限城編 第一章 猗窩座再来",
            "overview": "As the Demon Slayer Corps members and Hashira engaged in a group strength training program, the Hashira Training, in preparation for the forthcoming battle against the demons, Muzan Kibutsuji appears at the Ubuyashiki Mansion. With the head of the Demon Corps in danger, Tanjiro and the Hashira rush to the headquarters but are plunged into a deep descent to a mysterious space by the hands of Muzan Kibutsuji.  The destination of where Tanjiro and Demon Slayer Corps have fallen is the demons' stronghold – the Infinity Castle. And so, the battleground is set as the final battle between the Demon Slayer Corps and the demons ignites.",
            "popularity": 618.9138,
            "poster_path": "/aFRDH3P7TX61FVGpaLhKr6QiOC1.jpg",
            "release_date": "2025-07-18",
            "title": "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
            "video": false,
            "vote_average": 6.872,
            "vote_count": 39
        },
        {
            "adult": false,
            "backdrop_path": "/7Q2CmqIVJuDAESPPp76rWIiA0AD.jpg",
            "genre_ids": [
                28,
                12,
                18
            ],
            "id": 1011477,
            "original_language": "en",
            "original_title": "Karate Kid: Legends",
            "overview": "After a family tragedy, kung fu prodigy Li Fong is uprooted from his home in Beijing and forced to move to New York City with his mother. When a new friend needs his help, Li enters a karate competition – but his skills alone aren't enough. Li's kung fu teacher Mr. Han enlists original Karate Kid Daniel LaRusso for help, and Li learns a new way to fight, merging their two styles into one for the ultimate martial arts showdown.",
            "popularity": 267.481,
            "poster_path": "/AEgggzRr1vZCLY86MAp93li43z.jpg",
            "release_date": "2025-05-08",
            "title": "Karate Kid: Legends",
            "video": false,
            "vote_average": 7.176,
            "vote_count": 571
        },
        {
            "adult": false,
            "backdrop_path": "/fQOV47FHTJdaSuSUNlzP3zXUZWE.jpg",
            "genre_ids": [
                878,
                12,
                28
            ],
            "id": 1234821,
            "original_language": "en",
            "original_title": "Jurassic World Rebirth",
            "overview": "Five years after the events of Jurassic World Dominion, covert operations expert Zora Bennett is contracted to lead a skilled team on a top-secret mission to secure genetic material from the world's three most massive dinosaurs. When Zora's operation intersects with a civilian family whose boating expedition was capsized, they all find themselves stranded on an island where they come face-to-face with a sinister, shocking discovery that's been hidden from the world for decades.",
            "popularity": 224.2037,
            "poster_path": "/1RICxzeoNCAO5NpcRMIgg1XT6fm.jpg",
            "release_date": "2025-07-01",
            "title": "Jurassic World Rebirth",
            "video": false,
            "vote_average": 6.33,
            "vote_count": 846
        },
        {
            "adult": false,
            "backdrop_path": "/oPgXVSdGR9dGwbmvIToOCMmsdc2.jpg",
            "genre_ids": [
                28,
                53,
                80
            ],
            "id": 541671,
            "original_language": "en",
            "original_title": "Ballerina",
            "overview": "Taking place during the events of John Wick: Chapter 3 – Parabellum, Eve Macarro begins her training in the assassin traditions of the Ruska Roma.",
            "popularity": 216.7246,
            "poster_path": "/2VUmvqsHb6cEtdfscEA6fqqVzLg.jpg",
            "release_date": "2025-06-04",
            "title": "Ballerina",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 1197
        },
        {
            "adult": false,
            "backdrop_path": "/eNSUknQqzTXWE5EeT8ZnVccEPR0.jpg",
            "genre_ids": [
                27,
                53
            ],
            "id": 1285965,
            "original_language": "en",
            "original_title": "Dangerous Animals",
            "overview": "A savvy and free-spirited surfer is abducted by a shark-obsessed serial killer. Held captive on his boat, she must figure out how to escape before he carries out a ritualistic feeding to the sharks below.",
            "popularity": 181.5288,
            "poster_path": "/oQJ1PKLIE2gF5cr3xwjLCvv4jcU.jpg",
            "release_date": "2025-06-05",
            "title": "Dangerous Animals",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 106
        },
        {
            "adult": false,
            "backdrop_path": "/lqwwGkwJHtz9QgKtz4zeY19YgDg.jpg",
            "genre_ids": [
                10749,
                18
            ],
            "id": 1136867,
            "original_language": "en",
            "original_title": "Materialists",
            "overview": "A young, ambitious New York City matchmaker finds herself torn between the perfect match and her imperfect ex.",
            "popularity": 117.6589,
            "poster_path": "/eDo0pNruy0Qgj6BdTyHIR4cxHY8.jpg",
            "release_date": "2025-06-12",
            "title": "Materialists",
            "video": false,
            "vote_average": 6.787,
            "vote_count": 221
        },
        {
            "adult": false,
            "backdrop_path": "/5esDYWV0NoFwqPa1iC0g9akqZo9.jpg",
            "genre_ids": [
                27
            ],
            "id": 1151031,
            "original_language": "en",
            "original_title": "Bring Her Back",
            "overview": "Following the death of their father, a brother and sister are introduced to their new sibling by their foster mother, only to learn that she has a terrifying secret.",
            "popularity": 105.3849,
            "poster_path": "/tObSf1VzzHt9xB0csanFtb3DRjf.jpg",
            "release_date": "2025-05-28",
            "title": "Bring Her Back",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 356
        },
        {
            "adult": false,
            "backdrop_path": "/jvpkBenB6hv19WWYVlaiow8zklq.jpg",
            "genre_ids": [
                16,
                10751,
                35,
                80,
                12
            ],
            "id": 1175942,
            "original_language": "en",
            "original_title": "The Bad Guys 2",
            "overview": "The now-reformed Bad Guys are trying (very, very hard) to be good, but instead find themselves hijacked into a high-stakes, globe-trotting heist, masterminded by a new team of criminals they never saw coming: The Bad Girls.",
            "popularity": 68.0909,
            "poster_path": "/iPYgLLhQ69vIvgDtGFtAln4TYtM.jpg",
            "release_date": "2025-07-24",
            "title": "The Bad Guys 2",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 9
        },
        {
            "adult": false,
            "backdrop_path": "/yAqL0makiGke5yYiVWpmBDSKIVP.jpg",
            "genre_ids": [
                27,
                18,
                53
            ],
            "id": 1278950,
            "original_language": "en",
            "original_title": "The Ritual",
            "overview": "Two priests, one in crisis with his faith and the other confronting a turbulent past, must overcome their differences to perform a risky exorcism.",
            "popularity": 68.0394,
            "poster_path": "/ktqPs5QyuF8SpKnipvVHb3fwD8d.jpg",
            "release_date": "2025-04-18",
            "title": "The Ritual",
            "video": false,
            "vote_average": 5.754,
            "vote_count": 122
        },
        {
            "adult": false,
            "backdrop_path": "/gIwG9UWJLsiSBfaG5GJWGj9ghXD.jpg",
            "genre_ids": [
                27,
                9648,
                53
            ],
            "id": 713364,
            "original_language": "en",
            "original_title": "Clown in a Cornfield",
            "overview": "Quinn and her father have just moved to the quiet town of Kettle Springs hoping for a fresh start. Instead, she discovers a fractured community that has fallen on hard times after the treasured Baypen Corn Syrup Factory burned down. As the locals bicker amongst themselves and tensions boil over, a sinister, grinning figure emerges from the cornfields to cleanse the town of its burdens, one bloody victim at a time.",
            "popularity": 47.4088,
            "poster_path": "/bghFYMUMEKK6GyTHRA7XVC8uWn6.jpg",
            "release_date": "2025-05-08",
            "title": "Clown in a Cornfield",
            "video": false,
            "vote_average": 6.321,
            "vote_count": 198
        },
        {
            "adult": false,
            "backdrop_path": "/51jDSREvaYRGjXBKd7jSSoOhFgc.jpg",
            "genre_ids": [
                18,
                14
            ],
            "id": 842924,
            "original_language": "en",
            "original_title": "The Life of Chuck",
            "overview": "In this extraordinary story of an ordinary man, Charles 'Chuck' Krantz experiences the wonder of love, the heartbreak of loss, and the multitudes contained in all of us.",
            "popularity": 44.123,
            "poster_path": "/oumprkO9bThExP8NwxBIBnvBu2v.jpg",
            "release_date": "2025-06-05",
            "title": "The Life of Chuck",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 138
        },
        {
            "adult": false,
            "backdrop_path": "/lBsbWXGn9maPKGhN3fozTU3BH0r.jpg",
            "genre_ids": [
                28,
                18,
                53
            ],
            "id": 757725,
            "original_language": "en",
            "original_title": "Shadow Force",
            "overview": "Kyrah and Isaac were once the leaders of a multinational special forces group called Shadow Force. They broke the rules by falling in love, and in order to protect their son, they go underground. With a large bounty on their heads, and the vengeful Shadow Force hot on their trail, one family's fight becomes all-out war.",
            "popularity": 39.5604,
            "poster_path": "/9LCpHFXZgkqp2AWiYq0mGbfZauk.jpg",
            "release_date": "2025-05-01",
            "title": "Shadow Force",
            "video": false,
            "vote_average": 6.089,
            "vote_count": 129
        },
        {
            "adult": false,
            "backdrop_path": "/9whEVuKte4Qi0LI4TzPf7glinJW.jpg",
            "genre_ids": [
                16,
                10751,
                14
            ],
            "id": 936108,
            "original_language": "en",
            "original_title": "Smurfs",
            "overview": "When Papa Smurf is mysteriously taken by evil wizards, Razamel and Gargamel, Smurfette leads the Smurfs on a mission into the real world to save him. With the help of new friends, the Smurfs must discover what defines their destiny to save the universe.",
            "popularity": 36.4517,
            "poster_path": "/8o6lkhL32xQJeB52IIG1us5BVey.jpg",
            "release_date": "2025-07-05",
            "title": "Smurfs",
            "video": false,
            "vote_average": 6.081,
            "vote_count": 43
        },
        {
            "adult": false,
            "backdrop_path": "/eA4S3tlpYfEA7LTo3GOwYWzUG4z.jpg",
            "genre_ids": [
                10751,
                35,
                12,
                16
            ],
            "id": 1084153,
            "original_language": "en",
            "original_title": "Sneaks",
            "overview": "Ty, a misguided, one-of-a-kind designer sneaker, doesn’t know life outside the comforts of his velvet-lined shoebox. After his sister is stolen by a shady collector, Ty must venture into New York City to find and rescue her. In his adventure, Ty meets a ragtag group of footwear friends from all walks of life who help him find the courage to step outside of his shoebox and find his sole-mate.",
            "popularity": 34.8621,
            "poster_path": "/3SipvmtH9VOyLmII9JLs34qFfil.jpg",
            "release_date": "2025-04-17",
            "title": "Sneaks",
            "video": false,
            "vote_average": 5.9,
            "vote_count": 23
        },
        {
            "adult": false,
            "backdrop_path": "/8btfz81bOJ2lC7cujYBTw03wzg3.jpg",
            "genre_ids": [
                16,
                14,
                12,
                28
            ],
            "id": 980477,
            "original_language": "zh",
            "original_title": "哪吒之魔童闹海",
            "overview": "Following the Tribulation, although the souls of Ne Zha and Ao Bing were preserved, their physical bodies will soon be destroyed. Tai Yi Zhen Ren plans to use the Seven Colored Lotus to reshape their physical forms, but encounters numerous difficulties. What will become of Ne Zha and Ao Bing?",
            "popularity": 33.1122,
            "poster_path": "/5lUmWTGkEcYnXujixXn31o9q2T0.jpg",
            "release_date": "2025-01-29",
            "title": "Ne Zha 2",
            "video": false,
            "vote_average": 8.1,
            "vote_count": 186
        },
        {
            "adult": false,
            "backdrop_path": "/hJXsJkQC8F3bgUTfsD402uj2Ewf.jpg",
            "genre_ids": [
                16,
                12,
                10751
            ],
            "id": 666154,
            "original_language": "en",
            "original_title": "Kayara",
            "overview": "A courageous and athletic teenager, Kayara dreams that she is destined to be the first female to break into the league of Chasquis - the official messengers of the Incan empire. As she learns what it takes to be a Chasqui along with its challenges, she tackles every mission she gets and discovers the ancient stories of her land and her people.",
            "popularity": 32.4699,
            "poster_path": "/tpZdjnoJ6Z3NsSxI6HjAIggrcEv.jpg",
            "release_date": "2025-01-02",
            "title": "Kayara",
            "video": false,
            "vote_average": 7.612,
            "vote_count": 94
        },
        {
            "adult": false,
            "backdrop_path": "/g5BaB7tcZufpVBFN9E21kfILFeq.jpg",
            "genre_ids": [
                35,
                80
            ],
            "id": 1035259,
            "original_language": "en",
            "original_title": "The Naked Gun",
            "overview": "Only one man has the particular set of skills... to lead Police Squad and save the world: Lt. Frank Drebin Jr.",
            "popularity": 31.2382,
            "poster_path": "/5Z9tkiIDZ6u49VUeY9Fm3PuSxKT.jpg",
            "release_date": "2025-07-30",
            "title": "The Naked Gun",
            "video": false,
            "vote_average": 8.4,
            "vote_count": 5
        },
        {
            "adult": false,
            "backdrop_path": "/eQV9rSQ6S1ja4lGTwHTnQuVhoG.jpg",
            "genre_ids": [
                27,
                35,
                14,
                18
            ],
            "id": 1284120,
            "original_language": "no",
            "original_title": "Den stygge stesøsteren",
            "overview": "In a fairy-tale kingdom where beauty is a brutal business, Elvira battles to compete with her incredibly beautiful stepsister, and she will go to any length to catch the prince’s eye.",
            "popularity": 28.3809,
            "poster_path": "/crX9rSg9EohybhkEe8iTQUCe55y.jpg",
            "release_date": "2025-03-07",
            "title": "The Ugly Stepsister",
            "video": false,
            "vote_average": 7.261,
            "vote_count": 282
        },
        {
            "adult": false,
            "backdrop_path": "/3NCYVzeqLUKMhf5TaDlHol7BoTn.jpg",
            "genre_ids": [
                27
            ],
            "id": 1242011,
            "original_language": "en",
            "original_title": "Together",
            "overview": "With a move to the countryside already testing the limits of a couple's relationship, a supernatural encounter begins an extreme transformation of their love, their lives, and their flesh.",
            "popularity": 27.6309,
            "poster_path": "/wEgfIrmSUibiXjp9qWLL35g1nNr.jpg",
            "release_date": "2025-07-28",
            "title": "Together",
            "video": false,
            "vote_average": 6.1,
            "vote_count": 10
        },
        {
            "adult": false,
            "backdrop_path": "/vMGiCxW6biqLqdH77HtPbFDab0U.jpg",
            "genre_ids": [
                27,
                9648
            ],
            "id": 1078605,
            "original_language": "en",
            "original_title": "Weapons",
            "overview": "When all but one child from the same class mysteriously vanish on the same night at exactly the same time, a community is left questioning who or what is behind their disappearance.",
            "popularity": 26.7313,
            "poster_path": "/cpf7vsRZ0MYRQcnLWteD5jK9ymT.jpg",
            "release_date": "2025-08-06",
            "title": "Weapons",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        }
    ]
}
````
![alt text](image-2.png)

```
