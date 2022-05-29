import { primarybtn } from "./primaryBtn.js";

const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
        @import url(../../public/CSS/index.css);
    
    .banner{
        background-color: var(--dark-beta-color);
        padding: 2rem;
        border-radius: 32px;
        margin-bottom: 3rem;
    }

    h1{
        margin-bottom:0;
    }

    @media only screen and (min-width: 1024px){
        .banner{
            display: flex;
            justify-content:space-between;
            align-items:center;
        }
    }
    </style>

    <div class ="banner">
        <h1> Enjoy Unlimited <br> Video Content<h1>
        <r-primarybtn text="Join Relo"></r-primarybtn>
    </div>
`

class banner extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('r-banner', banner)
export {banner}