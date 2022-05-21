const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
        @import url(../../public/CSS/index.css);
        #search{
                display:none;
            }

        @media only screen and (min-width: 1024px){
            #search{
                display:block;
            }

            .searchbar {
                display: flex;
            }
        }
    </style>

    <div class = "searchbar">
        <img src ="../../public/assets/search.svg" alt="Relo Logo">
        <input type = "search" name="search"  placeholder = "Search for movies, tv shows, cartoons" id="search">
    </div>
`

class searchbar extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('r-searchbar', searchbar)
export {searchbar}