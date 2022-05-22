import { searchbar } from "./searchBar.js";
import { primarybtn } from "./primaryBtn.js";

const template = document.createElement('template');
template.innerHTML = /*HTML*/ `

    <style>
        @import url(../../public/CSS/index.css);
        .header{
            display: flex;
            width: auto;
            justify-content: space-between;
            align-items: center;
            padding-top: 2rem;
            padding-bottom: 2rem;
        }

        nav {
            display: flex;
            gap: 1.2rem;
            align-items: center;
        }
    </style>
    <header>
        <div class = " header ">
        
            <img class ="logo" src ="../../public/assets/logo.svg" alt="Relo Logo">
            <nav>
                <r-searchbar></r-searchbar>
                <r-primarybtn text="Sign up"></r-primarybtn>
            </nav>
        </div>
    <header>
`

class header extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('r-header', header)
export {header}
