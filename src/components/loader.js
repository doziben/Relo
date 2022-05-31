const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
    @import url(../../public/CSS/index.css);

    .spinnerBCG {
    right: 2%;
    top: 2%;
    left: 2%;
    display: grid;
    place-content: center;
    content: "";
    z-index: 8;
    width: 100%;
    height: 100%;
    background-color: var(--dark-main-color);
    position: fixed;
    transition: all ease-in-out 0.1s;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .spinner {
        content: "";
        width: 5rem;
        height: 5rem;
        border-radius: 50px;
        border: 8px solid var(--primary-color);
        border-top-color: white;
        animation-name: loading;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    @keyframes loading {
        100% {
            transform: rotate(360deg);
        }
    }
    </style>

    <div class="spinnerBCG">
        <div class="spinner"> </div>
    </div>
    
`

class loader extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('r-loader', loader)
export {loader}




