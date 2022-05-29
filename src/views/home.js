//Import components required
import { header } from "../components/header.js";
import { sidebar } from "../components/sideBar.js";
import { moviepor } from "../components/moviePor.js";
import { movielan } from "../components/movieLan.js";
import { arrow } from "../components/arrow.js";
import { banner } from "../components/banner.js";
import { footer } from "../components/footer.js";

//Import controller

const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
    @import url(../../public/CSS/index.css);
    
    .trending, .foryou{
        position: relative;
        display:flex;
        gap: 0.5rem;
        overflow-x: scroll;
        overflow-y: clip;
        height: fit-content;
    }

    ::-webkit-scrollbar{
        display:none;
    }

    .b,.c,.d{
        position: relative;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .arrows{
        visibility:hidden;
    }


    @media only screen and (min-width:1024px){
        .trending{
            justify-content: space-between;
        }

        .arrows{
            visibility: visible;
            width: 100%;
            position: absolute;
            top: 50%;
            display: flex;
            justify-content: space-between;
            z-index: 6;
            transition: all ease-in-out 0.1s;
        }

    }
    

    </style>

    <section >
        <h1> Trending </h1>
        <div class = "trending">
            <r-moviepor></r-moviepor>
            <r-moviepor></r-moviepor>
            <r-moviepor></r-moviepor>
        </div>
    </section>

    <section class="b">
        <h1> For You </h1>
        <div class = "arrows">
                <r-arrow class="arrow" direction="left"></r-arrow>
                <r-arrow class="arrow" direction="right"></r-arrow>
            </div>
        <div class = "foryou">
            <r-movielan></r-movielan>
            <r-movielan></r-movielan>
            <r-movielan></r-movielan>
            <r-movielan></r-movielan>
            <r-movielan></r-movielan>
            <r-movielan></r-movielan>
            <r-movielan></r-movielan>
            <r-movielan></r-movielan>
            <r-movielan></r-movielan>
            <r-movielan></r-movielan>
        </div>
    </section>

    <section class="c">
    <h1> TV Shows </h1>
    <div class = "arrows">
            <r-arrow class="arrow" direction="left"></r-arrow>
            <r-arrow class="arrow" direction="right"></r-arrow>
        </div>
    <div class = "foryou">
        <r-movielan></r-movielan>
        <r-movielan></r-movielan>
        <r-movielan></r-movielan>
        <r-movielan></r-movielan>
        <r-movielan></r-movielan>
        <r-movielan></r-movielan>
        <r-movielan></r-movielan>
        <r-movielan></r-movielan>
        <r-movielan></r-movielan>
        <r-movielan></r-movielan>
    </div>
    </section>

    <section class="d">
    <h1> Free Movies </h1>
    <div class = "trending">
        <r-moviepor></r-moviepor>
        <r-moviepor></r-moviepor>
        <r-moviepor></r-moviepor>
    </div>
    </section>

    <r-banner></r-banner>
    <r-footer></r-footer>
`

// Movie Div selected then renderView function is called to create movie elements in the divs
// addtoWatchlist

class home extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('r-home', home)
export {home}