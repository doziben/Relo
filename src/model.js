//Return Data to Controller

//Get API Data
const API_KEY = "7d273b2dee1efe87143e46a06d9a3a39"


export const getTrending = async function(){
    const trendingAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    const response = await fetch(trendingAPI);
    const data = await response.json();
    return data
}

export const getTVshows = async function(){
    const TVAPI = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
    const response = await fetch(TVAPI);
    const data = await response.json();
    return data
}

export const getCategories = async function (){
    const categoriesAPI = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    const response = await fetch(categoriesAPI)
    const data = await response.json()
    return data
}



//CRUD for Users