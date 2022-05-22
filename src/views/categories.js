//Import components required
import { header } from "../components/header.js";
import { sidebar } from "../components/sideBar.js";

//Import model to handle data 

const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
    @import url(../../public/CSS/index.css);
    </style>
    
    <h1> categories <h1>
`

class categories extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('r-categories', categories)
export {categories}