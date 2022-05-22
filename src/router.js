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


export {router}