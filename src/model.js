//Return Data to Controller
import { CTRLtrending } from "./app.js";

//Get API Data
const API_KEY = "7d273b2dee1efe87143e46a06d9a3a39"


export const getTrending = async() => {
    const trendingAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    const response = await fetch(trendingAPI);
    const data = await response.json();
    CTRLtrending(data.results);
}

getTrending()

//CRUD for Users