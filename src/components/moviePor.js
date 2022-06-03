import { save } from "./save.js";
import { rdelete } from "./delete.js";

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
        max-width: 18ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    @media only screen and (min-width:1024px){
        .moviePor{
            width: 25vw;
        }
    }
    </style>
    
    <div class = "moviePor">
        <p></p>
        <img src="" alt="">
    </div>
`

//will take in img src and movie name

class moviepor extends HTMLElement {
        // Fade title after 3secs, on mouse in (show title)
        render(){
            const titleSlot = this.shadowRoot.querySelector('p')
            const imgSlot = this.shadowRoot.querySelector('img')
            const movie = this.shadowRoot.querySelector('.moviePor')

            const title = this.getAttribute('title')
            const img = this.getAttribute('img')
            let type = this.getAttribute('type')
            
            titleSlot.innerText = title
            imgSlot.src = img
            type? type = type : type = "save"
            const btntype = document.createElement(`r-${type}`)
            movie.prepend(btntype) 
        }
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback(){
        this.render()
    }
}

window.customElements.define('r-moviepor', moviepor)
export {moviepor}
