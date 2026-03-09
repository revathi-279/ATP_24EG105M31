/* DAY - 4 : ASSIGNMENT - 7
Movie Streaming Platform
You are working on a movie recommendation system. */

const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
    { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
    { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
    { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. filter() only "Sci-Fi" movies 
const sciFi = movies.filter(movie => movie.genre === "Sci-Fi")
console.log(sciFi)

// 2. map() to return: "Inception (8.8)"
const movieName = movies.map(movie => `${movie.title} (${movie.rating})`)
console.log(movieName)

// 3. reduce() to find average movie rating
let avgRating = movies.reduce((sum, movie) => sum + movie.rating, 0)
avgRating = avgRating / movies.length
console.log(avgRating)

// 4. find() movie "Joker"
const findMovie = movies.find(movie => movie.title === "Joker")
console.log(findMovie)

// 5. findIndex() of "Avengers"
const findInd = movies.findIndex(movie => movie.title === "Avengers")
console.log(findInd)