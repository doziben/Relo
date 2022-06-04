import { searchbar } from "./searchBar.js";
import { primarybtn } from "./primaryBtn.js";

const template = document.createElement("template");
template.innerHTML = /*HTML*/ `

    <style>
        @import url(../../public/CSS/index.css);
        .header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 2rem;
            padding-bottom: 2rem;
            transition: all ease-in-out 0.5s;
        }
        img {
            z-index: 10;
        }
        nav {
            z-index: 10;
            display: flex;
            gap: 1.2rem;
            align-items: center;
        }

        .scroll {
            position: fixed;
            z-index: 15;
            background-color: var(--dark-main-color);
            width: 88%;
            transition: all ease-in-out 0.5s;
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
`;

class header extends HTMLElement {
  render() {
    const header = this.shadowRoot.querySelector(".header");
    window.addEventListener("scroll", () => {
      const e = window.pageYOffset;
      const height = this.getBoundingClientRect().height;
      if (e > height) {
        header.classList.add("scroll");
      } else {
        header.classList.remove("scroll");
      }
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

window.customElements.define("r-header", header);
export { header };
