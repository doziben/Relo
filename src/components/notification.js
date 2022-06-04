const template = document.createElement("template");
template.innerHTML = /*HTML*/ `
    <style>
    @import url(../../public/CSS/index.css);

    .notification{
      position: fixed;
      display: flex;
      align-items: center;
      gap: 1.2rem;
      background-color: var(--dark-beta-color);
      border-radius: 12px;
      z-index: 20;
      width: 88%;
      top: 2%;
      animation-name: fade;
      animation-duration: 0.5s;
    }

    @keyframes fade {
      0%  {opacity: 0%}
      100% {opacity: 100%}
    }
    p {
      color: var(--text-beta-color);
      margin-top: 0;
    }

    svg{
      padding: 12px;
    }

    @media only screen and (min-width: 1024px){
      .notification{
        width: 80vw;
      }
    }
    </style>

    <div class = "notification">
      <svg width="12" height="75" viewBox="0 0 12 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="12" height="75" rx="6" fill=""/>
      </svg>

      <div class="text">
        <h3></h3>
        <p></p>
      </div>
    </div>
`;

export class notification extends HTMLElement {
  render() {
    let type = this.getAttribute("type");
    let movie = this.getAttribute("movie");

    const rect = this.shadowRoot.querySelector("rect");
    const title = this.shadowRoot.querySelector("h3");
    const text = this.shadowRoot.querySelector("p");
    const mainDiv = this.shadowRoot.querySelector(".notification");

    if (type == "Added") {
      rect.style.fill = `var(--success)`;
      title.innerText = `Added to Watchlist`;
      text.innerText = `You added ${movie} to your watchlist!`;
    } else if (type == "Removed") {
      rect.style.fill = `var(--danger)`;
      title.innerText = `Removed from Watchlist`;
      text.innerText = `You removed ${movie} from your watchlist!`;
    } else if (type == "Exists") {
      rect.style.fill = `var(--danger)`;
      title.innerText = `Already Added`;
      text.innerText = `${movie} is already in your watchlist!`;
    }

    setTimeout(() => {
      mainDiv.style.display = "none";
    }, 4000);
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

window.customElements.define("r-notification", notification);
