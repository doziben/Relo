//Routes
const routes = {
    "home":{title: "Home", view:"<r-home></r-home>"},
    "categories":{title: "Categories", view:"<r-categories></r-categories>"},
    "bookmarks":{title: "Bookmarks", view:"<r-bookmarks></r-bookmarks>"},
    "explore":{title: "Explore", view:"<r-explore></r-explore>"},
}

const router = (ref)=> {
    const app = document.querySelector('r-app')
    app.setAttribute('view', ref)
}

// const locationHandler =()=> {
//     const location = window.location.pathname;
//     const home = "/public/index.html" || "/public/home";
//     const view = location.replace('/index.html/', "")

//     window.history.pushState({}, '', location);

//     if(!location==home){
//         router(view);
//     }

//     else{
//         router("home");
//     }

// }

// window.addEventListener("load", (e)=>{
//     e = event || window.event
//     e.preventDefault()
//     locationHandler();
// })

// window.onpopstate = locationHandler()



//Push routes to window


export {router}