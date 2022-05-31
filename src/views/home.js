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
    <div class = "main">
    </div>
    <section >
        <h1> Trending </h1>
        <div class = "trending" >
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

// at 0%, :host is at bottom and 0 opacity, at 100%, position is normal and opacity is 100
// OR at 0%, loader is opaque 100%, then when leaving page, opacity is 0%
class home extends HTMLElement {
    loader(){
        const elem = this.shadowRoot.querySelector('.main')
        this.shadowRoot.removeChild(elem)
        // const page = this.shadowRoot.querySelector('r-loader')
        // page.remove()
    }

    render(){
        const main = this.shadowRoot.querySelector('.main')
        main.innerHTML = '<r-loader></r-loader>'

            
        window.addEventListener('load',()=>{
            setTimeout(()=>{this.loader()}, 3000)
            })

        if(document.readyState === 'complete'){
            setTimeout(()=>{this.loader()}, 1000)
        }
    }
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        const loader = document.createElement('r-loader')
    }

    connectedCallback(){
        this.render();
    }

}

window.customElements.define('r-home', home)
export {home}