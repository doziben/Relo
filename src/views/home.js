//Import components required
import { header } from "../components/header.js";
import { sidebar } from "../components/sideBar.js";

//Import model to handle data 

const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
    @import url(../../public/CSS/index.css);
    </style>
    
    <h1> Home <h1>
`

class home extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('r-home', home)
export {home}