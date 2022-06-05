//Import components required
import { header } from "../components/header.js";
import { sidebar } from "../components/sideBar.js";
import { moviepor } from "../components/moviePor.js";
import { movielan } from "../components/movieLan.js";
import { arrow } from "../components/arrow.js";
import { banner } from "../components/banner.js";
import { footer } from "../components/footer.js";

//Import controller
import { CTRLtrending } from "../app.js";
import { display } from "../app.js";

const template = document.createElement("template");
template.innerHTML = /*HTML*/ `
    <style>
    @import url(../../public/CSS/index.css);
    
    .trending, .foryou, .discover, .tvshows{
        position: relative;
        display:flex;
        gap: 0.5rem;
        height: 100%;
    }

    ::-webkit-scrollbar{
        display:none;
    }

    .slider{
      overflow-x: scroll;
      overflow-y: hidden;
      height:100%;
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
        <div class = "slider">
          <div class = "trending" >
          </div>
        </div>
    </section>

    <section class="b">
        <h1> For You </h1>
        <div class = "arrows">
                <r-arrow class="arrow" direction="left"></r-arrow>
                <r-arrow class="arrow" direction="right"></r-arrow>
            </div>
        <div class = "slider">
          <div class = "foryou">
          </div>
        </div>
    </section>

    <section class="c">
    <h1> TV Shows </h1>
    <div class = "arrows">
            <r-arrow class="arrow" direction="left"></r-arrow>
            <r-arrow class="arrow" direction="right"></r-arrow>
        </div>
      <div class = "slider">
        <div class = "tvshows">
        </div>
      </div>
    </section>

    <section class="d">
    <h1> Discover </h1>
    <div class = "slider">
      <div class = "discover">
      </div>
    </div>
    </section>

    <r-banner></r-banner>
    <r-footer></r-footer>
`;

const imgPrefix = "https://image.tmdb.org/t/p/w500/";
class home extends HTMLElement {
  loader() {
    const elem = this.shadowRoot.querySelector(".main");
    this.shadowRoot.removeChild(elem);
  }
  async displayMovies() {
    const arr = await CTRLtrending();
    const movie = arr[0];
    const tv = arr[1];

    const trending = movie.slice(0, 3);
    const forYou = movie.slice(3, 13);

    const tvshows = tv.results.slice(0, 10);
    const discover = movie.slice(13, 16);

    const $ = (elem) => {
      return this.shadowRoot.querySelector(elem);
    };

    trending.forEach((e) => {
      const parent = $(".trending");
      const title = e.title;
      const img = `${imgPrefix}${e.backdrop_path}`;
      return display("r-moviepor", title, img, parent);
    });

    forYou.forEach((e) => {
      const parent = $(".foryou");
      const title = e.title;
      const img = `${imgPrefix}${e.poster_path}`;
      return display("r-movielan", title, img, parent);
    });

    tvshows.forEach((e) => {
      const parent = $(".tvshows");
      const title = e.original_name;
      const img = `${imgPrefix}${e.poster_path}`;
      return display("r-movielan", title, img, parent);
    });

    discover.forEach((e) => {
      const parent = $(".discover");
      const title = e.title;
      const img = `${imgPrefix}${e.backdrop_path}`;
      return display("r-moviepor", title, img, parent);
    });
  }

  render() {
    console.log("hi");
    const $ = (elem) => {
      return this.shadowRoot.querySelector(elem);
    };
    const main = $(".main");
    main.innerHTML = "<r-loader></r-loader>";
    //make loader attribute dynamic to set duration

    window.addEventListener("load", () => {
      setTimeout(() => {
        this.loader();
      }, 3000);
    });

    if (document.readyState === "complete") {
      setTimeout(() => {
        this.loader();
      }, 1000);
    }

    this.displayMovies();
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

window.customElements.define("r-home", home);
export { home };
