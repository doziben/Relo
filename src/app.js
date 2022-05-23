// Import all views
import { home } from "./views/home.js";
import { categories } from "./views/categories.js";
import { watchlist } from "./views/watchlist.js";
import { explore } from "./views/explore.js";


// Controller
// Get Data from Model.js
// Render Data in respective views

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
        let view = this.getAttribute('view')
        const page = `<r-${view}></r-${view}>`
        this.shadowRoot.querySelector('.page').innerHTML = page
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