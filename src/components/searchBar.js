const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
        @import url(../../public/CSS/index.css);
        #search{
                display:none;
            }

        input{
            width: 20rem;
            background-color: var(--dark-main-color);
            border-style: none;
            padding: 0.5rem 1.2rem;
            outline: none;
            color:white;
            font-family: "Poppins", san-serif;
            border-bottom: 2px solid var(--dark-main-color);
            transition: all ease-in-out 0.1s;
        }

        input:focus{
            border-bottom: 2px solid var(--primary-color);
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
        <input type = "text" name="search"  placeholder = "Search for movies, tv shows, cartoons" id="search">
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