// Import all views
import { home } from "./views/home.js";
import { categories } from "./views/categories.js";
import { bookmarks } from "./views/bookmarks.js";
import { explore } from "./views/explore.js";


// Controller
// Get Data from Model.js
// Render Data in respective view

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
    render(view){
        view = this.getAttribute('view')
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

    attributeChangedCallback(attr, oldVal, value){
        switch (attr) {
            case "view":
              if (!value || value == oldVal) return;
              this.render(value)
            break;
          }
    }
}

window.customElements.define('r-app', app)
export {app}