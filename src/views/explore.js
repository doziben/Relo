//Import components required
import { header } from "../components/header.js";
import { sidebar } from "../components/sideBar.js";
import { arrow } from "../components/arrow.js";

//Import controller

const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
    @import url(../../public/CSS/index.css);
    </style>
    
    <h1> explore <h1>
`

class explore extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('r-explore', explore)
export {explore}