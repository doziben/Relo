import { showNotifications } from "../app.js";

const template = document.createElement("template");
template.innerHTML = /*HTML*/ `
    <style>
    @import url(../../public/CSS/index.css);

    svg{
        padding: 0.5rem;
    }

    .save {
        height: 40px;
        cursor: pointer;
        right: 5%;
        border-radius: 100px;
        position: absolute;
        z-index: 5;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(24px);
        transition: all ease-in-out 0.1s;
    }

    .save:hover{
        background: rgba(255, 255, 255, 0.4);
    }
    </style>

    <div class ="save">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12H16" stroke="#FC9D46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 16V8" stroke="#FC9D46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#FC9D46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
`;

class save extends HTMLElement {
  post(type, movie) {
    let main = this.ownerDocument.body.childNodes[2];
    const app = main.children[0].shadowRoot.childNodes[3];
    const page = app.children[2];

    showNotifications(type, movie, page);
  }

  render() {
    const nodes = this.parentNode.children;
    const titleElem = nodes[1];
    const imgElem = nodes[2];

    const movie = {
      title: titleElem.innerText,
      img: imgElem.currentSrc,
    };

    const postItem = (movie) => {
      const storage = [];

      if (!localStorage.getItem("movies")) {
        storage.push(movie);
        localStorage.setItem("movies", JSON.stringify(storage));
      } else {
        const exist = JSON.parse(localStorage.getItem("movies"));
        const movieExist = exist.find((e) => {
          return e.title == movie.title;
        });

        const already = () => {
          return this.post("Exists", titleElem.innerText);
        };
        const first = () => {
          exist.push(movie);
          this.post("Added", titleElem.innerText);
        };
        movieExist ? already() : first();
        localStorage.setItem("movies", JSON.stringify(exist));
      }
    };

    this.addEventListener("click", () => {
      postItem(movie);
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

window.customElements.define("r-save", save);
export { save };
