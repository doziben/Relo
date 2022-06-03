// Import all views
import { home } from "./views/home.js";
import { categories } from "./views/categories.js";
import { watchlist } from "./views/watchlist.js";
import { explore } from "./views/explore.js";
import { loader } from "./components/loader.js";

// Get Data from Model
import { getCategories, getTrending } from "./model.js";
import { getTVshows } from "./model.js";
// CONTROLLER

// getTrending ==> GET VALUES ==> RenderData
export const CTRLtrending = async ()=> {
    const trending = await getTrending()
    const tv = await getTVshows()
    const data = [trending.results, tv]
    return data
    //for each data renderTrending(img src, movie name)
    const imgPrefix = "https://image.tmdb.org/t/p/w500/";
}


// getCategories ==> DEFINE DATA ==> RenderData
export const CTRLcategories = async ()=> {
    const data =  await getCategories()
    const arr = data.genres
    return arr;
}


export const display = (elem, title, img, parent)=>{
    const type = document.createElement(elem)
    type.setAttribute('img', img)
    type.setAttribute('title', title)
    parent.appendChild(type)
}


// AddtoWatchlist ==> RenderWatchlist
// push item to local storage/DB


const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
        @import url(../../public/CSS/index.css);

        @media only screen and (min-width: 1024px){
            .page{
                margin-left: 10%;
            }
        }

        
    </style>

    <div class = "app container">
        <r-header></r-header>
        <r-sidebar></r-sidebar>
        <div class = "page"></div>
    </div>
`
class app extends HTMLElement {
    render(){
        let view = this.getAttribute('view') || 'home'
        const page = `<r-${view}></r-${view}>`
        const pageDiv = this.shadowRoot.querySelector('.page')
        pageDiv.innerHTML = page
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.render()
    }

    static get observedAttributes() {
        return ['view']
    }

    attributeChangedCallback(){
        this.render()
        console.log(this.getAttribute('view'))
    }
}

window.customElements.define('r-app', app)
export {app}