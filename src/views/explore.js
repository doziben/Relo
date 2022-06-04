//Import components required
import { header } from "../components/header.js";
import { sidebar } from "../components/sideBar.js";
import { arrow } from "../components/arrow.js";
import { display } from "./watchlist.js";
import { CTRLexplore } from "../app.js";

const template = document.createElement("template");
template.innerHTML = /*HTML*/ `
    <style>
    @import url(../../public/CSS/index.css);
    .explore {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        grid-gap: 1rem;
        margin-bottom: 6rem;
    }
    </style>
    
    <div class = "main">
        <r-loader></r-loader>
    </div>

    <h1> Explore </h1>
    <div class = "explore">
    </div>

`;

const imgPrefix = "https://image.tmdb.org/t/p/w500/";

class explore extends HTMLElement {
  loader() {
    const elem = this.shadowRoot.querySelector(".main");
    this.shadowRoot.removeChild(elem);
  }
  async render() {
    // window.addEventListener("load", () => {
    //     setTimeout(() => {
    //       this.loader();
    //     }, 3000);
    //   });

    if (document.readyState === "complete") {
      setTimeout(() => {
        this.loader();
      }, 1000);
    }

    const movies = await CTRLexplore();
    console.log(movies);
    movies.forEach((e) => {
      const parent = this.shadowRoot.querySelector(".explore");
      const title = e.title;
      const img = `${imgPrefix}${e.backdrop_path}`;
      return display("r-moviesave", title, img, "save", parent);
    });
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}

window.customElements.define("r-explore", explore);
export { explore };
