//Import components required
import { header } from "../components/header.js";
import { sidebar } from "../components/sideBar.js";
import { category } from "../components/category.js";

//Import model to handle data 
const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
    @import url(../../public/CSS/index.css);

    .categories{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 1rem;
    }
    </style>
    
    <div class = "categories">
        
    </div>
    <r-footer></r-footer>
`

class categories extends HTMLElement {
    render(){
        //Create Categories for data
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

}

window.customElements.define('r-categories', categories)
export {categories}