// Import all views
import { home } from "./views/home.js";
import { categories } from "./views/categories.js";
import { watchlist } from "./views/watchlist.js";
import { explore } from "./views/explore.js";
import { loader } from "./components/loader.js";
import { notification } from "./components/notification.js";

import { getCategories, getTrending, getTVshows, getExplore } from "./model.js";

export const CTRLtrending = async () => {
  const trending = await getTrending();
  const tv = await getTVshows();
  const data = [trending.results, tv];
  return data;
};

export const CTRLcategories = async () => {
  const data = await getCategories();
  const arr = data.genres;
  return arr;
};

export const CTRLexplore = async () => {
  const data1 = await getExplore(2);
  const data2 = await getExplore(3);
  const arr = data1.concat(data2);
  return arr;
};

export const display = (elem, title, img, parent) => {
  const type = document.createElement(elem);
  type.setAttribute("img", img);
  type.setAttribute("title", title);
  parent.appendChild(type);
};

export const showNotifications = (type, movie, parent) => {
  const notification = document.createElement("r-notification");
  notification.setAttribute("type", type);
  notification.setAttribute("movie", movie);
  parent.prepend(notification);
};

const template = document.createElement("template");
template.innerHTML = /*HTML*/ `
    <style>
        @import url(../../public/CSS/index.css);

        @media only screen and (min-width: 1024px){
            .page{
                margin-left: 10%;
            }
        }
    </style>

    <div class = "app container">
        <r-header></r-header>
        <r-sidebar></r-sidebar>
        <div class = "page"></div>
    </div>
`;
class app extends HTMLElement {
  render() {
    let view = this.getAttribute("view") || "home";
    const page = `<r-${view}></r-${view}>`;
    const pageDiv = this.shadowRoot.querySelector(".page");
    pageDiv.innerHTML = page;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.render();
  }

  static get observedAttributes() {
    return ["view"];
  }

  attributeChangedCallback() {
    this.render();
    console.log(this.getAttribute("view"));
  }
}

window.customElements.define("r-app", app);
export { app };
