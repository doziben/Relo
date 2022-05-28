import { save } from "./save.js";

const template = document.createElement('template');
template.innerHTML = /*HTML*/ `

    <style>
    @import url(../../public/CSS/index.css);

    .moviePor {
        position: relative;
        background-color: black;
        width: 15rem;
        height: 10rem;
        border-radius: 12px;
    }

    img {
        width: inherit;
        height: inherit;
        object-fit: cover;
        border-radius: 12px;
        opacity: 50%;
        transition: all ease-in-out 0.1s;
    }

    img:hover {
        opacity: 30%;
    }


    p{
        position: absolute;
        color: var(--text-main-color);
        bottom: 5%;
        z-index: 5;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    @media only screen and (min-width:1024px){
        .moviePor{
            width: 25vw;
        }
    }
    </style>
    
    <div class = "moviePor">
        <r-save></r-save>
        <p>Morbius</p>
        <img src="https://image.tmdb.org/t/p/w500//gG9fTyDL03fiKnOpf2tr01sncnt.jpg" alt="">
    </div>
`

//will take in img src and movie name

class moviepor extends HTMLElement {
    render(){
        //insert functions here
    }
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('r-moviepor', moviepor)
export {moviepor}
