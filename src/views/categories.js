//Import components required
import { header } from "../components/header.js";
import { sidebar } from "../components/sideBar.js";
import { category } from "../components/category.js";

//Import model to handle data 
const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
    @import url(../../public/CSS/index.css);
    </style>
    
    <h1> Categories <h1>
    <div class = "categories">
    </div>
`

class categories extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    render(){
        //Create Categories for data
    }
}

window.customElements.define('r-categories', categories)
export {categories}