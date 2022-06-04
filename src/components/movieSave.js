const template = document.createElement("template");
template.innerHTML = /*HTML*/ `
    <style>
    @import url(../../public/CSS/index.css);

    .movieSave{
        position: relative;
        background-color: black;
        width: auto;
        height: 12.375rem;
        border-radius: 12px;
    }

    img {
        width: 100%;
        height: inherit;
        object-fit: cover;
        border-radius: 12px;
        opacity: 50%;
        transition: all ease-in-out 0.1s;
    }

    img:hover {
        opacity: 30%;
    }

    p {
        position: absolute;
        color: var(--text-main-color);
        bottom: 3%;
        z-index: 5;
        padding-left: 1rem;
        padding-right: 1rem;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    </style>

    <div class ="movieSave">
        <p></p>
        <img src="" alt="">
    </div>
`;

class movieSave extends HTMLElement {
  render() {
    // Fade title after 3secs, on mouse in (show title)
    const titleSlot = this.shadowRoot.querySelector("p");
    const imgSlot = this.shadowRoot.querySelector("img");
    const movie = this.shadowRoot.querySelector(".movieSave");

    const title = this.getAttribute("title");
    const img = this.getAttribute("img");
    let type = this.getAttribute("type");

    titleSlot.innerText = title;
    imgSlot.src = img;
    type ? (type = type) : (type = "save");
    const btntype = document.createElement(`r-${type}`);
    movie.prepend(btntype);
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

window.customElements.define("r-moviesave", movieSave);
export { movieSave };
